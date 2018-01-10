// import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// import { } from 'googlemaps';
// import { MapsAPILoader } from '@agm/core';

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { ScheduleModel } from '../../../../../../core/models/schedule.model';
// import { ProducerModel } from '../../../../../../core/models/producer.model';

// import { ProducerDashboardService } from '../../../../producer-dashboard.service';

// @Component({
//   selector: 'app-add-schedule-modal',
//   templateUrl: './add-schedule-modal.component.html',
//   styleUrls: ['./add-schedule-modal.component.scss']
// })
// export class AddScheduleModalComponent implements OnInit {

//   public latitude: number;
//   public longitude: number;
//   public searchControl: FormControl;
//   public zoom: number;

//   @ViewChild("search") public searchElementRef: ElementRef;
//   @ViewChild("input2") public datePickerRef: ElementRef;

//   form: FormGroup; //this will hold our form data in a js object
  
//   producer: ProducerModel;
//   type: string;
//   hasDelFee: boolean = false;
//   hasFeeWaiver: boolean = false;
//   streetNumber: string;
//   route: string;
//   city: string;
//   province: string;
//   postalCode: string;
//   country: string;
//   lat: number;
//   long: number;

//   public moment: Date = new Date();
  
//       public min = new Date(2017, 7, 9);
//       public max = new Date(2017, 8, 10);
//       public disabledDates = [new Date(2017, 7, 9),
//           new Date(2017, 7, 12), new Date(2017, 7, 15), new Date(2017, 7, 20)];
  
//       public pickerColor: string = '#0070ba';

//       public input1Moment: any;
//       public input2Moment: any = new Date();
//       public input3Moment: any = new Date(0, 0, 0, 12, 0, 0, 0);
//       public input4Moment: any = new Date(0, 0, 0, 13, 0, 0, 0);
//       public input5Moment: any;
//       public input6Moment: any;
//       public input7Moment: any;
//       public input8Moment: any;
//       public input9Moment: any;
//       public input10Moment: any;
//       public input11Moment: any;
//       public input12Moment: any;
//       public input13Moment: any;
//       public input14Moment: any = new Date(2017, 8, 10, 13, 30, 30);

//   constructor(private dashboardService: ProducerDashboardService,
//                 private formBuild: FormBuilder,
//                 private activeModal: NgbActiveModal,
//               private mapsAPILoader: MapsAPILoader,
//             private ngZone: NgZone) {

//     this.form = formBuild.group({
//       'id':[''],
//       'producerId': [null],
//       'productList': [''],
//       'type': ['', Validators.required],
//       'description': [''],
//       'startDateTime': ['', Validators.required],
//       'endDateTime': ['', Validators.required],
//       'hasFee': [false, Validators.required],
//       'fee': [0],
//       'hasWaiver': [false, Validators.required],
//       'feeWaiver': [0],
//       'latitude': [null],
//       'longitude': [null],
//       'city': ['', Validators.required],
//       'address': [''],
//       'province': ['', Validators.required],
//       'orderDeadline': ['', Validators.required],
//       'orderList': ['']
//     });

//   }

//   onSubmit() {
//     console.log(this.form.value);
//     this.form.value.id = this.generateRandomId(); // remove for production as API should do this for us
//     this.form.value.producerId = this.producer.id;
//     this.form.value.productList = this.producer.productList;
//     console.log(this.form.value);
//     // this.dashboardService.addNewSchedule(this.form.value);
//     this.activeModal.close();
//   }

//   generateRandomId() {
//     return Math.floor( Math.random() * 1000000 )
//   }


//   ngOnInit() {

//     //set google maps defaults
//     this.zoom = 4;
//     this.latitude = 39.8282;
//     this.longitude = -98.5795;

//     //create search FormControl
//     this.searchControl = new FormControl();

//     //set current position
//     // this.setCurrentPosition();

//     //load Places Autocomplete
//     this.mapsAPILoader.load().then(() => {
//       let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
//         types: ["geocode"]
//       });
//       autocomplete.addListener("place_changed", () => {
//         this.ngZone.run(() => {
//           //get the place result
//           let place: google.maps.places.PlaceResult = autocomplete.getPlace();

//           // verify result
//           if (place.geometry === undefined || place.geometry === null) {
//             return;
//           }

