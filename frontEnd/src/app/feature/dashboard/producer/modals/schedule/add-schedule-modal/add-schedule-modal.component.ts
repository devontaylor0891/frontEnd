import { Component, OnInit, NgZone, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ScheduleModel } from '../../../../../../core/models/schedule.model';
import { ProducerModel } from '../../../../../../core/models/producer.model';

import { ProducerDashboardService } from '../../../../producer-dashboard.service';
import { ApiService } from '../../../../../../core/api.service';

@Component({
  selector: 'app-add-schedule-modal',
  templateUrl: './add-schedule-modal.component.html',
  styleUrls: ['./add-schedule-modal.component.scss']
})
export class AddScheduleModalComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search") public searchElementRef: ElementRef;
  @ViewChild("date") public datePickerRef: ElementRef;

  @Output() itemCreated = new EventEmitter<ScheduleModel>();

  form: FormGroup; // this will hold our form data in a js object

  producer: ProducerModel;
  type: string;
  hasDelFee: boolean = false;
  hasFeeWaiver: boolean = false;
  streetNumber: string;
  route: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  lat: number;
  lng: number;
  submitObject: ScheduleModel;
  submitting: boolean = false;
  isRepeat: boolean = false;

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
  public moment: any = new Date();
  // public minDate = this.moment.setDate(this.moment.getDate() + 1); // set minimum date as tomorrow
  public dateMoment: any = new Date(new Date().setDate(new Date().getDate() + 1)); // somehow this works!
  public dateMoments: any; // throws error if initialized with a date
  public startTimeMoment: any = new Date(0, 0, 0, 12, 0, 0, 0); // default start time is noon
  public endTimeMoment: any = new Date(0, 0, 0, 13, 0, 0, 0); // default end time is 1pm
  public deadlineDateMoment: any = new Date(); // default is now because date is tomorrow, just for ease of coding
  public deadlineTimeMoment: any = new Date(0, 0, 0, (this.startTimeMoment.getHours() - 6), this.startTimeMoment.getMinutes(), 0, 0); // defaults to 12 hours before start time

  constructor(private dashboardService: ProducerDashboardService,
              private formBuild: FormBuilder,
              private activeModal: NgbActiveModal,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private apiService: ApiService) {

    this.buildBlankSubmitObject();

    this.form = formBuild.group({
      'type': ['', Validators.required],
      'description': [''],
	    'repeat': [this.isRepeat, Validators.required],
      'date': [this.dateMoment],
	    'dates': [this.dateMoments],
      'startTime': [this.startTimeMoment, Validators.required],
      'endTime': [this.endTimeMoment, Validators.required],
      'deadlineCalcHours': [12],
      'deadlineDate': [this.deadlineDateMoment],
      'deadlineTime': [this.deadlineTimeMoment],
      'hasFee': [false, Validators.required],
      'fee': [0],
      'hasWaiver': [false, Validators.required],
      'feeWaiver': [0],
      'latitude': [null],
      'longitude': [null],
      'city': ['', Validators.required],
      'address': [''],
      'province': ['', Validators.required]
    });

  }

  onSubmit() {
    this.submitting = true;
    if (this.form.value.type === 'On-farm Pickup') {
      this.submitObject.latitude = this.latitude;
      this.submitObject.longitude = this.longitude;
      this.submitObject.address = this.producer.address;
      this.submitObject.city = this.producer.location;
      this.submitObject.province = this.producer.province;
    }
    if (!this.isRepeat) {
      this.buildSubmitObject();
      this.apiService.postSchedule(this.submitObject)
      .subscribe(
        result => {
          this.itemCreated.emit(result);
        }
      );
    } else {
      console.log('datesArray: ', this.datesArray);
      for (let i = 0; i < this.datesArray.length; i++) {
        this.buildRepeatSubmitObject(i, this.form.value.deadlineCalcHours);
        this.apiService.postSchedule(this.submitObject)
          .subscribe(
            result => {
              console.log('emitting: ', result);
              this.itemCreated.emit(result);
            }
          );
      }
    }
    
    this.buildBlankSubmitObject();
    this.submitting = false;
    this.activeModal.close();
  }

  // generateRandomId() {
  //   return Math.floor( Math.random() * 1000000 )
  // }

  // for repeat dates
  buildRepeatSubmitObject(i, deadlineHours) {
    this.clearDatesFromSubmitObject();
    // this.submitObject.id = this.generateRandomId(); // remove for production as API should do this for us
    this.submitObject.producerId = this.producer.id;
    this.submitObject.productList = this.producer.productList;
    this.submitObject.type = this.form.value.type;
    this.submitObject.description = this.form.value.description;
    this.submitObject.startDateTime = this.buildStartDateTime(this.datesArray[i].schedYear, this.datesArray[i].schedMonth, this.datesArray[i].schedDay, this.schedStartHour, this.schedStartMinute);
    this.submitObject.endDateTime = this.buildEndDateTime(this.datesArray[i].schedYear, this.datesArray[i].schedMonth, this.datesArray[i].schedDay, this.schedEndHour, this.schedEndMinute)
    this.submitObject.hasFee = this.form.value.hasFee;
    this.submitObject.hasWaiver = this.form.value.hasWaiver;
    this.submitObject.orderDeadline = this.buildRepeatOrderDeadline(this.submitObject.startDateTime, deadlineHours);
    this.submitObject.fee = this.form.value.fee;
    this.submitObject.feeWaiver = this.form.value.feeWaiver;
    this.submitObject.orderList = [];
  };

  buildBlankSubmitObject() {
    this.submitObject = {
      'id': null,
      'producerId': null,
      'productList': [],
      'type': '',
      'description': '',
      'startDateTime': '',
      'endDateTime': '',
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
      'orderList': []
    };
  }

  clearDatesFromSubmitObject() {
    this.submitObject.startDateTime = '';
    this.submitObject.endDateTime = '';
  }

  buildSubmitObject() {
    // this.submitObject.id = this.generateRandomId(); // remove for production as API should do this for us
    this.submitObject.producerId = this.producer.id;
    this.submitObject.productList = this.producer.productList;
    this.submitObject.type = this.form.value.type;
    this.submitObject.description = this.form.value.description;
    this.submitObject.startDateTime = this.buildStartDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedStartHour, this.schedStartMinute);
    this.submitObject.endDateTime = this.buildEndDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedEndHour, this.schedEndMinute)
    this.submitObject.hasFee = this.form.value.hasFee;
    this.submitObject.hasWaiver = this.form.value.hasWaiver;
    this.submitObject.orderDeadline = this.buildOrderDeadline(this.deadlineDateYear, this.deadlineDateMonth, this.deadlineDateDay, this.deadlineHour, this.deadlineMinute);
    this.submitObject.fee = this.form.value.fee;
    this.submitObject.feeWaiver = this.form.value.feeWaiver;
    this.submitObject.orderList = [];
  };

  ngOnInit() {

    // set google maps defaults
    this.zoom = 4;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    // this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["geocode"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          console.log('place: ', place);
          this.fillAddress(place);

          // set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
        });
      });
    });

    this.dashboardService.getProducer()
    .subscribe(
      result => {
        this.producer = result;
        this.latitude = this.producer.latitude;
        this.longitude = this.producer.longitude;
      }
    )

    // set the defaults for dates
    this.onChooseDate();
    // this.onChooseMultipleDates(new Date());
    this.onChooseStartTime();
    this.onChooseEndTime();
    this.onChooseDeadlineDate();
    this.onChooseDeadlineTime();
  }

  private fillAddress(place) {
    this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    if (this.streetNumber && this.route) {
      this.form.value.address = this.streetNumber + ' ' + this.route;
      this.submitObject.address = this.streetNumber + ' ' + this.route;
    };
    this.form.value.city = this.city;
    this.submitObject.city = this.city; // still not working
    this.form.value.province = this.province;
    this.submitObject.province = this.province;
    // this.form.value.latitude = this.lat;
    // this.form.value.longitude = this.lng;
    this.submitObject.latitude = this.lat;
    this.submitObject.longitude = this.lng;
  };

  private clearAddress() {
    this.streetNumber = '';
    this.route = '';
    this.city = '';
    this.province = '';
    this.postalCode = '';
    this.country = '';
    this.lat = null;
    this.lng = null;
  }

  private parseAddressComponents(components) {
    for (let i = 0; i < components.length; i++) {
      let types = components[i].types;
      for (let j = 0; j < types.length; j++) {
        let result = types[j];
        if (result === 'street_number') {
          this.streetNumber = components[i].short_name;
        }
        if (result === 'route') {
          this.route = components[i].short_name;
        }
        if (result === 'locality' || result === 'sublocality') {
          this.city = components[i].short_name;
        }
        if (result === 'administrative_area_level_1') {
          this.province = components[i].short_name;
        }
        if (result === 'postal_code') {
          this.postalCode = components[i].short_name;
        }
        if (result === 'country') {
          this.country = components[i].short_name;
        }
      }
    }
  };

  onChooseDate() {
    this.schedDay = this.dateMoment.getDate();
    this.schedMonth = this.dateMoment.getMonth();
    this.schedYear = this.dateMoment.getFullYear();
  };

  onChooseMultipleDates(value) {
    let valueArray = this.form.controls['dates'].value;
    // for each object in valueArray, get its year, month, and day separated
    for (let i = 0; i < valueArray.length; i++) {
      let date = {
        schedDay: null,
        schedMonth: null,
        schedYear: null
      };
      date.schedDay = valueArray[i].getDate();
      date.schedMonth = valueArray[i].getMonth();
      date.schedYear = valueArray[i].getFullYear();
      this.datesArray.push(date);
    };
  };

  onChooseStartTime() {
    this.schedStartHour = this.startTimeMoment.getHours();
    this.schedStartMinute = this.startTimeMoment.getMinutes();
  };

  onChooseEndTime() {
    this.schedEndHour = this.endTimeMoment.getHours();
    this.schedEndMinute = this.endTimeMoment.getMinutes();
  }

  onChooseDeadlineDate() {
    this.deadlineDateDay = this.deadlineDateMoment.getDate();
    this.deadlineDateMonth = this.deadlineDateMoment.getMonth();
    this.deadlineDateYear = this.deadlineDateMoment.getFullYear();
  };

  onChooseDeadlineTime() {
    this.deadlineHour = this.deadlineTimeMoment.getHours();
    this.deadlineMinute = this.deadlineTimeMoment.getMinutes();
  }

  buildStartDateTime(year, month, day, hour, minute) {
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
  }

  buildEndDateTime(year, month, day, hour, minute) {
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
  }

  buildOrderDeadline(year, month, day, hour, minute) {
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
  }

  buildRepeatOrderDeadline(date, deadlineHours) {
    let originalDeadline = new Date(date);
    let newDeadline = new Date(originalDeadline.setHours(originalDeadline.getHours() - deadlineHours));
    return newDeadline.toISOString();
  };

  onCancel() {
    this.activeModal.close();
  }

}