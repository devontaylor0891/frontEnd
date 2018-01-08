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
  long: number;

  public moment: Date = new Date();
  
      public min = new Date(2017, 7, 9);
      public max = new Date(2017, 8, 10);
      public disabledDates = [new Date(2017, 7, 9),
          new Date(2017, 7, 12), new Date(2017, 7, 15), new Date(2017, 7, 20)];
  
      public pickerColor: string = '#0070ba';

      public input1Moment: any;
      public input2Moment: any;
      public input3Moment: any;
      public input4Moment: any;
      public input5Moment: any;
      public input6Moment: any;
      public input7Moment: any;
      public input8Moment: any;
      public input9Moment: any;
      public input10Moment: any;
      public input11Moment: any;
      public input12Moment: any;
      public input13Moment: any;
      public input14Moment: any = new Date(2017, 8, 10, 13, 30, 30);

  constructor(private dashboardService: ProducerDashboardService,
                private formBuild: FormBuilder,
                private activeModal: NgbActiveModal,
              private mapsAPILoader: MapsAPILoader,
            private ngZone: NgZone) {

    this.form = formBuild.group({
      'id':[''],
      'producerId': [null],
      'productList': [''],
      'type': ['', Validators.required],
      'description': [''],
      'startDateTime': ['', Validators.required],
      'endDateTime': ['', Validators.required],
      'hasFee': [false, Validators.required],
      'fee': [0],
      'hasWaiver': [false, Validators.required],
      'feeWaiver': [0],
      'latitude': [null],
      'longitude': [null],
      'city': ['', Validators.required],
      'address': [''],
      'province': ['', Validators.required],
      'orderDeadline': ['', Validators.required],
      'orderList': ['']
    });

  }

  onSubmit() {
    console.log(this.form.value);
    this.form.value.id = this.generateRandomId(); // remove for production as API should do this for us
    this.form.value.producerId = this.producer.id;
    this.form.value.productList = this.producer.productList;
    console.log(this.form.value);
    // this.dashboardService.addNewSchedule(this.form.value);
    this.activeModal.close();
  }

  generateRandomId() {
    return Math.floor( Math.random() * 1000000 )
  }


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

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          console.log('place: ', place);
          this.fillAddress(place);

          //set latitude, longitude and zoom
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
  }

  private fillAddress(place) {
    this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.lat = place.geometry.location.lat();
    this.long = place.geometry.location.lng();
    this.form.value.address = this.streetNumber + ' ' + this.route;
    this.form.value.city = this.city;
    this.form.value.province = this.province;
    this.form.value.latitude = this.lat;
    this.form.value.longitude = this.long;
    console.log('form.value: ', this.form.value);
  };

  private clearAddress() {
    this.streetNumber = '';
    this.route = '';
    this.city = '';
    this.province = '';
    this.postalCode = '';
    this.country = '';
    this.lat = null;
    this.long = null;
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
    console.log('date chosen: ', this.input2Moment);
    console.log('js date: ', new Date(this.input2Moment));
    console.log('day: ', this.input2Moment.getDate());
    console.log('month: ', this.input2Moment.getMonth());
    console.log('year: ', this.input2Moment.getFullYear());
  }
}