//           console.log('place: ', place);
//           this.fillAddress(place);

//           // set latitude, longitude and zoom
//           // this.latitude = place.geometry.location.lat();
//           // this.longitude = place.geometry.location.lng();
//           // this.zoom = 12;
//         });
//       });
//     });

//     this.dashboardService.getProducer()
//     .subscribe(
//       result => {
//         this.producer = result;
//       }
//     )
//   }

//   private fillAddress(place) {
//     this.clearAddress();
//     this.parseAddressComponents(place.address_components);
//     this.lat = place.geometry.location.lat();
//     this.long = place.geometry.location.lng();
//     this.form.value.address = this.streetNumber + ' ' + this.route;
//     this.form.value.city = this.city;
//     this.form.value.province = this.province;
//     this.form.value.latitude = this.lat;
//     this.form.value.longitude = this.long;
//     console.log('form.value: ', this.form.value);
//   };

//   private clearAddress() {
//     this.streetNumber = '';
//     this.route = '';
//     this.city = '';
//     this.province = '';
//     this.postalCode = '';
//     this.country = '';
//     this.lat = null;
//     this.long = null;
//   }

//   private parseAddressComponents(components) {
//     for (let i = 0; i < components.length; i++) {
//       let types = components[i].types;
//       for (let j = 0; j < types.length; j++) {
//         let result = types[j];
//         if (result === 'street_number') {
//           this.streetNumber = components[i].short_name;
//         }
//         if (result === 'route') {
//           this.route = components[i].short_name;
//         }
//         if (result === 'locality' || result === 'sublocality') {
//           this.city = components[i].short_name;
//         }
//         if (result === 'administrative_area_level_1') {
//           this.province = components[i].short_name;
//         }
//         if (result === 'postal_code') {
//           this.postalCode = components[i].short_name;
//         }
//         if (result === 'country') {
//           this.country = components[i].short_name;
//         }
//       }
//     }
//   };

//   onChooseDate() {
//     console.log('date chosen: ', this.input2Moment);
//     console.log('js date: ', new Date(this.input2Moment));
//     console.log('day: ', this.input2Moment.getDate());
//     console.log('month: ', this.input2Moment.getMonth());
//     console.log('year: ', this.input2Moment.getFullYear());
//   };

//   onChooseStartTime() {
//     console.log('start time chosen: ', this.input3Moment);
//     console.log('hour: ', this.input3Moment.getHours());
//     console.log('minute: ', this.input3Moment.getMinutes());
//   };

//   onChooseEndTime() {
//     console.log('end time chosen: ', this.input4Moment);
//     console.log('hour: ', this.input4Moment.getHours());
//     console.log('minute: ', this.input4Moment.getMinutes());
//   }

// }


import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ScheduleModel } from '../../../../../../core/models/schedule.model';
import { ProducerModel } from '../../../../../../core/models/producer.model';

