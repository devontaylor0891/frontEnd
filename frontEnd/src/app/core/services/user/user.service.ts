// import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';

// import { ApiService } from '../../api.service';

// import { UserModel } from '../../../core/models/user.model';

// import 'rxjs/add/operator/map';

// @Injectable()
// export class UserService {

//   userType: string;
//   user: UserModel;
//   profileIncomplete: boolean;

//   url = '../../../../assets/api/users.json';

//   constructor(private http:Http,
//               private apiService: ApiService) { }

//   getUsers() {
//     return this.http.get(this.url)
//       .map(
//         (response: Response) => {
//           const data = response.json();
//           return data;
//         }  
//       )
//   }

//   getUserFromDb(profile) {
//     console.log('profile from subscription: ', profile);
//     this.apiService.getUserById(profile.sub.slice(profile.sub.indexOf('|') + 1))
//       .subscribe(
//         result => {
//           this.user = result;
//           if (this.user.role && this.user.firstName) {
//             this.userType = this.user.role;
//             this.profileIncomplete = false;
//           } else {
//             this.profileIncomplete = true;
//           }
//           console.log('user from app comp: ', this.user);
//         }
//       );
//   }



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

  constructor(private apiService: ApiService,
              private authService: AuthService) {

    this.authService.getParsedId()
      .subscribe(
        result => {
          console.log('getParsedId result: ', result); // not being called
          this.getUserFromDb(result);
        }
      );

  }

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
          // if no user returned, call api to add
          if (result === 'no user') {
            console.log('no user');
            // add the user
            // then call this function again
          } else {
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
        }
      );
  };



}