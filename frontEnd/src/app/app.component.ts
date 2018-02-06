// import { Component, OnInit, OnChanges } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';

// import { AuthService } from './auth/auth.service';
// import { UserModel } from './core/models/user.model';
// import { ApiService } from './core/api.service';
// import { UserService } from './core/services/user/user.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {

//   isAdmin: boolean;
//   // user: UserModel;
//   loggedIn: boolean;
//   // userRole: string;
//   profileIncomplete: boolean;

//   constructor (public authService: AuthService,
//               private router: Router,
//               private apiService: ApiService,
//               private userService: UserService) {
    
//     this.authService.handleAuth();
    
//   }
  
//   ngOnChanges() { }

//   // getUserFromDb(profile) {
//   //   console.log('profile from subscription: ', profile);
//   //   this.apiService.getUserById(profile.sub.slice(profile.sub.indexOf('|') + 1))
//   //     .subscribe(
//   //       result => {
//   //         this.user = result;
//   //         if (this.user.role && this.user.firstName) {
//   //           this.userRole = this.user.role;
//   //           this.profileIncomplete = false;
//   //         } else {
//   //           this.profileIncomplete = true;
//   //         }
//   //         console.log('user from app comp: ', this.user);
//   //       }
//   //     );
//   // }

//   ngOnInit() {

//     // this.authService.getUser()
//     //   .subscribe(
//     //     result => {
//     //       if (result) {
//     //         this.getUserFromDb(result);
//     //       }
//     //     }
//     //   );

//     this.router.events.subscribe((event: NavigationEnd) => {
//       if(event instanceof NavigationEnd) {
//         window.scrollTo(0, 0);
//       }
//     });

//     this.isAdmin = this.authService.isAdmin;

//     this.authService.getLoggedIn()
//       .subscribe(
//         result => {
//           this.loggedIn = result;
//         }
//       );

//     this.profileIncomplete = this.userService.profileIncomplete;

//   }
  
// }


import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { UserModel } from './core/models/user.model';
import { ApiService } from './core/api.service';
import { UserService } from './core/services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  isAdmin: boolean;
  loggedIn: boolean;
  profileIncomplete: boolean;

  constructor (public authService: AuthService,
              private router: Router,
              private apiService: ApiService,
              private userService: UserService) {
    
    this.authService.handleAuth();
    
  }
  
  ngOnChanges() { }

  ngOnInit() {

    this.router.events.subscribe((event: NavigationEnd) => {
      if(event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.isAdmin = this.authService.isAdmin;

    this.authService.getLoggedIn()
      .subscribe(
        result => {
          console.log('logged in result:', result); // this is being called
          this.loggedIn = result;
        }
      );

    this.userService.getProfileIncomplete()
		.subscribe(
			result => {
				this.profileIncomplete = result;
			}
		);

  }
  
}