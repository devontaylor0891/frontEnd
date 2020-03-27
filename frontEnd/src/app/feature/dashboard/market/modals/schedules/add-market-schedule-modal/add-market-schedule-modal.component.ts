import { Component, OnInit, NgZone, ViewChild, ElementRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as cloneDeep from 'lodash/cloneDeep';

import { MarketDashboardService } from '../../../../market-dashboard.service';
import { ApiService } from '../../../../../../core/api.service';

@Component({
  selector: 'app-add-market-schedule-modal',
  templateUrl: './add-market-schedule-modal.component.html',
  styleUrls: ['./add-market-schedule-modal.component.scss']
})
export class AddMarketScheduleModalComponent implements OnInit {

  market: any;
  marketSub: Subscription;
  locations: any;
  locationsSub: Subscription;

  radioSelected = true;

  scheduleSubmitObject: any;

  @ViewChild('date') public datePickerRef: ElementRef;

  @Output() itemCreated = new EventEmitter<any>();

  form: FormGroup; // this will hold our form data in a js object

  type: string;
  hasDelFee = false;
  hasFeeWaiver = false;
  repeat = 0;
  repeatEndDate: string;
  numberOfWeeks: number;
  repeatEndChosen = false;
  streetNumber: string;
  route: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  lat: number;
  lng: number;
  submitObject: any;
  repeatSubmitArray: any = [];
  submitting = false;
  isRepeat = false;
  noAddress = false;

  // properties to hold dates chosen, used in build methods
  schedDay: number; // default to dateMoment day
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
  datesArray: Array<any> = []; // to hold dates if repeat is selected
  deadlineCalcHours: number;

  // DATE/TIME PICKER SETTINGS
  date: any = new Date();
  year: any = this.date.getFullYear();
  month: any = this.date.getMonth();
  day: any = this.date.getDate();
  public DateMomentMin: any = new Date(new Date().setDate(new Date().getDate() + 1)); // set minimum date as tomorrow
  public repeatEndDateMomentMin: any = new Date(new Date().setDate(new Date().getDate() + 8));
  public repeatEndDateMomentMax: any = new Date(new Date().setMonth(new Date().getMonth() + 3));
  public dateMoment: any = new Date(new Date().setDate(new Date().getDate() + 1)); // somehow this works!
  public dateMoments: any; // throws error if initialized with a date
  public startTimeMoment: any = new Date(0, 0, 0, 12, 0, 0, 0); // default start time is noon
  public endTimeMoment: any = new Date(0, 0, 0, 13, 0, 0, 0); // default end time is 1pm
  public endTimeMin: any = new Date(0, 0, 0, 13, 0, 0, 0);
  public deadlineDateMoment: any = new Date(); // default is now because date is tomorrow, just for ease of coding
  public deadlineTimeMoment: any = new Date(0, 0, 0, 0, 0, 0, 0); // defaults to 3 hours before start time
  public deadlineDateTime: any = new Date(
    this.dateMoment.getFullYear(),
    this.dateMoment.getMonth(),
    this.dateMoment.getDate(),
    0, 0, 0, 0);
  public deadlineDateTimeMin: any = new Date();
  public deadlineDateTimeMax: any = this.dateMoment;
  dateChosen = false;

  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private dashboardService: MarketDashboardService,
              private formBuild: FormBuilder,
              public activeModal: NgbActiveModal,
              private ngZone: NgZone,
              private apiService: ApiService,
              private cdRef: ChangeDetectorRef) {

    this.buildBlankSubmitObject();

    this.form = formBuild.group({
      'id': [2],
      'type': ['', Validators.required],
      'description': ['', Validators.required],
      'date': [this.dateMoment],
      'dates': [this.dateMoments],
      'startTime': [this.startTimeMoment],
      'endTime': [this.endTimeMoment],
      'repeat': [this.repeat],
      'deadlineCalcHours': [12],
      'deadlineDateTime': [this.deadlineDateTime],
      'deadlineDate': [this.deadlineDateMoment],
      'deadlineTime': [this.deadlineTimeMoment],
      'hasFee': [false],
      'fee': [0.00],
      'hasWaiver': [false],
      'feeWaiver': [0.00],
      'latitude': [null, Validators.required],
      'longitude': [null, Validators.required],
      'city': ['', Validators.required],
      'address': [''],
      'province': ['', Validators.required]
    });

  }

  ngOnInit() {

    this.marketSub = this.dashboardService.getMarket()
      .subscribe(
        result => {
          console.log('market recd: ', result);
          this.market = result;
        }
      );

    this.locationsSub = this.dashboardService.getLocations()
      .subscribe(
        result => {
          console.log('locations recd: ', result);
          this.locations = result;
        }
      );

    this.scheduleSubmitObject = {
      type: 'market',
      description: '',
      startDateTime: '',
      endDateTime: '',
      readableDate: '',
      hasFee: false,
      hasWaiver: false,
      latitude: null,
      longitude: null,
      city: '',
      province: '',
      orderDeadline: '',
      address: '',
      fee: 0,
      feeWaiver: 0,
      marketId: this.market.marketId
    };

    // console.log('dateMoment (tomorrow at this time): ', this.dateMoment);
    // console.log('startTime (noon): ', this.startTimeMoment);
    // console.log('endTime (1pm): ', this.endTimeMoment);
    // console.log('deadline (12am tomorrow): ', this.deadlineDateTime);
    // console.log('minimum date (tomorrow): ', this.DateMomentMin);
    // console.log('max deadline (same as dateMoment): ', this.deadlineDateTimeMax);

    this.setSchedDefaultValues();

    this.onChanges();

    // console.log('form value: ', this.form.value);

  };

  onChanges() {};

  onSubmit() {
    this.submitting = true;
    this.buildSubmitObject();
    if (!this.repeat) { // if only one, post it to the API
      this.repeatSubmitArray[0] = this.submitObject;
      this.apiService.postMultiSchedule(this.repeatSubmitArray)
          .subscribe(
            result => this.handleSubmitSuccess(result),
            err => this.handleSubmitError(err)
          );
      // this.apiService.postSchedule(this.submitObject)
      // .subscribe(
      //   result => this.handleSubmitSuccess(result),
      //   err => this.handleSubmitError(err)
      // );
    } else { // make copies of the submitObject, change date, send array to API
      this.buildRepeatSubmitArray();
    }

  };

  handleSubmitSuccess(result) {
    console.log('new multischeds result: ', result);
    this.itemCreated.emit(result);
    this.buildBlankSubmitObject();
    this.submitting = false;
    this.repeatSubmitArray = [];
    this.activeModal.close();
  };

  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
  };

  // for repeat dates
  // not used
  // buildRepeatSubmitObject(i, deadlineHours) {
  //   this.clearDatesFromSubmitObject();
  //   this.submitObject.producerId = this.producer.id;
  //   this.submitObject.type = this.form.value.type;
  //   this.submitObject.description = this.form.value.description;
  //   this.submitObject.startDateTime = this.buildDate(this.datesArray[i].schedYear, this.datesArray[i].schedMonth, this.datesArray[i].schedDay, this.schedStartHour, this.schedStartMinute);
  //   this.submitObject.endDateTime = this.buildDate(this.datesArray[i].schedYear, this.datesArray[i].schedMonth, this.datesArray[i].schedDay, this.schedEndHour, this.schedEndMinute)
  //   this.submitObject.hasFee = this.form.value.hasFee;
  //   this.submitObject.hasWaiver = this.form.value.hasWaiver;
  //   this.submitObject.orderDeadline = this.buildRepeatOrderDeadline(this.submitObject.startDateTime, deadlineHours);
  //   this.submitObject.fee = this.form.value.fee;
  //   this.submitObject.feeWaiver = this.form.value.feeWaiver;
  //   this.submitObject.orderList = [];
  // };

  buildRepeatSubmitArray() {
    this.repeatSubmitArray[0] = this.submitObject;
    let tempSubmitObj;
    for (let i = 1; i < this.numberOfWeeks; i++) {
      tempSubmitObj = cloneDeep(this.submitObject);
      // change start/end date in submit object
      tempSubmitObj.startDateTime = new Date(Date.parse(this.submitObject.startDateTime) + (6.048e+8 * i)).toISOString();
      tempSubmitObj.endDateTime = new Date((Date.parse(this.submitObject.endDateTime)) + (6.048e+8 * i)).toISOString();
      tempSubmitObj.orderDeadline = new Date(Date.parse(this.submitObject.orderDeadline) + (6.048e+8 * i)).toISOString();
      console.log('human readable: ', this.monthNames[new Date(tempSubmitObj.startDateTime).getMonth()] + ' ' + new Date(tempSubmitObj.startDateTime).getDate());
      tempSubmitObj.readableDate = this.monthNames[new Date(tempSubmitObj.startDateTime).getMonth()] + ' ' + new Date(tempSubmitObj.startDateTime).getDate();

      // push into array
      this.repeatSubmitArray.push(tempSubmitObj);
      if (i === this.numberOfWeeks - 1) {
        this.apiService.postMultiSchedule(this.repeatSubmitArray)
          .subscribe(
            result => this.handleSubmitSuccess(result),
            err => this.handleSubmitError(err)
          );
      }
    }
  };

  buildBlankSubmitObject() {
    this.submitObject = {
      'id': null,
      'producerId': null,
      'producerName': '',
      'productList': [],
      'type': '',
      'description': '',
      'startDateTime': '',
      'endDateTime': '',
      'readableDate': '',
      'hasFee': null,
      'hasWaiver': null,
      'latitude': null,
      'longitude': null,
      'city': '',
      'province': '',
      'orderDeadline': '',
      'address': '',
      'fee': null,
      'feeWaiver': null,
      'orderList': [],
      'userId': null
    };
  }

  // clearDatesFromSubmitObject() {
  //   this.submitObject.startDateTime = '';
  //   this.submitObject.endDateTime = '';
  // }

  buildSubmitObject() {
    // this.submitObject.id = this.generateRandomId(); // remove for production as API should do this for us
    this.submitObject.marketId = this.market.id;
    this.submitObject.marketName = this.market.name;
    this.submitObject.type = this.form.value.type;
    this.submitObject.description = this.form.value.description;
    // console.log('start date values: ', this.schedYear, this.schedMonth, this.schedDay, this.schedStartHour, this.schedStartMinute);
    // console.log('start date values: ', this.schedYear, this.schedMonth, this.schedDay, this.schedEndHour, this.schedEndMinute);
    this.submitObject.startDateTime = this.buildDate(this.schedYear, this.schedMonth, this.schedDay, this.schedStartHour, this.schedStartMinute);
    this.submitObject.endDateTime = this.buildDate(this.schedYear, this.schedMonth, this.schedDay, this.schedEndHour, this.schedEndMinute)
    console.log('human readable: ', this.monthNames[new Date(this.submitObject.startDateTime).getMonth()] + ' ' + new Date(this.submitObject.startDateTime).getDate());
    this.submitObject.readableDate = this.monthNames[new Date(this.submitObject.startDateTime).getMonth()] + ' ' + new Date(this.submitObject.startDateTime).getDate();
    this.submitObject.hasFee = this.form.value.hasFee;
    this.submitObject.hasWaiver = this.form.value.hasWaiver;
    this.submitObject.orderDeadline = this.deadlineDateTime;
    // this.submitObject.orderDeadline = this.buildOrderDeadline(this.deadlineDateYear, this.deadlineDateMonth, this.deadlineDateDay, this.deadlineHour, this.deadlineMinute);
    this.submitObject.fee = this.form.value.fee;
    this.submitObject.feeWaiver = this.form.value.feeWaiver;
    this.submitObject.orderList = [];
    this.submitObject.userId = this.market.id;
    // console.log('submit obj built: ', this.submitObject);
  };

  onChooseDate() {
    console.log('new dateMoment: ', this.dateMoment);
    // set the scheduled day, month, year
    this.schedDay = this.dateMoment.getDate();
    this.schedMonth = this.dateMoment.getMonth();
    this.schedYear = this.dateMoment.getFullYear();

    // const d = new Date();
    // document.write("The current month is " + monthNames[d.getMonth()]);
    // make date human readable
    console.log('human readable: ', this.monthNames[this.dateMoment.getMonth()] + ' ' + this.dateMoment.getDate());
    // use those to set the order deadline day, month, year
    this.setDeadlineDate();
    this.setRepeatEndDateMin();
    this.setRepeatEndDateMax();
  };

  setDeadlineDate() {
    this.deadlineDateTime.setFullYear(this.schedYear);
    this.deadlineDateTime.setMonth(this.schedMonth);
    this.deadlineDateTime.setDate(this.schedDay);
    this.deadlineDateTime = new Date(this.deadlineDateTime);
    // console.log('new deadline: ', this.deadlineDateTime);
    this.deadlineDateTimeMax.setFullYear(this.schedYear);
    this.deadlineDateTimeMax.setMonth(this.schedMonth);
    this.deadlineDateTimeMax.setDate(this.schedDay);
    // console.log('new deadline max: ', this.deadlineDateTimeMax);
    this.dateChosen = true;
  };

  setRepeatEndDateMin() {
    console.log('setrepeat dateMomentMin: ', this.DateMomentMin);
    console.log('plus 8: ', this.dateMoment.getDate() + 8);
    // this.repeatEndDateMomentMin = new Date(new Date().setDate(this.dateMoment.getDate() + 7));
    this.repeatEndDateMomentMin = new Date(this.schedYear, this.schedMonth, this.schedDay + 7);
    console.log('new repeat end min: ', this.repeatEndDateMomentMin);
  };

  setRepeatEndDateMax() {
    this.repeatEndDateMomentMax = new Date(this.schedYear, this.schedMonth + 3, this.schedDay);
    console.log('new repeat end max: ', this.repeatEndDateMomentMax);
  };

  onChooseMultipleDates(value) {
    const valueArray = this.form.controls['dates'].value;
    // for each object in valueArray, get its year, month, and day separated
    for (let i = 0; i < valueArray.length; i++) {
      const date = {
        schedDay: null,
        schedMonth: null,
        schedYear: null,
        humanReadable: null
      };
      date.schedDay = valueArray[i].getDate();
      date.schedMonth = valueArray[i].getMonth();
      date.schedYear = valueArray[i].getFullYear();
      date.humanReadable = this.monthNames[valueArray[i].getMonth()] + ' ' + valueArray[i].getDate();
      this.datesArray.push(date);
    };
    console.log('dateArray: ', this.datesArray);
  };

  onChooseStartTime() {
    // console.log('starttime chosen: ', this.startTimeMoment);
    this.schedStartHour = this.startTimeMoment.getHours();
    this.schedStartMinute = this.startTimeMoment.getMinutes();
    // create new deadline date object to update the view
    this.deadlineDateTime = new Date(
      this.deadlineDateTime.getFullYear(),
      this.deadlineDateTime.getMonth(),
      this.deadlineDateTime.getDate(),
      this.schedStartHour - 3,
      this.schedStartMinute,
      0
    );
    // console.log('new deadline datetime: ', this.deadlineDateTime);
    this.deadlineDateTimeMax.setHours(this.schedStartHour);
    this.deadlineDateTimeMax.setMinutes(this.schedStartMinute);
    // console.log('new deadline max: ', this.deadlineDateTimeMax);
    // set end time and end time min
    this.endTimeMoment = new Date(0, 0, 0, this.schedStartHour + 1, this.schedStartMinute, 0, 0);
    this.onChooseEndTime();
    this.endTimeMin = new Date(0, 0, 0, this.schedStartHour, this.schedStartMinute + 15, 0, 0);
  };

  buildDate(year, month, day, hour, minute) {
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
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

  onChooseRepeatEndDateYes() {
    console.log('end date: ', this.repeatEndDate);
    console.log('this.repeat value: ', this.repeat);
  };

  onChooseRepeatEndDateNo() {
    console.log('end date: ', this.repeatEndDate);
    console.log('this.repeat value: ', this.repeat);
    this.repeatEndChosen = false;
  };

  onChooseRepeatEndDate() {
    const dateMilli = new Date(this.dateMoment);
    const repeatEndMilli = new Date(this.repeatEndDate);
    const difference = repeatEndMilli.getTime() - dateMilli.getTime();
    // figure out how many instances to create by getting the days between end and start, dividing by 7
    console.log('dateMomement: ', dateMilli.getTime());
    console.log('endrepeat moment: ', repeatEndMilli.getTime());
    this.numberOfWeeks = Math.floor(difference / 604800000) + 1; // add 1 to account for last instance
    console.log('number of weeks: ', this.numberOfWeeks);
    console.log('end date: ', this.repeatEndDate);
    console.log('this.repeat value: ', this.repeat);
    this.repeatEndChosen = true;
  };

  buildRepeatOrderDeadline(date, deadlineHours) {
    const originalDeadline = new Date(date);
    const newDeadline = new Date(originalDeadline.setHours(originalDeadline.getHours() - deadlineHours));
    return newDeadline.toISOString();
  };

  onCancel() {
    this.activeModal.close();
  };

  setSchedDefaultValues() {
    this.schedYear = this.dateMoment.getFullYear();
    this.schedMonth = this.dateMoment.getMonth();
    this.schedDay = this.dateMoment.getDate();
    this.schedStartHour = this.startTimeMoment.getHours();
    this.schedStartMinute = this.startTimeMoment.getMinutes();
    this.schedEndHour = this.endTimeMoment.getHours();
    this.schedEndMinute = this.endTimeMoment.getMinutes();
  };

  onSelectLocation(index) {
    console.log('index of location selected: ', index);
  };

}

