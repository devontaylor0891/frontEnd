import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from '../../../core/api.service';

import { UserModel } from '../../../core/models/user.model';
import { OrderModel } from '../../../core/models/order.model';

@Injectable()
export class ConsumerDashboardService {

  // dataStore
  dataStore: {
    user: UserModel,
    orders: OrderModel[]
  };

  // create the behaviour subjects
  public _user: BehaviorSubject<UserModel>;
  public _orders: BehaviorSubject<OrderModel[]>;

  constructor(private apiService: ApiService) {
    this.dataStore = { user: null, orders: [] };
    this._user = <BehaviorSubject<UserModel>>new BehaviorSubject(null);
    this._orders = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
  }

  loadData(id) {
    this.apiService.getUserById(id)
    // add a new product via the add-product component, push it to the appropriate array
      .subscribe(
        result => {
          this.dataStore.user = result;
          this._user.next(Object.assign({}, this.dataStore).user);
        }, error => console.log('could not load user')
      );
    this.apiService.getOrdersByConsumerId(id)
      .subscribe(
        result => {
          this.dataStore.orders = result;
          this._orders.next(Object.assign({}, this.dataStore).orders);
        }, error => console.log('could not load order')
      );
  };

}
