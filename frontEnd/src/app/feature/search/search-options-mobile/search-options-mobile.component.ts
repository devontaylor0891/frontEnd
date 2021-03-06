// import { Component, OnInit, Input, NgZone, ViewChild, ElementRef, OnChanges, Output, EventEmitter } from '@angular/core';
// import { NgForm, FormControl, FormGroup } from '@angular/forms';

// // import { } from 'googlemaps';
// // import { google } from '@google/maps';
// declare const google: any;

// import { MapsAPILoader } from '@agm/core';
// import { AgmMap } from '@agm/core';

// import { SearchService } from '../../../core/services/search/search.service';
// import { LocationService } from '../../../core/services/location/location.service';

// @Component({
//   selector: 'app-search-options-mobile',
//   templateUrl: './search-options-mobile.component.html',
//   styleUrls: ['./search-options-mobile.component.scss']
// })
// export class SearchOptionsMobileComponent implements OnInit, OnChanges {

//   @Input() zeroResults: any;
//   @Output() switchEvent = new EventEmitter<any>();

//   deliveryTypes: any[];
//   categoriesList: any[];
//   submittedValues: any = {
//     categories: [],
//     deliveryTypes: []
//   };

//   locationUpdate: boolean = false;
//   submitting: boolean = false;
//   currentRadius: number = 50;
//   latitude: number;
//   longitude: number;
//   cityProvince: string;
 
//   address: string;
//   city: string;
//   province: string;

//   searchOptions = {
//     latitude: null,
//     longitude: null,
//     radius: null
//   };

//   activeLink = 'locationLink';

//   public searchControl: FormControl;
//   @ViewChild('search') public searchElementRef: ElementRef;
//   zoom: number;

//   constructor(private searchService: SearchService,
//               private locationService: LocationService,
//               private mapsAPILoader: MapsAPILoader,
//               private ngZone: NgZone) {

//     this.deliveryTypes = [
//       {
//         type: '',
//         checkboxValue: null
//       }
//     ];

//     this.categoriesList = [
//       {
//         category: '',
//         checkboxValue: null
//       }
//     ];

//   };

//   ngOnChanges() {
//     // console.log('zeroResults: ', this.zeroResults);
//   };

//   ngOnInit() {

//     // subscribe to the delivery types
//     this.searchService.getDeliveryTypes()
//       .subscribe(
//         results => {
//           for (let i = 0; i < results.length; i++) {
//             let newDel = {
//               type: results[i],
//               checkboxValue: true
//             };
//             this.deliveryTypes[i] = newDel;
//           };
//         }
//       );

//     // subscribe to the category types
//     this.searchService.getCategories()
//       .subscribe(
//         results => {
//           for (let i = 0; i < results.length; i++) {
//             let newCat = {
//               category: results[i],
//               checkboxValue: true
//             };
//             this.categoriesList[i] = newCat;
//           };
//         }
//       );

//     this.locationService.getCityProvince()
//       .subscribe(
//         results => {
//           this.cityProvince = results;
//           console.log('searchOptionsMobile cityProvince: ', this.cityProvince);
//         }
//       );

//     this.locationService.getLocation()
//       .subscribe(
//         result => {
//           console.log('searchOptionsMobile getLocation called');
//           this.latitude = result.coords.latitude;
//           this.longitude = result.coords.longitude;
//           console.log('searchOptionsMobile getLocation results: ', this.latitude + ' ' + this.longitude);
//         }
//       )

//     // create search FormControl
//     this.searchControl = new FormControl('');


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
//           // console.log('place: ', place);
//           this.fillAddress(place);
//         });
//       });
//     });

//   };

//   switchToResults() {
//     this.switchEvent.emit('results');
//   }

//   setDistance(distance) {
//     console.log('searchOptionsMobile filtering by distance: ', distance);
//     console.log('searchOptionsMobile lat: ', this.latitude);
//     console.log('searchOptionsMobile long: ', this.longitude);
//     this.currentRadius = distance;
//     this.searchService.filterByDistance(distance, this.latitude, this.longitude);
//     this.switchToResults();
//   };

