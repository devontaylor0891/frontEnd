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
    originalSearchResults: {
      schedules: any[],
      producers: any[],
      products: any[]
    },
    searchResults: {
      schedules: any[],
      producers: any[],
      products: any[]
    }, // holds all the return products and their accompanying info
    filteredSearchResults: { // holds a copy of the search results that we can modify
      schedules: any[],
      producers: any[],
      products: any[]
    },
    deliveryTypes: string[], // holds a list of the unique delivery types contained in the above list
    categories: string[], // holds an array of category/subcategory objects
    searchProducers: ProducerModel[], // an array containing basic producer info for the producer view
    searchDeliveries: any[] // an array containing basic delivery info for the calendar view
  };

  private zeroSearchResultsReturned: boolean;
  public _zeroSearchResultsReturned: BehaviorSubject<boolean>;

  // use a BehaviorSubject to create an observable out of a COPY of the search results
  public _searchResults: BehaviorSubject<any>;

  // create a Behavior Subject to hold all the different delivery types/categories and create an observable from them
  public _deliveryTypes: BehaviorSubject<string[]>;
  public _categories: BehaviorSubject<string[]>;
  public _searchProducers: BehaviorSubject<ProducerModel[]>;
  public _searchDeliveries: BehaviorSubject<any[]>;

  // ****************** MODIFYING THE VIEW BASED ON FILTER BUTTONS
  // create a private property to hold the default view
  private viewStatus: string;
  public _viewStatus: BehaviorSubject<string>;
  currentDistanceSelected: number = 25;

  // during construction of service, create a empty dataStore and various BehaviorSubjects
  constructor(private apiService: ApiService) {
    this.dataStore = {
      originalSearchResults: { schedules: [], producers: [], products: [] },
      searchResults: { schedules: [], producers: [], products: [] }, 
      filteredSearchResults: { schedules: [], producers: [], products: [] },
      deliveryTypes: [],
      categories: [],
      searchProducers: [],
      searchDeliveries: [] };
    this._searchResults = <BehaviorSubject<ProductModel[]>>new BehaviorSubject(null);
    this._deliveryTypes = <BehaviorSubject<string[]>>new BehaviorSubject([]);
    this._categories = <BehaviorSubject<string[]>>new BehaviorSubject([]);
    this._searchProducers = <BehaviorSubject<ProducerModel[]>>new BehaviorSubject([]);
    this._searchDeliveries = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this._zeroSearchResultsReturned = <BehaviorSubject<boolean>>new BehaviorSubject(null);
    this._viewStatus = <BehaviorSubject<string>>new BehaviorSubject('products');
  }

  // fill up the dataStore with a call to the API
  loadAll(searchOptions) {
    this.apiService.getSearchResults(searchOptions)
      .subscribe(
        response => {
          console.log('************searchoptions: ', searchOptions);
          console.log('response for search: ', response);
          if (this.isEmpty(response)) {
            // no results were returned
            this.zeroSearchResultsReturned = true;
            this._zeroSearchResultsReturned.next(this.zeroSearchResultsReturned);
            this.dataStore = {
              originalSearchResults: { schedules: [], producers: [], products: [] },
              searchResults: { schedules: [], producers: [], products: [] }, 
              filteredSearchResults: { schedules: [], producers: [], products: [] },
              deliveryTypes: [],
              categories: [],
              searchProducers: [],
              searchDeliveries: [] };
            // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
            this._searchResults.next(Object.assign({}, this.dataStore).filteredSearchResults);
            this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
            this._categories.next(Object.assign({}, this.dataStore).categories);
            this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
            this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
            console.log('no results from search');
          } else {
            // the response contains results
            this.zeroSearchResultsReturned = false;
            this._zeroSearchResultsReturned.next(this.zeroSearchResultsReturned);
            // fill dataStore
            this.dataStore.originalSearchResults = JSON.parse(JSON.stringify(response));
            this.dataStore.searchResults = JSON.parse(JSON.stringify(response));
            this.dataStore.filteredSearchResults = JSON.parse(JSON.stringify(response));
            console.log('searchResults: ', this.dataStore.filteredSearchResults);
            this.dataStore.deliveryTypes = this.addDeliveryTypes(this.dataStore.filteredSearchResults.schedules);
            this.dataStore.categories = this.addCategories(this.dataStore.filteredSearchResults.products);
            this.dataStore.searchProducers = this.dataStore.filteredSearchResults.producers;
            this.dataStore.searchDeliveries = this.dataStore.filteredSearchResults.schedules;
            // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
            this._searchResults.next(Object.assign({}, this.dataStore).filteredSearchResults);
            this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
            this._categories.next(Object.assign({}, this.dataStore).categories);
            this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
            this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
          }
        }, error => console.log('could not load search results')
      );
  };

  isEmpty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
  };

  getZeroSearchResults() {
    return this._zeroSearchResultsReturned.asObservable();
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

  addDeliveryTypes(schedules) {
    schedules.forEach((schedule) => {
      if (!this.dataStore.deliveryTypes.includes(schedule.type)) {
        this.dataStore.deliveryTypes.push(schedule.type)
      }
    })
    return this.dataStore.deliveryTypes;
  };

  addCategories(products) {
    let newArray: string[] = [];
    products.forEach((product) => {
      let category = product.category;
      if (newArray.length === 0) {
        newArray = [category];
      } else if (newArray.indexOf(category) === -1) {
        newArray.push(category);
      }
    });
    return newArray;
  };

  addSearchProducers(products) {
    // create the producers array
    let producers: ProducerModel[] = [];
    let producerIdArray = [];
    // loop through each of the products, build an array of producer Ids
    products.forEach((product) => {
      let pId = product.producerId;
      // add id to array
      if (producerIdArray.length === 0 ) {
        producerIdArray = [pId]
      } else {
        if (producerIdArray.indexOf(pId) === -1) {
          producerIdArray.push(pId)
        }
      }
    });
    // then for each pId, return it from the datastore search results and add the producer to the array
    for (let i = 0; i < producerIdArray.length; i++) {
      for (let j = 0; j < this.dataStore.searchResults.producers.length; j++){
        if (producerIdArray[i] === this.dataStore.searchResults.producers[j].producerId) {
          producers.push(this.dataStore.searchResults.producers[j]);
        }
      }
    }
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
        "status": ''
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

  addDeliveriesFromProducerArrayAndScheduleType(producerArray, scheduleTypeArray) {
    let deliveriesByProducer = [];
    let finalDeliveries = [];
    let producerIdArray = [];
    // loop through producerArray, build an array of ids
    producerArray.forEach((producer) => {
      producerIdArray.push(producer.producerId);
    });
    // loop through the datastores scheds and push to another array where producer id is in producerIdArray
    for (let i = 0; i < producerIdArray.length; i++ ) {
      for (let j = 0; j < this.dataStore.searchResults.schedules.length; j++) {
        if (producerIdArray[i] === this.dataStore.searchResults.schedules[j].producerId) {
          deliveriesByProducer.push(this.dataStore.searchResults.schedules[j]);
        }
      }
    };
    for (let i = 0; i < scheduleTypeArray.length; i++) {
      for (let j = 0; j < deliveriesByProducer.length; j++) {
        if (scheduleTypeArray[i] === deliveriesByProducer[j].type) {
          finalDeliveries.push(deliveriesByProducer[j]);
        }
      }
    }
	  // return the completed array
		return finalDeliveries;
  }
  
  buildNewSearchDelivery(delivery, product) {
    let producer = product.producer;
	  let delObject = {
      "id": delivery.id,
      "producerId": product.producer.id,
      "producerName": product.producer.name,
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
    let results: any = JSON.parse(JSON.stringify(this.dataStore.searchResults));
    let catArray = [];
    values.categories.forEach((category) => { catArray.push(category) });
    let delArray = [];
    values.deliveryTypes.forEach((delivery) => { delArray.push(delivery) });

    // make a copy of results array to filter
    let filteredResults: any = {
      schedules: [],
      producers: [],
      products: []
    };

    results.products.forEach((product) => { //for each product
      // if it does contain the delivery AND it does contain the category
      // if (this.containCategory(product, catArray) && this.containDelivery(product, delArray)) {
      if (this.containCategory(product, catArray)) {
        // push it to the array
        filteredResults.products.push(product);
      }
    }); 

    // create a new array for producers
    filteredResults.producers = this.addSearchProducers(filteredResults.products);
    // this._searchProducers.next(filteredProducers);

    // ditto for deliveries
    filteredResults.schedules = this.addDeliveriesFromProducerArrayAndScheduleType(filteredResults.producers, delArray);
    // this._searchDeliveries.next(filteredDeliveries);
    console.log('filtered Results: ', filteredResults);
    this._searchResults.next(filteredResults);
    
  };

  filterByDistance(distance, latitude, longitude) {
    console.log('distance selected: ', distance);
    console.log('lat: ', latitude);
    console.log('lng: ', longitude);
    // if distance is 25, simply emit the original datastore results
    if (distance === 25) {
      console.log('return original search results: ', this.dataStore);
      this.dataStore.filteredSearchResults = JSON.parse(JSON.stringify(this.dataStore.originalSearchResults));
      this.dataStore.deliveryTypes = this.addDeliveryTypes(this.dataStore.filteredSearchResults.schedules);
      this.dataStore.categories = this.addCategories(this.dataStore.filteredSearchResults.products);
      this.dataStore.searchProducers = this.dataStore.filteredSearchResults.producers;
      this.dataStore.searchDeliveries = this.dataStore.filteredSearchResults.schedules;
      this._searchResults.next(Object.assign({}, this.dataStore).filteredSearchResults);
      this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
      this._categories.next(Object.assign({}, this.dataStore).categories);
      this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
      this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
    } else if (distance === this.currentDistanceSelected) { // distance is unchanged, emit filteredResults
      this.dataStore.deliveryTypes = this.addDeliveryTypes(this.dataStore.filteredSearchResults.schedules);
      this.dataStore.categories = this.addCategories(this.dataStore.filteredSearchResults.products);
      this.dataStore.searchProducers = this.dataStore.filteredSearchResults.producers;
      this.dataStore.searchDeliveries = this.dataStore.filteredSearchResults.schedules;
      this._searchResults.next(Object.assign({}, this.dataStore).filteredSearchResults);
      this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
      this._categories.next(Object.assign({}, this.dataStore).categories);
      this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
      this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
    } else { // distance selected is not default and is different from current
      // run the great circle equation on the original datastore search results scheds
      
      // run the great circle calculation
      let maxlat, maxlng, minlat, minlng;
      // set other parameters (from https://coderwall.com/p/otkscg/geographic-searches-within-a-certain-distance)
      // earth's radius in km = ~6371
      let earthRadius = 6371;
      // latitude boundaries
      maxlat = latitude + this.radToDegrees(distance / earthRadius);
      minlat = latitude - this.radToDegrees(distance / earthRadius);
      // longitude boundaries (longitude gets smaller when latitude increases)
      maxlng = longitude + this.radToDegrees(distance / earthRadius / Math.cos(this.radToDegrees(latitude)));
      minlng = longitude - this.radToDegrees(distance / earthRadius / Math.cos(this.radToDegrees(latitude)));
      console.log('maxlat: ', maxlat);
      console.log('maxlng: ', maxlng);
      console.log('minlat: ', minlat);
      console.log('minlng: ', minlng);
      // and return the list of scheds
      let returnedScheds = [];
      let producerIdArray = [];
      let returnedProducers = [];
      let returnedProducts = [];
      let schedLat, schedLng;
      let schedLatInCircle: boolean = false;
      let schedLngInCircle: boolean = false;
      // loop through each sched in the current datastore
      this.dataStore.searchResults.schedules.forEach((sched) => {
        console.log('sched: ', sched);
        schedLat = sched.latitude;
        schedLng = sched.longitude;
        // create an array of producer ids
        if (producerIdArray.length === 0) {
          producerIdArray.push(sched.producerId);
        } else if (producerIdArray.indexOf(sched.producerId) === -1) {
            producerIdArray.push(sched.producerId);
        };
        console.log('producerIds: ', producerIdArray);
        if (schedLat >= minlat && schedLat <= maxlat) {
          schedLatInCircle = true;
        };
        if (schedLng >= minlng && schedLng <= maxlng) {
          schedLngInCircle = true;
        };
        if (schedLatInCircle && schedLngInCircle) {
          returnedScheds.push(sched);
        };
        console.log('schedsarray: ', returnedScheds);
        console.log('datastore check: ', this.dataStore);
      });
      // using the producerIdArray, return the producers
      producerIdArray.forEach((id) => {
        for (let i = 0; i < this.dataStore.searchResults.producers.length; i++) {
          if (id === this.dataStore.searchResults.producers[i].producerId) {
            returnedProducers.push(this.dataStore.searchResults.producers[i])
          }
        };
        // using those producers, return the products
        for (let i = 0; i < this.dataStore.searchResults.products.length; i++) {
          if (id === this.dataStore.searchResults.products[i].producerId) {
            returnedProducts.push(this.dataStore.searchResults.products[i])
          }
        }; 
      });
      console.log('datastore check: ', this.dataStore);
      // emit the values
      this.dataStore.filteredSearchResults.schedules = returnedScheds;
      this.dataStore.filteredSearchResults.producers = returnedProducers;
      this.dataStore.filteredSearchResults.products = returnedProducts;
      console.log('datastore check: ', this.dataStore);
      this.dataStore.deliveryTypes = this.addDeliveryTypes(returnedScheds);
      this.dataStore.categories = this.addCategories(returnedProducts);
      this.dataStore.searchProducers = returnedProducers;
      this.dataStore.searchDeliveries = returnedScheds;
      console.log('datastore check: ', this.dataStore);
      this._searchResults.next(Object.assign({}, this.dataStore).filteredSearchResults);
      this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
      this._categories.next(Object.assign({}, this.dataStore).categories);
      this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
      this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
      console.log('datastore check: ', this.dataStore);
    }
  };

  radToDegrees (radians) {
    return radians * 180 / Math.PI;
  };

  degreesToRadians (degrees) {
    return degrees * Math.PI / 180;
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
    console.log('product: ', product)
    console.log('deliveriesArray: ', deliveriesArray)
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
    this._viewStatus.next(view);
  }

  ngOnInit() {}

}
