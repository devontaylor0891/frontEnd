// provided in Search Comp

// called in...
// Search Options Comp
// Filter Buttons Comp
// Results Pane Comp
// Search Calendar Comp
// Search Producer Comp
// Search Comp

import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../api.service';

import { ProductModel } from '../../../core/models/product.model';
import { ScheduleModel } from '../../../core/models/schedule.model';
import { ProducerModel } from '../../../core/models/producer.model';

@Injectable()
export class SearchService implements OnInit {

  // create a place to store the original search results in memory
	private dataStore: {
    searchResults: ProductModel[], // holds all the return products and their accompanying info
    deliveryTypes: string[], // holds a list of the unique delivery types contained in the above list
    categories: string[], // holds an array of category/subcategory objects
	  searchProducers: ProducerModel[], // an array containing basic producer info for the producer view
	  searchDeliveries: ScheduleModel[] // an array containing basic delivery info for the calendar view
  }
	
	// use a BehaviorSubject to create an observable out of a COPY of the search results
  public _searchResults: BehaviorSubject<ProductModel[]>;
  
  // create a Behavior Subject to hold all the different delivery types/categories and create an observable from them
  public _deliveryTypes: BehaviorSubject<string[]>;
  public _categories: BehaviorSubject<string[]>;
  public _searchProducers: BehaviorSubject<ProducerModel[]>;
  public _searchDeliveries: BehaviorSubject<ScheduleModel[]>;

  // ****************** MODIFYING THE VIEW BASED ON FILTER BUTTONS
  // create a private property to hold the default view
  private viewStatus = new BehaviorSubject<string>("products");
  public _viewStatus = this.viewStatus.asObservable();
	
	// during construction of service, create a empty dataStore and various BehaviorSubjects
	constructor(private apiService: ApiService) {
    this.dataStore = { searchResults: [], deliveryTypes: [], categories: [], searchProducers: [], searchDeliveries: [] };
    this._searchResults = <BehaviorSubject<ProductModel[]>>new BehaviorSubject([]);
    this._deliveryTypes = <BehaviorSubject<string[]>>new BehaviorSubject([]);
    this._categories = <BehaviorSubject<string[]>>new BehaviorSubject([]);
	  this._searchProducers = <BehaviorSubject<ProducerModel[]>>new BehaviorSubject([]);
	  this._searchDeliveries = <BehaviorSubject<ScheduleModel[]>>new BehaviorSubject([]);
  }
  
  // fill up the dataStore with a call to the API
	loadAll() {
		this.apiService.getSearchResults()
			.subscribe(
				response => {
					// fill dataStore
          this.dataStore.searchResults = response;
          this.dataStore.deliveryTypes = this.addDeliveryTypes(this.dataStore.searchResults);
          this.dataStore.categories = this.addCategories(this.dataStore.searchResults);
		      this.dataStore.searchProducers = this.addSearchProducers(this.dataStore.searchResults);
		      this.dataStore.searchDeliveries = this.addSearchDeliveries(this.dataStore.searchResults);
					// make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
          this._searchResults.next(Object.assign({}, this.dataStore).searchResults);
          this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
          this._categories.next(Object.assign({}, this.dataStore).categories);
          this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
          this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
				}, error => console.log('could not load search results')
      );
	}
	
	// create an observable out of the copy of the results
	getSearchResults() {
    return this._searchResults.asObservable();
  }

  getDeliveryTypes() {
    return this._deliveryTypes.asObservable();
  }

  getCategories() {
    return this._categories.asObservable();
  }
  
  getProducers() {
	  return this._searchProducers.asObservable();
  }
  
  getDeliveries() {
	  return this._searchDeliveries.asObservable();
  }
  
  addDeliveryTypes(searchResults) {
    searchResults.forEach((product) => {
      product.scheduleList.forEach((delivery) => {
        if (!this.dataStore.deliveryTypes.includes(delivery.type)) {
          this.dataStore.deliveryTypes.push(delivery.type)
        }
      })
    })
    return this.dataStore.deliveryTypes;
  }

  addCategories(searchResults) {
    let newArray: string[] = [];
    searchResults.forEach((product) => {
      let category = product.category;
      if (newArray.length === 0) {
        newArray = [category];
      } else if (newArray.indexOf(category) === -1) {
        newArray.push(category);
      }
    });
    return newArray;
  }
  
  addSearchProducers(searchResults) {
	  
	  // create the producers array
	  let producers: ProducerModel[] = [];
	  // loop through each of the search results
	  searchResults.forEach((product) => {
			// get the producer's info
      let producer = product.producer;
      let pId = producer.id;
      // get the index of the producer from our working array
      let pIndex = this.getProducerIndex(producer, producers);
			// add to producers array if array is empty
			if (producers.length === 0) {
        producers[0] = producer;
      } else if (!this.findByIdInArray(pId, producers)) { // if the producer is not in the array, add them
        producers.push(producer);  
      } 			
    });
    // return producers array
	  return producers;
  };

