import { Component, OnInit, OnChanges } from '@angular/core';

import { CartService } from '../../../core/services/cart-service/cart.service';

import { OrderModel } from '../../../core/models/order.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit, OnChanges {

  carts: OrderModel[];

  constructor(private cartService: CartService) { }

  ngOnChanges() {}

  ngOnInit() {

    this.cartService.getCarts()
      .subscribe(results => {
        this.carts = results;
      })

    this.cartService.loadCarts();

    console.log('carts: ', this.carts);
    
  }

}
