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
    orders: any
  };

  // create the behaviour subjects
  public _user: BehaviorSubject<UserModel>;
  public _orders: BehaviorSubject<any[]>;

  constructor(private apiService: ApiService) {
    this.dataStore = { user: null, orders: [] };
    this._user = <BehaviorSubject<UserModel>>new BehaviorSubject(null);
    this._orders = <BehaviorSubject<any[]>>new BehaviorSubject([]);
  }

  loadData(id) {
    // console.log('user from consumer dashboard: ', id);
    // this.apiService.getUserByAuthId(id)
    //   .subscribe(
    //     result => {
    //       console.log('result: ', result);
    //       this.dataStore.user = result[0];
    //       this._user.next(Object.assign({}, this.dataStore).user);
    //       console.log('user: ', this.dataStore.user);
    //     }, error => console.log('could not load user')
    //   );
    this.apiService.getOrdersByConsumerId(id)
      .subscribe(
        result => {
          this.dataStore.orders = result;
          // console.log('consumer orders: ', result);
          this._orders.next(Object.assign({}, this.dataStore).orders);
        }, error => console.log('could not load order')
      );
  };

}
