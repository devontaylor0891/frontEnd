import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { OrderModel } from '../../../../core/models/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnChanges {

  @Input() cart: OrderModel;

  ngOnChanges() {
    console.log('received cart from carts: ', this.cart);
  }

  constructor() { }

  ngOnInit() {
  }

}
