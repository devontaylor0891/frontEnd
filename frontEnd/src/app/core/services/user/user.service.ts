// provided in App Module

// called in...
// App Comp
// Update Profile Comp
// Dashboard Comp
// Account Info Comp - commented out, could probably be removed

import { Injectable, OnInit, OnChanges } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from '../../api.service';
import { AuthService} from '../../../auth/auth.service';

import { UserModel } from '../../../core/models/user.model';

@Injectable()
export class UserService implements OnInit, OnChanges  {

  userId: number;
  userType: string;
  userType$ = new BehaviorSubject<string>(this.userType);
  user: UserModel;
  user$= new BehaviorSubject<UserModel>(this.user);
  firstName: string;
  firstName$ = new BehaviorSubject<string>(this.firstName);
  email: string;
  email$ = new BehaviorSubject<string>(this.email);
  profileIncomplete: boolean;
  profileIncomplete$ = new BehaviorSubject<boolean>(this.profileIncomplete);
  isFirstLogin: boolean;
  userProfile: any;

  constructor(private apiService: ApiService,
              private authService: AuthService) {

    // get isFirstLogin, get getParseId, then either get user from db or add and then get
    this.authService.getIdAndProfile()
      .subscribe(
        result => {
          this.userId = result[0];
          this.userProfile = result[1];
          if (this.userId) {
            this.apiService.getUserById(this.userId)
              .subscribe(
                result => { 
                  console.log('result from apiservice getuser: ', result);
                  if (result) {
                    this.user = result;
                    this.getUserFromDb(this.userId);
                  } else {
                    let newUser = this.buildNewUser(this.userProfile);
                    console.log('trying to create user: ', newUser);
                    this.apiService.createUser(newUser)
                      .subscribe(
                        result => {
                          console.log('newly created user: ', result);
                          this.isFirstLogin = false;
                          this.getUserFromDb(result.insertId);
                        }
                      );
                  }
                }, 
                error => {
                  // if the user isn't yet in the db, add them
                  if (error.indexOf('404') > -1) {
                    let newUser = this.buildNewUser(this.userProfile);
                    console.log('trying to create user1: ', newUser);
                    this.apiService.createUser(newUser)
                      .subscribe(
                        result => {
                          this.isFirstLogin = false;
                          this.getUserFromDb(this.userId);
                        }
                      );
                  }
                }
              );
          }

        }
      );

  }
  
  buildNewUser(profile) {
	  let newUser = {
		  'id': this.userId,
		  // 'firstName': profile.given_name || '',
		  'email': profile['http://myapp.com/email'] || '',
		  'registrationDate': profile.created_at || profile.updated_at
      // 'role': '',
      // 'orders': []
	  }
	  return newUser;
  };

  ngOnChanges() {}

  ngOnInit() {

    

  };

	// create the observables
	getProfileIncomplete() {
		return this.profileIncomplete$.asObservable();
  }
  
  getUser() {
    return this.user$.asObservable();
  }
	
	getUserType() {
		return this.userType$.asObservable();
  }
  
  getFirstName() {
    return this.firstName$.asObservable();
  }

  getEmail() {
    return this.email$.asObservable();
  }

  getUserFromDb(id) {
    this.apiService.getUserById(id)
      .subscribe(
        result => {
            this.user = result;
            this.user$.next(this.user);
            console.log('user from db: ', this.user);
            this.userType = this.user.role;
            this.userType$.next(this.userType);
            this.firstName = this.user.firstName;
            this.firstName$.next(this.firstName);
            this.email = this.user.email;
            this.email$.next(this.email);
            if (this.user.role && this.user.firstName && this.user.email) {
              this.profileIncomplete = false;
              this.profileIncomplete$.next(false);
            } else {
              this.profileIncomplete = true;
              console.log('user profile incomplete: ', this.profileIncomplete);
              this.profileIncomplete$.next(true);
            }
        }
      );
  };



}
