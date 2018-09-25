// // provided in Search Comp

// // called in...
// // Search Options Comp
// // Filter Buttons Comp
// // Results Pane Comp
// // Search Calendar Comp
// // Search Producer Comp
// // Search Comp

// import { Injectable, OnInit } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// import { ApiService } from '../../api.service';

// import { ProductModel } from '../../../core/models/product.model';
// import { ScheduleModel } from '../../../core/models/schedule.model';
// import { ProducerModel } from '../../../core/models/producer.model';

// @Injectable()
// export class SearchService implements OnInit {

//   // create a place to store the original search results in memory
// 	private dataStore: {
//     searchResults: ProductModel[], // holds all the return products and their accompanying info
//     deliveryTypes: string[], // holds a list of the unique delivery types contained in the above list
//     categories: string[], // holds an array of category/subcategory objects
// 	  searchProducers: ProducerModel[], // an array containing basic producer info for the producer view
// 	  searchDeliveries: any[] // an array containing basic delivery info for the calendar view
//   }
	
// 	// use a BehaviorSubject to create an observable out of a COPY of the search results
//   public _searchResults: BehaviorSubject<ProductModel[]>;
  
//   // create a Behavior Subject to hold all the different delivery types/categories and create an observable from them
//   public _deliveryTypes: BehaviorSubject<string[]>;
//   public _categories: BehaviorSubject<string[]>;
//   public _searchProducers: BehaviorSubject<ProducerModel[]>;
//   public _searchDeliveries: BehaviorSubject<any[]>;

//   // ****************** MODIFYING THE VIEW BASED ON FILTER BUTTONS
//   // create a private property to hold the default view
//   private viewStatus = new BehaviorSubject<string>("products");
//   public _viewStatus = this.viewStatus.asObservable();
	
// 	// during construction of service, create a empty dataStore and various BehaviorSubjects
// 	constructor(private apiService: ApiService) {
//     this.dataStore = { searchResults: [], deliveryTypes: [], categories: [], searchProducers: [], searchDeliveries: [] };
//     this._searchResults = <BehaviorSubject<ProductModel[]>>new BehaviorSubject([]);
//     this._deliveryTypes = <BehaviorSubject<string[]>>new BehaviorSubject([]);
//     this._categories = <BehaviorSubject<string[]>>new BehaviorSubject([]);
// 	  this._searchProducers = <BehaviorSubject<ProducerModel[]>>new BehaviorSubject([]);
// 	  this._searchDeliveries = <BehaviorSubject<any[]>>new BehaviorSubject([]);
//   }
  
//   // fill up the dataStore with a call to the API
// 	loadAll(lat, long, radius) {
// 		this.apiService.getSearchResults(lat, long, radius)
// 			.subscribe(
// 				response => {
// 					// fill dataStore
//           this.dataStore.searchResults = response;
//           this.dataStore.deliveryTypes = this.addDeliveryTypes(this.dataStore.searchResults);
//           this.dataStore.categories = this.addCategories(this.dataStore.searchResults);
// 		      this.dataStore.searchProducers = this.addSearchProducers(this.dataStore.searchResults);
// 		      this.dataStore.searchDeliveries = this.addSearchDeliveries(this.dataStore.searchResults);
// 					// make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
//           this._searchResults.next(Object.assign({}, this.dataStore).searchResults);
//           this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
//           this._categories.next(Object.assign({}, this.dataStore).categories);
//           this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
//           this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
// 				}, error => console.log('could not load search results')
//       );
// 	}
	
// 	// create an observable out of the copy of the results
// 	getSearchResults() {
//     return this._searchResults.asObservable();
//   }

//   getDeliveryTypes() {
//     return this._deliveryTypes.asObservable();
//   }

//   getCategories() {
//     return this._categories.asObservable();
//   }
  
//   getProducers() {
// 	  return this._searchProducers.asObservable();
//   }
  
//   getDeliveries() {
// 	  return this._searchDeliveries.asObservable();
//   }
  
//   addDeliveryTypes(searchResults) {
//     searchResults.forEach((product) => {
//       product.scheduleList.forEach((delivery) => {
//         if (!this.dataStore.deliveryTypes.includes(delivery.type)) {
//           this.dataStore.deliveryTypes.push(delivery.type)
//         }
//       })
//     })
//     return this.dataStore.deliveryTypes;
//   }

//   addCategories(searchResults) {
//     let newArray: string[] = [];
//     searchResults.forEach((product) => {
//       let category = product.category;
//       if (newArray.length === 0) {
//         newArray = [category];
//       } else if (newArray.indexOf(category) === -1) {
//         newArray.push(category);
//       }
//     });
//     return newArray;
//   }
  
//   addSearchProducers(searchResults) {
	  
