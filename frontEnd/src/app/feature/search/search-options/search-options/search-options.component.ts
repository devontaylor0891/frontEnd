// // import { Component, OnInit, OnChanges } from '@angular/core';
// // import { NgForm } from '@angular/forms';

// // import { SearchService } from '../../../../core/services/search/search.service';

// // @Component({
// //   selector: 'app-search-options',
// //   templateUrl: './search-options.component.html',
// //   styleUrls: ['./search-options.component.scss']
// // })
// // export class SearchOptionsComponent implements OnInit, OnChanges {

// //   deliveryTypes: any[];
// //   categoriesList: any[];
// //   submittedValues: any = {
// //     categories: [],
// //     deliveryTypes: []
// //   };

// //   constructor(private searchService: SearchService) {

// //     this.deliveryTypes = [
// //       {
// //         type: '',
// //         checkboxValue: null
// //       }
// //     ];

// //     this.categoriesList = [
// //       {
// //         category: '',
// //         checkboxValue: null
// //       }
// //     ];

// //   }

// //   ngOnChanges() {

// //   }

// //   ngOnInit() {

// //     // subscribe to the delivery types
// //     this.searchService.getDeliveryTypes()
// //       .subscribe(
// //         results => {
// //           for (let i = 0; i < results.length; i++) {
// //             let newDel = {
// //               type: results[i],
// //               checkboxValue: true
// //             };
// //             this.deliveryTypes[i] = newDel;
// //           };
// //         //  this.deliveryTypes = result;
// //         //  console.log("These are the delivery types from the subscription:");
// //         //  console.log(this.deliveryTypes);
// //         }
// //       );

// //     // subscribe to the category types
// //     this.searchService.getCategories()
// //       .subscribe(
// //         results => {
// //           for (let i = 0; i < results.length; i++) {
// //             let newCat = {
// //               category: results[i],
// //               checkboxValue: true
// //             };
// //             this.categoriesList[i] = newCat;
// //           };
// //           //this.categoriesList = results;
// //         }
// //       );

// //   }

// //   onSubmit(form: NgForm) {
// //     //empty the submitted values
// //     this.submittedValues = {
// //       categories: [],
// //       deliveryTypes: []
// //     };
// //     // separate and loop through each of the values
// //     for (let property in form.value) {
// //       if (form.value.hasOwnProperty(property)) {
// //         let propValue = form.value[property]; //get the returned values
// //         // if the returned value is true
// //         if (propValue) {
// //           //separate the properties by their type (category or delivery)
// //           if (property.split('.')[0] === 'c') {
// //             //add the property to the appropriate array
// //             this.submittedValues.categories.push(property.split('.')[1]);
// //           } else {
// //             this.submittedValues.deliveryTypes.push(property.split('.')[1]);
// //           }
// //         }
// //       }
// //     }
// //     //then send the submitted values to search service to update the view
// //     this.searchService.onFilter(this.submittedValues);
// //   }

// //   reset(form: NgForm) {
// //     // reset all checkboxes to true
// //     for (let i = 0; i < this.deliveryTypes.length; i++) {
// //       this.deliveryTypes[i].checkboxValue = true;
// //     }
// //     for (let i = 0; i < this.categoriesList.length; i++) {
// //       this.categoriesList[i].checkboxValue = true;
// //     }
// //     this.searchService.onReset();
// //     this.submittedValues = {
// //       categories: [],
// //       deliveryTypes: []
// //     };
// //   }

// // }


// import { Component, OnInit, Input } from '@angular/core';
// import { NgForm } from '@angular/forms';

// import { SearchService } from '../../../../core/services/search/search.service';
// import { LocationService } from '../../../../core/services/location/location.service';

// @Component({
//   selector: 'app-search-options',
//   templateUrl: './search-options.component.html',
//   styleUrls: ['./search-options.component.scss']
// })
// export class SearchOptionsComponent implements OnInit {

//   deliveryTypes: any[];
//   categoriesList: any[];
//   submittedValues: any = {
//     categories: [],
//     deliveryTypes: []
//   };

//   submitting: boolean = false;
//   currentRadius: number = 25;
//   latitude: number;
//   longitude: number;

//   city: string;

//   constructor(private searchService: SearchService,
//               private locationService: LocationService) {

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

//   }

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
//           this.city = results;
//         }
//       );

//   }

