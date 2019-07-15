import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ProductModel } from '../../../../core/models/product.model';
import { ProductQuantitiesModel } from '../../../../core/models/productQuantities.model';

@Component({
  selector: 'app-checkout-product',
  templateUrl: './checkout-product.component.html',
  styleUrls: ['./checkout-product.component.scss']
})
export class CheckoutProductComponent implements OnInit, OnChanges {

  @Input() product: ProductModel;
  @Input() productQuantities: ProductQuantitiesModel[];
  quantityOrdered: number;
  totalPrice: number;

  constructor() { }

  getProductIndex() {
    let index;
    for (let i = 0; i < this.productQuantities.length; i++) {
      // console.log('i: ', i);
      if (this.productQuantities[i].productId == this.product.id) {
        index = i;
      }
    }
    // console.log('index: ', index);
    return index;
  }

  calculateTotal() {
    return (this.product.pricePerUnit) * (this.product.unitsPer) * (this.quantityOrdered);
  }

  ngOnChanges() {}

  ngOnInit() {

    // console.log('productQuanitties: ', this.productQuantities);
    // console.log('product: ', this.product);

    //get the quantity ordered of this product
    this.quantityOrdered = this.productQuantities[this.getProductIndex()].orderQuantity;

    this.totalPrice = this.calculateTotal();

  }

}
