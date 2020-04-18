import { Component, OnInit, Input, ViewChild, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LocationService } from '../../../core/services/location/location.service';
import { ImageService } from '../../../core/services/image/image.service';
import { ApiService } from '../../../core/api.service';

import { Subscription } from 'rxjs/Subscription';

import { google } from '@google/maps';

declare var google: any;

import { MapsAPILoader } from '@agm/core';
import { AgmMap, MouseEvent as AgmMouseEvent } from '@agm/core';

@Component({
  selector: 'app-add-new-producer',
  templateUrl: './add-new-producer.component.html',
  styleUrls: ['./add-new-producer.component.scss']
})
export class AddNewProducerComponent implements OnInit, OnDestroy {

  @Input() producerForm: FormGroup;

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

  getCitySub: Subscription;
  getProvinceSub: Subscription;
  getCityProvinceSub: Subscription;
  getAddressSub: Subscription;

  selectedAddress: any;
  selectedCityProvince: any;
  selectedLocation: any;

  mapLocation: any;

  // image properties
  imageName = '';
  addingImage = false;
  imageUploading: boolean;
  imageUploadingSub: Subscription;
  imagePreviewSub: Subscription;
  newItemUploading = false;
  imagePreviewExists = false;

  customUrlObject: any;
  checkCustomUrlSubscription: Subscription;
  postCustomUrlSubscription: Subscription;
  getCustomUrlSubscription: Subscription;
  customUrlExists = false;
  noSpacesFormat = '[^/s]*';
  customUrlChanged = false;
  customUrlDuplicateExists = false;

  constructor(private locationService: LocationService,
              private imageService: ImageService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private apiService: ApiService) {}

  ngOnInit() {

    console.log('producerform: ', this.producerForm);

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
      console.log('form before placechange: ', this.producerForm.value);

      this.resizeMap();

      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['geocode']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          console.log('form after placechange: ', this.producerForm.value);
          console.log('imageName: ', this.imageName);
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

    this.getCitySub = this.locationService.getCity()
      .subscribe(
        result => {
          this.city = result;
        }
      );

    this.getProvinceSub = this.locationService.getProvince()
      .subscribe(
        result => {
          this.province = result;
        }
      );

    this.getCityProvinceSub = this.locationService.getCityProvince()
      .subscribe(
        result => {
          this.selectedCityProvince = result;
          if (!this.selectedAddress) {
            this.selectedLocation = this.selectedCityProvince;
          }
          if (this.selectedAddress) {
            this.selectedLocation = this.selectedAddress + ', ' + this.selectedCityProvince;
          }
          if (this.searchElementRef) {
            this.searchControl.setValue(this.selectedLocation);
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
          }
        }
      );

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
                  if (result[0] && result[0] !== this.producerForm['controls'].id.value && result[0].length !== 0) {
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

  fillAddress(place) {
    console.log('fill address form: ', this.producerForm.value);
    this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.lat = place.geometry.location.lat();
    this.producerForm.patchValue({ latitude: this.lat });
    this.lng = place.geometry.location.lng();
    this.producerForm.patchValue({ longitude: this.lng });
    this.selectedLocation = this.city + ', ' + this.province;
    this.producerForm.patchValue({ location: this.city });
    this.producerForm.patchValue({ province: this.province });
    this.searchControl.setValue(this.selectedLocation);
    if (this.streetNumber && this.route) {
      this.address = this.streetNumber + ' ' + this.route;
      this.producerForm.patchValue({ address: this.address });
      this.selectedAddress = this.streetNumber + ' ' + this.route;
      this.selectedLocation = this.address + ', ' + this.city + ', ' + this.province;
      this.searchControl.setValue(this.selectedLocation);
    };
    this.latitude = this.lat;
    this.longitude = this.lng;
    // make sure logoUrl is populated
    this.producerForm.patchValue({ logoUrl: this.imageName });
    console.log('after fill address form: ', this.producerForm.value);
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
  };

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
    this.imageName = this.producerForm.value.id + '/logo';
    this.producerForm.patchValue({ logoUrl: this.imageName });
    this.producerForm.patchValue({ addingImage: true });
    // add required validator to form
    this.producerForm.get('logoUrl').setValidators([Validators.required]);
    this.producerForm.get('logoUrl').updateValueAndValidity();
    console.log('form value: ', this.producerForm.value);
  };

  onCancelAddImage() {
    // remove image name
    this.imageName = '';
    this.producerForm.patchValue( {logoUrl: ''});
    // hide the image cropper
    this.producerForm.patchValue({ addingImage: false });
    // remove the required validator
    this.producerForm.get('logoUrl').clearValidators();
    this.producerForm.get('logoUrl').updateValueAndValidity();
    // reset the imageService
    this.imageService.reset();
    console.log('form value: ', this.producerForm.value);
  }

  clearAddress() {
    this.city = '';
    this.province = '';
    this.streetNumber = null;
    this.route = '';
    this.selectedAddress = '';
    this.selectedLocation = '';
  };

  resizeMap() {
    this.agmMap.triggerResize();
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
  };

}