// 	  // create the producers array
// 	  let producers: ProducerModel[] = [];
// 	  // loop through each of the search results
// 	  searchResults.forEach((product) => {
// 			// get the producer's info
//       let producer = product.producer;
//       let pId = producer.id;
//       // get the index of the producer from our working array
//       let pIndex = this.getProducerIndex(producer, producers);
// 			// add to producers array if array is empty
// 			if (producers.length === 0) {
//         producers[0] = producer;
//       } else if (!this.findByIdInArray(pId, producers)) { // if the producer is not in the array, add them
//         producers.push(producer);  
//       } 			
//     });
//     // return producers array
// 	  return producers;
//   };

//   findByIdInArray(id, array) {
//     for (let i = 0; i < array.length; i++) {
//       if (id === array[i].id) {
//         return true;
//       }
//     }
//   }

//   getProducerIndex(producer, producers) {
//     for (let i = 0; i < producers.length; i++) {
//       if (producer.id === producers[i].id) {
//         return i;
//       }
//     }
//   }
  
//   getSimpleProduct(product) {
// 	  // pull out the required info and return as an object
//     let productObject: ProductModel = {
//       "id": null,
//       "name": '',
//       "description": '',
//       "image": '',
//       "pricePerUnit": null,
//       "unit": null,
//       "unitsPer": null,
//       "category": '',
//       "subcategory": '',
//       "producer": {
//         "id": null,
//         "name": '',
//         "location": '',
//         "province": '',
//         "address": '',
//         "description": '',
//         "email": '',
//         "logoUrl": '',
//         "longitude": null,
//         "latitude": null,
//         "firstName": '',
//         "registrationDate": '',
//         "status": ''
//       },
//       "dateAdded": '',
//       "qtyAvailable": null,
//       "qtyPending": null,
//       "qtyAccepted": null,
//       "qtyCompleted": null,
//       "isObsolete": false,
//       "scheduleList": []
//     };
// 	  productObject.id = product.id;
// 	  productObject.name = product.name;
// 	  productObject.pricePerUnit = product.pricePerUnit;
// 	  productObject.unit = product.unit;
// 	  return productObject;
//   }
  
//   addSearchDeliveries(searchResults) {
	  
// 	 let deliveries: any[] = [];
	  
// 	  // loop through search results
// 	  searchResults.forEach((product) => {
// 		  // loop through each product's deliveries
// 		  product.scheduleList.forEach((delivery) => {
// 			  // if deliveries array is empty, add the delivery
// 			  if (deliveries.length === 0) {
// 				  deliveries[0] = this.buildNewSearchDelivery(delivery, product);
// 			  } else if (!this.findByIdInArray(delivery.id, deliveries)) { // if delivery is not in array
// 				// add it
// 				  deliveries.push(this.buildNewSearchDelivery(delivery, product));
// 			  }
// 		  })
// 	  })
// 	  // return the completed array
// 		return deliveries;
//   };
  
//   buildNewSearchDelivery(delivery, product) {
//     let producer = product.producer;
// 	  let delObject = {
//       "id": delivery.id,
//       "producerId": product.producer.id,
//       "producerName": product.producer.name,
//       "productList": delivery.productList,
//       "type": delivery.type,
//       "description": delivery.description,
//       "startDateTime": delivery.startDateTime,
//       "endDateTime": delivery.endDateTime,
//       "hasFee": delivery.hasFee,
//       "fee": delivery.fee,
//       "hasWaiver": null,
//       "feeWaiver": delivery.feeWaiver,
//       "latitude": delivery.latitude,
//       "longitude": delivery.longitude,
//       "city": delivery.city,
//       "address": delivery.address,
//       "province": delivery.province,
//       "orderDeadline": delivery.orderDeadline,
//       "orderList": []
//     };
// 	  return delObject;
//   }

//   locationInArray(array, searchTerm, property) {
//     for (var i = 0, len = array.length; i < len; i++) {
//       if (array[i][property] === searchTerm) {
//         return i;
//       } else {
//         return -1;
//       }
//     }
//   }

//   onFilter(values) {
	
//     // get original searchResults, loop through each product, if it doesn't contain one of the deliveries or one of the categories, remove it
//     let results: ProductModel[] = this.dataStore.searchResults;
//     let catArray = [];
//     values.categories.forEach((category) => { catArray.push(category) });
//     let delArray = [];
//     values.deliveryTypes.forEach((delivery) => { delArray.push(delivery) });

//     // make a copy of results array to filter
//     let filteredResults: ProductModel[] = [];

//     results.forEach((product) => { //for each product
//       // if it does contain the delivery AND it does contain the category
//       if (this.containCategory(product, catArray) && this.containDelivery(product, delArray)) {
//         // push it to the array
//         filteredResults.push(product);
//       }
//     });
	
//     this._searchResults.next(filteredResults);

//     // create a new array for producers
//     let filteredProducers = this.addSearchProducers(filteredResults);
//     this._searchProducers.next(filteredProducers);