import { ProducerDashboardService } from '../../../../producer-dashboard.service';

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
  @ViewChild("input2") public datePickerRef: ElementRef;

  form: FormGroup; //this will hold our form data in a js object
  
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

  // properties to hold dates chosen, used in build methods
  schedDay: number; // default to input2Moment day
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
  
      // public min = new Date(2017, 7, 9);
      // public max = new Date(2017, 8, 10);
      // public disabledDates = [new Date(2017, 7, 9), new Date(2017, 7, 12), new Date(2017, 7, 15), new Date(2017, 7, 20)];
  
     //  public pickerColor: string = '#0070ba';

  // DATE/TIME PICKER SETTINGS
  public moment: any = new Date();
  // public minDate = this.moment.setDate(this.moment.getDate() + 1); // set minimum date as tomorrow
  public input2Moment: any = new Date(new Date().setDate(new Date().getDate() + 1)); // somehow this works!
  public input3Moment: any = new Date(0, 0, 0, 12, 0, 0, 0); // default start time is noon
  public input4Moment: any = new Date(0, 0, 0, 13, 0, 0, 0); // default end time is 1pm
  public input5Moment: any = new Date(); // default is now because input2 is tomorrow, just for ease of coding
  public input6Moment: any = new Date(0, 0, 0, (this.input3Moment.getHours() - 6), this.input3Moment.getMinutes(), 0, 0); // defaults to 12 hours before start time

  constructor(private dashboardService: ProducerDashboardService,
                private formBuild: FormBuilder,
                private activeModal: NgbActiveModal,
              private mapsAPILoader: MapsAPILoader,
            private ngZone: NgZone) {

    this.buildBlankSubmitObject();

    this.form = formBuild.group({
      'id':[''],
      'producerId': [null],
      'productList': [''],
      'type': ['', Validators.required],
      'description': [''],
      'date': [this.input2Moment, Validators.required],
      'startTime': [this.input3Moment, Validators.required],
      'endTime': [this.input4Moment, Validators.required],
      'deadlineDate': [this.input5Moment, Validators.required],
      'deadlineTime': [this.input6Moment, Validators.required],
      'hasFee': [false, Validators.required],
      'fee': [0],
      'hasWaiver': [false, Validators.required],
      'feeWaiver': [0],
      'latitude': [null],
      'longitude': [null],
      'city': ['', Validators.required],
      'address': [''],
      'province': ['', Validators.required],
      'orderList': ['']
    });

  }

  onSubmit() {
    this.submitting = true;
    console.log('form value at start of submit: ', this.form.value); // this doesn't have address
    console.log('submit object before: ', this.submitObject);
    this.buildSubmitObject();
    // this.form.value.id = this.generateRandomId(); // remove for production as API should do this for us
    // this.form.value.producerId = this.producer.id;
    // this.form.value.productList = this.producer.productList;
    console.log('submit object after: ', this.submitObject); // this doesn't contain address/location details
    // this.dashboardService.addNewSchedule(this.submitObject)
		  // .subscribe(
      //   response => {
      //     this.submitting = false;
      //     this.activeModal.close();
      //   },
      //   err => {
      //     console.error(err);
      //     this.submitting = false;
      //     // this.error = true;
      //   }
      // )
    // ;
    this.buildBlankSubmitObject();
    this.activeModal.close();
  }

  generateRandomId() {
    return Math.floor( Math.random() * 1000000 )
  }

  buildBlankSubmitObject() {
    console.log('buildBlankSubmitObject called');
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

  buildSubmitObject() {
    this.submitObject.id = this.generateRandomId(); // remove for production as API should do this for us
    this.submitObject.producerId = this.producer.id;
    this.submitObject.productList = this.producer.productList;
    this.submitObject.type = this.form.value.type;
    this.submitObject.description = this.form.value.description;
    this.submitObject.startDateTime = this.buildStartDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedStartHour, this.schedStartMinute);
    this.submitObject.endDateTime = this.buildEndDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedEndHour, this.schedEndMinute)
    this.submitObject.hasFee = this.form.value.hasFee;
    this.submitObject.hasWaiver = this.form.value.hasWaiver;
    this.submitObject.latitude = this.lat;
    this.submitObject.longitude = this.lng;
    console.log('submitCity before: ', this.submitObject.city);
    console.log('form.city before: ', this.form.value.city);
    this.submitObject.city = this.form.value.city;
    console.log('submitCity after: ', this.submitObject.city);
    console.log('form.city after: ', this.form.value.city);
    this.submitObject.province = this.form.value.province;
    this.submitObject.orderDeadline = this.buildOrderDeadline(this.deadlineDateYear, this.deadlineDateMonth, this.deadlineDateDay, this.deadlineHour, this.deadlineMinute);
    this.submitObject.address = this.form.value.address;
    this.submitObject.fee = this.form.value.fee;
    this.submitObject.feeWaiver = this.form.value.feeWaiver;
    this.submitObject.orderList = [];
  };

  ngOnInit() {

    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    // this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["geocode"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
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
      }
    )

    // set the defaults for dates
    this.onChooseDate();
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
    this.form.value.latitude = this.lat;
    this.form.value.longitude = this.lng;
    this.submitObject.latitude = this.lat;
    this.submitObject.longitude = this.lng;
    console.log('form.value after fillAddress: ', this.form.value); // this address is filled out properly, then go to onSubmit
  };

  private clearAddress() {
    console.log('clearAddress called');
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
    console.log('parseAddress called');
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
    console.log('start date chosen: ', this.input2Moment);
    this.schedDay = this.input2Moment.getDate();
    this.schedMonth = this.input2Moment.getMonth();
    this.schedYear = this.input2Moment.getFullYear();
  };

  onChooseStartTime() {
    console.log('start time chosen: ', this.input3Moment);
    this.schedStartHour = this.input3Moment.getHours();
    this.schedStartMinute = this.input3Moment.getMinutes();
  };

  onChooseEndTime() {
    console.log('end time chosen: ', this.input4Moment);
    this.schedEndHour = this.input4Moment.getHours();
    this.schedEndMinute = this.input4Moment.getMinutes();
  }
  
  onChooseDeadlineDate() {
    console.log('deadline date chosen: ', this.input5Moment);
    this.deadlineDateDay = this.input5Moment.getDate();
    this.deadlineDateMonth = this.input5Moment.getMonth();
    this.deadlineDateYear = this.input5Moment.getFullYear();
  };
  
  onChooseDeadlineTime() {
    console.log('deadline time chosen: ', this.input6Moment);
    this.deadlineHour = this.input6Moment.getHours();
    this.deadlineMinute = this.input6Moment.getMinutes();
  }

  buildStartDateTime(year, month, day, hour, minute) {
    console.log('ymdhm: ', year, month, day, hour, minute);
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
  }
  
  buildEndDateTime(year, month, day, hour, minute) {
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
  }
  
  buildOrderDeadline(year, month, day, hour, minute) {
    return new Date(year, month, day, hour, minute, 0, 0).toISOString();
  }

  onCancel() {
    this.activeModal.close();
  }

}


