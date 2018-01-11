// import { Component, OnInit, Input, OnDestroy } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { ApiService } from '../../../../../../core/api.service';

// import { ScheduleModel } from '../../../../../../core/models/schedule.model';

// @Component({
//   selector: 'app-edit-schedule-modal',
//   templateUrl: './edit-schedule-modal.component.html',
//   styleUrls: ['./edit-schedule-modal.component.scss']
// })
// export class EditScheduleModalComponent implements OnInit {

//   @Input() record: ScheduleModel;
//   // productForm: FormGroup;
//   // initialProduct: ProductModel;
//   // totalProductValue: number;
//   // formChangeSub: Subscription;
//   // submitProductSub: Subscription;
//   // submitting: boolean = false;
//   // submitObject: ProductModel;
//   error: boolean;

//   constructor(private fb: FormBuilder,
// 				private router: Router,
// 				private api: ApiService,
// 				private activeModal: NgbActiveModal) { }

//   ngOnInit() {
//     // this.initialProduct = this.setInitialProduct();
// 	  // this.buildForm();
// 	  // this.calculateTotalValue();
//   }

//   // private setInitialProduct() {
//   //   return new ProductModel(
//   //     this.record.id,
//   //     this.record.name,
//   //     this.record.description,
//   //     this.record.image,
//   //     this.record.pricePerUnit,
//   //     this.record.unit,
//   //     this.record.unitsPer,
//   //     this.record.category,
//   //     this.record.subcategory,
//   //     this.record.producer,
//   //     this.record.dateAdded,
//   //     this.record.qtyAvailable,
//   //     this.record.qtyPending,
//   //     this.record.qtyAccepted,
//   //     this.record.qtyCompleted,
//   //     this.record.isObsolete,
//   //     this.record.scheduleList
//   //   );
//   // }

//   // private buildForm() {
// 	// 	this.productForm = this.fb.group({
// 	// 		name: [this.record.name, [Validators.required]],
// 	// 		description: [this.record.description, [Validators.required]],
// 	// 		image: [this.record.image, [Validators.required]],
// 	// 		pricePerUnit: [this.record.pricePerUnit, [Validators.required]],
// 	// 		unit: [this.record.unit, [Validators.required]],
// 	// 		unitsPer: [this.record.unitsPer, [Validators.required]],
// 	// 		category: [this.record.category, [Validators.required]],
// 	// 		subcategory: [this.record.subcategory, [Validators.required]],
// 	// 		qtyAvailable: [this.record.qtyAvailable, [Validators.required]]
// 	// 	});
		
// 	// 	// Subscribe to form value changes
// 	// 	this.formChangeSub = this.productForm
// 	// 		.valueChanges
// 	// 		.subscribe(data => this.onValueChanged());
//   // };
  
//   // private calculateTotalValue() {
// 	//   this.totalProductValue = this.productForm.value.pricePerUnit * this.productForm.value.unitsPer;
//   // }
  
//   // onValueChanged() {
// 	//   this.calculateTotalValue();
//   // };
  
//   // setSubmitObject() {
// 	//   // make it equal to the original record
// 	//   this.submitObject = this.record;
// 	//   // then add the fields from the form
// 	//   this.submitObject.name = this.productForm.value.name;
// 	//   this.submitObject.description = this.productForm.value.description;
// 	//   this.submitObject.image = this.productForm.value.image;
// 	//   this.submitObject.pricePerUnit = this.productForm.value.pricePerUnit;
// 	//   this.submitObject.unit = this.productForm.value.unit;
// 	//   this.submitObject.unitsPer = this.productForm.value.unitsPer;
// 	//   this.submitObject.category = this.productForm.value.category;
// 	//   this.submitObject.subcategory = this.productForm.value.subcategory;
// 	//   this.submitObject.qtyAvailable = this.productForm.value.qtyAvailable;
//   // }
  
//   // onSubmit() {
// 	// 	this.submitting = true;
//   //   this.setSubmitObject();
//   //   console.log('submitted object: ', this.submitObject);
// 	// 	this.submitProductSub = this.api
// 	// 		.putProduct(this.record.id, this.submitObject)
// 	// 		.subscribe(
// 	// 		  data => this.handleSubmitSuccess(data),
// 	// 		  err => this.handleSubmitError(err)
// 	// 		);
//   // };

