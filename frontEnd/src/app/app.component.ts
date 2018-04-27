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

    this.authService.getIsAdmin()
      .subscribe(
        result => {
          console.log('isAdmin result: ', result);
          this.isAdmin = result;
        }
      );

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