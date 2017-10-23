import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SearchService } from '../../../../core/services/search/search.service';

import { CategoryModel } from '../../../../core/models/category.model';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent implements OnInit, OnChanges {

  deliveryTypes: string[];
  categoriesList: CategoryModel[];
  submittedValues: any = {
    categories: [],
    deliveryTypes: []
  };

  constructor(private searchService: SearchService) {}

  ngOnChanges() {

  }

  ngOnInit() {

    //subscribe to the delivery types
    this.searchService.getDeliveryTypes()
      .subscribe(
        results => {
          this.deliveryTypes = results;
        //  console.log("These are the delivery types from the subscription:");
        //  console.log(this.deliveryTypes);
        }
      );

      //subscribe to the category types
    this.searchService.getCategories()
      .subscribe(
        results => {
          console.log(results);
          this.categoriesList = results;
        //  console.log("These are the categories from the subscription:");
        //  console.log(this.categoriesList);
        }
      );

  }

  onSubmit(form: NgForm) {
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

}