  findByIdInArray(id, array) {
    for (let i = 0; i < array.length; i++) {
      if (id === array[i].id) {
        return true;
      }
    }
  }

  getProducerIndex(producer, producers) {
    for (let i = 0; i < producers.length; i++) {
      if (producer.id === producers[i].id) {
        return i;
      }
    }
  }
  
  getSimpleProduct(product) {
	  // pull out the required info and return as an object
    let productObject: ProductModel = {
      "id": null,
      "name": '',
      "description": '',
      "image": '',
      "pricePerUnit": null,
      "unit": null,
      "unitsPer": null,
      "category": '',
      "subcategory": '',
      "producer": {
        "id": null,
        "name": '',
        "location": '',
        "province": '',
        "address": '',
        "description": '',
        "email": '',
        "logoUrl": '',
        "longitude": null,
        "latitude": null,
        "firstName": '',
        "registrationDate": '',
        "status": '',
        "productList": [],
        "scheduleList": []
      },
      "dateAdded": '',
      "qtyAvailable": null,
      "qtyPending": null,
      "qtyAccepted": null,
      "qtyCompleted": null,
      "isObsolete": false,
      "scheduleList": []
    };
	  productObject.id = product.id;
	  productObject.name = product.name;
	  productObject.pricePerUnit = product.pricePerUnit;
	  productObject.unit = product.unit;
	  return productObject;
  }
  
  addSearchDeliveries(searchResults) {
	  
	 let deliveries: ScheduleModel[] = [];
	  
	  // loop through search results
	  searchResults.forEach((product) => {
		  // loop through each product's deliveries
		  product.scheduleList.forEach((delivery) => {
			  // if deliveries array is empty, add the delivery
			  if (deliveries.length === 0) {
				  deliveries[0] = this.buildNewSearchDelivery(delivery, product);
			  } else if (!this.findByIdInArray(delivery.id, deliveries)) { // if delivery is not in array
				// add it
				  deliveries.push(this.buildNewSearchDelivery(delivery, product));
			  }
		  })
	  })
	  // return the completed array
		return deliveries;
  };
  
  buildNewSearchDelivery(delivery, product) {
    let producer = product.producer;
	  let delObject: ScheduleModel = {
      "id": delivery.id,
      "producerId": product.producer.id,
      "productList": delivery.productList,
      "type": delivery.type,
      "description": delivery.description,
      "startDateTime": delivery.startDateTime,
      "endDateTime": delivery.endDateTime,
      "hasFee": delivery.hasFee,
      "fee": delivery.fee,
      "hasWaiver": null,
      "feeWaiver": delivery.feeWaiver,
      "latitude": delivery.latitude,
      "longitude": delivery.longitude,
      "city": delivery.city,
      "address": delivery.address,
      "province": delivery.province,
      "orderDeadline": delivery.orderDeadline,
      "orderList": []
    };
	  return delObject;
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
	
    // get original searchResults, loop through each product, if it doesn't contain one of the deliveries or one of the categories, remove it
    let results: ProductModel[] = this.dataStore.searchResults;
    let catArray = [];
    values.categories.forEach((category) => { catArray.push(category) });
    let delArray = [];
    values.deliveryTypes.forEach((delivery) => { delArray.push(delivery) });

    // make a copy of results array to filter
    let filteredResults: ProductModel[] = [];

    results.forEach((product) => { //for each product
      // if it does contain the delivery AND it does contain the category
      if (this.containCategory(product, catArray) && this.containDelivery(product, delArray)) {
        // push it to the array
        filteredResults.push(product);
      }
    });
	
    this._searchResults.next(filteredResults);

    // create a new array for producers
    let filteredProducers = this.addSearchProducers(filteredResults);
    this._searchProducers.next(filteredProducers);

    // ditto for deliveries
    let filteredDeliveries = this.addSearchDeliveries(filteredResults);
    this._searchDeliveries.next(filteredDeliveries);
    
  };

  containCategory(product, categoriesArray) {
	  for (let i = 0; i < categoriesArray.length; i++) {
		  if (product.category === categoriesArray[i]) {
			  return true;
		  }
	  }
	  return false;
  };

  containDelivery(product, deliveriesArray) {
	  for (let i = 0; i < deliveriesArray.length; i++) {
		  for (let j = 0; j < product.scheduleList.length; j++) {
			  if (product.scheduleList[j].type === deliveriesArray[i]) {
				  return true;
			  }
		  }
	  }
	  return false;
  };
  
  onReset() {
		this._searchResults.next(Object.assign({}, this.dataStore).searchResults);
    this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
    this._categories.next(Object.assign({}, this.dataStore).categories);
    this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
    this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
  };

  changeView(view) {
	  this.viewStatus.next(view);
  }

  ngOnInit() {}

}