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
          console.log("loadAll called");
          console.log("dataStore contents:");
          console.log(this.dataStore);
					//make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
          this._searchResults.next(Object.assign({}, this.dataStore).searchResults);
          this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
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


  // *************************
  // this is just pushing all of the categories to the datastore
  addCategories(searchResults) {
    searchResults.forEach((product) => { //for each product in search results check...
      if (!this.dataStore.categories.includes(product.category)) { // if the product's category is listed in the dataStore category list
        this.dataStore.categories.push(product.category); // if not, add it to the dataStore's list (this will include the subcategory)
      } else if (this.dataStore.categories.includes(product.category.category) && !this.dataStore.categories.includes(product.category.subcategory)) {
        this.dataStore.categories.push(product.category.subcategory);
      }
    })
    return this.dataStore.categories;
  }

  ngOnInit() {}

}
