// provided in App Module

// called in ...
// Table Layout Comp
// Search comp
// search options comp

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

// import { } from 'googlemaps';
// Avoid name not found warnings
declare var google: any;

import { MapsAPILoader } from '@agm/core';
import { AgmMap } from '@agm/core';
// import { google } from '@google/maps';

@Injectable()
export class LocationService {

    geocoder: any;
    lat: any;
    lng: any;
    address: string = '';
    city: string;
    province: string;
    cityProvince: string = '';
    results: any;
    geoCoderResults: any = {};

    dataStore = {
        location: {
            latitude: null,
            longitude: null,
            cityProvince: ''
        }
    };

    geoOptions = {
        enableHighAccuracy: false,
        timeout: 5000, // Wait 5 seconds
        maximumAge: 300000 //  Valid for 5 minutes
    };

    fallbackPosition = {
        coords: {
            latitude: 50.1391360,
            longitude: -101.6659968
        }
    }

    _city: BehaviorSubject<string>;
    _province: BehaviorSubject<string>;
    _cityProvince: BehaviorSubject<string>;
    _address: BehaviorSubject<string>;
    _location: BehaviorSubject<any>;

    constructor(private mapsAPILoader: MapsAPILoader,
                private ngZone: NgZone) {

        this._city = <BehaviorSubject<string>>new BehaviorSubject('');
        this._province = <BehaviorSubject<string>>new BehaviorSubject('');
        this._cityProvince = <BehaviorSubject<string>>new BehaviorSubject('');
        this._address = <BehaviorSubject<string>>new BehaviorSubject('');
        this._location = <BehaviorSubject<any>>new BehaviorSubject(null);

        console.log('location service fired up');

    };

    getUserLocation() {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // this.lat = position.coords.latitude;
                // this.lng = position.coords.longitude;
                this.dataStore.location.latitude = position.coords.latitude;
                this.dataStore.location.longitude = position.coords.longitude;
                this.codeLatLng(this.dataStore.location.latitude, this.dataStore.location.longitude);
                console.log('position: ', position);
                // observer.next(position);
                // observer.complete();
            },
            (error) => {
                this.lat = 50.1391360, // fallback lat 
                this.lng = -101.6659968  // fallback lng
                alert('Onlylocalfood will now load from a default location. You may update the location at any time.');
                // console.log("Fallback position: ", this.fallbackPosition);
                // observer.next(this.fallbackPosition);
                // observer.error(error)
                // observer.complete();
            },
            this.geoOptions
        );
      } else {
        this.lat = 50.1391360, // fallback lat 
        this.lng = -101.6659968  // fallback lng
        alert('Onlylocalfood will now load from a default location. You may update the location at any time.');
          // observer.error('Unsupported Browser');
      }
    }

    getLocation(): Observable<any> {
        return Observable.create(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                        console.log('position: ', position);
                        observer.next(position);
                        observer.complete();
                    },
                    (error) => {
                        this.lat = 50.1391360, // fallback lat 
                        this.lng = -101.6659968  // fallback lng
                        alert('Onlylocalfood will now load from a default location. You may update the location at any time.');
                        // console.log("Fallback position: ", this.fallbackPosition);
                        observer.next(this.fallbackPosition);
                        // observer.error(error)
                        observer.complete();
                    },
                    this.geoOptions
                );
            } else {
                observer.error('Unsupported Browser');
            }
        });
    };

    updateLocation() {

    };

    getCity(): Observable<string> {
        return this._city.asObservable();
    };

    getProvince(): Observable<string> {
        return this._province.asObservable();
    };

    getCityProvince(): Observable<string> {
        return this._cityProvince.asObservable();
    };

    getAddress(): Observable<string> {
        return this._address.asObservable();
    };

    getFullLocation(): Observable<any> {
      return this._location.asObservable();
    };

    codeLatLng(lat, lng) {
        this.mapsAPILoader.load().then(() => {
            // console.log('google.maps from location service: ', google.maps);
            this.geocoder = new google.maps.Geocoder();
            let latlng = new google.maps.LatLng(lat, lng);
            let self = this;
            this.results = this.geocoder.geocode({'location': latlng}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    self.geoCoderResults = results;
                    // empty any current values
                    this.streetNumber = '';
                    this.route = '';
                    this.city = '';
                    this.province = '';
                    // console.log('geocoerresults: ', self);
                    if (results[1]) {
                        let components = results[1].address_components;
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
                                if (result === 'locality' || result === 'sublocality' || result === 'administrative_area_level_3') {
                                    this.city = components[i].short_name;
                                }
                                if (result === 'administrative_area_level_1') {
                                    this.province = components[i].short_name;
                                }
                                // console.log('street number: ', this.streetNumber);
                                // console.log('route: ', this.route);
                                if (!this.route && !this.streetNumber) {
                                    self.address = '';
                                } else if (!this.streetNumber) {
                                    self.address = this.route
                                } else {
                                    self.address = this.streetNumber + ' ' + this.route;
                                }
                                // console.log('self.address: ', self.address);
                                self.city = this.city;
                                self.province = this.province;
                                self.cityProvince = this.city + ', ' + this.province;
                                if ((i === components.length - 1) && (j === types.length - 1)) {
                                   self.ngZone.run(() => {
                                    // console.log('ngzone running: ');
                                    // console.log('self.cityProvince: ', self._cityProvince);
                                    // console.log('self.address: ', self._address);
                                    self._address.next(self.address);
                                    self._city.next(self.city);
                                    self._province.next(self.province);
                                    self._cityProvince.next(self.cityProvince);
                                    self.dataStore.location.cityProvince = self.cityProvince;
                                    self._location.next(self.dataStore.location);
                                    // console.log('self.cityProvince: ', self._cityProvince);
                                    // console.log('self.address: ', self._address);
                                    })
                                }
                                
                            //   this.ngZone.run(() => {
                            //       this.cityProvince = components[i].short_name + ', ' + components[i].short_name;
                            //       this._cityProvince.next(this.cityProvince);
                            //   });
                            }
                          }
                    } else {
                    alert("No results found");
                    };
                } else {
                    alert("Geocoder failed due to: " + status);
                };
            });
        });
    };

    updateCityProvince(cityProvinceString) {
        this.cityProvince = cityProvinceString;
        this._cityProvince.next(this.cityProvince);
    }

}