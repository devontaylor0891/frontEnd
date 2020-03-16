import { Component, OnInit, ViewChild, NgZone, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { LocationService } from '../../core/services/location/location.service';


import { google } from '@google/maps';
declare var google: any;
import { MapsAPILoader } from '@agm/core';
import { AgmMap, MouseEvent as AgmMouseEvent } from '@agm/core';

@Component({
  selector: 'app-add-market-location',
  templateUrl: './add-market-location.component.html',
  styleUrls: ['./add-market-location.component.scss']
})
export class AddMarketLocationComponent implements OnInit {

  locationsForm: FormGroup;

  locationObject = {
    locationName: null,
    description: null,
    timeframe: null,
    latitude: null,
    longitude: null,
    address: null,
    city: null,
    province: null
  }

  @Output() public addLocation = new EventEmitter<any>();

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

  constructor(private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private fb: FormBuilder,
              private locationService: LocationService) { }

  ngOnInit() {

    this.locationsForm = new FormGroup({
      locationName: new FormControl(''),
      description: new FormControl(''),
      timeframe: new FormControl('', [Validators.required])
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

  }

  fillAddress(place) {
    this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    this.selectedLocation = this.city + ', ' + this.province;
    this.locationSearchControl.setValue(this.selectedLocation);
    if (this.streetNumber && this.route) {
      this.address = this.streetNumber + ' ' + this.route;
      this.selectedAddress = this.streetNumber + ' ' + this.route;
      this.selectedLocation = this.address + ', ' + this.city + ', ' + this.province;
      this.locationSearchControl.setValue(this.selectedLocation);
    };
    this.latitude = this.lat;
    this.longitude = this.lng;
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
    this.locationObject.locationName = this.locationsForm.value.locationName || '';
    this.locationObject.description = this.locationsForm.value.description || '';
    this.locationObject.timeframe = this.locationsForm.value.timeframe;
    this.locationObject.latitude = this.lat;
    this.locationObject.longitude = this.lng;
    this.locationObject.address = this.selectedAddress;
    this.locationObject.city = this.city;
    this.locationObject.province = this.province;
    this.addLocation.emit(this.locationObject);
    console.log('locationObj: ', this.locationObject);
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
    // console.log('dragEnd');
    this.markerLatitude = $event.coords.lat
    this.markerLongitude =  $event.coords.lng;
    this.latitude = this.markerLatitude;
    this.longitude = this.markerLongitude;
    this.locationService.codeLatLng(this.markerLatitude, this.markerLongitude);
  };

}
