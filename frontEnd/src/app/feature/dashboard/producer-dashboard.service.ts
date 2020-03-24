import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../core/api.service';

import { ProducerModel } from '../../core/models/producer.model';
import { UserModel } from '../../core/models/user.model';
import { ProductModel } from '../../core/models/product.model';
import { ScheduleModel } from '../../core/models/schedule.model';
import { OrderModel } from '../../core/models/order.model';

@Injectable()
export class ProducerDashboardService {

  producerSub: Subscription;
  userSub: Subscription;
  productsSub: Subscription;
  scheduleSub: Subscription;
  ordersSub: Subscription;

  // dataStore
  dataStore: {
    producer: ProducerModel,
    user: any,
    products: ProductModel[],
    orders: any,
    schedules: ScheduleModel[]
  };

  // create the behaviour subjects
  public _producer: BehaviorSubject<ProducerModel>;
  public _user: BehaviorSubject<any>;
  public _products: BehaviorSubject<ProductModel[]>;
  public _orders: BehaviorSubject<any>;
  public _schedules: BehaviorSubject<ScheduleModel[]>;

  constructor(private apiService: ApiService) {
    this.dataStore = { producer: null, user: null, products: [], orders: [], schedules: [] };
    this._producer = <BehaviorSubject<ProducerModel>>new BehaviorSubject(null);
    this._user = <BehaviorSubject<any>>new BehaviorSubject(null);
    this._products = <BehaviorSubject<ProductModel[]>>new BehaviorSubject([]);
    this._orders = <BehaviorSubject<any>>new BehaviorSubject([]);
    this._schedules = <BehaviorSubject<ScheduleModel[]>>new BehaviorSubject([]);
  }

  loadData(id) {
    this.producerSub = this.apiService.getProducerById(id)
      .subscribe(
        result => {
          this.dataStore.producer = result[0];
          // console.log('api getProducer result', result);
          this._producer.next(Object.assign({}, this.dataStore).producer);
          this.getProductsByProducerId(this.dataStore.producer.id);
          this.getSchedsByProducerId();
          this.getOrdersByProducerId(this.dataStore.producer.producerId);
        }, error => console.log('could not load producer')
      );
    this.userSub = this.apiService.getUserById(id)
    // add a new product via the add-product component, push it to the appropriate array
      .subscribe(
        result => {
          this.dataStore.user = result;
          this._user.next(Object.assign({}, this.dataStore).user);
        }, error => console.log('could not load user')
      );
  };

  getProductsByProducerId(id) {
    this.productsSub = this.apiService.getProductsByProducerId(id)
      .subscribe(
        result => {
          this.dataStore.products = result;
          // console.log('producer dashboard products: ', this.dataStore.products);
          this._products.next(Object.assign({}, this.dataStore).products);
        }, error => console.log('could not load products')
      );
  };

  getSchedsByProducerId() {
    this.scheduleSub = this.apiService.getScheduleByProducerId(this.dataStore.producer.id)
      .subscribe(
        result => {
          this.dataStore.schedules = result;
          // console.log('producer dashboard schedules: ', this.dataStore.schedules);
          this._schedules.next(Object.assign({}, this.dataStore).schedules);
        }, error => console.log('could not load schedules')
      );
  }

  getOrdersByProducerId(id) {
    this.ordersSub = this.apiService.getOrdersByProducerId(id)
      .subscribe(
        result => {
          this.dataStore.orders = result;
          // console.log('producer dashboard orders: ', this.dataStore.orders);
          this._orders.next(Object.assign({}, this.dataStore).orders);
        }, error => console.log('could not load order')
      );
  };

  getProducer() {
    return this._producer.asObservable();
  };

  getUserData() {
    return this._user.asObservable();
  };

  getProducts() {
    return this._products.asObservable();
  };

  getOrders() {
    return this._orders.asObservable();
  };

  getSchedules() {
    return this._schedules.asObservable();
  };

  addNewProduct(product: ProductModel) {
    this.apiService.postProduct(product)
      .subscribe(
        result => {
          // console.log('posted successfully')
        }
      );
  };

  reloadData() {
    this.getSchedsByProducerId();
  }

}
