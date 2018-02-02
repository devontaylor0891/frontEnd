import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAdmin: boolean;
  profileComplete: boolean;

  constructor (public authService: AuthService,
              private router: Router) {
    
    this.authService.handleAuth();
    
  }

  ngOnInit() {

    this.router.events.subscribe((event: NavigationEnd) => {
      if(event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.isAdmin = this.authService.isAdmin;

    this.authService.profileComplete$
      .subscribe(
        result => {
          this.profileComplete = result;
        }
      )

  }
  
}
