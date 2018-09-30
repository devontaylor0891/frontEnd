// provided in App Module

// called in ...
// Table Layout Comp
// Search comp
// search options comp

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

// import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { AgmMap } from '@agm/core';


@Injectable()
export class LocationService {

    geocoder: google.maps.Geocoder;
    lat: any;
    lng: any;
    city: string;
    province: string;
    cityProvince: string = '';
    location: any;
    results: any;
    geoCoderResults: any = {};

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

    _cityProvince: BehaviorSubject<string>;

    

    constructor(private mapsAPILoader: MapsAPILoader,
                private ngZone: NgZone) {

        this._cityProvince = <BehaviorSubject<string>>new BehaviorSubject('');

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
                        console.log("Fallback position: ", this.fallbackPosition);
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

    // getLocation(): Observable<any> {
    //     return Observable.create(observer => {
    //         if (window.navigator && window.navigator.geolocation) {
    //             window.navigator.geolocation.getCurrentPosition(this.userLocationFound, this.userLocationNotFound, this.geoOptions);
    //             setTimeout(function () {
    //                 if(!this.lat){
    //                     window.console.log("No confirmation from user, using fallback");
    //                     this.lat = -41.29247, // fallback lat 
    //                     this.lng = 174.7732  // fallback lng
    //                     console.log("Fallback set: ", this.lat, this.lng);
    //                 }else{
    //                     // observer.next(Position);
    //                     // observer.complete();
    //                     window.console.log("Location was set");
    //                 }
    //             }, this.geoOptions.timeout + 1000); // Wait extra second
    //         } else {
    //             observer.error('Unsupported Browser');
    //         }
    //     });
    // };

    // userLocationFound(position) {
    //     console.log('position: ', position);
    //     this.lat = position.coords.latitude,
    //     this.lng = position.coords.longitude
    //     console.log("User confirmed! Location found: " + this.lat + ", " + this.lng);
    // };

    // setFallback() {
    //     this.lat = -41.29247, // fallback lat 
    //     this.lng = 174.7732  // fallback lng
    //     console.log("Fallback set: ", this.lat, this.lng);
    // }

    // userLocationNotFound(error){
    //     // this.lat = -41.29247, // fallback lat 
    //     // this.lng = 174.7732  // fallback lng
    //     // console.log("Fallback set: ", this.lat, this.lng);
    //     switch(error.code) {
    //         case error.PERMISSION_DENIED:
    //             return console.log("User denied the request for Geolocation.")
    //         case error.POSITION_UNAVAILABLE:
    //             return console.log("Location information is unavailable.")
    //         case error.TIMEOUT:
    //             return console.log("The request to get user location timed out.")
    //         case error.UNKNOWN_ERROR:
    //             return console.log("An unknown error occurred.")
    //     }
    // };


    getCityProvince(): Observable<string> {
        return this._cityProvince.asObservable();
    };

    codeLatLng(lat, lng) {
        this.mapsAPILoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
            let latlng = new google.maps.LatLng(lat, lng);
            let self = this;
            this.results = this.geocoder.geocode({'location': latlng}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    self.geoCoderResults = results;
                    console.log('geocoerresults: ', self);
                    if (results[1]) {
                        let components = results[1].address_components;
                        for (let i = 0; i < components.length; i++) {
                            let types = components[i].types;
                            for (let j = 0; j < types.length; j++) {
                              let result = types[j];
                              if (result === 'locality' || result === 'sublocality') {
                                this.city = components[i].short_name;
                              }
                              if (result === 'administrative_area_level_1') {
                                this.province = components[i].short_name;
                              }
                              self.cityProvince = this.city + ', ' + this.province;
                              self.ngZone.run(() => {
                                self._cityProvince.next(self.cityProvince);
                              });
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