import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ProducerModel } from '../../core/models/producer.model';
import { UserModel } from '../../core/models/user.model';
import { ProductModel } from '../../core/models/product.model';
import { OrderModel } from '../../core/models/order.model';
import { ScheduleModel } from '../../core/models/schedule.model';

import { ApiService } from '../../core/api.service';

@Injectable()
export class DashboardService {

  // store the data in memory
  private dataStore: {
    producers: ProducerModel[],
    users: UserModel[],
    products: ProductModel[],
    orders: OrderModel[],
    schedules: ScheduleModel[]
  }

  // create the behaviour subjects
  public _producers: BehaviorSubject<ProducerModel[]>;
  public _users: BehaviorSubject<UserModel[]>;
  public _products: BehaviorSubject<ProductModel[]>;
  public _orders: BehaviorSubject<OrderModel[]>;
  public _schedules: BehaviorSubject<ScheduleModel[]>;

  // during construction, create the empty datastore and initialize behaviour subjects
  constructor(private apiService: ApiService) {
    this.dataStore = { producers: [], users: [], products: [], orders: [], schedules: [] };
    this._producers = <BehaviorSubject<ProducerModel[]>>new BehaviorSubject([]);
    this._users = <BehaviorSubject<UserModel[]>>new BehaviorSubject([]);
    this._products = <BehaviorSubject<ProductModel[]>>new BehaviorSubject([]);
    this._orders = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
    this._schedules = <BehaviorSubject<ScheduleModel[]>>new BehaviorSubject([]);
  }

  // fill the datastore with the producers
  loadAllProducers() {
    this.apiService.getProducers()
      .subscribe(
        response => {
          // fill datastore
          this.dataStore.producers = response;
          // console.log('this.datastore.producers: ', this.dataStore.producers);
          // make a copy and assign to the behaviour subject
          this._producers.next(Object.assign({}, this.dataStore).producers);
        }, error => console.log('could not load producers')
      );
  }

  getAllProducers() {
    return this._producers.asObservable();
  }

  loadAllUsers() {
    this.apiService.getUsers()
      .subscribe(
        response => {
          this.dataStore.users = response;
          // console.log('this.datastore.users: ', this.dataStore.users);
          this._users.next(Object.assign({}, this.dataStore).users);
        }, error => console.log('could not load users')
      );
  }

  getAllUsers() {
    return this._users.asObservable();
  }

  loadAllProducts() {
    this.apiService.getProducts()
      .subscribe(
        response => {
          this.dataStore.products = response;
          // console.log('this.datastore.products: ', this.dataStore.products);
          this._products.next(Object.assign({}, this.dataStore).products);
        }, error => console.log('could not load products')
      );
  }

  getAllProducts() {
    return this._products.asObservable();
  }

  loadAllOrders() {
    this.apiService.getOrders()
      .subscribe(
        response => {
          this.dataStore.orders = response;
          // console.log('this.datastore.orders: ', this.dataStore.orders);
          this._orders.next(Object.assign({}, this.dataStore).orders);
        }, error => console.log('could not load orders')
      );
  }

  getAllOrders() {
    return this._orders.asObservable();
  }

  loadAllSchedules() {
    // console.log('load all scheds called');
    this.apiService.getSchedules()
      .subscribe(
        response => {
          this.dataStore.schedules = response;
          // console.log('this.datastore.schedules: ', this.dataStore.schedules);
          this._schedules.next(Object.assign({}, this.dataStore).schedules);
        }, error => console.log('could not load schedules')
      );
  }

  getAllSchedules() {
    return this._schedules.asObservable();
  }
  

}
