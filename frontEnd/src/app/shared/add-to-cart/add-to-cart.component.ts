import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { CartService } from '../../core/services/cart-service/cart.service';

import { ProductModel } from '../../core/models/product.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit, OnChanges {
  @Input() product: ProductModel;
  
    orderQty: number;
  
    constructor(private cartService: CartService) { }
	
	ngOnChanges() {}
  
    addOne() {
      if (this.orderQty < this.product.qtyAvailable) {
        this.orderQty += 1;
      }
      console.log(this.orderQty);
    }
  
    lessOne() {
      if (this.orderQty > 1) {
        this.orderQty -= 1;
      }
      console.log(this.orderQty);
    }
  
    onAdd() {
      console.log("product: ", this.product);
      console.log("qtyAdded: ", this.orderQty);
	  this.cartService.addToCart(this.product, this.orderQty);
      if (this.product.qtyAvailable > 0) { // this will need to update after the orderQty is sent to the cart service
        this.orderQty = 1;
      } else {
        this.orderQty = 0;
      }
      
    }
  
    ngOnInit() {
      this.orderQty = 1;
    }

}