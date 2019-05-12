import { Component, OnInit, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CartService } from '../../../core/services/cart-service/cart.service';

import { OrderModel } from '../../../core/models/order.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit, OnChanges {

  pageTitle = 'Your Cart - Onlylocalfood.com';

  carts: OrderModel[];

  constructor(private cartService: CartService,
              private title: Title) { }

  ngOnChanges() {}

  ngOnInit() {

    this.title.setTitle(this.pageTitle);

    this.cartService.getCarts()
      .subscribe(results => {
        this.carts = results;
      })

    this.cartService.loadCarts();

    // console.log('carts: ', this.carts);
    
  }

}
