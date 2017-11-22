import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { SearchResultModel } from '../../core/models/search-result.model';
import { ProductModel } from '../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: []
})
export class ProductCardComponent implements OnInit {
  
  @Input() product: ProductModel;

  orderQty: number;

  constructor() { }

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
