import { Component, OnInit, Input, OnDestroy } from '@angular/core';
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
export class EditOrderModalComponent implements OnInit {

  @Input() record: OrderModel;
  orderForm: FormGroup;
  initialOrder: OrderModel;
  formChangeSub: Subscription;
  submitOrderSub: Subscription;
  submitting: boolean = false;
  submitObject: OrderModel;
  error: boolean;
  orderStatusInput: string;

  constructor(private fb: FormBuilder,
				private router: Router,
				private api: ApiService,
				private activeModal: NgbActiveModal) { }

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
    console.log('submitted object: ', this.submitObject);
		this.submitOrderSub = this.api
			.putOrder(this.record.id, this.submitObject)
			.subscribe(
			  data => this.handleSubmitSuccess(data),
			  err => this.handleSubmitError(err)
			);
  };
  
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