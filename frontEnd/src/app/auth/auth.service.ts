import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { mergeMap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import { AUTH_CONFIG } from './auth.config';
import * as auth0 from 'auth0-js';

import { UserModel } from '../core/models/user.model';

// Avoid name not found warnings
declare var auth0: any;

@Injectable()
export class AuthService {


  // Create Auth0 web auth instance
  private _auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.CLIENT_ID,
    domain: AUTH_CONFIG.CLIENT_DOMAIN,
    responseType: 'token id_token',
    redirectUri: AUTH_CONFIG.REDIRECT,
    audience: AUTH_CONFIG.AUDIENCE,
    scope: AUTH_CONFIG.SCOPE
  });
  userProfile: any;
  // for admin routes
  isAdmin: boolean;
  isAdmin$ = new BehaviorSubject<boolean>(this.isAdmin);
  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  parsedId: number;
  parsedId$ = new BehaviorSubject<number>(this.parsedId);

  idAndProfile: Array<any> = [
		this.parsedId,
		this.userProfile
	  ]
  idAndProfile$ = new BehaviorSubject<any>(this.idAndProfile);

  authResult: any;

  // Subscribe to token expiration stream
  refreshSub: Subscription;

  constructor(private router: Router) {

    // If authenticated, set local profile property
    // and update login status subject.
    // If not authenticated but there are still items
    // in localStorage, log out.
    const lsProfile = localStorage.getItem('profile');

    if (this.tokenValid) {
      this.userProfile = JSON.parse(lsProfile);
      this.isAdmin = localStorage.getItem('isAdmin') === 'true';
      this.isAdmin$.next(this.isAdmin);
      this.setLoggedIn(true);
      this.scheduleRenewal();
    } else if (!this.tokenValid && lsProfile) {
      this.logout();
    }

  }

  getLoggedIn() {
    return this.loggedIn$.asObservable();
  };
  
  getParsedId() {
	  return this.parsedId$.asObservable();
  }
  
  getIdAndProfile() {
	  return this.idAndProfile$.asObservable();
  }
  
  getIsAdmin() {
	  return this.isAdmin$.asObservable();
  }

  // setLoggedIn(value: boolean) {
  //   // Update login status subject
  //   this.loggedIn$.next(value);
  //   this.loggedIn = value;
  //   if (this.userProfile) {
  //     // parse the id and assign it
  //     this.parsedId = this.userProfile.sub.slice(this.userProfile.sub.indexOf('|') + 1);
  //     this.parsedId$.next(this.parsedId);
  //   }
	// };

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
    if (this.userProfile) {
    this.parsedId = this.userProfile.sub.slice(this.userProfile.sub.indexOf('|') + 1);
		this.parsedId$.next(this.parsedId);
		this.idAndProfile$.next(
				[ this.parsedId, this.userProfile ]
			);
    }
	};

  login(redirect?: string) {
    // Set redirect after login
    const _redirect = redirect ? redirect : this.router.url;
    localStorage.setItem('authRedirect', _redirect);
    // Auth0 authorize request
    this._auth0.authorize();
  }

  handleAuth() {
    // When Auth0 hash parsed, get profile
    this._auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this._getProfile(authResult);
      } else if (err) {
        this._clearRedirect();
        this.router.navigate(['/']);
        console.error(`Error authenticating: ${err.error}`);
      }
      //may have to remove the following line to make logins not redirect to home page
      // this.router.navigate(['/']);
    });
  }

  private _getProfile(authResult) {
    // Use access token to retrieve user's profile and set session
    this._auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this._setSession(authResult, profile);
        this.router.navigate([localStorage.getItem('authRedirect') || '/']);
        this._clearRedirect();
      } else if (err) {
        console.error(`Error authenticating: ${err.error}`);
      }
    });
  }

  private _clearRedirect() {
    // Remove redirect from localStorage
    localStorage.removeItem('authRedirect');
  }

  private _setSession(authResult, profile?) {
    // Save session data and update login status subject
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + Date.now());
    // Set tokens and expiration in localStorage and props
    this.isAdmin = this._checkAdmin(profile);
    this.isAdmin$.next(this.isAdmin);
    localStorage.setItem('isAdmin', this.isAdmin.toString());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('profile', JSON.stringify(profile));
    this.userProfile = profile;
    // Update login status in loggedIn$ stream
    this.setLoggedIn(true);
    // Schedule access token renewal
    this.scheduleRenewal();
  }

  private _checkAdmin(profile) {
    // Check if the user has admin role
    const roles = profile[AUTH_CONFIG.NAMESPACE] || [];
    return roles.indexOf('admin') > -1;
  }

  // returnUserType() {
  //   let type = this.userProfile.userType;
  //   return type;
  // }

  logout(noRedirect?: boolean) {
    // Ensure all auth items removed from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('authRedirect');
    localStorage.removeItem('isAdmin');
    this._clearRedirect();
    // Reset local properties, update loggedIn$ stream
    this.userProfile = undefined;
    this.isAdmin = undefined;
    this.setLoggedIn(false);
    // Return to homepage
    this.router.navigate(['/']);
    // Unschedule access token renewal
    this.unscheduleRenewal();
    // Return to homepage
    if (noRedirect !== true) {
      this.router.navigate(['/']);
    }
  }

  get tokenValid(): boolean {
    // Check if current time is past access token's expiration
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return Date.now() < expiresAt;
  }

  renewToken() {
    this._auth0.checkSession({},
      (err, authResult) => {
        if (authResult && authResult.accessToken) {
          this._setSession(authResult);
        } else if (err) {
          console.warn(`Could not renew token: ${err.errorDescription}`);
          // Log out without redirecting to clear auth data
          this.logout(true);
          // Log in again
          this.login();
        }
      }
    );
  }

  scheduleRenewal() {
    // If user isn't authenticated, do nothing
    if (!this.tokenValid) { return; }
    // Unsubscribe from previous expiration observable
    this.unscheduleRenewal();
    // Create and subscribe to expiration observable
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const expiresIn$ = Observable.of(expiresAt).pipe(
      mergeMap(
        expires => {
          const now = Date.now();
          // Use timer to track delay until expiration
          // to run the refresh at the proper time
          return Observable.timer(Math.max(1, expires - now));
        }
      )
    );

    this.refreshSub = expiresIn$
      .subscribe(
        () => {
          this.renewToken();
          this.scheduleRenewal();
        }
      );
  }

  unscheduleRenewal() {
    if (this.refreshSub) {
      this.refreshSub.unsubscribe();
    }
  }

}