// import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// import { } from 'googlemaps';
// import { MapsAPILoader } from '@agm/core';

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { ScheduleModel } from '../../../../../../core/models/schedule.model';
// import { ProducerModel } from '../../../../../../core/models/producer.model';

// import { ProducerDashboardService } from '../../../../producer-dashboard.service';

// @Component({
//   selector: 'app-add-schedule-modal',
//   templateUrl: './add-schedule-modal.component.html',
//   styleUrls: ['./add-schedule-modal.component.scss']
// })
// export class AddScheduleModalComponent implements OnInit {

//   // public latitude: number;
//   // public longitude: number;
//   public searchControl: FormControl;
//   // public zoom: number;

//   @ViewChild("search") public searchElementRef: ElementRef;
//   // @ViewChild("input2") public datePickerRef: ElementRef;

//   form: FormGroup; //this will hold our form data in a js object
  
//   producer: ProducerModel;
//   type: string;
//   hasDelFee: boolean = false;
//   hasFeeWaiver: boolean = false;
//   streetNumber: string;
//   route: string;
//   city: string;
//   province: string;
//   postalCode: string;
//   country: string;
//   lat: number;
//   lng: number;
//   submitObject: ScheduleModel;
//   submitting: boolean = false;
  

//   // properties to hold dates chosen, used in build methods
//   schedDay: number;
//   schedMonth: number;
//   schedYear: number;
//   schedStartHour: number;
//   schedStartMinute: number;
//   schedEndHour: number;
//   schedEndMinute: number;
//   deadlineDateDay: number;
//   deadlineDateMonth: number;
//   deadlineDateYear: number;
//   deadlineHour: number;
//   deadlineMinute: number;
  
//   // DATE/TIME PICKER SETTINGS
//   public moment: Date = new Date();
//   public minDate = this.moment.setDate(this.moment.getDate() + 1); // set minimum date as tomorrow
//   public input2Moment: any = this.moment.setDate(this.moment.getDate() + 1); // default is one day in future
//   public input3Moment: any = new Date(0, 0, 0, 12, 0, 0, 0); // default start time is noon
//   public input4Moment: any = new Date(0, 0, 0, 13, 0, 0, 0); // default end time is 1pm
//   public input5Moment: any = new Date();;
//   // public input5Moment: any = new Date(this.input2Moment.setDate(this.moment.getDate() - 1)); // defaults to 1 day before sched date
//   public input6Moment: any = new Date(0, 0, 0, (this.input3Moment.getHours() - 12), this.input3Moment.getMinutes(), 0, 0); // defaults to 12 hours before start time
  
