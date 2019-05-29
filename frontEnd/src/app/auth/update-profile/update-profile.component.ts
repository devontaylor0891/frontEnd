import { Component, OnInit, OnChanges, NgZone, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

import { Subscription } from 'rxjs/Subscription';

// import { } from 'googlemaps';
import { google } from '@google/maps';

declare var google: any;

import { MapsAPILoader } from '@agm/core';
import { AgmMap, MouseEvent as AgmMouseEvent } from '@agm/core';

import { AuthService } from '../auth.service';
import { ApiService } from '../../core/api.service';
import { UserService } from '../../core/services/user/user.service';
import { ImageService } from '../../core/services/image/image.service';
import { LocationService } from '../../core/services/location/location.service';

import { ProducerModel } from '../../core/models/producer.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  user: any;
  id: any;
  firstName: string;
  email: string;

  // reactive form
  userForm: FormGroup;

  // to transition the form between consumer and producer
  role: string;

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

  customUrlObject: any;
  checkCustomUrlSubscription: Subscription;
  postCustomUrlSubscription: Subscription;
  getCustomUrlSubscription: Subscription;
  customUrlExists: boolean = false;
  noSpacesFormat = "[^/s]*";
  customUrlChanged: boolean = false;
  customUrlDuplicateExists: boolean = false;

  selectedAddress: any;
  selectedCityProvince: any;
  selectedLocation: any;

  mapLocation: any;

  getUserSub: Subscription;
  getCitySub: Subscription;
  getProvinceSub: Subscription;
  getCityProvinceSub: Subscription;
  getAddressSub: Subscription;

  // image properties
  imageName: string = '';
  addingImage: boolean = false;
  imageUploading: boolean;
  imageUploadingSub: Subscription;
  imagePreviewSub: Subscription;
  newItemUploading: boolean = false;
  imagePreviewExists: boolean = false;

  submitting: boolean = false;
  error: any;

  constructor(private auth: AuthService,
              private apiService: ApiService,
              private userService: UserService,
              private router: Router,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private fb: FormBuilder,
              private locationService: LocationService,
              private modalService: NgbModal,
              private imageService: ImageService) {

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

    // build empty custom url
    this.customUrlObject = {
      userId: null,
      customUrl: ''
    };

  }

  ngOnChanges() {}

  resizeMap() {
    this.agmMap.triggerResize();
  }

  ngOnInit() { 

    this.getUserSub = this.userService.getUser()
      .subscribe(
        result => {
          this.user = result;
          // console.log('userfrom service: ', this.user);
        }
      );

    this.getCitySub = this.locationService.getCity()
      .subscribe(
        result => {
          // console.log('result: ', result);
          this.city = result;
        }
      );

    this.getProvinceSub = this.locationService.getProvince()
      .subscribe(
        result => {
          // console.log('result: ', result);
          this.province = result;
        }
      );

    this.getCityProvinceSub = this.locationService.getCityProvince()
      .subscribe(
        result => {
          // console.log('result: ', result);
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
            // this.searchElementRef.nativeElement.value = this.selectedLocation;
            this.searchControl.setValue(this.selectedLocation);
            // console.log('form: ', this.userForm);
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
          //   console.log('no address returned')
          }
          
        }
      );

    this.imagePreviewSub = this.imageService._previewCroppedImage
      .subscribe(
        result => {
          if (result) {
            this.imagePreviewExists = true;
            this.userForm.patchValue({ producer:{ logoUrl: this.imageName } });
          } else {
            this.imagePreviewExists = false;
          }
        }
      );

    // ***** LOCATION INIT CODE ******
    // set google maps defaults
    this.zoom = 8;
    this.latitude = 50.5555;
    this.longitude = -100.5555;

    // create search FormControl
    this.searchControl = new FormControl('', [Validators.required]);

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
          // console.log('firstName: ', this.firstName);
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
        role: new FormControl('', [Validators.required])
      }),
      producer: new FormGroup({
        id: new FormControl(this.id),
        name: new FormControl('', [Validators.required]),
        customUrl: new FormControl('', [Validators.pattern('[0-9a-zA-Z_-]*')]),
        description: new FormControl(''),
        logoUrl: new FormControl('')
      }),
      status: new FormControl('active')
    });

    // set producer fields to disabled
    this.disableProducerFields();

    // from https://medium.com/@kahlil/asynchronous-validation-with-angular-reactive-forms-1a392971c062
    this.checkCustomUrlSubscription = this.userForm['controls'].producer['controls'].customUrl.valueChanges
      .filter(val => val.length >= 2) // after 2 characters at least
      .debounceTime(500) // after waiting half a second
      .switchMap( // call the api, but cancel the call if a new call is made
        val => {
          this.getCustomUrlSubscription = this.apiService.getProducerIdByCustomUrl(val)
            .subscribe(
              result => {
                if (result[0] && result[0] !== this.user.id && result[0].length !== 0) {
                  // console.log('producerId returned on check: ', result);
                  this.customUrlDuplicateExists = true;
                  this.userForm['controls'].producer['controls'].customUrl.setErrors({ 'invalid': true });
                } else {
                  this.customUrlDuplicateExists = false;
                }
              }
            );
          return val;
        })
      .subscribe(valid => console.log('valid: ', valid));

  };

  get customUrl() {
    return this.userForm.get('producer.customUrl');
  };

  disableProducerFields() {
    this.userForm.controls.producer.disable();
    this.searchControl.disable();
  };

  enableProducerFields() {
    this.userForm.controls.producer.enable();
    this.searchControl.enable();
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
      address: this.selectedAddress || '',
      description: form.producer.description,
      email: form.user.email,
      logoUrl: this.imageName,
      longitude: this.longitude,
      latitude: this.latitude,
      firstName: form.user.firstName,
      status: 'active',
      products: [],
      schedule: []
    };
    if (form.producer.customUrl) {
      this.customUrlObject = {
        userId: this.user.id,
        customUrl: form.producer.customUrl.toLowerCase()
      };
    } else {
      this.customUrlObject = {
        userId: this.user.id,
        customUrl: this.user.id
      };
    }
    ;
  }

  onSubmit(form: any): void {
    this.submitting = true;
    // console.log('form value: ', form.value);
    // console.log(this.id);
    this.apiService.patchUser(this.user.id, form.value.user) // update user
      .subscribe(
        result => {
          // console.log('user updated: ', result);
          if (form.value.user.role === 'producer') { // if producer
            this.buildProducerSubmitObject(form.value);
            // console.log('producer submit object: ', this.submitObject);
            if (this.addingImage) { // if adding logo, add it first
              this.imageService.convertAndUpload();
              this.imageUploadingSub = this.imageService._imageUploading
                .subscribe(
                  result => {
                    if (!result) { // image uploaded, continue
                      this.apiService.createProducer(this.submitObject) // create producer profile
                        .subscribe(
                          result => {
                            // console.log('producer profile created: ', result);
                            this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject) // create custom url
                              .subscribe(
                                result => {
                                  // console.log('custom url submitted: ', result);
                                  this.handleSubmitSuccess(result);
                                },
                                err => this.handleSubmitError(err)
                              );
                          },
                          err => this.handleSubmitError(err)
                        );
                    }
                  }
                );
            } else { // if not adding logo, just create producer and custom url by themselves
              this.apiService.createProducer(this.submitObject)
                .subscribe(
                  result => {
                    // console.log('producer profile created: ', result);
                    this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject)
                      .subscribe(
                        result => {
                          // console.log('custom url submitted: ', result);
                          this.handleSubmitSuccess(result);
                        },
                        err => this.handleSubmitError(err)
                      );
                  },
                  err => this.handleSubmitError(err)
                );
            }
            // this.apiService.createProducer(this.submitObject)
            //   .subscribe(
            //     result => {
            //       // console.log('producer profile created: ', result);
            //       this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject)
            //         .subscribe(
            //           result => {
            //             // console.log('custom url submitted: ', result);
            //             this.handleSubmitSuccess(result);
            //           },
            //           err => this.handleSubmitError(err)
            //         );
            //     },
            //     err => this.handleSubmitError(err)
            //   );
          };
          this.handleSubmitSuccess(result)
          // mark profile complete and get the full profile
          // this.userService.profileIncomplete$.next(false);
          // this.userService.getUserFromDb(this.user.id);
        },
        err => this.handleSubmitError(err)
      );
  };

  fillAddress(place) {
    this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.selectedLocation = this.city + ', ' + this.province;
    this.searchControl.setValue(this.selectedLocation);
    if (this.streetNumber && this.route) {
      this.address = this.streetNumber + ' ' + this.route;
      this.selectedAddress = this.streetNumber + ' ' + this.route;
      this.selectedLocation = this.address + ', ' + this.city + ', ' + this.province;
      this.searchControl.setValue(this.selectedLocation);
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
    this.imageName = this.user.id + '/logo';
    // this.userForm.patchValue({ producer:{ logoUrl: this.imageName } });
    this.addingImage = true;
    console.log('form value: ', this.userForm.value);
    console.log('form: ', this.userForm);
    // add required validator to form
    this.userForm.controls.producer.get('logoUrl').setValidators([Validators.required]);
    this.userForm.controls.producer.get('logoUrl').updateValueAndValidity();
  };

  onCancelAddImage() {
    // remove image name
    // this.imageName = '';
    this.userForm.patchValue({producer:{logoUrl: ''}});    // hide the image cropper
    this.addingImage = false;
    console.log('form value: ', this.userForm.value);
    console.log('form: ', this.userForm);
    // remove the required validator
    // this.userForm.get('producer').('image').clearValidators();
    this.userForm.controls.producer.get('logoUrl').clearValidators();
    this.userForm.controls.producer.get('logoUrl').updateValueAndValidity();
    // reset the imageService
    this.imageService.reset();
  }

  handleSubmitSuccess(result) {
    // if (this.addingImage) { // upload image and then close the modal
    //   this.imageService.convertAndUpload();
    //   this.imageUploadingSub = this.imageService._imageUploading
    //     .subscribe(
    //       result => {
    //         if (!result) {
    //           this.newItemUploading = false;
    //           this.submitting = false;
    //           // mark profile complete and get the full profile
    //           this.userService.profileIncomplete$.next(false);
    //           this.userService.getUserFromDb(this.user.id);
    //           this.router.navigate(['']);
    //           // this.activeModal.close();
    //         }
    //       }
    //     )
    // } else { // no image to upload
      this.newItemUploading = false; 
      this.submitting = false;
      // mark profile complete and get the full profile
      this.userService.profileIncomplete$.next(false);
      this.userService.getUserFromDb(this.user.id);
      this.router.navigate(['']);
      // this.activeModal.close();
    // };
  };

  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  };

  clearAddress() {
    this.city = '';
    this.province = '';
    this.streetNumber = null;
    this.route = '';
    this.selectedAddress = '';
    this.selectedLocation = '';
  }

  ngOnDestroy() {
    if (this.getUserSub) {
      this.getUserSub.unsubscribe();
    };
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
    if (this.postCustomUrlSubscription) {
      this.postCustomUrlSubscription.unsubscribe();
    };
    if (this.checkCustomUrlSubscription) {
      this.checkCustomUrlSubscription.unsubscribe();
    };
    if (this.getCustomUrlSubscription) {
      this.getCustomUrlSubscription.unsubscribe();
    };
    if (this.imageUploadingSub) {
      this.imageUploadingSub.unsubscribe();
    };
  };

}