import { Component, OnInit, Input, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { LocationService } from '../../../core/services/location/location.service';

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
export class AddNewProducerComponent implements OnInit {

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

  constructor(private locationService: LocationService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {}

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
      this.resizeMap();

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
  }

}
