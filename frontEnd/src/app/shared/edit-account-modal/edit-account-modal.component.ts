
import { Component, OnInit, Input, OnChanges, NgZone, ViewChild, ElementRef } from '@angular/core';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { AgmMap } from '@agm/core';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../core/api.service';

import { UserModel } from '../../core/models/user.model';
import { ProducerModel } from '../../core/models/producer.model';

@Component({
  selector: 'app-edit-account-modal',
  templateUrl: './edit-account-modal.component.html',
  styleUrls: ['./edit-account-modal.component.scss']
})
export class EditAccountModalComponent implements OnInit, OnChanges {

  @Input() user: UserModel;
  @Input() producer: ProducerModel;

  userForm: FormGroup;
  producerForm: FormGroup;

  locationSearchDisplay: boolean = false;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  @ViewChild('search') public searchElementRef: ElementRef;
  @ViewChild(AgmMap) public agmMap: AgmMap;
  lat: number;
  lng: number;
  streetNumber: number;
  route: any;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;

  constructor(private fb: FormBuilder,
              private activeModal: NgbActiveModal,
              private apiService: ApiService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) { }

  ngOnChanges() {};

  ngOnInit() {

    // ***** LOCATION INIT CODE ******
    // set google maps defaults
    this.zoom = 8;
    this.latitude = this.producer.latitude;
    this.longitude = this.producer.longitude;

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
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

    if (this.producer) {
      this.producerForm = this.fb.group({
        firstName: [this.user.firstName, [Validators.required] ],
        email: [this.user.email, [Validators.required] ],
        name: [this.producer.name, [Validators.required] ],
        description: [this.producer.description],
        logoUrl: [this.producer.logoUrl]
      });
    } else {
      this.userForm = this.fb.group({
        firstName: [this.user.firstName, [Validators.required] ],
        email: [this.user.email, [Validators.required] ] 
      });
    };

  };

  toggleLocationSearch() {
    this.locationSearchDisplay = !this.locationSearchDisplay;
  };

  resizeMap() {
    this.agmMap.triggerResize();
  };

  onSubmit(form: any, userType) {
    console.log('form value: ', form.value);
    console.log('user id: ', this.user.id);
    // test which user type
    if (userType === 'consumer') { // if consumer - patch user as normal
      this.apiService.patchUser(this.user.id, form.value) // patch the user basic data
        .subscribe(
          result => {
            console.log('successfully patched user: ', result);
            this.activeModal.close();
          }
        );
    } else if (userType === 'producer') { // if producer - break apart the user/producer info, call both patches
      let userData = {
        'firstName': form.value.firstName,
        'email': form.value.email
      };
      let producerData = {
        'firstName': form.value.firstName,
        'email': form.value.email,
        'name': form.value.name,
        'description': form.value.description,
        'logoUrl': form.value.logoUrl,
        'address': this.address,
        'location': this.city,
        'province': this.province,
        'latitude': this.latitude,
        'longitude': this.longitude
      };
      this.apiService.patchUser(this.user.id, userData)
        .subscribe(
          result => {
            console.log('successfully patched user: ', result);
            this.apiService.patchProducer(this.user.id, producerData)
              .subscribe(
                res => {
                  console.log('producer profile updated: ', res);
                  this.activeModal.close();
                }
              );
          }
        )
    };
    
  };

  private fillAddress(place) {
    // this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    if (this.streetNumber && this.route) {
      this.address = this.streetNumber + ' ' + this.route;
    };
    this.latitude = this.lat;
    this.longitude = this.lng;
  };

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
          console.log('city: ', this.city);
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

}