//   onSubmit(form: NgForm) {
//     // empty the submitted values
//     this.submittedValues = {
//       categories: [],
//       deliveryTypes: []
//     };
//     // separate and loop through each of the values
//     for (let property in form.value) {
//       if (form.value.hasOwnProperty(property)) {
//         let propValue = form.value[property]; // get the returned values
//         // if the returned value is true
//         if (propValue) {
//           // separate the properties by their type (category or delivery)
//           if (property.split('.')[0] === 'c') {
//             // add the property to the appropriate array
//             this.submittedValues.categories.push(property.split('.')[1]);
//           } else {
//             this.submittedValues.deliveryTypes.push(property.split('.')[1]);
//           }
//         }
//       }
//     }
//     // console.log('submitted values: ', this.submittedValues);
//     // then send the submitted values to search service to update the view
//     this.searchService.onFilter(this.submittedValues);
//     this.switchToResults();
//   }

//   reset(form: NgForm) {
//     // reset all checkboxes to true
//     for (let i = 0; i < this.deliveryTypes.length; i++) {
//       this.deliveryTypes[i].checkboxValue = true;
//     }
//     for (let i = 0; i < this.categoriesList.length; i++) {
//       this.categoriesList[i].checkboxValue = true;
//     }
//     this.searchService.onReset();
//     this.submittedValues = {
//       categories: [],
//       deliveryTypes: []
//     };
//     this.switchToResults();
//   };

//   // onRadiusSubmit(radius: number) {
//   //   this.submitting = true;
//   //   if (this.currentRadius === radius) {
//   //     this.submitting = false;
//   //     return;
//   //   } else {
//   //     this.searchOptions.latitude = this.latitude;
//   //     this.searchOptions.longitude = this.longitude;
//   //     this.searchOptions.radius = 25;
//   //     this.searchService.loadAll(this.searchOptions);
//   //   }

//   // };

//   changeCity() {
//     this.locationUpdate = !this.locationUpdate;
//     // this.runMapLoader();
//   };

//   private fillAddress(place) {
//     this.currentRadius = 50;
//     // this.clearAddress();
//     this.parseAddressComponents(place.address_components);
//     this.latitude = place.geometry.location.lat();
//     this.longitude = place.geometry.location.lng();
//     console.log('searchOptionsMobile lat and long of new location: ', this.latitude + ', ' + this.longitude);
//     // have location service re-emit the city and province
//     console.log('searchOptionsMobile updating city and province in location service');
//     this.locationService.updateCityProvince(this.city + ', ' + this.province);
//     // have the search service make a new call
//     this.searchOptions.latitude = this.latitude;
//     this.searchOptions.longitude = this.longitude;
//     this.searchOptions.radius = 50;
//     this.searchService.loadAll(this.searchOptions);
//     // pass these lat/long out to map
//     this.locationUpdate = !this.locationUpdate;
//     this.switchToResults();
//   };

//   private parseAddressComponents(components) {
//     for (let i = 0; i < components.length; i++) {
//       let types = components[i].types;
//       for (let j = 0; j < types.length; j++) {
//         let result = types[j];
//         if (result === 'locality' || result === 'sublocality') {
//           this.city = components[i].short_name;
//         };
//         if (result === 'administrative_area_level_1') {
//           this.province = components[i].short_name;
//         };
//       };
//     };
//   };

//   setActive(arg) {
//     this.activeLink = arg;
//     console.log('searchOptionsMobile activeLink:' , this.activeLink);
//   }

// }

