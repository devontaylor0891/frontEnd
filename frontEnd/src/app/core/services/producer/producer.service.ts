// provided in Producer Component

// called in ...
// Add Product Comp
// Products Comp
// Producer Products Comp
// Producer Page Comp
// Producer Comp, obviously
// Product Component
// Schedule Component

import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { ApiService } from '../../api.service';

import { ProductAdmin } from '../../models/dashboard-admin/products/product-admin.model';
import { ProducerModel } from '../../models/producer.model';
import { ProductModel } from '../../models/product.model';
import { ScheduleModel } from '../../models/schedule.model';

@Injectable()
export class ProducerService implements OnInit {

  // DATASTORE - using to store info about a single producer and their accompanying arrays. This should help response time when dealing with one single producer's information (producer page)
  private dataStore: {
    producer: any,
    products: any[],
    schedule: any[]
  }

  // BEHAVIOR SUBJECTS
  // use a BehaviorSubject to create an observable out of a COPY of the dataStore
  // producer
  public _producer: BehaviorSubject<any>;
  public _producerProducts: BehaviorSubject<any[]>;
  public _producerSchedule: BehaviorSubject<any[]>;
  // product - this is bypassing the dataStore step and being populated directly from the Api call right now.
  public _product: BehaviorSubject<any>;
  public _noUpcomingScheds: BehaviorSubject<boolean>;

  now = new Date().toISOString();

  constructor(private http: Http,
    private apiService: ApiService) {
      this.dataStore = {
        producer: null,
        products: [],
        schedule: []
      };
      this._product = <BehaviorSubject<any>>new BehaviorSubject({});
      this._producer = <BehaviorSubject<any>>new BehaviorSubject({});
      this._producerProducts = <BehaviorSubject<any[]>>new BehaviorSubject([]);
      this._producerSchedule = <BehaviorSubject<any[]>>new BehaviorSubject([]);
      this._noUpcomingScheds = <BehaviorSubject<boolean>>new BehaviorSubject(true);
    }

    ngOnInit() {}

    // **************************** LOAD ALL INTO DATASTORE ************************
    // GET the producer and store the info in the dataStore, if it's not already in there
    loadProducerData(id) {
      console.log('id: ', id);
      // console.log('datastore: ', this.dataStore);
      if ((this.dataStore.producer === null) || (id !== this.dataStore.producer.id)) {
        this.apiService.getProducerById(id)
          .subscribe(
            response => {
              this.dataStore.producer = response[0];
              // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
              this._producer.next(Object.assign({}, this.dataStore).producer);
            }
          );
        // then populate products
        this.apiService.getProductsByProducerId(id)
          .subscribe(
            response => {
              // console.log('products in producer service: ', response);
              this.dataStore.products = response;
              // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
              this._producerProducts.next(Object.assign({}, this.dataStore).products);
            }
          );
        this.apiService.getScheduleByProducerId(id)
          .subscribe(
            response => {
              this.dataStore.schedule = response;
              console.log('scheds received in service: ', response);
              for (let i = this.dataStore.schedule.length - 1; i >= 0; i--) {
                if (this.dataStore.schedule[i].orderDeadline > this.now) {
                  // console.log('no upcoming scheds is false');
                  this._noUpcomingScheds.next(false);
                  break;
                }
              }
              // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
              this._producerSchedule.next(Object.assign({}, this.dataStore).schedule);
            }
          );
      } else {
        // console.log('producer service datastore already full'); // NEVER GETS CALLED
        return;
      }
      // console.log('datastore: ', this.dataStore);
    }

    // **************************** SINGLE PRODUCER ************************

    getProducer() {
      return this._producer.asObservable();
    }

    // **************************** MULTIPLE PRODUCTS ************************

    getAllProducts() {
      return this._producerProducts.asObservable();
    }

    // **************************** SINGLE PRODUCT ************************

    // use this to return a product for now
    getProductById(id) {
      return this._product.asObservable();
    }

    getNoUpcomingScheds() {
      return this._noUpcomingScheds.asObservable();
    }

    loadProduct(productId) {
      // check if product is already in datastore, if yes, return it,
      let index = this.findInArray(this.dataStore.products, productId);
      if (index > -1) {
        // console.log('product already in datastore');
        this._product.next(Object.assign({}, this.dataStore.products[index]));
      } else {
        // console.log('api call being made, product not already in datastore');
        // if not, make the api call
        this.apiService.getProductById(productId)
        .subscribe(
          response => {
            this.loadProducerData(response[0].producer.id);
            this._product.next(Object.assign({}, response[0])); }
          );
        };
      };

      // **************************** MULTIPLE SCHEDULES ************************

      getAllSchedule() {
        return this._producerSchedule.asObservable();
      }

      // **************************** SINGLE SCHEDULE ************************

      // GET and LOAD the single schedule with an API call, assign it as the next observable from the BehaviorSubject
      // NOTE -  first check to see if this product is in the dataStore.schedule array, if not, then make the API call
      getScheduleById(id) {

      };

      loadScheduleById(id) {

      }

      // **************************** ADMIN DASHBOARD ************************
      //  for Admin dash only. original that works with the subscription in the products component class
      // getProducts() {
      //   return this.http.get(this.productsUrl)
      //   .map(
      //     (response: Response) => {
      //       const data = response.json();
      //       return data;
      //     }
      //   )
      // }

      productAdded = new EventEmitter<ProductAdmin>();

      // getProducers() {
      //   return this.http.get(this.producersUrl)
      //   .map(
      //     (response: Response) => {
      //       const data = response.json();
      //       return data;
      //     }
      //   )
      // };

      findInArray(array, id) {
        let index = -1;
        for (let i = 0; i < array.length; i++) {
          if (array[i].id === id) {
            index = i;
          }
        };
        return index;
      };

      clearDataStore() {
        this.dataStore = {
          producer: null,
          products: [],
          schedule: []
        };
        this._producerSchedule.next(Object.assign({}, this.dataStore).schedule);
      }

}
