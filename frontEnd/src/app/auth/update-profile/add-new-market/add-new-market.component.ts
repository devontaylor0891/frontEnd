import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { ImageService } from '../../../core/services/image/image.service';
import { UserService } from '../../../core/services/user/user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-add-new-market',
  templateUrl: './add-new-market.component.html',
  styleUrls: ['./add-new-market.component.scss']
})
export class AddNewMarketComponent implements OnInit, OnDestroy {

  user: any;
  getUserSub: Subscription;

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
              private imageService: ImageService,
              private userService: UserService) { }

  ngOnInit() {

    this.getUserSub = this.userService.getUser()
      .subscribe(
        result => {
          this.user = result;
        }
      );

    this.imagePreviewSub = this.imageService._previewCroppedImage
      .subscribe(
        result => {
          if (result) {
            this.imagePreviewExists = true;
            // this.userForm.patchValue({ producer: { logoUrl: this.imageName } });
          } else {
            this.imagePreviewExists = false;
          }
        }
      );

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
                  // this.userForm['controls'].producer['controls'].customUrl.setErrors({ 'invalid': true });
                } else {
                  this.customUrlDuplicateExists = false;
                }
              }
            );
          return val;
        })
      .subscribe(valid => console.log('valid: ', valid));

  }

}
