// import { Injectable, OnInit, EventEmitter } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { HttpClient } from '@angular/common/http';

// import { BehaviorSubject } from 'rxjs';

// import { ApiService } from '../../api.service';

// import { ProductAdmin } from '../../../core/models/dashboard-admin/products/product-admin.model';
// import { ProductCardModel } from '../../../core/models/product-card.model';
// import { ProducerModel } from '../../models/producer.model';

// import 'rxjs/add/operator/map';

// @Injectable()
// export class ProducerService implements OnInit {
  
//   producersUrl = '../../../../assets/api/producers.json';
//   producer: ProducerModel;

//   productsUrl = '../../../../assets/api/products.json';
  
//   // create a Behavior Subject for the product
//   public _product: BehaviorSubject<ProductCardModel>;
    
//   constructor(private http: Http,
//               private apiService: ApiService) { 
//      this._product = <BehaviorSubject<ProductCardModel>>new BehaviorSubject({});
//   }
  
//   getProducers() {
//     return this.http.get(this.producersUrl)
//       .map(
//         (response: Response) => {
//           const data = response.json();
//           return data;
//         }  
//       )
//   }

//   getProducerById(id) {
//     this.apiService.getProducerById(id).
//       subscribe(
//         response => {
//           this.producer = response;
//         }
//       )
//   }
  
//   // use this to return a product for now
//   getProductById(id) {
//     return this._product.asObservable();
//   }

//   load(id) {
//     this.apiService.getProductById(id)
//     .subscribe(
//       response => { 
//         console.log('response from api service:')
//         console.log(response);
//         this._product.next(Object.assign({}, response)); }
//     );
//   }

//   //  for Admin dash only. original that works with the subscription in the products component class
//   getProducts() {
//     return this.http.get(this.productsUrl)
//       .map(
//         (response: Response) => {
//           const data = response.json();
//           return data;
//         }  
//       )
//   }

//   // this is returning the data from Nikki's endpoint
//   // getProductById(id) {
//   //   this.apiService.getProductById(id).
//   //     subscribe(
//   //       response => {
//   //         this.product = response;
//   //         return this.product;
//   //       }
//   //     );
//   // }

//   productAdded = new EventEmitter<ProductAdmin>();

//   ngOnInit() {}

// }


import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

import { ApiService } from '../../api.service';

import { ProductAdmin } from '../../models/dashboard-admin/products/product-admin.model';
import { ProductCardModel } from '../../models/product-card.model';
import { ProducerModel } from '../../models/producer.model';
import { ProductModel } from '../../models/product.model';
import { ScheduleModel } from '../../models/schedule.model';

@Injectable()
export class ProducerService implements OnInit {
  
  // URLs
  producersUrl = '../../../../assets/api/producers.json';
  productsUrl = '../../../../assets/api/products.json';
  
  // DATASTORE - using to store info about a single producer and their accompanying arrays. This should help response time when dealing with one single producer's information (producer page)
  private dataStore: {
	  producer: ProducerModel,
	  products: ProductModel[],
	  schedule: ScheduleModel[]
  }
  
  // BEHAVIOR SUBJECTS
  // use a BehaviorSubject to create an observable out of a COPY of the dataStore
  // producer
  public _producer: BehaviorSubject<ProducerModel>;
  public _producerProducts: BehaviorSubject<ProductModel[]>;
  public _producerSchedule: BehaviorSubject<ScheduleModel>;
  // product - this is bypassing the dataStore step and being populated directly from the Api call right now.
  public _product: BehaviorSubject<ProductCardModel>;
    
  constructor(private http: Http,
              private apiService: ApiService) { 
    this._product = <BehaviorSubject<ProductCardModel>>new BehaviorSubject({});
    this._producer = <BehaviorSubject<ProducerModel>>new BehaviorSubject({});
    this._producerProducts = <BehaviorSubject<ProductModel[]>>new BehaviorSubject([]);
    this._producerSchedule = <BehaviorSubject<ScheduleModel>>new BehaviorSubject({});
  }
  
  // **************************** SINGLE PRODUCER ************************
  // NOTE - before performing the API call, test to see if this is the producer in the dataStore already
  getProducerById(id) {
    this.apiService.getProducerById(id).
      subscribe(
        response => {
          this.dataStore.producer = response;
        }
      )
  }
  
  // **************************** MULTIPLE PRODUCTS ************************
  // populate the dataStore.products from the dataStore.producer.productList array
  
  // **************************** SINGLE PRODUCT ************************
  
  // use this to return a product for now
  getProductById(id) {
    return this._product.asObservable();
  }
  
  // this is returning the data from Nikki's endpoint
  // getProductById(id) {
  //   this.apiService.getProductById(id).
  //     subscribe(
  //       response => {
  //         this.product = response;
  //         return this.product;
  //       }
  //     );
  // }

  // GET the single product with an API call, assign it as the next observable from the BehaviorSubject
  load(id) {
    this.apiService.getProductById(id)
    .subscribe(
      response => { 
        console.log('response from api service:')
        console.log(response);
        this._product.next(Object.assign({}, response)); }
    );
  }
  
  // **************************** MULTIPLE SCHEDULES ************************
  // populate the dataStore.schedule from the dataStore.producer.scheduleList array
  
  // **************************** SINGLE SCHEDULE ************************

  
  // **************************** ADMIN DASHBOARD ************************
  //  for Admin dash only. original that works with the subscription in the products component class
  getProducts() {
    return this.http.get(this.productsUrl)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }  
      )
  }

  productAdded = new EventEmitter<ProductAdmin>();
  
  getProducers() {
    return this.http.get(this.producersUrl)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }  
      )
  }

  ngOnInit() {}

}