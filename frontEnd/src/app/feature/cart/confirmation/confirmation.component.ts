import { Component, OnInit } from '@angular/core';

import { CartService } from '../../../core/services/cart-service/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {

    this.cartService.resetOrderSubscriptions();

  }

}
