// import { Component, OnInit, Input, OnChanges, NgZone, ViewChild, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';// Avoid name not found warnings

// import { Router } from '@angular/router';
// // import { } from 'googlemaps';
// // import { google } from '@google/maps';
// // Avoid name not found warnings
// // declare const google: any;

// import { MapsAPILoader } from '@agm/core';
// // import { AgmMap } from '@agm/core';
// import { Subscription } from 'rxjs/Subscription';

// import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { ApiService } from '../../core/api.service';
// import { UserService } from '../../core/services/user/user.service';

// @Component({
//   selector: 'app-location-notification-sign-up-modal',
//   templateUrl: './location-notification-sign-up-modal.component.html',
//   styleUrls: ['./location-notification-sign-up-modal.component.scss']
// })
// export class LocationNotificationSignUpModalComponent implements OnInit, OnChanges, OnDestroy {

//   locationSearchDisplay: boolean = false;

//   public latitude: number;
//   public longitude: number;
//   public searchControl: FormControl;
//   public zoom: number;
//   @ViewChild('search') public searchElementRef: ElementRef;
//   // @ViewChild(AgmMap) public agmMap: AgmMap;
//   lat: number = 51.678418;
//   lng: number = 7.809007;
//   streetNumber: number;
//   route: any;
//   address: string;
//   city: string;
//   province: string;
//   postalCode: string;
//   country: string;

//   submitting: boolean = false;
//   error: any;
//   @Output() accountEdited = new EventEmitter<boolean>();

//   locationNotificationArray = [];
//   currentLocation: any;

//   constructor(private fb: FormBuilder,
//               public activeModal: NgbActiveModal,
//               private apiService: ApiService,
//               private mapsAPILoader: MapsAPILoader,
//               private ngZone: NgZone,
//               private router: Router) { }

//   ngOnChanges() {};

//   ngOnInit() {
    
//     // ***** LOCATION INIT CODE ******
//     // set google maps defaults
//     this.zoom = 8;
    
//     // create search FormControl
//     this.searchControl = new FormControl();

//     // set current position
//     // this.setCurrentPosition();

//     // load Places Autocomplete
//     this.mapsAPILoader.load().then(() => {
//       let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
//         types: ["geocode"]
//       });
//       autocomplete.addListener("place_changed", () => {
//         this.ngZone.run(() => {
//           // get the place result
//           let place: google.maps.places.PlaceResult = autocomplete.getPlace();

//           // verify result
//           if (place.geometry === undefined || place.geometry === null) {
//             return;
//           }

//           console.log('place: ', place);
//           this.fillAddress(place);

//           // set latitude, longitude and zoom
//           this.latitude = place.geometry.location.lat();
//           this.longitude = place.geometry.location.lng();
//           this.zoom = 12;
//         });
//       });
//     });

//   };

//   onAddLocation() {
//     this.locationNotificationArray.push(this.currentLocation);
//   }

//   toggleLocationSearch() {
//     this.locationSearchDisplay = !this.locationSearchDisplay;
//   };

//   // resizeMap() {
//   //   this.agmMap.triggerResize();
//   // };

//   onSubmit() {
//     this.submitting = true;
        
//   };

//   private fillAddress(place) {
//     // this.clearAddress();
//     this.parseAddressComponents(place.address_components);
//     this.lat = place.geometry.location.lat();
//     this.lng = place.geometry.location.lng();
//     if (this.streetNumber && this.route) {
//       this.address = this.streetNumber + ' ' + this.route;
//     };
//     this.latitude = this.lat;
//     this.longitude = this.lng;
//   };

//   private parseAddressComponents(components) {
//     for (let i = 0; i < components.length; i++) {
//       let types = components[i].types;
//       for (let j = 0; j < types.length; j++) {
//         let result = types[j];
//         if (result === 'street_number') {
//           this.streetNumber = components[i].short_name;
//         }
//         if (result === 'route') {
//           this.route = components[i].short_name;
//         }
//         if (result === 'locality' || result === 'sublocality') {
//           this.city = components[i].short_name;
//           console.log('city: ', this.city);
//         }
//         if (result === 'administrative_area_level_1') {
//           this.province = components[i].short_name;
//         }
//         if (result === 'postal_code') {
//           this.postalCode = components[i].short_name;
//         }
//         if (result === 'country') {
//           this.country = components[i].short_name;
//         }
//       }
//     }
//   };

