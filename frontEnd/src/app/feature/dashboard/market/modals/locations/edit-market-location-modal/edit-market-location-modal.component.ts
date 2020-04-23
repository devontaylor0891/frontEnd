import { Component, OnInit, ViewChild, NgZone, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import {  FormGroup, Validators, FormControl } from '@angular/forms';

import { LocationService } from '../../../../../../core/services/location/location.service';
import { ApiService } from '../../../../../../core/api.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


import { google } from '@google/maps';
declare var google: any;
import { MapsAPILoader } from '@agm/core';
import { AgmMap, MouseEvent as AgmMouseEvent } from '@agm/core';

@Component({
  selector: 'app-edit-market-location-modal',
  templateUrl: './edit-market-location-modal.component.html',
  styleUrls: ['./edit-market-location-modal.component.scss']
})
export class EditMarketLocationModalComponent implements OnInit {

  @Input() location: any;
  locationForm: FormGroup;

  locationObject: any;

  @Output() locationEdited = new EventEmitter<boolean>();

  locationSearchDisplay = false;

  @ViewChild('locationSearch') public searchElementRef: ElementRef;
  @ViewChild(AgmMap) public agmMap: AgmMap;
  public locationSearchControl: FormControl;
  public latitude: number;
  public longitude: number;
  public markerLatitude: number;
  public markerLongitude: number;
  public zoom: number;

  lat: number;
  lng: number;
  streetNumber: number;
  route: any;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  selectedAddress: any;
  selectedCityProvince: any;
  selectedLocation: any;

  submitting = false;
  error = false;

  constructor(private mapsAPILoader: MapsAPILoader,
              public activeModal: NgbActiveModal,
              private ngZone: NgZone,
              private locationService: LocationService,
              private apiService: ApiService) { }

  ngOnInit() {
    console.log('location passed in: ', this.location);

    this.locationObject = this.location;
    this.selectedAddress = this.location.address;
    this.selectedLocation = this.location.city + ', ' + this.location.province;

    this.locationForm = new FormGroup({
      locationName: new FormControl(this.location.locationName, [Validators.required]),
      description: new FormControl(this.location.description),
      timeframe: new FormControl(this.location.timeframe, [Validators.required]),
      latitude: new FormControl(this.location.latitude, [Validators.required]),
      longitude: new FormControl(this.location.longitude, [Validators.required]),
      address: new FormControl(this.location.address),
      city: new FormControl(this.location.city, [Validators.required]),
      province: new FormControl(this.location.province, [Validators.required]),
      marketId: new FormControl(this.location.marketId, [Validators.required])
    });

    // create search FormControl
    this.locationSearchControl = new FormControl('', [Validators.required]);
    // ***** LOCATION INIT CODE ******
    // set google maps defaults
    this.zoom = 8;
    this.latitude = 50.5555;
    this.longitude = -100.5555;

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

          console.log('place: ', place);
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

  fillAddress(place) {
    this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.locationForm.patchValue({ latitude: place.geometry.location.lat() });
    this.locationForm.patchValue({ longitude: place.geometry.location.lng() });
    this.selectedLocation = this.city + ', ' + this.province;
    this.locationForm.patchValue({ city: this.city });
    this.locationForm.patchValue({ province: this.province });
    this.locationSearchControl.setValue(this.selectedLocation);
    if (this.streetNumber && this.route) {
      this.address = this.streetNumber + ' ' + this.route;
      this.locationForm.patchValue({ address: this.address });
      this.selectedAddress = this.streetNumber + ' ' + this.route;
      this.selectedLocation = this.address + ', ' + this.city + ', ' + this.province;
      this.locationSearchControl.setValue(this.selectedLocation);
    };
    // this.latitude = this.lat;
    // this.longitude = this.lng;
    console.log('selectedaddress: ', this.selectedLocation);
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

  clearAddress() {
    this.city = '';
    this.province = '';
    this.streetNumber = null;
    this.route = '';
    this.selectedAddress = '';
    this.selectedLocation = '';
  };

  onLocationSubmit() {
    this.buildLocationObject();
  };

  buildLocationObject() {
    this.locationObject.locationName = this.locationForm.value.locationName || '';
    this.locationObject.description = this.locationForm.value.description || '';
    this.locationObject.timeframe = this.locationForm.value.timeframe;
    this.locationObject.latitude = this.locationForm.value.latitude;
    this.locationObject.longitude = this.locationForm.value.longitude;
    this.locationObject.address = this.selectedAddress || '';
    this.locationObject.city = this.locationForm.value.city;
    this.locationObject.province = this.locationForm.value.province;
    this.locationObject.marketId = this.locationForm.value.marketId;
    console.log('locationObj: ', this.locationObject);
    this.apiService.patchMarketLocation(this.location.id, this.locationObject)
      .subscribe(
        result => {
          this.handleSubmitSuccess(result);
        },
        err => this.handleSubmitError(err)
      );
  };

  resizeMap() {
    this.agmMap.triggerResize();
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
    this.markerLatitude = $event.coords.lat
    this.markerLongitude =  $event.coords.lng;
    this.latitude = this.markerLatitude;
    this.longitude = this.markerLongitude;
    this.locationService.codeLatLng(this.markerLatitude, this.markerLongitude);
  };

  toggleLocationSearch() {
    this.clearAddress();
    this.locationSearchDisplay = !this.locationSearchDisplay;
  };

  handleSubmitSuccess(result) {
    this.locationEdited.emit(true);
    this.submitting = false;
    this.activeModal.close();
  };

  handleSubmitError(err) {
    this.locationEdited.emit(false);
    console.error('error: ', err);
    this.submitting = false;
    this.error = true;
    this.activeModal.close();
  };

}
