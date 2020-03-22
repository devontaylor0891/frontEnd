import { Component, OnInit, OnChanges, NgZone, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router'

import { Subscription } from 'rxjs/Subscription';

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
export class UpdateProfileComponent implements OnInit, OnChanges, OnDestroy {

  user: any;
  id: any;
  firstName: string;
  email: string;

  // reactive form
  userForm: FormGroup;

  // market location objects
  singleLocation = {
    name: '',
    latitude: null,
    longitude: null,
    address: '',
    city: '',
    province: '',
    description: '',
    timeframe: ''
  };
  multipleLocations = [];
  isMultipleLocation: boolean;
  showAddMarketLocation = true;

  // to transition the form between consumer and producer
  role: string;
  lat: number;
  lng: number;
  streetNumber: number;
  route: any;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  submitObject: any;

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
  imageName = '';
  addingImage = false;
  imageUploading: boolean;
  imageUploadingSub: Subscription;
  imagePreviewSub: Subscription;
  newItemUploading = false;
  imagePreviewExists = false;

  customUrlObject: any;
  postCustomUrlSubscription: Subscription;

  submitting = false;
  error: any;

  constructor(private userService: UserService,
              private apiService: ApiService,
              private router: Router,
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

  }

  ngOnChanges() {}

  ngOnInit() {

    this.getUserSub = this.userService.getUser()
      .subscribe(
        result => {
          this.user = result;
          console.log('userfrom service: ', this.user);
        }
      );

    this.imagePreviewSub = this.imageService._previewCroppedImage
      .subscribe(
        result => {
          if (result) {
            this.imagePreviewExists = true;
            this.userForm.patchValue({ producer: { logoUrl: this.imageName } });
          } else {
            this.imagePreviewExists = false;
          }
        }
      );

    // instantiate the formgroup
    this.userForm = new FormGroup({
      user: new FormGroup({
        firstName: new FormControl(this.user.firstName, [Validators.required]),
        email: new FormControl(this.user.email, [Validators.required]),
        role: new FormControl('', [Validators.required])
      }),
      producer: new FormGroup({
        id: new FormControl(this.user.id),
        name: new FormControl('', [Validators.required]),
        customUrl: new FormControl('', [Validators.pattern('[0-9a-zA-Z_-]*')]),
        description: new FormControl(''),
        logoUrl: new FormControl(''),
        location: new FormControl('', [Validators.required]),
        province: new FormControl('', [Validators.required]),
        address: new FormControl(''),
        longitude: new FormControl('', [Validators.required]),
        latitude: new FormControl('', [Validators.required]),
      }),
      market: new FormGroup({
        id: new FormControl(this.user.id),
        name: new FormControl('', [Validators.required]),
        customUrl: new FormControl('', [Validators.pattern('[0-9a-zA-Z_-]*')]),
        description: new FormControl(''),
        logoUrl: new FormControl(''),
        locations: new FormArray([

        ], [Validators.required])
      }),
      status: new FormControl('active')
    });

    // set producer fields to disabled
    this.disableProducerFields();
    this.disableMarketFields();

  };

  disableProducerFields() {
    this.userForm.controls.producer.disable();
  };

  disableMarketFields() {
    this.userForm.controls.market.disable();
  };

  enableProducerFields() {
    this.userForm.controls.producer.enable();
  };

  enableMarketFields() {
    this.userForm.controls.market.enable();
  };

  onSelectConsumer() {
    this.role = 'consumer';
    this.userForm.patchValue({user: {role: 'consumer'}});
    this.disableProducerFields();
    this.disableMarketFields();
  };

  onSelectProducer() {
    this.role = 'producer';
    this.userForm.patchValue({user: {role: 'producer'}});
    this.enableProducerFields();
    this.disableMarketFields();
  };

  onSelectMarket() {
    this.role = 'market';
    this.userForm.patchValue({user: {role: 'market'}});
    this.disableProducerFields();
    this.enableMarketFields();
  };

  onSubmit(form: any): void {
    console.log('form passed into onsubmit: ', form.value);
    this.submitting = true;
    console.log('userform: ', this.userForm.value);
    
    // update user with patchUser
    this.apiService.patchUser(this.user.id, form.value.user) // update user
      .subscribe(
        result => {
          console.log('user updated: ', result);
          // if producer
            // if imageUploading - upload then createProducer
            // !imageUploading - createProducer
          if (form.value.user.role === 'producer') { // if producer
                this.buildProducerSubmitObject(form.value);
                // console.log('producer submit object: ', this.submitObject);
                console.log('adding image value: ', this.addingImage);
                if (this.addingImage) { // if adding logo, add it first
                  // this.imageService.convertAndUpload();
                  this.imageUploadingSub = this.imageService._imageUploading
                    .subscribe(
                      result5 => {
                        console.log('result from imageUploading sub: ', result5);
                        if (!result5) { // image uploaded, continue
                          this.apiService.createProducer(this.submitObject) // create producer profile
                            .subscribe(
                              result1 => {
                                // console.log('producer profile created: ', result);
                                this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject) // create custom url
                                  .subscribe(
                                    result2 => {
                                      // console.log('custom url submitted: ', result);
                                      this.handleSubmitSuccess(result2);
                                    },
                                    err => this.handleSubmitError(err)
                                  );
                              },
                              err => this.handleSubmitError(err)
                            );
                        }
                      }
                    );
                  this.imageService.convertAndUpload();
                } else { // if not adding logo, just create producer and custom url by themselves
                  this.apiService.createProducer(this.submitObject)
                    .subscribe(
                      result3 => {
                        // console.log('producer profile created: ', result);
                        this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject)
                          .subscribe(
                            result4 => {
                              // console.log('custom url submitted: ', result);
                              this.handleSubmitSuccess(result4);
                            },
                            err => this.handleSubmitError(err)
                          );
                      },
                      err => this.handleSubmitError(err)
                    );
                }
              } else if (form.value.user.role === 'market') {
                // if market
            // if imageUploading - upload then createMarket
            // !imageUploading - create Market
                this.buildMarketSubmitObject(form.value);
                console.log('market selected: ', this.submitObject);
                console.log('adding image value: ', this.addingImage);
                if (this.addingImage) { // if adding logo, add it first
                  // this.imageService.convertAndUpload();
                  this.imageUploadingSub = this.imageService._imageUploading
                    .subscribe(
                      result5 => {
                        console.log('result from imageUploading sub: ', result5);
                        if (!result5) { // image uploaded, continue
                          this.apiService.createMarket(this.submitObject) // create producer profile
                            .subscribe(
                              result1 => {
                                // console.log('producer profile created: ', result);
                                this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject) // create custom url
                                  .subscribe(
                                    result2 => {
                                      // console.log('custom url submitted: ', result);
                                      this.handleSubmitSuccess(result2);
                                    },
                                    err => this.handleSubmitError(err)
                                  );
                              },
                              err => this.handleSubmitError(err)
                            );
                        }
                      }
                    );
                  this.imageService.convertAndUpload();
                } else { // if not adding logo, just create producer and custom url by themselves
                  this.apiService.createMarket(this.submitObject)
                    .subscribe(
                      result3 => {
                        // console.log('producer profile created: ', result);
                        this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject)
                          .subscribe(
                            result4 => {
                              console.log('custom url submitted: ', result);
                              this.handleSubmitSuccess(result4);
                            },
                            err => this.handleSubmitError(err)
                          );
                      },
                      err => this.handleSubmitError(err)
                    );
                }
              };
              this.handleSubmitSuccess(result)
            },
            err => this.handleSubmitError(err)
          );
  };

  buildProducerSubmitObject(form) {
    console.log('build producer form object: ', form);
    // this.submitObject = {
    //   id: this.user.id,
    //   name: form.producer.name,
    //   location: form.producer.city,
    //   province: form.producer.province,
    //   address: this.selectedAddress || '',
    //   description: form.producer.description,
    //   email: form.user.email,
    //   logoUrl: this.imageName,
    //   // longitude: this.longitude,
    //   // latitude: this.latitude,
    //   firstName: form.user.firstName,
    //   status: 'active',
    //   products: [],
    //   schedule: []
    // };
    this.submitObject = form.producer;
    if (form.producer.customUrl) {
      this.customUrlObject = {
        userId: this.user.id,
        customUrl: form.producer.customUrl.toLowerCase(),
        userType: 'producer'
      };
    } else {
      this.customUrlObject = {
        userId: this.user.id,
        customUrl: this.user.id,
        userType: 'producer'
      };
    }
    ;
  };

  buildMarketSubmitObject(form) {
    // this.submitObject = {
    //   id: this.user.id,
    //   name: form.market.name,
    //   description: form.market.description,
    //   logoUrl: this.imageName,
    //   multipleLocations: form.market.multipleLocations
    // };
    this.submitObject = form.market;
    if (form.market.customUrl) {
      this.customUrlObject = {
        userId: this.user.id,
        customUrl: form.market.customUrl.toLowerCase(),
        userType: 'market'
      };
    } else {
      this.customUrlObject = {
        userId: this.user.id,
        customUrl: this.user.id,
        userType: 'market'
      };
    };
  };

  // onSubmit(form: any): void {
  //   this.submitting = true;
  //   console.log('form value: ', form.value);
  //   // console.log(this.id);
  //   this.apiService.patchUser(this.user.id, form.value.user) // update user
  //     .subscribe(
  //       result => {
  //         // console.log('user updated: ', result);
  //         if (form.value.user.role === 'producer') { // if producer
  //           this.buildProducerSubmitObject(form.value);
  //           // console.log('producer submit object: ', this.submitObject);
  //           console.log('adding image value: ', this.addingImage);
  //           if (this.addingImage) { // if adding logo, add it first
  //             // this.imageService.convertAndUpload();
  //             this.imageUploadingSub = this.imageService._imageUploading
  //               .subscribe(
  //                 result5 => {
  //                   console.log('result from imageUploading sub: ', result5);
  //                   if (!result5) { // image uploaded, continue
  //                     this.apiService.createProducer(this.submitObject) // create producer profile
  //                       .subscribe(
  //                         result1 => {
  //                           // console.log('producer profile created: ', result);
  //                           this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject) // create custom url
  //                             .subscribe(
  //                               result2 => {
  //                                 // console.log('custom url submitted: ', result);
  //                                 this.handleSubmitSuccess(result2);
  //                               },
  //                               err => this.handleSubmitError(err)
  //                             );
  //                         },
  //                         err => this.handleSubmitError(err)
  //                       );
  //                   }
  //                 }
  //               );
  //             this.imageService.convertAndUpload();
  //           } else { // if not adding logo, just create producer and custom url by themselves
  //             this.apiService.createProducer(this.submitObject)
  //               .subscribe(
  //                 result3 => {
  //                   // console.log('producer profile created: ', result);
  //                   this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject)
  //                     .subscribe(
  //                       result4 => {
  //                         // console.log('custom url submitted: ', result);
  //                         this.handleSubmitSuccess(result4);
  //                       },
  //                       err => this.handleSubmitError(err)
  //                     );
  //                 },
  //                 err => this.handleSubmitError(err)
  //               );
  //           }
  //         } else if (form.value.user.role === 'market') {
  //           this.buildMarketSubmitObject(form.value);
  //           console.log('market selected: ', this.submitObject);
  //           console.log('adding image value: ', this.addingImage);
  //           if (this.addingImage) { // if adding logo, add it first
  //             // this.imageService.convertAndUpload();
  //             this.imageUploadingSub = this.imageService._imageUploading
  //               .subscribe(
  //                 result5 => {
  //                   console.log('result from imageUploading sub: ', result5);
  //                   if (!result5) { // image uploaded, continue
  //                     this.apiService.createMarket(this.submitObject) // create producer profile
  //                       .subscribe(
  //                         result1 => {
  //                           // console.log('producer profile created: ', result);
  //                           this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject) // create custom url
  //                             .subscribe(
  //                               result2 => {
  //                                 // console.log('custom url submitted: ', result);
  //                                 this.handleSubmitSuccess(result2);
  //                               },
  //                               err => this.handleSubmitError(err)
  //                             );
  //                         },
  //                         err => this.handleSubmitError(err)
  //                       );
  //                   }
  //                 }
  //               );
  //             this.imageService.convertAndUpload();
  //           } else { // if not adding logo, just create producer and custom url by themselves
  //             this.apiService.createMarket(this.submitObject)
  //               .subscribe(
  //                 result3 => {
  //                   // console.log('producer profile created: ', result);
  //                   this.postCustomUrlSubscription = this.apiService.createCustomUrl(this.customUrlObject)
  //                     .subscribe(
  //                       result4 => {
  //                         // console.log('custom url submitted: ', result);
  //                         this.handleSubmitSuccess(result4);
  //                       },
  //                       err => this.handleSubmitError(err)
  //                     );
  //                 },
  //                 err => this.handleSubmitError(err)
  //               );
  //           }
  //         };
  //         this.handleSubmitSuccess(result)
  //       },
  //       err => this.handleSubmitError(err)
  //     );
  // };

  handleSubmitSuccess(result) {
    this.newItemUploading = false;
    this.submitting = false;
    // mark profile complete and get the full proproducer
    this.userService.profileIncomplete$.next(false)
    this.userService.getUserFromDb(this.user.id);
    this.router.navigate(['']);
  };

  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  };

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
    if (this.imageUploadingSub) {
      this.imageUploadingSub.unsubscribe();
    };
  };

}
