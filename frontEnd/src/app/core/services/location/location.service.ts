// provided in App Module

// called in ...
// Table Layout Comp
// Search comp
// search options comp

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SearchService } from '../search/search.service';

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
    address = '';
    city: string;
    province: string;
    cityProvince = '';
    results: any;
    geoCoderResults: any = {};

    searchOptions = {
        latitude: null,
        longitude: null,
        radius: null
      };

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
                private ngZone: NgZone,
                private searchService: SearchService) {

        this._city = <BehaviorSubject<string>>new BehaviorSubject('');
        this._province = <BehaviorSubject<string>>new BehaviorSubject('');
        this._cityProvince = <BehaviorSubject<string>>new BehaviorSubject('');
        this._address = <BehaviorSubject<string>>new BehaviorSubject('');
        this._location = <BehaviorSubject<any>>new BehaviorSubject(null);

        // console.log('location service fired up');

    };

    // never called
    getUserLocation() {
      if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.dataStore.location.latitude = position.coords.latitude;
                this.dataStore.location.longitude = position.coords.longitude;
                this.codeLatLng(this.dataStore.location.latitude, this.dataStore.location.longitude);
            },
            (error) => {
                this.lat = 50.1391360, // fallback lat
                this.lng = -101.6659968  // fallback lng
                this.dataStore.location.latitude = 50.1391360;
                this.dataStore.location.longitude = -101.6659968;
                this.codeLatLng(this.dataStore.location.latitude, this.dataStore.location.longitude);
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
        this.dataStore.location.latitude = 50.1391360;
        this.dataStore.location.longitude = -101.6659968;
        this.codeLatLng(this.dataStore.location.latitude, this.dataStore.location.longitude);
        alert('Onlylocalfood will now load from a default location. You may update the location at any time.');
          // observer.error('Unsupported Browser');
      }
    //   this.updateLocation(this.dataStore.location);
    }

    // search options (not mobile), search map, search comp
    getLocation(): Observable<any> {
        return Observable.create(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                        // console.log('position getLocation: ', position);
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

    // never called
    updateLocation(location) {
        this._location.next(location);
        // have the search service make a new call
        this.searchOptions.latitude = this.dataStore.location.latitude;
        this.searchOptions.longitude = this.dataStore.location.longitude;
        this.searchOptions.radius = 50;
        this.searchService.loadAll(this.searchOptions);
    };

    // called from search.comp
    getFullLocation(): Observable<any> {
      return this._location.asObservable();
    };

    // called from search options and mobile
    updateCityProvince(cityProvinceString) {
        this.cityProvince = cityProvinceString;
        this._cityProvince.next(this.cityProvince);
    };

    // called from search options when new community is searched and provided
    fillAddress(place) {
        this.dataStore.location.latitude = place.geometry.location.lat();
        this.dataStore.location.longitude = place.geometry.location.lng();
        this.parseAddressComponents(place.address_components);

        // console.log('searchOptionsMobile lat and long of new location: ', this.latitude + ', ' + this.longitude);
        // have location service re-emit the city and province
        // console.log('searchOptionsMobile updating city and province in location service');
        // this.updateCityProvince(this.city + ', ' + this.province);
        // this.updateLocation()
        // have the search service make a new call
        // this.searchOptions.latitude = this.latitude;
        // this.searchOptions.longitude = this.longitude;
        // this.searchOptions.radius = 50;
        // this.searchService.loadAll(this.searchOptions);
        // // pass these lat/long out to map
        // this.locationUpdate = !this.locationUpdate;
        // this.switchToResults();
    };

    private parseAddressComponents(components) {
        let city, province;
        for (let i = 0; i < components.length; i++) {
            const types = components[i].types;
            for (let j = 0; j < types.length; j++) {
              const result = types[j];
                if (result === 'locality' || result === 'sublocality') {
                    city = components[i].short_name;
                };
                if (result === 'administrative_area_level_1') {
                    province = components[i].short_name;
                };
            };
        };
        this.dataStore.location.cityProvince = city + ', ' + province;
        this.updateLocation(this.dataStore.location);
    };

    // used in updateProfile and editAccountModal, and called here too
    codeLatLng(lat, lng) {
        this.mapsAPILoader.load().then(() => {
            // console.log('google.maps from location service: ', google.maps);
            this.geocoder = new google.maps.Geocoder();
            const latlng = new google.maps.LatLng(lat, lng);
            const self = this;
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
                      const components = results[1].address_components;
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
                                    // self._location.next(self.dataStore.location);
                                    self.updateLocation(self.dataStore.location);
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
                    alert('No results found');
                    };
                } else {
                    alert('Geocoder failed due to: ' + status);
                };
            });
        });
    };

    // used in updateProfile and editAccountModal
    getCity(): Observable<string> {
        return this._city.asObservable();
    };

    // used in updateProfile and editAccountModal
    getProvince(): Observable<string> {
        return this._province.asObservable();
    };

    // used in updateProfile and editAccountModal
    getCityProvince(): Observable<string> {
        return this._cityProvince.asObservable();
    };

    // used in updateProfile and editAccountModal
    getAddress(): Observable<string> {
        return this._address.asObservable();
    };

}
