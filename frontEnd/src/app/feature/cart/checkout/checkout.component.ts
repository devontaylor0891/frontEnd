import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { CartService } from '../../../core/services/cart-service/cart.service';

import { OrderModel } from '../../../core/models/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnChanges {

  order: OrderModel;
  id: number;

  constructor(private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnChanges() {}

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('tempId');

    this.cartService.getCartById()
      .subscribe(
        result => { this.order = result }
      );

    this.cartService.loadCartById(this.id);

      console.log('this order: ', this.order);  

  }

}
