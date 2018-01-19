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
  
  onValueChanged() {
	//   maybe this is where I'll need to reset date/time minimums, etc
  };
  
  setSubmitObject() {
	  // make it equal to the original record
	  this.submitObject = this.record;
	  // then add the fields from the form
	  this.submitObject.description = this.scheduleForm.value.description;
	  this.submitObject.endDateTime = this.buildEndDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedEndHour, this.schedEndMinute);
	  this.submitObject.startDateTime = this.buildStartDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedStartHour, this.schedStartMinute);
	  this.submitObject.orderDeadline = this.buildOrderDeadline(this.deadlineDateYear, this.deadlineDateMonth, this.deadlineDateDay, this.deadlineHour, this.deadlineMinute);
	  this.submitObject.hasFee = this.scheduleForm.value.hasFee;
	  this.submitObject.fee = this.scheduleForm.value.fee;
	  this.submitObject.hasWaiver = this.scheduleForm.value.hasWaiver;
	  this.submitObject.feeWaiver = this.scheduleForm.value.feeWaiver;
  };
  
  onSubmit() {
	  this.submitting = true;
    this.setSubmitObject();
    console.log('submitted object: ', this.submitObject);
		this.submitScheduleSub = this.api
			.putSchedule(this.record.id, this.submitObject)
			.subscribe(
			  data => this.handleSubmitSuccess(data),
			  err => this.handleSubmitError(err)
			);
  };

  onChooseDate() {
    this.schedDay = this.dateMoment.getDate();
    this.schedMonth = this.dateMoment.getMonth();
    this.schedYear = this.dateMoment.getFullYear();
  };

  onChooseStartTime() {
    this.schedStartHour = this.startTimeMoment.getHours();
    this.schedStartMinute = this.startTimeMoment.getMinutes();
  };

  onChooseEndTime() {
    this.schedEndHour = this.endTimeMoment.getHours();
    this.schedEndMinute = this.endTimeMoment.getMinutes();
  };

  onChooseDeadlineDate() {
    this.deadlineDateDay = this.deadlineDateMoment.getDate();
    this.deadlineDateMonth = this.deadlineDateMoment.getMonth();
    this.deadlineDateYear = this.deadlineDateMoment.getFullYear();
  };
  
  onChooseDeadlineTime() {
    this.deadlineHour = this.deadlineTimeMoment.getHours();
    this.deadlineMinute = this.deadlineTimeMoment.getMinutes();
  };

  buildStartDateTime(year, month, day, hour, minute) {
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
  };
  
  buildEndDateTime(year, month, day, hour, minute) {
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
  };
  
  buildOrderDeadline(year, month, day, hour, minute) {
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
  };
  
  handleSubmitSuccess(res) {
		this.submitting = false;
		// close modal
		this.activeModal.close();
  };
  
  handleSubmitError(err) {
		console.error(err);
		this.submitting = false;
		this.error = true;
  };
  
  ngOnDestroy() {
    if (this.submitScheduleSub) {
      this.submitScheduleSub.unsubscribe();
    }
    this.formChangeSub.unsubscribe();
  };

}