//   // onRenew() {
//   //   this.submitting = true;
//   //   this.setSubmitObject();
//   //   this.submitObject.isObsolete = false;
//   //   this.api.putProduct(this.record.id, this.submitObject)
//   //     .subscribe(
//   //       response => {
//   //         this.submitting = false;
//   //         this.activeModal.close();
//   //       }, err => {
//   //         this.handleSubmitError(err)
//   //       }
//   //     )
//   // }
  
//   // handleSubmitSuccess(res) {
// 	// 	this.submitting = false;
// 	// 	// close modal
// 	// 	this.activeModal.close();
//   // };
  
//   // handleSubmitError(err) {
// 	// 	console.error(err);
// 	// 	this.submitting = false;
// 	// 	this.error = true;
//   // };
  
//   // ngOnDestroy() {
//   //   if (this.submitProductSub) {
//   //     this.submitProductSub.unsubscribe();
//   //   }
//   //   this.formChangeSub.unsubscribe();
//   // }

// }

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../../../../../core/api.service';

import { ScheduleModel } from '../../../../../../core/models/schedule.model';

@Component({
  selector: 'app-edit-schedule-modal',
  templateUrl: './edit-schedule-modal.component.html',
  styleUrls: ['./edit-schedule-modal.component.scss']
})
export class EditScheduleModalComponent implements OnInit {
	

	// 2. build the form from the incoming record, including the date changes needed
	// 3. what has to be done to dates/times in order to build the form?
	// 4. build process flow for changing dates/times. What is the logic?
	// 5. build submit object and submit method
	
	// what can actually be modified in this form?
	// dates, times, only if no orders
	// description, fee, waiver 

  @Input() record: ScheduleModel;
  scheduleForm: FormGroup;
  formChangeSub: Subscription;
  submitScheduleSub: Subscription;
  submitting: boolean = false;
  submitObject: ScheduleModel;
  error: boolean;
  hasOrders: boolean;
  hasDelFee: boolean;
  hasFeeWaiver: boolean;
  
  schedDay: number;
  schedMonth: number;
  schedYear: number;
  schedStartHour: number;
  schedStartMinute: number;
  schedEndHour: number;
  schedEndMinute: number;
  deadlineDateDay: number;
  deadlineDateMonth: number;
  deadlineDateYear: number;
  deadlineHour: number;
  deadlineMinute: number;
  
  // DATE/TIME PICKER SETTINGS
  public moment: any = new Date();
  dateMoment: any;
  dateMin: any = new Date(new Date().setDate(new Date().getDate() + 1)); // must be 1 day in future
  startTimeMoment: any;
  endTimeMoment: any;
  deadlineDateMoment: any;
	deadlineDateMax: any = new Date(); // default is now, which is 24 hours before dateMin
  deadlineTimeMoment: any;

  constructor(private formBuild: FormBuilder,
				private router: Router,
				private api: ApiService,
				private activeModal: NgbActiveModal) { }

  ngOnInit() {
	  this.setHasOrders();
	  this.hasDelFee = this.record.hasFee;
	  this.hasFeeWaiver = this.record.hasWaiver;
	  // break out the dates/times from the incoming record so they can be used in the form
	  this.breakUpDatesTimes();
	  // build the form with the incoming record and the date/time defaults
	  this.buildForm();
  }
  
  private setHasOrders() {
	  if (this.record.orderList.length > 0) {
		  this.hasOrders = true;
	  } else {
		  this.hasOrders = false;
	  }
  }
  
  private setDateTimes() {
    this.dateMoment = new Date(this.schedYear, this.schedMonth, this.schedDay, 0, 0, 0, 0);
    this.startTimeMoment = new Date(0, 0, 0, this.schedStartHour, this.schedStartMinute, 0, 0);
    this.endTimeMoment = new Date(0, 0, 0, this.schedEndHour, this.schedEndMinute, 0, 0);
    this.deadlineDateMoment = new Date(this.deadlineDateYear, this.deadlineDateMonth, this.deadlineDateDay, 0, 0, 0, 0);
    this.deadlineTimeMoment = new Date(0, 0, 0, this.deadlineHour, this.deadlineMinute, 0, 0);
  };
  
