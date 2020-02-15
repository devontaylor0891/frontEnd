// provided in App Module

// called in...
// Search Options Comp
// Filter Buttons Comp
// Results Pane Comp
// Search Calendar Comp
// Search Producer Comp
// Search Comp
// Location Service

import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription'

import { ApiService } from '../../api.service';
import { UtilityService } from '../../services/utility/utility.service';

import { ProductModel } from '../../../core/models/product.model';
import { ProducerModel } from '../../../core/models/producer.model';

@Injectable()
export class SearchService implements OnInit, OnDestroy {

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
  searchResultsSub: Subscription;

  // create a Behavior Subject to hold all the different delivery types/categories and create an observable from them
  public _deliveryTypes: BehaviorSubject<string[]>;
  public _categories: BehaviorSubject<string[]>;
  public _searchProducers: BehaviorSubject<ProducerModel[]>;
  public _searchDeliveries: BehaviorSubject<any[]>;

  // ****************** MODIFYING THE VIEW BASED ON FILTER BUTTONS
  // create a private property to hold the default view
  public _viewStatus: BehaviorSubject<string>;
  currentDistanceSelected = 50;

  // during construction of service, create a empty dataStore and various BehaviorSubjects
  constructor(private apiService: ApiService,
              private utilityService: UtilityService) {
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

// *************REFACTOR WHERE AND WHY THIS IS USED
  // FILL DATASTORE WITH CALL TO API
  // called in locationService, searchOptionsMobile, searchOptions, resultsPane
  loadAll(searchOptions) {
    this.searchResultsSub = this.apiService.getSearchResults(searchOptions)
      .subscribe(
        response => {
          // console.log('************searchoptions: ', searchOptions);
          // console.log('response for search: ', response);
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
            // console.log('no results from search');
          } else {
            // the response contains results
            this.zeroSearchResultsReturned = false;
            this._zeroSearchResultsReturned.next(this.zeroSearchResultsReturned);
            // fill dataStore
            const sortedResponse = response;
            sortedResponse.products = this.utilityService.randomizeArray(response.products);
            sortedResponse.producers = this.utilityService.alphabetizeArray(response.producers);
            this.dataStore.originalSearchResults = JSON.parse(JSON.stringify(sortedResponse));
            this.dataStore.searchResults = JSON.parse(JSON.stringify(sortedResponse));
            this.dataStore.filteredSearchResults = JSON.parse(JSON.stringify(sortedResponse));
            // console.log('searchResults: ', this.dataStore.filteredSearchResults);
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

// OBSERVABLES

  // called in searchResults
  getZeroSearchResults() {
    return this._zeroSearchResultsReturned.asObservable();
  };

// *************REFACTOR WHERE AND WHY THIS IS USED, ALTHOUGHT IT MAY BE NECESSARY IN EACH SPOT
  // called in resultsPane, searchCalendarList, searchCalendar, searchMap, searchProducer, search
  getSearchResults() {
    return this._searchResults.asObservable();
  };

  // searchProducer
  getProducers() {
    return this._searchProducers.asObservable();
  };

  // searchOptions, searchOptionsMobile
  getDeliveryTypes() {
    return this._deliveryTypes.asObservable();
  };

  // searchOptions, searchOptionsMobile
  getCategories() {
    return this._categories.asObservable();
  };

  // searchOptions, searchOptionsMobile
  onFilter(values) {

    // get original searchResults, loop through each product, if it doesn't contain one of the deliveries or one of the categories, remove it
    const results: any = JSON.parse(JSON.stringify(this.dataStore.searchResults));
    let resultsFilteredBySched = [];
    let resultsFilteredByCategory = [];
    const catArray = [];
    values.categories.forEach((category) => { catArray.push(category) });
    const delArray = [];
    values.deliveryTypes.forEach((delivery) => { delArray.push(delivery) });

    resultsFilteredBySched = this.filterByScheds(results, delArray, catArray);

    resultsFilteredByCategory = this.filterByCategories(resultsFilteredBySched, delArray, catArray);

    // console.log('filtered Results: ', resultsFilteredByCategory);
    this._searchResults.next(resultsFilteredByCategory);

  };

  // searchOptions, searchOptionsMobile
  filterByDistance(distance, latitude, longitude) {
    // console.log('distance submitted: ', distance);
    // console.log('current dist: ', this.currentDistanceSelected);
    // if distance is currentDistanceSelected, return the filteredResults,
    if (distance === this.currentDistanceSelected) {
      // console.log('distance is currently selected');
      this.dataStore.deliveryTypes = this.addDeliveryTypes(this.dataStore.filteredSearchResults.schedules);
      this.dataStore.categories = this.addCategories(this.dataStore.filteredSearchResults.products);
      this.dataStore.searchProducers = this.dataStore.filteredSearchResults.producers;
      this.dataStore.searchDeliveries = this.dataStore.filteredSearchResults.schedules;
      this._searchResults.next(Object.assign({}, this.dataStore).filteredSearchResults);
      this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
      this._categories.next(Object.assign({}, this.dataStore).categories);
      this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
      this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
    } else { // else
      // set currentDistanceSelected equal to distance
      this.currentDistanceSelected = distance;
      // if distance is 100, make api call with the following:
      if (distance === 100) {
        // console.log('distance is 100');
        const options = {
          latitude: latitude,
          longitude: longitude,
          radius: distance
        };
        this.loadAll(options);
      // if distance is 50 (default), return original datastore results
      } else if (distance === 50) {
        // console.log('distance is 50');
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
      } else {
        // console.log('distance is different, doing calculations');
      // else, do the calculations
        // run the great circle equation on the original datastore search results scheds
        // run the great circle calculation
        let maxlat, maxlng, minlat, minlng;
        // set other parameters (from https://coderwall.com/p/otkscg/geographic-searches-within-a-certain-distance)
        // earth's radius in km = ~6371
        const earthRadius = 6371;
        // latitude boundaries
        maxlat = latitude + this.radToDegrees(distance / earthRadius);
        minlat = latitude - this.radToDegrees(distance / earthRadius);
        // longitude boundaries (longitude gets smaller when latitude increases)
        maxlng = longitude + this.radToDegrees(distance / earthRadius / Math.cos(this.degreesToRadians(latitude)));
        minlng = longitude - this.radToDegrees(distance / earthRadius / Math.cos(this.degreesToRadians(latitude)));
        // console.log('maxlat: ', maxlat);
        // console.log('maxlng: ', maxlng);
        // console.log('minlat: ', minlat);
        // console.log('minlng: ', minlng);
        // and return the list of scheds
        const returnedScheds = [];
        const producerIdArray = [];
        const returnedProducers = [];
        const returnedProducts = [];
        let schedLat, schedLng;
        let schedLatInCircle = false;
        let schedLngInCircle = false;
        // loop through each sched in the current datastore
        this.dataStore.searchResults.schedules.forEach((sched) => {
          // reset schedLatInCircle and Lng
          schedLatInCircle = false;
          schedLngInCircle = false;
          // console.log('sched: ', sched);
          schedLat = sched.latitude;
          schedLng = sched.longitude;
          // console.log('schedLat: ', schedLat);
          // console.log('schedlng: ', schedLng);
          // create an array of producer ids
          if (producerIdArray.length === 0) {
            producerIdArray.push(sched.producerId);
          } else if (producerIdArray.indexOf(sched.producerId) === -1) {
              producerIdArray.push(sched.producerId);
          };
          // console.log('producerIds: ', producerIdArray);
          if (schedLat >= minlat && schedLat <= maxlat) {
            schedLatInCircle = true;
            // console.log('schedlat in circle: ', schedLatInCircle);
          };
          if (schedLng >= minlng && schedLng <= maxlng) {
            schedLngInCircle = true;
            // console.log('schedlong in circle: ', schedLngInCircle);
          };
          if (schedLatInCircle && schedLngInCircle) {
            // console.log('pushing sched to array');
            returnedScheds.push(sched);
          };
          // console.log('datastore check: ', this.dataStore);
        });
        // console.log('schedsarray: ', returnedScheds);
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
        // console.log('datastore check: ', this.dataStore);
        // emit the values
        this.dataStore.filteredSearchResults.schedules = returnedScheds;
        this.dataStore.filteredSearchResults.producers = returnedProducers;
        this.dataStore.filteredSearchResults.products = returnedProducts;
        // console.log('datastore check: ', this.dataStore);
        this.dataStore.deliveryTypes = this.addDeliveryTypes(returnedScheds);
        this.dataStore.categories = this.addCategories(returnedProducts);
        this.dataStore.searchProducers = returnedProducers;
        this.dataStore.searchDeliveries = returnedScheds;
        // console.log('datastore check: ', this.dataStore);
        this._searchResults.next(Object.assign({}, this.dataStore).filteredSearchResults);
        this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
        this._categories.next(Object.assign({}, this.dataStore).categories);
        this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
        this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
        // console.log('datastore check: ', this.dataStore);
      }
    }
  };

  // searchOptions, searchOptionsMobile
  onReset() {
    this._searchResults.next(Object.assign({}, this.dataStore).searchResults);
    this._deliveryTypes.next(Object.assign({}, this.dataStore).deliveryTypes);
    this._categories.next(Object.assign({}, this.dataStore).categories);
    this._searchProducers.next(Object.assign({}, this.dataStore).searchProducers);
    this._searchDeliveries.next(Object.assign({}, this.dataStore).searchDeliveries);
  };

  // filterButtons
  changeView(view) {
    this._viewStatus.next(view);
  };

// USED LOCALLY

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
      const category = product.category;
      if (newArray.length === 0) {
        newArray = [category];
      } else if (newArray.indexOf(category) === -1) {
        newArray.push(category);
      }
    });
    return newArray;
  };

  addSearchProducers(scheds) {
    // create the producers array
    const producers: ProducerModel[] = [];
    let producerIdArray = [];
    // loop through each of the products, build an array of producer Ids
    scheds.forEach((sched) => {
      const pId = sched.producerId;
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
      for (let j = 0; j < this.dataStore.searchResults.producers.length; j++) {
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
  };

  getProducerIndex(producer, producers) {
    for (let i = 0; i < producers.length; i++) {
      if (producer.id === producers[i].id) {
        return i;
      }
    }
  };

  addDeliveriesFromProducerArrayAndScheduleType(producerArray, scheduleTypeArray) {
    const deliveriesByProducer = [];
    const finalDeliveries = [];
    const producerIdArray = [];
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
  };

  addProductsFromProducerArray(producerArray) {
    const finalProducts = [];
    const producerIdArray = [];
    // loop through producerArray, build an array of ids
    producerArray.forEach((producer) => {
      producerIdArray.push(producer.producerId);
    });
    // loop through the datastores scheds and push to another array where producer id is in producerIdArray
    for (let i = 0; i < producerIdArray.length; i++ ) {
      for (let j = 0; j < this.dataStore.searchResults.products.length; j++) {
        if (producerIdArray[i] === this.dataStore.searchResults.products[j].producerId) {
          finalProducts.push(this.dataStore.searchResults.products[j]);
        }
      }
    };
    // return the completed array
    return finalProducts;
  };

  buildNewSearchDelivery(delivery, product) {
    const producer = product.producer;
    const delObject = {
      'id': delivery.id,
      'producerId': product.producer.id,
      'producerName': product.producer.name,
      'productList': delivery.productList,
      'type': delivery.type,
      'description': delivery.description,
      'startDateTime': delivery.startDateTime,
      'endDateTime': delivery.endDateTime,
      'hasFee': delivery.hasFee,
      'fee': delivery.fee,
      'hasWaiver': null,
      'feeWaiver': delivery.feeWaiver,
      'latitude': delivery.latitude,
      'longitude': delivery.longitude,
      'city': delivery.city,
      'address': delivery.address,
      'province': delivery.province,
      'orderDeadline': delivery.orderDeadline,
      'orderList': []
    };
    return delObject;
  };

  locationInArray(array, searchTerm, property) {
    for (let i = 0, len = array.length; i < len; i++) {
      if (array[i][property] === searchTerm) {
        return i;
      } else {
        return -1;
      }
    }
  };

  filterByScheds(resultsArray, delArray, catArray) {
    // make a copy of results array to filter
    const filteredResults: any = {
      schedules: [],
      producers: [],
      products: []
    };
    let schedFilteredProducts = [];
    // filter scheds

    // filter producers

    // filter products

    // return results
    filteredResults.schedules = this.addDeliveriesFromProducerArrayAndScheduleType(resultsArray.producers, delArray);

    // create a new array for producers
    filteredResults.producers = this.addSearchProducers(filteredResults.schedules);
    // this._searchProducers.next(filteredProducers);

    schedFilteredProducts = this.addProductsFromProducerArray(filteredResults.producers);

    schedFilteredProducts.forEach((product) => { // for each product
      // if it does contain the delivery AND it does contain the category
      // if (this.containCategory(product, catArray) && this.containDelivery(product, delArray)) {
      if (this.containCategory(product, catArray)) {
        // push it to the array
        filteredResults.products.push(product);
      }
    });

    return filteredResults;

  };

  filterByCategories(resultsArray, delArray, catArray) {
    // make a copy of results array to filter
    const filteredResults: any = {
      schedules: [],
      producers: [],
      products: []
    };

    resultsArray.products.forEach((product) => { // for each product
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

    return filteredResults;
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
    // console.log('product: ', product)
    // console.log('deliveriesArray: ', deliveriesArray)
    for (let i = 0; i < deliveriesArray.length; i++) {
      for (let j = 0; j < product.scheduleList.length; j++) {
        if (product.scheduleList[j].type === deliveriesArray[i]) {
          return true;
        }
      }
    }
    return false;
  };

  isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
  };

  ngOnInit() {}

  ngOnDestroy() {
    if (this.searchResultsSub) {
      this.searchResultsSub.unsubscribe();
    };
  };

// not called
  // getDeliveries() {
  //   return this._searchDeliveries.asObservable();
  // };

// never called?
  // getSimpleProduct(product) {
  //   // pull out the required info and return as an object
  //   const productObject: ProductModel = {
  //     'id': null,
  //     'name': '',
  //     'description': '',
  //     'image': '',
  //     'pricePerUnit': null,
  //     'unit': null,
  //     'unitsPer': null,
  //     'category': '',
  //     'subcategory': '',
  //     'producer': {
  //       'id': null,
  //       'name': '',
  //       'location': '',
  //       'province': '',
  //       'address': '',
  //       'description': '',
  //       'email': '',
  //       'logoUrl': '',
  //       'longitude': null,
  //       'latitude': null,
  //       'firstName': '',
  //       'registrationDate': '',
  //       'status': ''
  //     },
  //     'dateAdded': '',
  //     'qtyAvailable': null,
  //     'qtyPending': null,
  //     'qtyAccepted': null,
  //     'qtyCompleted': null,
  //     'isObsolete': false,
  //     'scheduleList': []
  //   };
  //   productObject.id = product.id;
  //   productObject.name = product.name;
  //   productObject.pricePerUnit = product.pricePerUnit;
  //   productObject.unit = product.unit;
  //   return productObject;
  // };

}
