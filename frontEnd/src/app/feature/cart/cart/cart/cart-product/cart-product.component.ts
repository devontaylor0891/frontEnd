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
  quantityOrdered: number;
  totalPrice: number;

  constructor(private cartService: CartService) { }

  ngOnChanges() {}
  
    addOne() {
      if (this.quantityOrdered < this.product.qtyAvailable) {
        this.quantityOrdered += 1;
        this.cartService.findAndMakeQuantity(this.product.id, this.quantityOrdered, this.product.producer.id);
      }
      this.totalPrice = this.calculateTotal();
    }
  
    lessOne() {
      if (this.quantityOrdered > 0) {
        this.quantityOrdered -= 1;
        this.cartService.findAndMakeQuantity(this.product.id, this.quantityOrdered, this.product.producer.id);
      }
      this.totalPrice = this.calculateTotal();
    }

  returnQuantity(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].productId === id) {
        return array[i].orderQuantity;
      }
    }
  }

  calculateTotal() {
    return (this.product.pricePerUnit) * (this.product.unitsPer) * (this.quantityOrdered);
  }

  ngOnInit() {

    this.quantityOrdered = this.returnQuantity(this.productQuantities, this.product.id);

    this.totalPrice = this.calculateTotal();

  }

}
