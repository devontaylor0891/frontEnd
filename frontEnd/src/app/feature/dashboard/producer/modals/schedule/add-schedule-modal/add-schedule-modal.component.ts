import { Component, OnInit, NgZone, ViewChild, ElementRef, Output, EventEmitter, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// import { } from 'googlemaps';
import { google } from '@google/maps';
import { MapsAPILoader } from '@agm/core';
declare var google: any;

import { Subscription } from 'rxjs/Subscription';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as cloneDeep from 'lodash/cloneDeep';
import * as pick from 'lodash/pick';

import { ProducerDashboardService } from '../../../../producer-dashboard.service';
import { ApiService } from '../../../../../../core/api.service';

@Component({
  selector: 'app-add-schedule-modal',
  templateUrl: './add-schedule-modal.component.html',
  styleUrls: ['./add-schedule-modal.component.scss']
})
export class AddScheduleModalComponent implements OnInit, OnDestroy {

  submitting = false;
  producer: any;
  getProducerSub: Subscription;

  typeChosen = false;
  isDelivery = false;
  isMarket = false;
  isOnFarm = false;
  isOffFarm = false;
  locationChosen = false;
  hasDelFee = false;
  hasFeeWaiver = false;
  noAddress = false;

  scheduleForm: FormGroup;
  deliveryForm: FormGroup;
  marketForm: FormGroup;
  onFarmForm: FormGroup;
  offFarmForm: FormGroup;

  marketSearchResults = [];
  uniqueMarketArray = [];
  tempMarkets = [];
  ownMarket = false;
  showMarketLocations = false;
  marketLocationArray = [];
  uniqueLocationArray = [];
  locationScheduleArray = [];
  chosenLocationScheduleArray = []

  @Output() itemCreated = new EventEmitter<any>();  

  // LOCATION DETAILS
  @ViewChild('search') public searchElementRef: ElementRef;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  streetNumber: string;
  route: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  lat: number;
  lng: number;

  // DATE DETAILS
  @ViewChild('date') public datePickerRef: ElementRef;
  date: any = new Date();
  year: any = this.date.getFullYear();
  month: any = this.date.getMonth();
  day: any = this.date.getDate();
  public DateMomentMin: any = new Date(new Date().setDate(new Date().getDate() + 1)); // set minimum date as tomorrow
  public repeatEndDateMomentMin: any = new Date(new Date().setDate(new Date().getDate() + 8));
  public repeatEndDateMomentMax: any = new Date(new Date().setMonth(new Date().getMonth() + 3));
  public dateMoment: any = new Date(new Date().setDate(new Date().getDate() + 1)); // somehow this works!
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
  deadlineCalcHours: number;
  



  // old stuff ***********************************************************************

  form: FormGroup;

  type: string;
  
  repeat = 0;
  repeatEndDate: string;
  numberOfWeeks: number;
  repeatEndChosen = false;
 
  submitObject: any;
  repeatSubmitArray: any = [];
  
  isRepeat = false;

  constructor(private dashboardService: ProducerDashboardService,
              private formBuild: FormBuilder,
              public activeModal: NgbActiveModal,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private apiService: ApiService,
              private cdRef: ChangeDetectorRef) {

    this.buildBlankSubmitObject();

    this.form = formBuild.group({
      'type': ['', Validators.required],
      'description': ['', Validators.required],
      'date': [this.dateMoment],
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

  };

  ngOnInit() {

    // once we have the producer, initialize form
    this.getProducerSub = this.dashboardService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
          console.log('producer recd: ', this.producer);
          this.latitude = this.producer.latitude;
          this.longitude = this.producer.longitude;
          this.scheduleForm = new FormGroup({
            producerId: new FormControl(this.producer.producerId, [Validators.required]),
            type: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            date: new FormControl(this.dateMoment),
            startTime: new FormControl(this.startTimeMoment),
            endTime: new FormControl(this.endTimeMoment),
            repeat: new FormControl(this.repeat),
            deadlineCalcHours: new FormControl(12),
            deadlineDateTime: new FormControl(this.deadlineDateTime),
            deadlineDate: new FormControl(this.deadlineDateMoment),
            deadlineTime: new FormControl(this.deadlineTimeMoment),
            readableDate: new FormControl('', [Validators.required]),
            hasFee: new FormControl(false, [Validators.required]),
            hasWaiver: new FormControl(false, [Validators.required]),
            latitude: new FormControl('', [Validators.required]),
            longitude: new FormControl('', [Validators.required]),
            city: new FormControl('', [Validators.required]),
            province: new FormControl('', [Validators.required]),
            orderDeadline: new FormControl('', [Validators.required]),
            address: new FormControl(''),
            fee: new FormControl(0, [Validators.required]),
            feeWaiver: new FormControl(0, [Validators.required]),
            userId: new FormControl(this.producer.id, [Validators.required])
          });
        }
      );

    this.setSchedDefaultValues();

    this.onChanges();

  };

  onChooseScheduleType(value) {
    this.clearChosenSchedType();
    this.typeChosen = true;
    this.initializeSearch();
    if (value === 'Door-to-door Delivery') {
      this.isDelivery = true;
      this.scheduleForm.patchValue({
        type: 'Door-to-door Delivery'
      });
    } else if (value === 'Market Pickup') {
      this.isMarket = true;
      this.scheduleForm.patchValue({
        type: 'Market Pickup'
      });    
    } else if (value === 'On-farm Pickup') {
      this.isOnFarm = true;
      this.scheduleForm.patchValue({
        type: 'On-farm Pickup',
        latitude: this.producer.latitude,
        longitude: this.producer.longitude,
        address: this.producer.address,
        city: this.producer.location,
        province: this.producer.province
      });    
    } else {
      this.isOffFarm = true;
      this.scheduleForm.patchValue({
        type: 'Off-farm Pickup'
      });    
    };
    console.log('form value: ', this.scheduleForm.value);
  };

  clearChosenSchedType() {
    this.typeChosen = false;
    this.isDelivery = false;
    this.isMarket = false;
    this.isOnFarm = false;
    this.isOffFarm = false;
    this.locationChosen = false;
  };

  initializeSearch() {
    // set google maps defaults
    this.zoom = 4;
    // create search FormControl
    this.searchControl = new FormControl();
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      // console.log('google.maps: ', google.maps);
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['geocode']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // console.log('place: ', place);
          this.fillAddress(place);

          // set latitude, longitude and zoom
          // this.latitude = place.geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          // this.zoom = 12;
        });
      });
    });
  }

  private fillAddress(place) {
    console.log('place: ', place.address_components);
    this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.scheduleForm.patchValue({
      latitude: this.lat,
      longitude: this.lng
    });
    // console.log('lat fn: ', place.geometry.location.lat());
    this.locationChosen = true;
    if (this.streetNumber && this.route) {
      this.noAddress = false;
      // this.submitObject.address = this.streetNumber + ' ' + this.route;
    };
    if (this.route && !this.streetNumber) {
      this.noAddress = true;
    };
    this.form.controls['city'].setValue(this.city);
    this.form.controls['province'].setValue(this.province);
    // this.submitObject.city = this.city;
    // this.submitObject.province = this.province;
    // this.submitObject.latitude = this.lat;
    // this.submitObject.longitude = this.lng;
    if (this.isMarket) {
      const locationsSearchOptions = {
        lat: this.lat,
        lng: this.lng
      };
      this.apiService.getMarketsByLocation(locationsSearchOptions)
        .subscribe(
          result => {
            console.log('results from get markets by location: ', result);
            this.marketSearchResults = result;
            if (this.marketSearchResults.length === 0) {
              this.ownMarket = true;
            } else {
              this.buildUniqueMarketArray();
            };
          }
        );
    };
  };

  private clearAddress() {
    this.submitObject.address = '';
    this.submitObject.city = '';
    this.submitObject.province = '';
    this.submitObject.latitude = null;
    this.submitObject.longitude = null;
    this.streetNumber = '';
    this.route = '';
    this.city = '';
    this.province = '';
    this.postalCode = '';
    this.country = '';
    this.lat = null;
    this.lng = null;
  };

  private parseAddressComponents(components) {
    for (let i = 0; i < components.length; i++) {
      const types = components[i].types;
      for (let j = 0; j < types.length; j++) {
        const result = types[j];
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

  buildUniqueMarketArray() {
    const result = [];
    const map = new Map();
    for (const item of this.marketSearchResults) {
        if (!map.has(item.marketId)) {
            map.set(item.marketId, true);    // set any value to Map
            result.push({
                marketId: item.marketId,
                marketName: item.marketName
            });
        }
    }
    console.log('result: ', result);
    this.uniqueMarketArray = result;
  };

  onSelectMarket(value) {
    this.marketLocationArray = [];
    // console.log('value: ', value);
    if (value === 'ownMarket') { // if ownMarket, go to regular setup
      this.ownMarket = true;
    } else { // else, build array with matching value
      this.ownMarket = false;
      this.showMarketLocations = true;
      this.buildMarketLocationArray(value);
    }
  };

  buildMarketLocationArray(id) {
    for (let i = 0; i < this.marketSearchResults.length; i++) {
      if (this.marketSearchResults[i].marketId == id) {
        this.marketLocationArray.push(this.marketSearchResults[i]);
      }
    }
    // console.log('marketLocationArray: ', this.marketLocationArray);
    this.uniqueLocationArray = this.marketLocationArray.filter ((e, i) => this.marketLocationArray.findIndex(a => a.locationId === e.locationId) === i);
    console.log('uniques locations: ', this.uniqueLocationArray);
    // if marketLocation array is only 1 loc, fill form automatically, else give option

  };

  onChooseMarketLocation(locationId) {
    this.locationScheduleArray = [];
    this.chosenLocationScheduleArray = [];
    console.log('loczation chosen: ', locationId);
    this.marketLocationArray.forEach(market => {
      if (market.locationId === locationId) {
        this.locationScheduleArray.push(market);
      }
    });
    // sort by start date
    this.locationScheduleArray = this.locationScheduleArray.slice().sort((a, b) => b.startDateTime - a.startDateTime)
    console.log('loc sched array: ', this.locationScheduleArray);
  };

  setCheckbox(event: any) {
    console.log('event.target: ', this.chosenLocationScheduleArray.indexOf(event.target.id));
    this.chosenLocationScheduleArray.indexOf(event.target.id) === -1 ? this.chosenLocationScheduleArray.push(event.target.id) : this.chosenLocationScheduleArray.splice(this.chosenLocationScheduleArray.indexOf(event.target.id), 1);
    console.log('chosenlocationschedarray: ', this.chosenLocationScheduleArray);
  };

  onSubmit() {
    console.log('form value: ', this.scheduleForm.value);
  };

// old stuff

  onChanges() {
    this.form.get('type').valueChanges.subscribe(val => {
      if (val === 'On-farm Pickup') {
        // console.log('on farm pickup selected, form value before: ', this.form.value);
        this.submitObject.latitude = this.latitude;
        this.submitObject.longitude = this.longitude;
        this.submitObject.address = this.producer.address;
        this.submitObject.city = this.producer.location;
        this.submitObject.province = this.producer.province;
        this.submitObject.producerName = this.producer.name;
        this.form.patchValue({
          latitude: this.latitude,
          longitude: this.longitude,
          address: this.producer.address,
          city: this.producer.location,
          province: this.producer.province
        });
        // console.log('on farm pickup selected, form value after: ', this.form.value);
      }
    });
    this.form.get('hasFee').valueChanges.subscribe(val => {
      // console.log('has fee changed: ', this.form.value);
    });
    this.form.get('hasWaiver').valueChanges.subscribe(val => {
      // console.log('has delfee changed: ', this.form.value);
    });
  };

  // onSubmit() {
  //   this.submitting = true;
  //   this.buildSubmitObject();
  //   if (!this.repeat) { // if only one, post it to the API
  //     this.repeatSubmitArray[0] = this.submitObject;
  //     console.log('this.submitObject: ', this.submitObject);
  //     // this.apiService.postMultiSchedule(this.repeatSubmitArray)
  //     //     .subscribe(
  //     //       result => this.handleSubmitSuccess(result),
  //     //       err => this.handleSubmitError(err)
  //     //     );
  //     // this.apiService.postSchedule(this.submitObject)
  //     // .subscribe(
  //     //   result => this.handleSubmitSuccess(result),
  //     //   err => this.handleSubmitError(err)
  //     // );
  //   } else { // make copies of the submitObject, change date, send array to API
  //     this.buildRepeatSubmitArray();
  //   }

  // };

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
        console.log('multi submit: ', this.repeatSubmitArray);
        // this.apiService.postMultiSchedule(this.repeatSubmitArray)
        //   .subscribe(
        //     result => this.handleSubmitSuccess(result),
        //     err => this.handleSubmitError(err)
        //   );
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

  buildSubmitObject() {
    // this.submitObject.id = this.generateRandomId(); // remove for production as API should do this for us
    this.submitObject.producerId = this.producer.producerId;
    this.submitObject.producerName = this.producer.name;
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
    this.submitObject.userId = this.producer.id;
    // console.log('submit obj built: ', this.submitObject);
  };

  // private fillAddress(place) {
  //   console.log('place: ', place.address_components);
  //   this.clearAddress();
  //   this.parseAddressComponents(place.address_components);
  //   this.lat = place.geometry.location.lat();
  //   this.lng = place.geometry.location.lng();
  //   this.form.value.latitude = this.lat;
  //   this.form.value.longitude = this.lng;
  //   this.form.patchValue({
  //     latitude: this.lat,
  //     longitude: this.lng
  //   });
  //   // console.log('lat fn: ', place.geometry.location.lat());
  //   if (this.streetNumber && this.route) {
  //     this.noAddress = false;
  //     this.form.value.address = this.streetNumber + ' ' + this.route;
  //     this.submitObject.address = this.streetNumber + ' ' + this.route;
  //   };
  //   if (this.route && !this.streetNumber) {
  //     // console.log('no streetnumber');
  //     this.noAddress = true;
  //   };
  //   // this.form.value.city = this.city;
  //   this.form.controls['city'].setValue(this.city);
  //   this.submitObject.city = this.city; // still not working
  //   // this.form.value.province = this.province;
  //   this.form.controls['province'].setValue(this.province);
  //   this.submitObject.province = this.province;
  //   // this.form.value.latitude = this.lat;
  //   // this.form.value.longitude = this.lng;
  //   this.submitObject.latitude = this.lat;
  //   this.submitObject.longitude = this.lng;
  //   if (this.isMarket) {
  //     const locationsSearchOptions = {
  //       lat: this.lat,
  //       lng: this.lng
  //     };
  //     this.apiService.getMarketsByLocation(locationsSearchOptions)
  //       .subscribe(
  //         result => {
  //           console.log('results from get markets by location: ', result);
  //           this.marketSearchResults = result;
  //           if (this.marketSearchResults.length === 0) {
  //             this.ownMarket = true;
  //           } else {
  //             this.buildUniqueMarketArray();
  //           };
  //         }
  //       );
  //   };
  // };

  

  // private clearAddress() {
  //   this.submitObject.address = '';
  //   this.submitObject.city = '';
  //   this.submitObject.province = '';
  //   this.submitObject.latitude = null;
  //   this.submitObject.longitude = null;
  //   this.streetNumber = '';
  //   this.route = '';
  //   this.city = '';
  //   this.province = '';
  //   this.postalCode = '';
  //   this.country = '';
  //   this.lat = null;
  //   this.lng = null;
  // };

  // private parseAddressComponents(components) {
  //   for (let i = 0; i < components.length; i++) {
  //     const types = components[i].types;
  //     for (let j = 0; j < types.length; j++) {
  //       const result = types[j];
  //       if (result === 'street_number') {
  //         this.streetNumber = components[i].short_name;
  //       }
  //       if (result === 'route') {
  //         this.route = components[i].short_name;
  //       }
  //       if (result === 'locality' || result === 'sublocality') {
  //         this.city = components[i].short_name;
  //       }
  //       if (result === 'administrative_area_level_1') {
  //         this.province = components[i].short_name;
  //       }
  //       if (result === 'postal_code') {
  //         this.postalCode = components[i].short_name;
  //       }
  //       if (result === 'country') {
  //         this.country = components[i].short_name;
  //       }
  //     }
  //   }
  // };

  onChooseDate() {
    console.log('new dateMoment: ', this.dateMoment);
    // set the scheduled day, month, year
    this.schedDay = this.dateMoment.getDate();
    this.schedMonth = this.dateMoment.getMonth();
    this.schedYear = this.dateMoment.getFullYear();
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

  onChooseType(targetValue) {
    console.log('select chosen: ', targetValue);
    if (targetValue === 'Market Pickup') {
      this.isMarket = true;
    } else {
      this.isMarket = false;
    }
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

  ngOnDestroy() {
    if (this.getProducerSub) {
      this.getProducerSub.unsubscribe();
    };
  };

}
