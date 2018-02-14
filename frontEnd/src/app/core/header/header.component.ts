import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  loggedIn: boolean;
  @Input() isAdmin: boolean;
  
  cartCount: number;

  constructor(private authService: AuthService,
              private cartService: CartService) { }

  ngOnChanges() {}

  onLogin(e) {
    this.authService.login();
    this.cartService.storeCarts();
    e.preventDefault();
  }

  ngOnInit() { 

    this.authService.loggedIn$
      .subscribe(
        result => {
          this.loggedIn = result;
          if (this.loggedIn) {
            this.cartService.retrieveCarts();
          };
        }
      );

    this.cartService.getCartCount()
      .subscribe(
        results => {
          this.cartCount = results;
        }
      );

    this.cartService.loadCartCount();

  }

}