  breakUpDatesTimes() {
    this.schedDay = new Date(this.record.startDateTime).getDate();
    this.schedMonth = new Date(this.record.startDateTime).getMonth();
    this.schedYear = new Date(this.record.startDateTime).getFullYear();
	  this.schedStartHour = new Date(this.record.startDateTime).getHours();
    this.schedStartMinute = new Date(this.record.startDateTime).getMinutes();
	  this.schedEndHour = new Date(this.record.endDateTime).getHours();
    this.schedEndMinute = new Date(this.record.endDateTime).getMinutes();
    this.deadlineDateDay = new Date(this.record.orderDeadline).getDate();
    this.deadlineDateMonth = new Date(this.record.orderDeadline).getMonth();
    this.deadlineDateYear = new Date(this.record.orderDeadline).getFullYear();
    this.deadlineHour = new Date(this.record.orderDeadline).getHours();
    this.deadlineMinute = new Date(this.record.orderDeadline).getMinutes();
    // set those dates/times into the datepicker defaults
	  this.setDateTimes();
  };

  private buildForm() {
	  this.scheduleForm = this.formBuild.group({
		  description: [this.record.description],
		  date: [this.dateMoment, Validators.required],
		  startTime: [this.startTimeMoment, Validators.required],
		  endTime: [this.endTimeMoment, Validators.required],
		  deadlineDate: [this.deadlineDateMoment, Validators.required],
		  deadlineTime: [this.deadlineTimeMoment, Validators.required],
		  hasFee: [this.record.hasFee, Validators.required],
		  fee: [this.record.fee],
		  hasWaiver: [this.record.hasWaiver, Validators.required],
		  feeWaiver: [this.record.feeWaiver]
    });
		
	  // Subscribe to form value changes
    this.formChangeSub = this.scheduleForm
      .valueChanges
      .subscribe(data => this.onValueChanged());
  };
  
  // private calculateTotalValue() {
	//   this.totalProductValue = this.productForm.value.pricePerUnit * this.productForm.value.unitsPer;
  // }
  
  onValueChanged() {
	//   maybe this is where I'll need to reset date/time minimums, etc
  };
  
  setSubmitObject() {
	//   // make it equal to the original record
	//   this.submitObject = this.record;
	//   // then add the fields from the form
	//   this.submitObject.name = this.productForm.value.name;
	//   this.submitObject.description = this.productForm.value.description;
	//   this.submitObject.image = this.productForm.value.image;
	//   this.submitObject.pricePerUnit = this.productForm.value.pricePerUnit;
	//   this.submitObject.unit = this.productForm.value.unit;
	//   this.submitObject.unitsPer = this.productForm.value.unitsPer;
	//   this.submitObject.category = this.productForm.value.category;
	//   this.submitObject.subcategory = this.productForm.value.subcategory;
	//   this.submitObject.qtyAvailable = this.productForm.value.qtyAvailable;
  };
  
  onSubmit() {
	this.submitting = true;
  //   this.setSubmitObject();
  //   console.log('submitted object: ', this.submitObject);
	// 	this.submitProductSub = this.api
	// 		.putProduct(this.record.id, this.submitObject)
	// 		.subscribe(
	// 		  data => this.handleSubmitSuccess(data),
	// 		  err => this.handleSubmitError(err)
	// 		);
  };

  onChooseDate() {

  };

  onChooseStartTime() {

  };

  onChooseEndTime() {

  };

  onChooseDeadlineDate() {

  };

  onChooseDeadlineTime() {

  };

  // onRenew() {
  //   this.submitting = true;
  //   this.setSubmitObject();
  //   this.submitObject.isObsolete = false;
  //   this.api.putProduct(this.record.id, this.submitObject)
  //     .subscribe(
  //       response => {
  //         this.submitting = false;
  //         this.activeModal.close();
  //       }, err => {
  //         this.handleSubmitError(err)
  //       }
  //     )
  // }
  
  // handleSubmitSuccess(res) {
	// 	this.submitting = false;
	// 	// close modal
	// 	this.activeModal.close();
  // };
  
  // handleSubmitError(err) {
	// 	console.error(err);
	// 	this.submitting = false;
	// 	this.error = true;
  // };
  
  // ngOnDestroy() {
  //   if (this.submitProductSub) {
  //     this.submitProductSub.unsubscribe();
  //   }
  //   this.formChangeSub.unsubscribe();
  // };

}