//     // ditto for deliveries
//     let filteredDeliveries = this.addSearchDeliveries(filteredResults);
//     this._searchDeliveries.next(filteredDeliveries);
    
//   };

//   containCategory(product, categoriesArray) {
// 	  for (let i = 0; i < categoriesArray.length; i++) {
// 		  if (product.category === categoriesArray[i]) {
// 			  return true;
// 		  }
// 	  }
// 	  return false;
//   };

//   containDelivery(product, deliveriesArray) {
// 	  for (let i = 0; i < deliveriesArray.length; i++) {
// 		  for (let j = 0; j < product.scheduleList.length; j++) {
// 			  if (product.scheduleList[j].type === deliveriesArray[i]) {
// 				  return true;
// 			  }
// 		  }
// 	  }
// 	  return false;
//   };
  
//   onReset() {
// 		this._searchResults.next(Object.assign({}, this.dataStore).searchResults);
//     this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
//     this._categories.next(Object.assign({}, this.dataStore).categories);
//     this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
//     this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
//   };

//   changeView(view) {
// 	  this.viewStatus.next(view);
//   }

//   ngOnInit() {}

// }

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
	
	// during construction of service, create a empty dataStore and various BehaviorSubjects
	constructor(private apiService: ApiService) {
    this.dataStore = { 
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
          console.log('response for search: ', response);
          if (this.isEmpty(response)) {
            // no results were returned
            this.zeroSearchResultsReturned = true;
            this._zeroSearchResultsReturned.next(this.zeroSearchResultsReturned);
            this.dataStore = { 
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
            this.dataStore.searchResults = response;
            this.dataStore.filteredSearchResults = response;
            console.log('searchResults: ', this.dataStore.filteredSearchResults);
            this.dataStore.deliveryTypes = this.addDeliveryTypes(this.dataStore.filteredSearchResults.schedules);
            this.dataStore.categories = this.addCategories(this.dataStore.filteredSearchResults.products);
            this.dataStore.searchProducers = this.dataStore.filteredSearchResults.producers;
            // this.dataStore.searchProducers = this.addSearchProducers(this.dataStore.searchResults);
            this.dataStore.searchDeliveries = this.dataStore.filteredSearchResults.schedules;
            // this.dataStore.searchDeliveries = this.addSearchDeliveries(this.dataStore.searchResults);
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
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
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
  
  // addDeliveryTypes(searchResults) {
  //   searchResults.forEach((product) => {
  //     product.scheduleList.forEach((delivery) => {
  //       if (!this.dataStore.deliveryTypes.includes(delivery.type)) {
  //         this.dataStore.deliveryTypes.push(delivery.type)
  //       }
  //     })
  //   })
  //   return this.dataStore.deliveryTypes;
  // }

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

  // addCategories(searchResults) {
  //   let newArray: string[] = [];
  //   searchResults.forEach((product) => {
  //     let category = product.category;
  //     if (newArray.length === 0) {
  //       newArray = [category];
  //     } else if (newArray.indexOf(category) === -1) {
  //       newArray.push(category);
  //     }
  //   });
  //   return newArray;
  // };
  
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
  
  addSearchDeliveries(searchResults) {
	  
	 let deliveries = searchResults.schedules;
	  
	  // loop through search results
	  // searchResults.forEach((product) => {
		//   // loop through each product's deliveries
		//   product.scheduleList.forEach((delivery) => {
		// 	  // if deliveries array is empty, add the delivery
		// 	  if (deliveries.length === 0) {
		// 		  deliveries[0] = this.buildNewSearchDelivery(delivery, product);
		// 	  } else if (!this.findByIdInArray(delivery.id, deliveries)) { // if delivery is not in array
		// 		// add it
		// 		  deliveries.push(this.buildNewSearchDelivery(delivery, product));
		// 	  }
		//   })
	  // })
	  // return the completed array
		return deliveries;
  };

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
    let results: any = this.dataStore.searchResults;
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

    this._searchResults.next(filteredResults);
    
  };

  filterByDistance(distance) {
    // if distance is 25, simply emit the original datastore results
    if (distance === 25) {
      this.dataStore.filteredSearchResults = this.dataStore.searchResults;
      this.dataStore.deliveryTypes = this.addDeliveryTypes(this.dataStore.filteredSearchResults.schedules);
      this.dataStore.categories = this.addCategories(this.dataStore.filteredSearchResults.products);
      this.dataStore.searchProducers = this.dataStore.filteredSearchResults.producers;
      this.dataStore.searchDeliveries = this.dataStore.filteredSearchResults.schedules;
      this._searchResults.next(Object.assign({}, this.dataStore).filteredSearchResults);
      this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
      this._categories.next(Object.assign({}, this.dataStore).categories);
      this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
      this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
    } else {
      // run the great circle equation on the original datastore search results scheds
      this._searchResults.next(null);
      console.log('distance selected: ', distance);
    }
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