//   onSubmit(form: NgForm) {
//     //empty the submitted values
//     this.submittedValues = {
//       categories: [],
//       deliveryTypes: []
//     };
//     // separate and loop through each of the values
//     for (let property in form.value) {
//       if (form.value.hasOwnProperty(property)) {
//         let propValue = form.value[property]; //get the returned values
//         // if the returned value is true
//         if (propValue) {
//           //separate the properties by their type (category or delivery)
//           if (property.split('.')[0] === 'c') {
//             //add the property to the appropriate array
//             this.submittedValues.categories.push(property.split('.')[1]);
//           } else {
//             this.submittedValues.deliveryTypes.push(property.split('.')[1]);
//           }
//         }
//       }
//     }
//     //then send the submitted values to search service to update the view
//     this.searchService.onFilter(this.submittedValues);
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
//   };

//   onRadiusSubmit(radius: number) {
//     this.submitting = true;
//     if (this.currentRadius === radius) {
//       this.submitting = false;
//       return;
//     } else {
//       this.searchService.loadAll(this.latitude, this.longitude, radius);
//     }

//   };

//   changeCity() {
//     console.log('need to change city please');
//   }

// }

import { Component, OnInit, Input, NgZone, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import { AgmMap } from '@agm/core';

import { SearchService } from '../../../../core/services/search/search.service';
import { LocationService } from '../../../../core/services/location/location.service';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent implements OnInit {

  deliveryTypes: any[];
  categoriesList: any[];
  submittedValues: any = {
    categories: [],
    deliveryTypes: []
  };

  locationUpdate: boolean = false;
  submitting: boolean = false;
  currentRadius: number = 25;
  latitude: number;
  longitude: number;
  cityProvince: string;
 
  streetNumber: number;
  route: any;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;

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

    this.locationService.getCityProvince()
      .subscribe(
        results => {
          this.cityProvince = results;
        }
      );

    // create search FormControl
    this.searchControl = new FormControl('');


    // load Places Autocomplete
    console.log('searchelement: ', this.searchElementRef);
    this.mapsAPILoader.load().then(() => {
      console.log('searchelement: ', this.searchElementRef);
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

  }

  onSubmit(form: NgForm) {
    //empty the submitted values
    this.submittedValues = {
      categories: [],
      deliveryTypes: []
    };
    // separate and loop through each of the values
    for (let property in form.value) {
      if (form.value.hasOwnProperty(property)) {
        let propValue = form.value[property]; //get the returned values
        // if the returned value is true
        if (propValue) {
          //separate the properties by their type (category or delivery)
          if (property.split('.')[0] === 'c') {
            //add the property to the appropriate array
            this.submittedValues.categories.push(property.split('.')[1]);
          } else {
            this.submittedValues.deliveryTypes.push(property.split('.')[1]);
          }
        }
      }
    }
    //then send the submitted values to search service to update the view
    this.searchService.onFilter(this.submittedValues);
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
  };

  onRadiusSubmit(radius: number) {
    this.submitting = true;
    if (this.currentRadius === radius) {
      this.submitting = false;
      return;
    } else {
      this.searchService.loadAll(this.latitude, this.longitude, radius);
    }

  };

  changeCity() {
    console.log('need to change city please');
    this.locationUpdate = !this.locationUpdate;
    // this.runMapLoader();
  };

  runMapLoader() {
    // set current position
    // this.setCurrentPosition();

    // // load Places Autocomplete
    // console.log('searchelement: ', this.searchElementRef);
    // this.mapsAPILoader.load().then(() => {
    //   console.log('searchelement: ', this.searchElementRef);
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ["geocode"]
    //   });
    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       // get the place result
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();

    //       // verify result
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }

    //       console.log('place: ', place);
    //       this.fillAddress(place);

    //       // set latitude, longitude and zoom
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       this.zoom = 12;
    //     });
    //   });
    // });
  };

  private fillAddress(place) {
    // this.clearAddress();
    this.parseAddressComponents(place.address_components);
    this.latitude = place.geometry.location.lat();
    this.longitude = place.geometry.location.lng();
    this.locationService.updateCityProvince(this.city + ', ' + this.province);
    this.locationUpdate = !this.locationUpdate;
  };

  private parseAddressComponents(components) {
    for (let i = 0; i < components.length; i++) {
      let types = components[i].types;
      for (let j = 0; j < types.length; j++) {
        let result = types[j];
        if (result === 'locality' || result === 'sublocality') {
          this.city = components[i].short_name;
          console.log('city: ', this.city);
        };
        if (result === 'administrative_area_level_1') {
          this.province = components[i].short_name;
        };
      };
    };
  };

}
