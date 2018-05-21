// import { Component, OnInit, OnChanges } from '@angular/core';
// import { NgForm } from '@angular/forms';

// import { SearchService } from '../../../../core/services/search/search.service';

// @Component({
//   selector: 'app-search-options',
//   templateUrl: './search-options.component.html',
//   styleUrls: ['./search-options.component.scss']
// })
// export class SearchOptionsComponent implements OnInit, OnChanges {

//   deliveryTypes: any[];
//   categoriesList: any[];
//   submittedValues: any = {
//     categories: [],
//     deliveryTypes: []
//   };

//   constructor(private searchService: SearchService) {

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

//   ngOnChanges() {

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
//         //  this.deliveryTypes = result;
//         //  console.log("These are the delivery types from the subscription:");
//         //  console.log(this.deliveryTypes);
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
//           //this.categoriesList = results;
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
//   }

// }


import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SearchService } from '../../../../core/services/search/search.service';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent implements OnInit, OnChanges {

  deliveryTypes: any[];
  categoriesList: any[];
  submittedValues: any = {
    categories: [],
    deliveryTypes: []
  };

  submitting: boolean = false;
  currentRadius: number = 25;
  latitude: number;
  longitude: number;

  @Input() city: string;

  constructor(private searchService: SearchService) {

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

  }

  ngOnChanges() {}

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
  }

}