// // provided in App Module

// // called in ...
// // Table Layout Comp

// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

// @Injectable()
// export class LocationService {

//   constructor() { }

//   getLocation(): Observable<any> {
//     return Observable.create(observer => {
//         if(window.navigator && window.navigator.geolocation) {
//             window.navigator.geolocation.getCurrentPosition(
//                 (position) => {
//                     observer.next(position);
//                     observer.complete();
//                 },
//                 (error) => observer.error(error)
//             );
//         } else {
//             observer.error('Unsupported Browser');
//         }
//     });
// }

// }

// provided in App Module

// called in ...
// Table Layout Comp
// Search comp

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { AgmMap } from '@agm/core';

@Injectable()
export class LocationService {

    geocoder: google.maps.Geocoder;
    lat: any;
    lng: any;
    city: string;
    province: string;

    _city: BehaviorSubject<any>;

    constructor(private mapsAPILoader: MapsAPILoader,
                private ngZone: NgZone) {

        this._city = <BehaviorSubject<any>>new BehaviorSubject([]);
        // this.initialize();
         // load Places Autocomplete
    

    }

    getLocation(): Observable<any> {
        return Observable.create(observer => {
            if(window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                        console.log('position: ', position);
                        this.codeLatLng(this.lat, this.lng);
                        observer.next(position);
                        observer.complete();
                    },
                    (error) => observer.error(error)
                );
            } else {
                observer.error('Unsupported Browser');
            }
        });
    };

    getCity(): Observable<any> {
        return this._city.asObservable();
    };

      
    codeLatLng(lat, lng) {
        this.mapsAPILoader.load().then(() => {
            this.geocoder = new google.maps.Geocoder();
            let latlng = new google.maps.LatLng(lat, lng);
            this.geocoder.geocode({'location': latlng}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
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
                            }
                          }

                    console.log('city: ', this.city + ', ' + this.province);
                    } else {
                    alert("No results found");
                    };
                } else {
                    alert("Geocoder failed due to: " + status);
                };
            });
        });
    };

}