//   handleSubmitSuccess(result) {
//     this.submitting = false;
//     this.accountEdited.emit(true);
//     this.activeModal.close();
//   };

//   handleSubmitError(err) {
//     console.error(err);
//     this.submitting = false;
//     this.error = true;
//   };

//   ngOnDestroy() {

//   };


// }


import { Component, OnInit, Input, OnChanges, NgZone, ViewChild, ElementRef, OnDestroy, Output, EventEmitter } from '@angular/core';// Avoid name not found warnings

import { Router } from '@angular/router';
// import { } from 'googlemaps';
// import { google } from '@google/maps';
// Avoid name not found warnings
// declare const google: any;

import { MapsAPILoader, MouseEvent } from '@agm/core';
// import { AgmMap } from '@agm/core';
import { Subscription } from 'rxjs/Subscription';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ApiService } from '../../core/api.service';
import { UserService } from '../../core/services/user/user.service';

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
}

@Component({
  selector: 'app-location-notification-sign-up-modal',
  templateUrl: './location-notification-sign-up-modal.component.html',
  styleUrls: ['./location-notification-sign-up-modal.component.scss']
})

export class LocationNotificationSignUpModalComponent implements OnInit, OnChanges, OnDestroy {

  locationSearchDisplay: boolean = false;

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  @ViewChild('search') public searchElementRef: ElementRef;
  // @ViewChild(AgmMap) public agmMap: AgmMap;
  lat: number = 50.0756;
  lng: number = -101.5130;
  streetNumber: number;
  route: any;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;

  submitting: boolean = false;
  error: any;
  @Output() accountEdited = new EventEmitter<boolean>();

  locationNotificationArray: marker[] = [
    {
      lat: 50.1436,
      lng: -101.6668,
      label: 'Moosomin, SK'
    },
    {
      lat: 50.3299,
      lng: -102.2666,
      label: 'Whitewood, SK'
    },
    {
      lat: 49.8487,
      lng: -100.9325,
      label: 'Virden, MB'
    }
  ];
  currentLocation: any;

  // mapClicked($event: MouseEvent) {
  //   this.markers.push({
  //     lat: $event.coords.lat,
  //     lng: $event.coords.lng,
  //     draggable: true
  //   });
  // }
  
  // markerDragEnd(m: marker, $event: MouseEvent) {
  //   console.log('dragEnd', m, $event);
  // }
  
  // markers: marker[] = [
	//   {
	// 	  lat: 51.673858,
	// 	  lng: 7.815982,
  //     label: 'A'
	//   },
	//   {
	// 	  lat: 51.373858,
	// 	  lng: 7.215982,
	// 	  label: 'B'
	//   },
	//   {
	// 	  lat: 51.723858,
	// 	  lng: 7.895982,
	// 	  label: 'C'
	//   }
  // ]; 

  constructor(private fb: FormBuilder,
              public activeModal: NgbActiveModal,
              private apiService: ApiService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              private router: Router) { }

  ngOnChanges() {};

  ngOnInit() {
    
    // ***** LOCATION INIT CODE ******
    // set google maps defaults
    this.zoom = 8;
    
    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    // this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["geocode"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          console.log('place: ', place);
          this.fillAddress(place);

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

  };

  onAddLocation() {
    this.locationNotificationArray.push(this.currentLocation);
  }

  toggleLocationSearch() {
    this.locationSearchDisplay = !this.locationSearchDisplay;
  };

  // resizeMap() {
  //   this.agmMap.triggerResize();
  // };

  onSubmit() {
    this.submitting = true;
        
  };

  private fillAddress(place) {
    // this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.lat = place.geometry.location.lat();
    this.lng = place.geometry.location.lng();
    if (this.streetNumber && this.route) {
      this.address = this.streetNumber + ' ' + this.route;
    };
    this.latitude = this.lat;
    this.longitude = this.lng;
  };

  private parseAddressComponents(components) {
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
        if (result === 'locality' || result === 'sublocality') {
          this.city = components[i].short_name;
          console.log('city: ', this.city);
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

  handleSubmitSuccess(result) {
    this.submitting = false;
    this.accountEdited.emit(true);
    this.activeModal.close();
  };

  handleSubmitError(err) {
    console.error(err);
    this.submitting = false;
    this.error = true;
  };

  ngOnDestroy() {

  };


}