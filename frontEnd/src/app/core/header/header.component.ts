import { Component, Input, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../auth/auth.service';
import { CartService } from '../services/cart-service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy {

  loggedIn: boolean;
  @Input() isAdmin: boolean;

  loggedInSub: Subscription;
  cartCountSub: Subscription;
  
  cartCount: number;

  constructor(private authService: AuthService,
              private cartService: CartService) { }

  ngOnChanges() {}

  onLogin(e) {
    // console.log('cart stored from header');
    this.cartService.storeCarts();
    this.authService.login();
    e.preventDefault();
  }

  onLogout() {
    this.authService.logout();
    this.cartService.removeCarts();
  }

  ngOnInit() { 

    this.loggedInSub = this.authService.loggedIn$
      .subscribe(
        result => {
          this.loggedIn = result;
          if (this.loggedIn) {
            this.cartService.retrieveCarts();
          };
        }
      );

    this.cartCountSub = this.cartService.getCartCount()
      .subscribe(
        results => {
          this.cartCount = results;
        }
      );

    this.cartService.loadCartCount();

  };

  public openLink(link) {
    window.open(link, '_blank');
  }

  ngOnDestroy() {
    if (this.loggedInSub) {
      this.loggedInSub.unsubscribe();
    }
    if (this.cartCountSub) {
      this.cartCountSub.unsubscribe();
    }
    // console.log('header onDestroy called');
  }

}
