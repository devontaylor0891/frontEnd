import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../../../../../core/api.service';
import { CartService } from '../../../../../../core/services/cart-service/cart.service';

import { OrderModel } from '../../../../../../core/models/order.model';

@Component({
  selector: 'app-edit-order-modal',
  templateUrl: './edit-order-modal.component.html',
  styleUrls: ['./edit-order-modal.component.scss']
})
export class EditOrderModalComponent implements OnInit, OnDestroy {

  @Input() record: OrderModel;
  products: any;

  @Output() onOrderAccepted = new EventEmitter<OrderModel>();
  @Output() onOrderDenied = new EventEmitter<OrderModel>();

  orderForm: FormGroup;
  initialOrder: OrderModel;
  formChangeSub: Subscription;
  submitOrderSub: Subscription;
  submitting: boolean = false;
  submitObject: any;
  error: boolean;
  orderStatusInput: string;

  constructor(private fb: FormBuilder,
        private router: Router,
        private api: ApiService,
        public activeModal: NgbActiveModal,
        private cartService: CartService) {

    // build the products array to use in the table
    this.products = [];

  };

  ngOnInit() {
    this.buildProductsArray();
    this.buildForm();
    this.submitObject = this.record;
    console.log('this order: ', this.record);
    // console.log('submitObject: ', this.submitObject);
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

  private buildForm() {
    this.orderForm = this.fb.group({
      producerComment: [this.record.orderDetails.producerComment, [Validators.required]]
    });

  };

  setSubmitObject(status) {
    // then add the fields from the form
    this.submitObject.orderDetails.producerComment = this.orderForm.value.producerComment || '';
    this.submitObject.orderDetails.orderStatus = status;
  }

  onAccept() {
    this.submitting = true;
    this.setSubmitObject('accepted');
    // patch the order
    this.submitOrderSub = this.api.putOrder(this.record.id, this.submitObject)
      .subscribe(
        result => {
          // console.log('order accepted and emitted from modal: ', this.submitObject);
          this.handleSubmitAcceptSuccess(this.submitObject);
        }, error => {
          this.handleSubmitError(error);
        }
      );
    // for each product in the cart, call cartService.makeAccepted, these should patch the product
    for (let i = 0; i < this.record.orderDetails.productQuantities.length; i++) {
      let productOrder = this.record.orderDetails.productQuantities[i];
      this.cartService.makeQtyAccepted(productOrder.productId, productOrder.orderQuantity);
    }
  }

  onDeny() {
    this.submitting = true;
    this.setSubmitObject('denied');
    // patch the order
    this.submitOrderSub = this.api.putOrder(this.record.id, this.submitObject)
      .subscribe(
        result => {
          // console.log('order denied and emitted from modal: ', this.submitObject);
          this.handleSubmitDenySuccess(this.submitObject);
        }, error => {
          this.handleSubmitError(error);
        }
      );
    // for each product in the cart, call the cartservice makeAvailable, these also patch the product
    for (let i = 0; i < this.record.orderDetails.productQuantities.length; i++) {
      let productOrder = this.record.orderDetails.productQuantities[i];
      this.cartService.makeQtyAvailable(productOrder.productId, productOrder.orderQuantity);
    }

  }

  handleSubmitAcceptSuccess(res) {
    this.submitting = false;
    // console.log('put, accepted!: ', res);
    this.onOrderAccepted.emit(res);
    // close modal
    this.activeModal.close();
  };

  handleSubmitDenySuccess(res) {
    this.submitting = false;
    // console.log('put, denied!: ', res);
    this.onOrderDenied.emit(res);
    // close modal
    this.activeModal.close();
  };

  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  };

  ngOnDestroy() {
    if (this.submitOrderSub) {
      this.submitOrderSub.unsubscribe();
    }
  }

}
