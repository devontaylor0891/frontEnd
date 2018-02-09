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
          console.log('getIdAndFirstLoginStatus: ', result);
          this.userId = result[0];
          this.userProfile = result[1];
          console.log('userProfile: ', this.userProfile);
          if (this.userId) {
            this.apiService.getUserById(this.userId)
            .subscribe(
              result => { this.user = result },
              error => {
                // if the user isn't yet in the db, add them
                if (error.indexOf('404') > -1) {
                  console.log('error: ', error.indexOf('404'))                  
                  let newUser = this.buildNewUser(this.userProfile);
                  console.log('new user: ', newUser);
                  this.apiService.createUser(newUser)
                    .subscribe(
                      result => {
                        this.isFirstLogin = false;
                        this.getUserFromDb(this.userId);
                        console.log('user from db: ', result);
                      }
                    );
                }
              }
            )
          }
          
          // if (this.isFirstLogin === false) {
          //   console.log('not first login');
          //   this.getUserFromDb(this.userId);
          // } else if (this.isFirstLogin) {
          //   let newUser = this.buildNewUser(this.userProfile);
          //   console.log('new user: ', newUser);
          //   this.apiService.createUser(this.userId, newUser)
          //     .subscribe(
          //       result => {
          //         this.isFirstLogin = false;
          //         this.getUserFromDb(this.userId);
          //         console.log('user from db: ', result);
          //       }
          //     );
          // };
        }
      );

  }
  
  buildNewUser(profile) {
	  let newUser = {
		  'id': this.userId,
		  'firstName': profile.given_name || '',
		  'email': profile['http://myapp.com/email'] || '',
		  'registrationDate': profile.created_at || profile.updated_at,
      'role': '',
      'orders': []
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
    console.log('id from subscription: ', id);
    this.apiService.getUserById(id)
      .subscribe(
        result => {
            this.user = result;
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
              this.profileIncomplete$.next(true);
            }
            console.log('user from app comp: ', this.user);
        }
      );
  };



}

