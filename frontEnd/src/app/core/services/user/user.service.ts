// import { Injectable, OnInit, OnChanges } from '@angular/core';

// import { Observable } from 'rxjs/Observable';

// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// import { ApiService } from '../../api.service';
// import { AuthService} from '../../../auth/auth.service';

// import { UserModel } from '../../../core/models/user.model';

// @Injectable()
// export class UserService implements OnInit, OnChanges  {

// 	userId: number;
//   userType: string;
//   userType$ = new BehaviorSubject<string>(this.userType);
//   user: UserModel;
//   firstName: string;
//   profileIncomplete: boolean;
//   profileIncomplete$ = new BehaviorSubject<boolean>(this.profileIncomplete);
//   isFirstLogin: boolean;
//   userProfile: any;

//   constructor(private apiService: ApiService,
//               private authService: AuthService) {
				  
//     // get isFirstLogin, get getParseId, then either get user from db or add and then get
//     this.authService.getIdAndFirstLoginStatus()
//       .subscribe(
//         result => {
//           console.log('getIdAndFirstLoginStatus: ', result);
//           this.userId = result[0];
//           this.isFirstLogin = result[1];
//           this.userProfile = result[2];
//           if (!this.isFirstLogin) {
//             console.log('not first login');
//             this.getUserFromDb(this.userId);
//           } else {
//             console.log('userProfile: ', this.userProfile);
//             let newUser = this.buildNewUser(this.userProfile);
//             console.log('new user: ', newUser);
//             this.apiService.createUser(newUser)
//               .subscribe(
//                 result => {
//                   this.getUserFromDb(this.userId);
//                 }
//               );
//           };
//         }
//       );

//       // this.authService.getParsedId()
//       //   .subscribe(
//       //     result => {
//       //       console.log('getParsedId result: ', result);
//     // 	  if (result) {
//     // 		  this.getUserFromDb(result);
//     // 	  }
//       //     }
//       //   );

//   }
  
//   buildNewUser(profile) {
// 	  let newUser = {
// 		  'id': profile.sub.slice(this.userProfile.sub.indexOf('|', 1)),
// 		  'firstName': profile.given_name || '',
// 		  'email': profile.email,
// 		  'registrationDate': profile.created_at,
// 		  'role': ''
// 	  }
// 	  return newUser;
//   };

//   ngOnChanges() {}

//   ngOnInit() {};

// 	// create the observables
// 	getProfileIncomplete() {
// 		return this.profileIncomplete$.asObservable();
// 	}
	
// 	getUserType() {
// 		return this.userType$.asObservable();
// 	}

//   getUserFromDb(id) {
//     console.log('id from subscription: ', id);
//     this.apiService.getUserById(id)
//       .subscribe(
//         result => {
//             this.user = result;
//             console.log('user from db: ', this.user);
//             if (this.user.role && this.user.firstName) {
//               this.userType = this.user.role;
//               this.userType$.next(this.userType);
//               this.firstName = this.user.firstName;
//               this.profileIncomplete = false;
//               this.profileIncomplete$.next(false);
//             } else {
//               this.profileIncomplete = true;
//               this.profileIncomplete$.next(true);
//             }
//             console.log('user from app comp: ', this.user);
//         }
//       );
//   };



// }


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
  profileIncomplete: boolean;
  profileIncomplete$ = new BehaviorSubject<boolean>(this.profileIncomplete);
  isFirstLogin: boolean;
  userProfile: any;

  constructor(private apiService: ApiService,
              private authService: AuthService) {
				  
    // get isFirstLogin, get getParseId, then either get user from db or add and then get
    this.authService.getIdAndFirstLoginStatus()
      .subscribe(
        result => {
          console.log('getIdAndFirstLoginStatus: ', result);
          this.userId = result[0];
          this.isFirstLogin = result[1];
          this.userProfile = result[2];
          if (this.isFirstLogin === false) {
            console.log('not first login');
            this.getUserFromDb(this.userId);
          } else if (this.isFirstLogin) {
            console.log('userProfile: ', this.userProfile);
            let newUser = this.buildNewUser(this.userProfile);
            console.log('new user: ', newUser);
            this.apiService.createUser(this.userId, newUser)
              .subscribe(
                result => {
                  this.isFirstLogin = false;
                  this.getUserFromDb(this.userId);
                  console.log('user from db: ', result);
                }
              );
          };
        }
      );

  }
  
  buildNewUser(profile) {
	  let newUser = {
		  'id': this.userId,
		  'firstName': profile.given_name || '',
		  'email': profile.email || profile.name,
		  'registrationDate': profile.created_at || profile.updated_at,
      'role': '',
      'orders': []
	  }
	  return newUser;
  };

  ngOnChanges() {}

  ngOnInit() {};

	// create the observables
	getProfileIncomplete() {
		return this.profileIncomplete$.asObservable();
	}
	
	getUserType() {
		return this.userType$.asObservable();
	}

  getUserFromDb(id) {
    console.log('id from subscription: ', id);
    this.apiService.getUserById(id)
      .subscribe(
        result => {
            this.user = result;
            console.log('user from db: ', this.user);
            if (this.user.role && this.user.firstName) {
              this.userType = this.user.role;
              this.userType$.next(this.userType);
              this.firstName = this.user.firstName;
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

