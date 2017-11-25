import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../../../../core/models/product.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  @Input() product: ProductModel;
  @Input() productQuantities: Object[];
  quantityOrdered: number;
  totalPrice: number;

  constructor() { }

  returnQuantity(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].productId === id) {
        return array[i].orderQuantity;
      }
    }
  }

  ngOnInit() {

    this.quantityOrdered = this.returnQuantity(this.productQuantities, this.product.id);

    this.totalPrice = (this.product.pricePerUnit) * (this.product.unitsPer) * (this.quantityOrdered);

  }

}
