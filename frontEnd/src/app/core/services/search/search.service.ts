import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../api.service';

import { SearchResultModel } from '../../../core/models/search-result.model';
import { CategoryModel } from '../../../core/models/category.model';

@Injectable()
export class SearchService implements OnInit {

  // create a place to store the original search results in memory
	private dataStore: {
    searchResults: SearchResultModel[], //holds all the return products and their accompanying info
    deliveryTypes: string[], // holds a list of the unique delivery types contained in the above list
    categories: CategoryModel[] //holds an array of category/subcategory objects
  }
	
	// use a BehaviorSubject to create an observable out of a COPY of the search results
  public _searchResults: BehaviorSubject<SearchResultModel[]>;
  
  // create a Behavior Subject to hold all the different delivery types/categories and create an observable from them
  public _deliveryTypes: BehaviorSubject<string[]>;
  public _categories: BehaviorSubject<CategoryModel[]>;
	
	//during construction of service, create a empty dataStore and various BehaviorSubjects
	constructor(private apiService: ApiService) {
    this.dataStore = { searchResults: [], deliveryTypes: [], categories: [] };
    this._searchResults = <BehaviorSubject<SearchResultModel[]>>new BehaviorSubject([]);
    this._deliveryTypes = <BehaviorSubject<string[]>>new BehaviorSubject([]);
    this._categories = <BehaviorSubject<CategoryModel[]>>new BehaviorSubject([]);
  }
  
  //fill up the dataStore with a call to the API
	loadAll() {
		this.apiService.getSearchResults()
			.subscribe(
				response => {
					//fill dataStore
          this.dataStore.searchResults = response;
          this.dataStore.deliveryTypes = this.addDeliveryTypes(this.dataStore.searchResults);
          this.dataStore.categories = this.addCategories(this.dataStore.searchResults);
					//make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
          this._searchResults.next(Object.assign({}, this.dataStore).searchResults);
          this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
          this._categories.next(Object.assign({}, this.dataStore).categories);
				}, error => console.log('could not load search results')
      );
	}
	
	//create an observable out of the copy of the results
	getSearchResults() {
    return this._searchResults.asObservable();
  }

  getDeliveryTypes() {
    return this._deliveryTypes.asObservable();
  }

  getCategories() {
    return this._categories.asObservable();
  }
  
  addDeliveryTypes(searchResults) {
    searchResults.forEach((product) => {
      product.deliveries.forEach((delivery) => {
        if (!this.dataStore.deliveryTypes.includes(delivery.type)) {
          this.dataStore.deliveryTypes.push(delivery.type)
        }
      })
    })
    return this.dataStore.deliveryTypes;
  }

  addCategories(searchResults) {
    let newArray: CategoryModel[] = []; //maybe try let newArray: Object[] = [];

    searchResults.forEach((product) => {

      let category = product.category.category;  // eg: meat
      let subcategory = product.category.subcategory; // eg: beef

      //if newArray is empty, set it equal to an array containing one object
      if (newArray.length == 0) { //it's working!!!
        newArray = [
          {
            "category": category,
            "subcategory": [subcategory]
          }
        ];
        
      } else if (this.locationInArray(newArray, category, "category") === -1) { //the category is NOT in the array
        newArray.push(
          {
            "category": category,
            "subcategory": [subcategory]
          }
        );

      } else { //the category must then already be in the array
        //get the index in the array of the category
        let index = this.locationInArray(newArray, category, "category");
        //test to see if the subcategory exists
        if (this.locationInArray(newArray[index].subcategory, subcategory, "subcategory") === -1)  {//if not, push it into subcategory array
          newArray[index].subcategory.push(subcategory);
        }
      }
    });
    return newArray;
    
  }

  locationInArray(array, searchTerm, property) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (array[i][property] === searchTerm) {
        return i;
      } else {
        return -1;
      }
    }
  }

  onFilter(values) {
    console.log("Values sent to service");
    //clear the _searchResults observable, not sure if this can be or needs to be done
    //loop through dataStore.searchResults, when a delivery type from values is found in searchResults, push it to the _searchResults observable
    let filteredResults = [];
    this.dataStore.searchResults.forEach(
      (product) => {
        if (product.deliveries.forEach(
          (delivery) => {
            if(delivery.type.)
          })
          type.includes(values.))
      }
    )
    this._searchResults.next();
  }

  ngOnInit() {}

}