//   // OTHER DEFAULTS AND SETTINGS EXAMPLES FROM DOCS
//   // public min = new Date(2017, 7, 9);
//   // public max = new Date(2017, 8, 10);
//   // public disabledDates = [new Date(2017, 7, 9), new Date(2017, 7, 12), new Date(2017, 7, 15), new Date(2017, 7, 20)];
//   // public pickerColor: string = '#0070ba';

//   constructor(private dashboardService: ProducerDashboardService,
//                 private formBuild: FormBuilder,
//                 private activeModal: NgbActiveModal,
//               private mapsAPILoader: MapsAPILoader,
//             private ngZone: NgZone) {

//     this.submitObject = {
//       'id': null,
//       'producerId': null,
//       'productList': [],
//       'type': '',
//       'description': '',
//       'startDateTime': '',
//       'endDateTime': '',
//       'hasFee': null,
//       'hasWaiver': null,
//       'latitude': null,
//       'longitude': null,
//       'city': '',
//       'province': '',
//       'orderDeadline': '',
//       'address': '',
//       'fee': null,
//       'feeWaiver': null,
//       'orderList': []
//     }

//     this.form = formBuild.group({ // build the default form when building the component
//       'id':[''],
//       'producerId': [null],
//       'productList': [''],
//       'type': ['', Validators.required],
//       'description': [''],
//       'date': [this.input2Moment, Validators.required],
//       'startTime': [this.input3Moment, Validators.required],
//       'endTime': [this.input4Moment, Validators.required],
//       'deadlineDate': [this.input5Moment, Validators.required],
//       'deadlineTime': [this.input6Moment, Validators.required],
//       'hasFee': [false, Validators.required],
//       'fee': [0],
//       'hasWaiver': [false, Validators.required],
//       'feeWaiver': [0],
//       'city': ['', Validators.required],
//       'address': [''],
//       'province': ['', Validators.required],
//       'orderDeadline': ['', Validators.required],
//       'orderList': ['']
//     });

//   }

//   onSubmit() {
// 	//  this.submitting = true;
//     console.log(this.form.value);
// 	this.buildSubmitObject();
//     console.log('submit Object: ', this.submitObject);
//     /* this.dashboardService.addNewSchedule(this.submitObject)
// 		.subscribe(
//         response => {
//           this.submitting = false;
//           this.activeModal.close();
//         },
//         err => {
//           console.error(err);
//           this.submitting = false;
//           this.error = true;
//         }
//       )
// 	; **/
//     this.activeModal.close();
//   }
  
//   buildSubmitObject() {
// 	this.submitObject.id = this.generateRandomId(); // remove for production as API should do this for us
//     this.submitObject.producerId = this.producer.id;
//     this.submitObject.productList = this.producer.productList;
// 	this.submitObject.type = this.form.value.type;
// 	this.submitObject.description = this.form.value.description;
// 	this.submitObject.startDateTime = this.buildStartDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedStartHour, this.schedStartMinute);
// 	this.submitObject.endDateTime = this.buildEndDateTime(this.schedYear, this.schedMonth, this.schedDay, this.schedEndHour, this.schedEndMinute)
// 	this.submitObject.hasFee = this.form.value.hasFee;
// 	this.submitObject.hasWaiver = this.form.value.hasWaiver;
// 	this.submitObject.latitude = this.lat;
// 	this.submitObject.longitude = this.lng;
// 	this.submitObject.city = this.form.value.city;
// 	this.submitObject.province = this.form.value.province;
// 	this.submitObject.orderDeadline = this.buildOrderDeadline(this.deadlineDateYear, this.deadlineDateMonth, this.deadlineDateDay, this.deadlineHour, this.deadlineMinute);
// 	this.submitObject.address = this.form.value.address;
// 	this.submitObject.fee = this.form.value.fee;
// 	this.submitObject.feeWaiver = this.form.value.feeWaiver;
// 	this.submitObject.orderList = [];
//   }

//   generateRandomId() {
//     return Math.floor( Math.random() * 1000000 )
//   }

//   ngOnInit() {

//     // set google maps defaults
//     // this.zoom = 4;
//     // this.latitude = 39.8282;
//     // this.longitude = -98.5795;

//     // create search FormControl
//     this.searchControl = new FormControl();

//     // set current position
//     // this.setCurrentPosition();

