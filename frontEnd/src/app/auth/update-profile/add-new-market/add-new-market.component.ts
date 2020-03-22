import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

import { ImageService } from '../../../core/services/image/image.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-add-new-market',
  templateUrl: './add-new-market.component.html',
  styleUrls: ['./add-new-market.component.scss']
})
export class AddNewMarketComponent implements OnInit, OnDestroy {

  user: any;

  // reactive form
  @Input() marketForm: FormGroup;

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

  constructor(private fb: FormBuilder,
              private imageService: ImageService) { }

  ngOnInit() {};

  onAddImage() {
    this.imageName = this.marketForm.value.id + '/logo';
    this.marketForm.patchValue({ logoUrl: this.imageName });
    this.addingImage = true;
    // add required validator to form
    this.marketForm.get('logoUrl').setValidators([Validators.required]);
    this.marketForm.get('logoUrl').updateValueAndValidity();
    console.log('form value: ', this.marketForm.value);
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

  addNewLocation(value) {
    const location = this.marketForm.controls.locations as FormArray;
    location.push(this.fb.group({
      'locationName': value.locationName || '',
      'description': value.description || '',
      'timeframe': value.timeframe,
      'latitude': value.latitude,
      'longitude': value.longitude,
      'address': value.address,
      'city': value.city,
      'province': value.province
    }))
    console.log('marketform: ', this.marketForm);
    this.showAddMarketLocation = false;
  };

  ngOnDestroy() {
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
