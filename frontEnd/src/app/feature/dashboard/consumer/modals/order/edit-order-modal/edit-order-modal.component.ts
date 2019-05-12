import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../../../../../core/api.service';

import { OrderModel } from '../../../../../../core/models/order.model';

@Component({
  selector: 'app-edit-order-modal',
  templateUrl: './edit-order-modal.component.html',
  styleUrls: ['./edit-order-modal.component.scss']
})
export class ConsumerEditOrderModalComponent implements OnInit {

  @Input() record: OrderModel;
  @Output() onOrderDeleted = new EventEmitter<any>();
  orderForm: FormGroup;
  initialOrder: OrderModel;
  formChangeSub: Subscription;
  submitOrderSub: Subscription;
  submitting: boolean = false;
  submitObject: OrderModel;
  error: boolean;
  orderStatusInput: string;
  products: any;

  constructor(private fb: FormBuilder,
        private router: Router,
        private api: ApiService,
        public activeModal: NgbActiveModal) {

    // build the products array to use in the table
    this.products = [];

  }

  ngOnInit() {
    this.buildProductsArray();
    // this.initialOrder = this.setInitialOrder();
    this.buildForm();
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

  private setInitialOrder() {
    // return new OrderModel(
    //   // this.record.id,
    //   // this.record.name,
    //   // this.record.description,
    //   // this.record.image,
    //   // this.record.pricePerUnit,
    //   // this.record.unit,
    //   // this.record.unitsPer,
    //   // this.record.category,
    //   // this.record.subcategory,
    //   // this.record.producer,
    //   // this.record.dateAdded,
    //   // this.record.qtyAvailable,
    //   // this.record.qtyPending,
    //   // this.record.qtyAccepted,
    //   // this.record.qtyCompleted,
    //   // this.record.isObsolete,
    //   // this.record.scheduleList
    // );
  }

  private buildForm() {
    this.orderForm = this.fb.group({
      consumerComment: [this.record.orderDetails.consumerComment, [Validators.required]]
    });
    
    // Subscribe to form value changes
    this.formChangeSub = this.orderForm
      .valueChanges
      .subscribe(data => this.onValueChanged());
  };
  
  onValueChanged() {

  };
  
  setSubmitObject() {
    // make it equal to the original record
    this.submitObject = this.record;
    // then add the fields from the form
    this.submitObject.orderDetails.producerComment = this.orderForm.value.producerComment;
    this.submitObject.orderDetails.orderStatus = this.orderStatusInput;
  }

  onAccept() {
    this.orderStatusInput = 'accepted';
  }

  onDeny() {
    this.orderStatusInput = 'denied';
  }
  
  onSubmit() {
    this.submitting = true;
    this.setSubmitObject();
    // console.log('submitted object: ', this.submitObject);
    this.submitOrderSub = this.api
      .putOrder(this.record.id, this.submitObject)
      .subscribe(
        data => this.handleSubmitSuccess(data),
        err => this.handleSubmitError(err)
      );
  };

  deleteOrder() {
    this.submitting = true;
    this.submitOrderSub = this.api
      .deleteOrder(this.record.id)
      .subscribe(
        data => this.handleDeleteSuccess(data),
        err => this.handleDeleteError(err)
      )
  }
  
  handleSubmitSuccess(res) {
    this.submitting = false;
    // console.log('put!: ', res);
    // close modal
    this.activeModal.close();
  };
  
  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  };

  handleDeleteSuccess(res) {
    this.submitting = false;
    this.onOrderDeleted.emit(this.record.id);
    // console.log('deleted!: ', res);
    // close modal
    this.activeModal.close();
  };
  
  handleDeleteError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  };
  
  ngOnDestroy() {
    if (this.submitOrderSub) {
      this.submitOrderSub.unsubscribe();
    }
    this.formChangeSub.unsubscribe();
  }

}