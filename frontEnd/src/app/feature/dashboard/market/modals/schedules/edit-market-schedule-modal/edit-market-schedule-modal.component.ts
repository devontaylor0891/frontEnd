import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../../../../../core/api.service';

@Component({
  selector: 'app-edit-market-schedule-modal',
  templateUrl: './edit-market-schedule-modal.component.html',
  styleUrls: ['./edit-market-schedule-modal.component.scss']
})
export class EditMarketScheduleModalComponent implements OnInit, OnDestroy {

  @Input() record: any;
  producerArray = [];
  scheduleForm: FormGroup;
  formChangeSub: Subscription;
  submitScheduleSub: Subscription;
  submitting = false;
  submitObject: any;
  error: boolean;

  schedDay: number;
  schedMonth: number;
  schedYear: number;
  schedStartHour: number;
  schedStartMinute: number;
  schedEndHour: number;
  schedEndMinute: number;

  // DATE/TIME PICKER SETTINGS
  public moment: any = new Date();
  dateMoment: any = new Date();
  dateMin: any = new Date(new Date().setDate(new Date().getDate() + 1)); // must be 1 day in future
  startTimeMoment: any;
  endTimeMoment: any;
  endTimeMin: any;

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private formBuild: FormBuilder,
              private api: ApiService,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.getUniqueProducers();
    // console.log('this sched: ', this.record);
    // break out the dates/times from the incoming record so they can be used in the form
    this.breakUpDatesTimes();
    // build the form with the incoming record and the date/time defaults
    this.buildForm();
    console.log('edit sched record: ', this.record);
  }

  private setDateTimes() {
    this.dateMoment = new Date(this.schedYear, this.schedMonth, this.schedDay, 0, 0, 0, 0);
    this.startTimeMoment = new Date(0, 0, 0, this.schedStartHour, this.schedStartMinute, 0, 0);
    this.endTimeMoment = new Date(0, 0, 0, this.schedEndHour, this.schedEndMinute, 0, 0);
  };

  breakUpDatesTimes() {
    this.schedDay = new Date(this.record.startDateTime).getDate();
    this.schedMonth = new Date(this.record.startDateTime).getMonth();
    this.schedYear = new Date(this.record.startDateTime).getFullYear();
    this.schedStartHour = new Date(this.record.startDateTime).getHours();
    this.schedStartMinute = new Date(this.record.startDateTime).getMinutes();
    this.schedEndHour = new Date(this.record.endDateTime).getHours();
    this.schedEndMinute = new Date(this.record.endDateTime).getMinutes();
    // set those dates/times into the datepicker defaults
    this.setDateTimes();
  };

  private buildForm() {
    this.scheduleForm = this.formBuild.group({
      description: [this.record.description],
      date: [this.dateMoment, Validators.required],
      startTime: [this.startTimeMoment, Validators.required],
      endTime: [this.endTimeMoment, Validators.required]
    });

    // Subscribe to form value changes
    this.formChangeSub = this.scheduleForm
      .valueChanges
      .subscribe(data => this.onValueChanged());

    // console.log('form: ', this.scheduleForm);
  }

  onValueChanged() {};

  setSubmitObject() {
    // make it equal to the original record
    this.submitObject = this.record;
    // then add the fields from the form
    this.submitObject.description = this.scheduleForm.value.description;
    this.submitObject.endDateTime = this.buildEndDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedEndHour, this.schedEndMinute);
    this.submitObject.startDateTime = this.buildStartDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedStartHour, this.schedStartMinute);
    this.submitObject.readableDate = this.monthNames[new Date(this.submitObject.startDateTime).getMonth()] + ' ' + new Date(this.submitObject.startDateTime).getDate();
  };

  onSubmit() {
    this.submitting = true;
    this.setSubmitObject();
    console.log('submitted object: ', this.submitObject);
    this.submitScheduleSub = this.api
      .putMarketSchedule(this.record.id, this.submitObject)
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
    this.endTimeMin = new Date(
      0,
      0,
      0,
      this.startTimeMoment.getHours(),
      this.startTimeMoment.getMinutes() + 15,
      0
    );
    this.endTimeMoment = new Date(this.endTimeMin);
    this.onChooseEndTime();
    console.log('endtime: : ', this.endTimeMoment);
  };

  onChooseEndTime() {
    this.schedEndHour = this.endTimeMoment.getHours();
    this.schedEndMinute = this.endTimeMoment.getMinutes();
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

  getUniqueProducers() {
    this.producerArray = this.record.producerSchedules.filter((x, i, a) => a.indexOf(x) === i);
    console.log('producerArray: ', this.producerArray);
  };

  ngOnDestroy() {
    if (this.submitScheduleSub) {
      this.submitScheduleSub.unsubscribe();
    }
    this.formChangeSub.unsubscribe();
  };

}
