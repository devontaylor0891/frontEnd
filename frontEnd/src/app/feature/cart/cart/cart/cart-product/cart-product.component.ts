import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { CartService } from '../../../../../core/services/cart-service/cart.service';

import { ProductModel } from '../../../../../core/models/product.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit, OnChanges {

  @Input() product: ProductModel;
  @Input() productQuantities: Object[];
  productQuantity: number;
  totalProductValue: number;
  qtyRemainingAvailable: number;

  constructor(private cartService: CartService) { }

  ngOnChanges() {}
  
  addOne() {
    if (this.product.qtyAvailable > 0) {
      this.cartService.addOne(this.product.id, this.product.producer.id);
      this.productQuantity = this.returnQuantity(this.productQuantities, this.product.id);
      this.totalProductValue = this.calculateTotal();
      this.calculateQtyRemainingAvailable();
    }
  }

  lessOne() {
    if (this.productQuantity > 0) {
      this.cartService.minusOne(this.product.id, this.product.producer.id);
      this.productQuantity = this.returnQuantity(this.productQuantities, this.product.id);
      this.totalProductValue = this.calculateTotal();
      this.calculateQtyRemainingAvailable();
    }
  }

  returnQuantity(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].productId === id) {
        return array[i].orderQuantity;
      }
    }
  }

  calculateTotal() {
    return (this.productQuantity) * (this.product.pricePerUnit) * (this.product.unitsPer);
  };

  calculateQtyRemainingAvailable() {
    this.qtyRemainingAvailable = this.product.qtyAvailable - this.productQuantity;
  };

  onDeleteProduct() {
    this.cartService.deleteProduct(this.product.id, this.product.producer.id);
    this.productQuantity = this.returnQuantity(this.productQuantities, this.product.id);
    this.totalProductValue = this.calculateTotal();
  }

  ngOnInit() {
    this.productQuantity = this.returnQuantity(this.productQuantities, this.product.id);
    this.totalProductValue = this.calculateTotal();
    this.calculateQtyRemainingAvailable();
    console.log('prodQty in Cart: ', this.productQuantity);
    console.log('prod Available: ', this.product.qtyAvailable);
    console.log('qty remaining available: ', this.qtyRemainingAvailable);
  }

}