//     // load Places Autocomplete
//     this.mapsAPILoader.load().then(() => {
//       let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
//         types: ["geocode"]
//       });
//       autocomplete.addListener("place_changed", () => {
//         this.ngZone.run(() => {
//           // get the place result
//           let place: google.maps.places.PlaceResult = autocomplete.getPlace();

//           // verify result
//           if (place.geometry === undefined || place.geometry === null) {
//             return;
//           }

//           console.log('place: ', place);
//           this.fillAddress(place);

//           // set latitude, longitude and zoom
//           // this.latitude = place.geometry.location.lat();
//           // this.longitude = place.geometry.location.lng();
//           // this.zoom = 12;
//         });
//       });
//     });

//     this.dashboardService.getProducer()
//     .subscribe(
//       result => {
//         this.producer = result;
//       }
//     )
//   }

//   private fillAddress(place) { // fill my address from the results given by the Places api call
//     this.clearAddress();
//     this.parseAddressComponents(place.address_components);
//     this.lat = place.geometry.location.lat();
//     this.lng = place.geometry.location.lng();
//     this.form.value.address = this.streetNumber + ' ' + this.route;
//     this.form.value.city = this.city;
//     this.form.value.province = this.province;
//     this.form.value.latitude = this.lat;
//     this.form.value.longitude = this.lng;
//     console.log('form.value: ', this.form.value);
//   };

//   private clearAddress() { // reset address
//     this.streetNumber = '';
//     this.route = '';
//     this.city = '';
//     this.province = '';
//     this.postalCode = '';
//     this.country = '';
//     this.lat = null;
//     this.lng = null;
//   }

//   private parseAddressComponents(components) {
//     for (let i = 0; i < components.length; i++) {
//       let types = components[i].types;
//       for (let j = 0; j < types.length; j++) {
//         let result = types[j];
//         if (result === 'street_number') {
//           this.streetNumber = components[i].short_name;
//         }
//         if (result === 'route') {
//           this.route = components[i].short_name;
//         }
//         if (result === 'locality' || result === 'sublocality') {
//           this.city = components[i].short_name;
//         }
//         if (result === 'administrative_area_level_1') {
//           this.province = components[i].short_name;
//         }
//         if (result === 'postal_code') {
//           this.postalCode = components[i].short_name;
//         }
//         if (result === 'country') {
//           this.country = components[i].short_name;
//         }
//       }
//     }
//   };

//   onChooseDate() {
//     console.log('start date chosen: ', this.input2Moment);
// 	this.schedDay = this.input2Moment.getDate();
// 	this.schedMonth = this.input2Moment.getMonth();
// 	this.schedYear = this.input2Moment.getFullYear();
//   };

//   onChooseStartTime() {
//     console.log('start time chosen: ', this.input3Moment);
// 	this.schedStartHour = this.input3Moment.getHours();
// 	this.schedStartMinute = this.input3Moment.getMinutes();
//   };

//   onChooseEndTime() {
//     console.log('end time chosen: ', this.input4Moment);
// 	this.schedEndHour = this.input4Moment.getHours();
// 	this.schedEndMinute = this.input4Moment.getMinutes();
//   }
  
//   onChooseDeadlineDate() {
//     console.log('deadline date chosen: ', this.input5Moment);
// 	this.deadlineDateDay = this.input5Moment.getDate();
// 	this.deadlineDateMonth = this.input5Moment.getMonth();
// 	this.deadlineDateYear = this.input5Moment.getFullYear();
//   };
  
//   onChooseDeadlineTime() {
//     console.log('deadline time chosen: ', this.input6Moment);
// 	this.deadlineHour = this.input6Moment.getHours();
// 	this.deadlineMinute = this.input6Moment.getMinutes();
//   }
  
//   buildStartDateTime(year, month, day, hour, minute) {
//     console.log(year, month, day, hour, minute);
// 	  return new Date(year, month, day, hour, minute, 0, 0).toISOString();
//   }
  
//   buildEndDateTime(year, month, day, hour, minute) {
// 	  return new Date(year, month, day, hour, minute, 0, 0).toISOString();
//   }
  
//   buildOrderDeadline(year, month, day, hour, minute) {
// 	  return new Date(year, month, day, hour, minute, 0, 0).toISOString();
//   }

//   onCancel() {
//     this.activeModal.close();
//   }

// }