import { Component, OnInit, Input, NgZone, ViewChild, ElementRef, OnChanges, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

// import { } from 'googlemaps';
// import { google } from '@google/maps';
declare const google: any;

import { MapsAPILoader } from '@agm/core';
import { AgmMap } from '@agm/core';

import { SearchService } from '../../../core/services/search/search.service';
import { LocationService } from '../../../core/services/location/location.service';

@Component({
  selector: 'app-search-options-mobile',
  templateUrl: './search-options-mobile.component.html',
  styleUrls: ['./search-options-mobile.component.scss']
})
export class SearchOptionsMobileComponent implements OnInit, OnChanges {

  @Input() zeroResults: any;
  @Output() switchEvent = new EventEmitter<any>();
  @Input() location: any = location;

  deliveryTypes: any[];
  categoriesList: any[];
  submittedValues: any = {
    categories: [],
    deliveryTypes: []
  };

  locationUpdate: boolean = false;
  submitting: boolean = false;
  currentRadius: number;
  latitude: number;
  longitude: number;
  cityProvince: string;
 
  address: string;
  city: string;
  province: string;

  searchOptions = {
    latitude: null,
    longitude: null,
    radius: null
  };

  activeLink = 'locationLink';

  public searchControl: FormControl;
  @ViewChild('search') public searchElementRef: ElementRef;
  zoom: number;

  constructor(private searchService: SearchService,
              private locationService: LocationService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {

    this.deliveryTypes = [
      {
        type: '',
        checkboxValue: null
      }
    ];

    this.categoriesList = [
      {
        category: '',
        checkboxValue: null
      }
    ];

    this.currentRadius = this.searchService.currentDistanceSelected;

  };

  ngOnChanges() {
    // console.log('zeroResults: ', this.zeroResults);
    // console.log('location recieved into search options mobile: ', this.location);
    this.latitude = this.location.latitude;
    this.longitude = this.location.longitude;
    this.cityProvince = this.location.cityProvince;
  };

  ngOnInit() {

    // subscribe to the delivery types
    this.searchService.getDeliveryTypes()
      .subscribe(
        results => {
          for (let i = 0; i < results.length; i++) {
            let newDel = {
              type: results[i],
              checkboxValue: true
            };
            this.deliveryTypes[i] = newDel;
          };
        }
      );

    // subscribe to the category types
    this.searchService.getCategories()
      .subscribe(
        results => {
          for (let i = 0; i < results.length; i++) {
            let newCat = {
              category: results[i],
              checkboxValue: true
            };
            this.categoriesList[i] = newCat;
          };
        }
      );

    // create search FormControl
    this.searchControl = new FormControl('');


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
          // console.log('place: ', place);
          this.currentRadius = 50;
          // this.fillAddress(place);
          this.locationService.fillAddress(place);
          this.switchToResults();
        });
      });
    });

  };

  switchToResults() {
    this.switchEvent.emit('results');
  }

  setDistance(distance) {
    // console.log('searchOptionsMobile filtering by distance: ', distance);
    // console.log('searchOptionsMobile lat: ', this.latitude);
    // console.log('searchOptionsMobile long: ', this.longitude);
    this.currentRadius = distance;
    this.searchService.filterByDistance(distance, this.latitude, this.longitude);
    this.switchToResults();
  };

  onSubmit(form: NgForm) {
    // empty the submitted values
    this.submittedValues = {
      categories: [],
      deliveryTypes: []
    };
    // separate and loop through each of the values
    for (let property in form.value) {
      if (form.value.hasOwnProperty(property)) {
        let propValue = form.value[property]; // get the returned values
        // if the returned value is true
        if (propValue) {
          // separate the properties by their type (category or delivery)
          if (property.split('.')[0] === 'c') {
            // add the property to the appropriate array
            this.submittedValues.categories.push(property.split('.')[1]);
          } else {
            this.submittedValues.deliveryTypes.push(property.split('.')[1]);
          }
        }
      }
    }
    // console.log('submitted values: ', this.submittedValues);
    // then send the submitted values to search service to update the view
    this.searchService.onFilter(this.submittedValues);
    this.switchToResults();
  }

  reset(form: NgForm) {
    // reset all checkboxes to true
    for (let i = 0; i < this.deliveryTypes.length; i++) {
      this.deliveryTypes[i].checkboxValue = true;
    }
    for (let i = 0; i < this.categoriesList.length; i++) {
      this.categoriesList[i].checkboxValue = true;
    }
    this.searchService.onReset();
    this.submittedValues = {
      categories: [],
      deliveryTypes: []
    };
    this.switchToResults();
  };

  changeCity() {
    this.locationUpdate = !this.locationUpdate;
    // this.runMapLoader();
  };

  setActive(arg) {
    this.activeLink = arg;
  };

}
