import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from '../../core/api.service';

import { ProducerModel } from '../../core/models/producer.model';
import { UserModel } from '../../core/models/user.model';
import { ProductModel } from '../../core/models/product.model';
import { ScheduleModel } from '../../core/models/schedule.model';
import { OrderModel } from '../../core/models/order.model';

@Injectable()
export class ProducerDashboardService {

  // dataStore
  dataStore: {
    producer: ProducerModel,
    user: UserModel,
    products: ProductModel[],
    orders: OrderModel[],
    schedules: ScheduleModel[]
  };

  // create the behaviour subjects
  public _producer: BehaviorSubject<ProducerModel>;
  public _user: BehaviorSubject<UserModel>;
  public _products: BehaviorSubject<ProductModel[]>;
  public _orders: BehaviorSubject<OrderModel[]>;
  public _schedules: BehaviorSubject<ScheduleModel[]>;

  constructor(private apiService: ApiService) {
    this.dataStore = { producer: null, user: null, products: [], orders: [], schedules: [] };
    this._producer = <BehaviorSubject<ProducerModel>>new BehaviorSubject(null);
    this._user = <BehaviorSubject<UserModel>>new BehaviorSubject(null);
    this._products = <BehaviorSubject<ProductModel[]>>new BehaviorSubject([]);
    this._orders = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
    this._schedules = <BehaviorSubject<ScheduleModel[]>>new BehaviorSubject([]);
  }

  loadData(id) {
    this.apiService.getProducerById(id)
      .subscribe(
        result => {
          this.dataStore.producer = result;
          this._producer.next(Object.assign({}, this.dataStore).producer);
        }, error => console.log('could not load producer')
      );
    this.apiService.getUserById(id)
      .subscribe(
        result => {
          this.dataStore.user = result;
          this._user.next(Object.assign({}, this.dataStore).user);
        }, error => console.log('could not load user')
      );
    this.apiService.getProductsByProducerId(id)
      .subscribe(
        result => {
          this.dataStore.products = result;
          this._products.next(Object.assign({}, this.dataStore).products);
        }, error => console.log('could not load products')
      );
    this.apiService.getOrdersByProducerId(id)
      .subscribe(
        result => {
          this.dataStore.orders = result;
          this._orders.next(Object.assign({}, this.dataStore).orders);
        }, error => console.log('could not load order')
      );
    this.apiService.getScheduleByProducerId(id)
      .subscribe(
        result => {
          this.dataStore.schedules = result;
          this._schedules.next(Object.assign({}, this.dataStore).schedules);
        }, error => console.log('could not load schedules')
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
  
}
