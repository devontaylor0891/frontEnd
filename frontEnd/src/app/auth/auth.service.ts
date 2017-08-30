import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {
    
    auth0 = new auth0.WebAuth({
        clientID: 'qkYFFjY05abDAnkdLFdZoOdkfZaxFpHk',
        domain: 'olf.auth0.com',
        responseType: 'token id_token',
        audience: 'https://olf.auth0.com/userinfo',
        redirectUri: 'http://localhost:4200/callback',
        scope: 'openid'
    });

  constructor(public router: Router) {}
      
      public login(): void {
          this.auth0.authorize();
      }
      
  

}
