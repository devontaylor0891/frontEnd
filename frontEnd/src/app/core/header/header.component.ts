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

  ngOnInit() { 

    this.cartService.getCartCount()
      .subscribe( results => {
        this.cartCount = results;
      });

    this.cartService.loadCartCount();

    this.authService.loggedIn$
      .subscribe(
        result => {
          this.loggedIn = result;
        }
      );

  }

}
