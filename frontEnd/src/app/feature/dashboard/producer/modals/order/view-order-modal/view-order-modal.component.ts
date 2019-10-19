import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { OrderModel } from '../../../../../../core/models/order.model';

@Component({
  selector: 'app-view-order-modal',
  templateUrl: './view-order-modal.component.html',
  styleUrls: ['./view-order-modal.component.scss']
})
export class ViewOrderModalComponent implements OnInit {

  @Input() record: OrderModel;
  products: any;

  constructor(public activeModal: NgbActiveModal) {

    // build the products array to use in the table
    this.products = [
      {
        id: null,
        name: '',
        quantity: null,
        value: null
      }
    ];

  }

  ngOnInit() {

    this.buildProductsArray();

  }

   buildProductsArray() {
    let newProduct = {
      id: null,
      name: '',
      quantity: null,
      value: null
    };
    let array = this.record.orderDetails.productQuantities;
    // for each product in the productQuantities array, get the id, qty and value
    for (let i = 0; i < array.length; i++) {
      newProduct.id = array[i].productId;
      newProduct.quantity = array[i].orderQuantity;
      newProduct.value = array[i].orderValue;
      newProduct.name = this.getProductName(newProduct.id);
      let cloneProduct = {...newProduct};
      // console.log('newProduct: ,', newProduct)
      this.products.push(cloneProduct);
      // console.log('products: ', this.products);
    }
    // use the id to get the name from the productList array
  };

  getProductName(id) {
    for (let j = 0; j < this.record.productList.length; j++) {
      if (this.record.productList[j].id === id) {
        // console.log('id and name: ', id + ' ' + this.record.productList[j].name);
        return this.record.productList[j].name;
      }
    }
  };

}
