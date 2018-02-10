import { Component, OnInit, Input } from '@angular/core';

import { OrderModel } from '../../../../core/models/order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() cart: OrderModel;

  constructor() { }

  ngOnInit() {
  }

}
