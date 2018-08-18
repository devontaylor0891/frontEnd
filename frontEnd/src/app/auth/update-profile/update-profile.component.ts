import { Component, OnInit, OnChanges, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { AgmMap } from '@agm/core';

import { AuthService } from '../auth.service';
import { ApiService } from '../../core/api.service';
import { UserService } from '../../core/services/user/user.service';

import { ProducerModel } from '../../core/models/producer.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit, OnChanges {

  user: any;
  id: any;
  firstName: string;
  email: string;
  newValues: Object;
  newProducerValues: Object;

  // reactive form
  userForm: FormGroup;

  // to transition the form between consumer and producer
  role: string;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  @ViewChild('search') public searchElementRef: ElementRef;
  @ViewChild('logoUrl') public selectedFileEl;

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
  submitObject: ProducerModel;

  constructor(private auth: AuthService,
              private apiService: ApiService,
              private userService: UserService,
              private router: Router,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private fb: FormBuilder) {

    // build an empty submitObject
    this.submitObject = {
      id: null,
      name: '',
      location: '',
      province: '',
      address: '',
      description: '',
      email: '',
      logoUrl: '',
      longitude: null,
      latitude: null,
      firstName: '',
      status: 'active'
    }

  }

  ngOnChanges() {}

  resizeMap() {
    this.agmMap.triggerResize();
  }

  ngOnInit() { 

    this.userService.getUser()
      .subscribe(
        result => {
          this.user = result;
          console.log('userfrom service: ', this.user);
        }
      );

    // ***** LOCATION INIT CODE ******
    // set google maps defaults
    this.zoom = 8;
    this.latitude = 50.5555;
    this.longitude = -100.5555;

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

    // get the basic info for the user
    this.auth.getParsedId()
      .subscribe(
        result => {
          this.id = result;
        }
      );

    this.userService.getFirstName()
      .subscribe(
        result => {
          this.firstName = result;
          console.log('firstName: ', this.firstName);
        }
      );

    this.userService.getEmail()
      .subscribe(
        result => {
          this.email = result;
        }
      );

    // instantiate the formgroup
    this.userForm = new FormGroup({
      user: new FormGroup({
        firstName: new FormControl(this.firstName, [Validators.required]),
        email: new FormControl(this.email, [Validators.required]),
        role: new FormControl('consumer', [Validators.required])
      }),
      producer: new FormGroup({
        id: new FormControl(this.id),
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        logoUrl: new FormControl('')
      }),
      status: new FormControl('active')
    });

    // set producer fields to disabled
    this.disableProducerFields();

  }

  disableProducerFields() {
    this.userForm.controls.producer.disable();
  };

  enableProducerFields() {
    this.userForm.controls.producer.enable();
  };

  onSelectConsumer() {
    this.role = 'consumer';
    this.userForm.patchValue({user:{role: 'consumer'}});
    this.disableProducerFields();
  };

  onSelectProducer() {
    this.role = 'producer';
    this.userForm.patchValue({user:{role: 'producer'}});
    this.enableProducerFields();
  };

  buildProducerSubmitObject(form) {
    this.submitObject = {
            id: this.user.id,
            name: form.producer.name,
            location: this.city,
            province: this.province,
            address: this.address || '',
            description: form.producer.description,
            email: form.user.email,
            logoUrl: form.producer.logoUrl,
            longitude: this.longitude,
            latitude: this.latitude,
            firstName: form.user.firstName,
            status: 'active',
            products: [],
            schedule: []
          }
  }

  onSubmit(form: any): void {
    console.log('form value: ', form.value);
    console.log(this.id);
    this.apiService.patchUser(this.user.id, form.value.user)
      .subscribe(
        result => {
          console.log('user updated: ', result);
          if (form.value.user.role === 'producer') {
            this.buildProducerSubmitObject(form.value);
            console.log('producer submit object: ', this.submitObject);
            this.apiService.createProducer(this.submitObject)
              .subscribe(
                result => {
                  console.log('producer profile created: ', result);
                }
              );
          };
          // mark profile complete and get the full profile
          this.userService.profileIncomplete$.next(false);
          this.userService.getUserFromDb(this.user.id);
        }
      );
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
