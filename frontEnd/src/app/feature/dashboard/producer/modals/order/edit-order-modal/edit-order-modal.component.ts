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
export class EditOrderModalComponent implements OnInit {

  @Input() record: OrderModel;

  @Output() orderAccepted = new EventEmitter<OrderModel>();
  @Output() orderDenied = new EventEmitter<OrderModel>();

  orderForm: FormGroup;
  initialOrder: OrderModel;
  formChangeSub: Subscription;
  submitOrderSub: Subscription;
  submitting: boolean = false;
  submitObject: {
    "orderDetails": {
      "producerComment": '',
      "orderStatus": ''
    }
  };
  error: boolean;
  orderStatusInput: string;

  constructor(private fb: FormBuilder,
        private router: Router,
        private api: ApiService,
        private activeModal: NgbActiveModal,
        private cartService: CartService) { }

  ngOnInit() {
    // this.initialOrder = this.setInitialOrder();
	  this.buildForm();
  }

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
			producerComment: [this.record.orderDetails.producerComment, [Validators.required]]
		});
		
		// Subscribe to form value changes
		this.formChangeSub = this.orderForm.valueChanges
			.subscribe(data => this.onValueChanged());
  };
  
  onValueChanged() {

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
    this.api.patchOrder(this.record.id, this.submitObject)
      .subscribe(
        result => {
          this.orderAccepted.emit(result);
          this.handleSubmitSuccess(result);
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
    this.api.patchOrder(this.record.id, this.submitObject)
      .subscribe(
        result => {
          this.orderDenied.emit(result);
          this.handleSubmitSuccess(result);
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
  
  // onSubmit() {
	// 	this.submitting = true;
  //   this.setSubmitObject();
  //   console.log('submitted object: ', this.submitObject);
	// 	this.submitOrderSub = this.api
	// 		.putOrder(this.record.id, this.submitObject)
	// 		.subscribe(
	// 		  data => this.handleSubmitSuccess(data),
	// 		  err => this.handleSubmitError(err)
	// 		);
  // };
  
  handleSubmitSuccess(res) {
    this.submitting = false;
    console.log('put!: ', res);
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
    this.formChangeSub.unsubscribe();
  }

}