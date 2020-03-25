import { Component, OnInit, Input, OnChanges, NgZone, ViewChild, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
// import { } from 'googlemaps';
// import { google } from '@google/maps';
// Avoid name not found warnings
// declare const google: any;

import { MapsAPILoader } from '@agm/core';
import { AgmMap, MouseEvent as AgmMouseEvent } from '@agm/core';
import { Subscription } from 'rxjs/Subscription';

import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../core/api.service';
import { ImageService } from '../../core/services/image/image.service';
import { LocationService } from '../../core/services/location/location.service';

import { UserModel } from '../../core/models/user.model';
import { ProducerModel } from '../../core/models/producer.model';

@Component({
  selector: 'app-edit-account-modal',
  templateUrl: './edit-account-modal.component.html',
  styleUrls: ['./edit-account-modal.component.scss']
})

export class EditAccountModalComponent implements OnInit, OnChanges, OnDestroy {

  @Input() user: UserModel;
  @Input() producer: ProducerModel;
  @Input() customUrlObject: any;
  @Input() market: any;

  userForm: FormGroup;
  producerForm: FormGroup;
  marketForm: FormGroup;

  locationSearchDisplay = false;

  public latitude: number;
  public longitude: number;
  public markerLatitude: number;
  public markerLongitude: number;
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
  submitObject: ProducerModel;

  checkCustomUrlSubscription: Subscription;
  postCustomUrlSubscription: Subscription;
  getCustomUrlSubscription: Subscription;
  customUrlDuplicateExists = false;
  producerCustomUrlExists: boolean;
  marketCustomUrlExists: boolean;
  customUrlChanged = false;
  customUrlId: number;
  // customUrlRegex = '[a-zA-Z0-9]*$';

  selectedAddress: any;
  selectedCityProvince: any;
  selectedLocation: any;

  mapLocation: any;

  getUserSub: Subscription;
  getCitySub: Subscription;
  getProvinceSub: Subscription;
  getCityProvinceSub: Subscription;
  getAddressSub: Subscription;

  logoExists: boolean;

  imageName = '';
  addingImage = false;
  imageUploading: boolean;
  imageUploadingSub: Subscription;
  newItemUploading = false;
  submitting = false;
  error: any;
  @Output() imageUploaded = new EventEmitter<boolean>();
  @Output() accountEdited = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private apiService: ApiService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private locationService: LocationService,
              private imageService: ImageService,
              private router: Router) { }

  ngOnChanges() {}

  ngOnInit() {

    this.userForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required] ],
      email: [this.user.email, [Validators.required] ],
      role: [this.user.role]
    });

    // create search FormControl
    this.searchControl = new FormControl();

    // this.disableProducerFields();

    if (this.producer) {
      if (this.customUrlObject) {
        this.producerCustomUrlExists = true;
        this.producerForm = this.fb.group({
          firstName: [this.user.firstName, [Validators.required] ],
          email: [this.user.email, [Validators.required] ],
          name: [this.producer.name, [Validators.required] ],
          description: [this.producer.description],
          customUrl: [this.customUrlObject.customUrl, Validators.pattern('[0-9a-zA-Z_-]*')]
        });
      } else {
        this.producerCustomUrlExists = false;
        this.producerForm = this.fb.group({
          firstName: [this.user.firstName, [Validators.required] ],
          email: [this.user.email, [Validators.required] ],
          name: [this.producer.name, [Validators.required] ],
          description: [this.producer.description],
          customUrl: ['', Validators.pattern('[0-9a-zA-Z_-]*')]
        });
      };
      this.enableProducerFields();
      // set current map marker location
      this.markerLatitude = this.producer.latitude;
      this.markerLongitude = this.producer.longitude;
        // from https://medium.com/@kahlil/asynchronous-validation-with-angular-reactive-forms-1a392971c062
      this.checkCustomUrlSubscription = this.producerForm['controls'].customUrl.valueChanges
      .debounceTime(500) // after waiting half a second
      // .filter(val => !this.producerForm['controls'].customUrl.errors.pattern) // check for pattern error
      .filter(val => val.length >= 2) // after 2 characters at least
      .switchMap( // call the api, but cancel the call if a new call is made
        val => {
          // if (!this.producerForm['controls'].customUrl.errors.pattern) {
            this.getCustomUrlSubscription = this.apiService.getProducerIdByCustomUrl(val)
              .subscribe(
                result => {
                  this.customUrlChanged = true;
                  if (result[0] && result[0] !== this.producer.id && result[0].length !== 0) {
                    // console.log('producerId returned on check: ', result);
                    this.customUrlDuplicateExists = true;
                    this.producerForm['controls'].customUrl.setErrors({ 'invalid': true });
                  } else {
                    // console.log('custom url not returned');
                    this.customUrlDuplicateExists = false;
                    // this.producerForm['controls'].customUrl.setErrors(null);
                  }
                });
            return val;
          // } else {
          //   return val;
          // };
        })
        .subscribe(valid => {return true});
    };

    if (this.market) {
      if (this.customUrlObject) {
        this.marketCustomUrlExists = true;
        this.marketForm = this.fb.group({
          firstName: [this.user.firstName, [Validators.required] ],
          email: [this.user.email, [Validators.required] ],
          id: new FormControl(this.user.id),
          name: new FormControl(this.market.name, [Validators.required]),
          customUrl: new FormControl(this.customUrlObject.customUrl, [Validators.pattern('[0-9a-zA-Z_-]*')]),
          description: new FormControl(this.market.description)
        });
      } else {
        this.marketCustomUrlExists = false;
        this.marketForm = this.fb.group({
          firstName: [this.user.firstName, [Validators.required] ],
          email: [this.user.email, [Validators.required] ],
          id: new FormControl(this.user.id),
          name: new FormControl(this.market.name, [Validators.required]),
          customUrl: new FormControl('', [Validators.pattern('[0-9a-zA-Z_-]*')]),
          description: new FormControl(this.market.description)
        });
      };
      this.enableMarketFields();
      // set current map marker location
      // this.markerLatitude = this.market.latitude;
      // this.markerLongitude = this.market.longitude;
        // from https://medium.com/@kahlil/asynchronous-validation-with-angular-reactive-forms-1a392971c062
      this.checkCustomUrlSubscription = this.marketForm['controls'].customUrl.valueChanges
        .debounceTime(500) // after waiting half a second
        .filter(val => val.length >= 2) // after 2 characters at least
        .switchMap( // call the api, but cancel the call if a new call is made
          val => {
              this.getCustomUrlSubscription = this.apiService.getProducerIdByCustomUrl(val)
                .subscribe(
                  result => {
                    this.customUrlChanged = true;
                    if (result[0] && result[0] !== this.market.id && result[0].length !== 0) {
                      // console.log('producerId returned on check: ', result);
                      this.customUrlDuplicateExists = true;
                      this.marketForm['controls'].customUrl.setErrors({ 'invalid': true });
                    } else {
                      // console.log('custom url not returned');
                      this.customUrlDuplicateExists = false;
                    }
                  });
              return val;
            // } else {
            //   return val;
            // };
          })
          .subscribe(valid => {return true});
    };

    this.getCitySub = this.locationService.getCity()
      .subscribe(
        result => {
          // console.log('getcity result: ', result);
          this.city = result;
        }
      );

    this.getProvinceSub = this.locationService.getProvince()
      .subscribe(
        result => {
          // console.log('get location result: ', result);
          this.province = result;
        }
      );

    this.getCityProvinceSub = this.locationService.getCityProvince()
      .subscribe(
        result => {
          // console.log('getting cityProvince sub');
          this.selectedCityProvince = result;

          if (!this.selectedAddress) {
            this.selectedLocation = this.selectedCityProvince;
          }
          if (this.selectedAddress) {
            this.selectedLocation = this.selectedAddress + ', ' + this.selectedCityProvince;
          }
          // console.log('selectedLocation: ', this.selectedLocation);
          // console.log('city: ', this.city);
          // console.log('province: ', this.province);
          // console.log('streetNumber: ', this.streetNumber);
          // console.log('route: ', this.route);
          // console.log('selectedAddress: ', this.selectedAddress);
          if (this.searchElementRef) {
            this.searchElementRef.nativeElement.value = this.selectedLocation;
          }
        }
      );

    this.getAddressSub = this.locationService.getAddress()
      .subscribe(
        result => {
          this.clearAddress();
          if (result) {
            this.selectedAddress = result;
            this.address = result;
            // console.log('address service: ', result);
          // } else {
            console.log('no address returned')
          }

        }
      );

    // ***** LOCATION INIT CODE ******
    // set google maps defaults
    this.zoom = 8;
    if (this.producer) {
      this.latitude = this.producer.latitude;
      this.longitude = this.producer.longitude;
      // initialize the producer values
      this.lat = this.producer.latitude;
      this.lng = this.producer.longitude;
      this.address = this.producer.address;
      this.city = this.producer.location;
      this.province = this.producer.province;
      if (this.producer && this.producer.logoUrl !== '') {
        this.logoExists = true;
      }
       // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
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
          this.latitude = place.geometry.location.lat();
          this.markerLatitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.markerLongitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
    };

   

  };

  // get customUrl() {
  //   return this.producerForm.get('customUrl');
  // };

  disableProducerFields() {
    this.producerForm.disable();
    this.searchControl.disable();
  };

  enableProducerFields() {
    this.producerForm.enable();
    this.searchControl.enable();
  };

  enableMarketFields() {
    this.marketForm.enable();
    this.searchControl.enable();
  };

  disableMarketFields() {
    this.marketForm.disable();
    this.searchControl.disable();
  };

  toggleLocationSearch() {
    this.locationSearchDisplay = !this.locationSearchDisplay;
  };

  // resizeMap() {
  //   this.agmMap.triggerResize();
  // };

  onSubmit(form: any, userType) {
    this.submitting = true;
    // console.log('form value: ', form.value);
    // console.log('user id: ', this.user.id);
    // test which user type
    if (userType === 'consumer') { // if consumer - patch user as normal
      this.apiService.patchUser(this.user.id, form.value) // patch the user basic data
        .subscribe(
          res => this.handleSubmitSuccess(res),
          err => this.handleSubmitError(err)
        );
    } else if (userType === 'producer') { // if producer - break apart the user/producer info, call both patches
      const userData = {
        'firstName': form.value.firstName,
        'email': form.value.email,
        'role': 'producer'
      };
      const producerData = {
        'firstName': form.value.firstName,
        'email': form.value.email,
        'name': form.value.name,
        'description': form.value.description,
        'logoUrl': this.producer.logoUrl || this.imageName,
        'address': this.selectedAddress,
        'location': this.city,
        'province': this.province,
        'latitude': this.latitude,
        'longitude': this.longitude
      };
      const customUrlData = {
        'userId': this.user.id,
        'customUrl': form.value.customUrl,
      };

      if (this.customUrlObject) {
        this.customUrlId = this.customUrlObject.id;
      }
      // console.log('producerData: ', producerData);
      // console.log('userData: ', userData);
      if (this.customUrlChanged) {
        if (this.producerCustomUrlExists) {
          this.apiService.updateCustomUrl(this.customUrlId, customUrlData)
            .subscribe(
              result => {
                // console.log('custom url update id: ', this.customUrlId)
                // console.log('custom url update data: ', this.customUrlObject)
                // console.log('custom url update result: ', result)
              },
              err => this.handleSubmitError(err)
            )
        } else {
          this.apiService.createCustomUrl(customUrlData)
          .subscribe(
            result => {
              // console.log('custom url update data: ', this.customUrlObject)
              // console.log('custom url update result: ', result)
            },
            err => this.handleSubmitError(err)
          )
        }
      };
      this.apiService.patchUser(this.user.id, userData)
        .subscribe(
          result => {
            // console.log('successfully patched user: ', result);
            this.apiService.patchProducer(this.user.id, producerData)
              .subscribe(
                res => {
                  // console.log('producer successfully patched: ', res);
                  this.handleSubmitSuccess(res)
                },
                err => this.handleSubmitError(err)
              );
          }
        )
    } else if (userType === 'market') {
      const userData = {
        'firstName': form.value.firstName,
        'email': form.value.email,
        'role': 'market'
      };
      const marketData = {
        'firstName': form.value.firstName,
        'email': form.value.email,
        'name': form.value.name,
        'description': form.value.description,
        'logoUrl': this.market.logoUrl || this.imageName
      };
      const customUrlData = {
        'userId': this.user.id,
        'customUrl': form.value.customUrl,
      };
      if (this.customUrlObject) {
        this.customUrlId = this.customUrlObject.id;
      }
      if (this.customUrlChanged) {
        if (this.producerCustomUrlExists) {
          this.apiService.updateCustomUrl(this.customUrlId, customUrlData)
            .subscribe(
              result => {
                // console.log('custom url update id: ', this.customUrlId)
                // console.log('custom url update data: ', this.customUrlObject)
                // console.log('custom url update result: ', result)
              },
              err => this.handleSubmitError(err)
            )
        } else {
          this.apiService.createCustomUrl(customUrlData)
          .subscribe(
            result => {
              // console.log('custom url update data: ', this.customUrlObject)
              // console.log('custom url update result: ', result)
            },
            err => this.handleSubmitError(err)
          )
        }
      };
      this.apiService.patchUser(this.user.id, userData)
        .subscribe(
          result => {
            console.log('successfully patched user: ', result);
            console.log('user.id: ', this.user.id);
            console.log('makretData: ', marketData);
            this.apiService.patchMarket(this.user.id, marketData)
              .subscribe(
                res => {
                  console.log('market successfully patched: ', res);
                  this.handleSubmitSuccess(res)
                },
                err => this.handleSubmitError(err)
              );
          }
        )
    };

  };

  private fillAddress(place) {
    // this.clearAddress();
    // this.parseAddressComponents(place.address_components);
    // this.lat = place.geometry.location.lat();
    // this.lng = place.geometry.location.lng();
    // if (this.streetNumber && this.route) {
    //   this.address = this.streetNumber + ' ' + this.route;
    // };
    // this.latitude = this.lat;
    // this.longitude = this.lng;
    this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.selectedLocation = this.city + ', ' + this.province;
    if (this.streetNumber && this.route) {
      this.address = this.streetNumber + ' ' + this.route;
      this.selectedAddress = this.streetNumber + ' ' + this.route;
      this.selectedLocation = this.address + ', ' + this.city + ', ' + this.province;
    };
    this.latitude = this.lat;
    this.longitude = this.lng;
    // console.log('new selected address: ', this.selectedAddress);
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
          // console.log('city: ', this.city);
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

  handleSubmitSuccess(result) {
    if (this.addingImage) { // upload image and then close the modal
      this.imageService.convertAndUpload();
      this.imageUploadingSub = this.imageService._imageUploading
        .subscribe(
          results => {
            if (!results) {
              this.newItemUploading = false;
              this.submitting = false;
              this.imageUploaded.emit(true);
              this.accountEdited.emit(true);
              // here i should emit to the parent that an image has been added or changed.
              this.activeModal.close();
            }
          }
        )
    } else { // no image to upload
      this.newItemUploading = false;
      this.submitting = false;
      this.accountEdited.emit(true);
      this.activeModal.close();
    };
  };

  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  };

  mapClicked($event: AgmMouseEvent) {
    this.clearAddress();
    this.selectedCityProvince = '';
    this.markerLatitude = $event.coords.lat
    this.markerLongitude =  $event.coords.lng;
    this.latitude = this.markerLatitude;
    this.longitude = this.markerLongitude;
    this.locationService.codeLatLng(this.markerLatitude, this.markerLongitude);
  }

  markerDragEnd($event: AgmMouseEvent) {
    this.clearAddress();
    this.selectedCityProvince = '';
    // console.log('dragEnd');
    this.markerLatitude = $event.coords.lat
    this.markerLongitude =  $event.coords.lng;
    this.latitude = this.markerLatitude;
    this.longitude = this.markerLongitude;
    this.locationService.codeLatLng(this.markerLatitude, this.markerLongitude);
  };

  onAddImage() {
    this.imageName = this.producer.id + '/logo';
    this.addingImage = true;
    // console.log('form value: ', this.producerForm.value);
    // console.log('form: ', this.producerForm);
    // add required validator to form
    // this.userForm.controls.producer.get('logoUrl').setValidators([Validators.required]);
    // this.userForm.controls.producer.get('logoUrl').updateValueAndValidity();
  };

  onCancelAddImage() {
    this.addingImage = false;
    this.imageService.reset();
  }

  onDeleteUser() {
    // console.log('delete user account clicked');
    this.apiService.deleteUser(this.user.id, this.user)
      .subscribe(
        result => {
          // console.log('user deleted: ', result);
          this.activeModal.close();
          this.router.navigateByUrl('/');
        }
      )
    this.activeModal.close();
  }

  clearAddress() {
    this.city = '';
    this.province = '';
    this.streetNumber = null;
    this.route = '';
    this.selectedAddress = '';
    this.selectedLocation = '';
  }

  ngOnDestroy() {
    if (this.imageUploadingSub) {
      this.imageUploadingSub.unsubscribe();
    }
    if (this.getCitySub) {
      this.getCitySub.unsubscribe();
    };
    if (this.getProvinceSub) {
      this.getProvinceSub.unsubscribe();
    };
    if (this.getCityProvinceSub) {
      this.getCityProvinceSub.unsubscribe();
    };
    if (this.getAddressSub) {
      this.getAddressSub.unsubscribe();
    };
    if (this.checkCustomUrlSubscription) {
      this.checkCustomUrlSubscription.unsubscribe();
    };
    if (this.getCustomUrlSubscription) {
      this.getCustomUrlSubscription.unsubscribe();
    };
  };

}
