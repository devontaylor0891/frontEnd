import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ImageService } from '../../../core/services/image/image.service';
import { UserService } from '../../../core/services/user/user.service';
import { ApiService } from '../../../core/api.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-add-new-market',
  templateUrl: './add-new-market.component.html',
  styleUrls: ['./add-new-market.component.scss']
})
export class AddNewMarketComponent implements OnInit, OnDestroy {

  user: any;
  getUserSub: Subscription;

  // reactive form
  marketForm: FormGroup;

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

  customUrlObject: any;
  checkCustomUrlSubscription: Subscription;
  postCustomUrlSubscription: Subscription;
  getCustomUrlSubscription: Subscription;
  customUrlExists = false;
  noSpacesFormat = '[^/s]*';
  customUrlChanged = false;
  customUrlDuplicateExists = false;

  // image properties
  imageName = '';
  addingImage = false;
  imageUploading: boolean;
  imageUploadingSub: Subscription;
  imagePreviewSub: Subscription;
  newItemUploading = false;
  imagePreviewExists = false;

  submitting = false;
  error: any;

  constructor(private ngZone: NgZone,
              private fb: FormBuilder,
              private apiService: ApiService,
              private imageService: ImageService,
              private userService: UserService) { }

  ngOnInit() {

    this.getUserSub = this.userService.getUser()
      .subscribe(
        result => {
          this.user = result;
          console.log('user: ', result);
        }
      );

    this.marketForm = this.fb.group({
      id: [this.user.id],
      name: ['', [Validators.required]],
      customUrl: ['', [Validators.pattern('[0-9a-zA-Z_-]*')]],
      description: [''],
      logoUrl: [''],
      status: ['active']
    });

    this.imagePreviewSub = this.imageService._previewCroppedImage
      .subscribe(
        result => {
          if (result) {
            this.imagePreviewExists = true;
            this.marketForm.patchValue({ logoUrl: this.imageName });
          } else {
            this.imagePreviewExists = false;
          }
        }
      );

    // from https://medium.com/@kahlil/asynchronous-validation-with-angular-reactive-forms-1a392971c062
    this.checkCustomUrlSubscription = this.marketForm['controls'].customUrl.valueChanges
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
                  // this.userForm['controls'].producer['controls'].customUrl.setErrors({ 'invalid': true });
                } else {
                  this.customUrlDuplicateExists = false;
                }
              }
            );
          return val;
        })
      .subscribe(valid => console.log('valid: ', valid));

  };

  onAddImage() {
    this.imageName = this.user.id + '/logo';
    this.addingImage = true;
    console.log('form value: ', this.marketForm.value);
    console.log('form: ', this.marketForm);
    // add required validator to form
    this.marketForm.get('logoUrl').setValidators([Validators.required]);
    this.marketForm.get('logoUrl').updateValueAndValidity();
  };

  onCancelAddImage() {
    // remove image name
    this.imageName = '';
    this.marketForm.patchValue({logoUrl: ''});    // hide the image cropper
    this.addingImage = false;
    console.log('form value: ', this.marketForm.value);
    console.log('form: ', this.marketForm);
    // remove the required validator
    this.marketForm.get('logoUrl').clearValidators();
    this.marketForm.get('logoUrl').updateValueAndValidity();
    // reset the imageService
    this.imageService.reset();
  };

  showAddLocation() {
    this.showAddMarketLocation = true;
  };

  pushNewLocation(value) {
    this.multipleLocations.push(value);
    this.showAddMarketLocation = false;
    console.log('multiLoc; ', this.multipleLocations);
  };

  ngOnDestroy() {
    if (this.getUserSub) {
      this.getUserSub.unsubscribe();
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
