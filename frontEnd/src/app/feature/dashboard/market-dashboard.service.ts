import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../core/api.service';

@Injectable()
export class MarketDashboardService {

  marketSub: Subscription;
  userSub: Subscription;
  scheduleSub: Subscription;

  // dataStore
  dataStore: {
    market: any,
    user: any,
    schedules: any[]
  };

  // create the behaviour subjects
  public _market: BehaviorSubject<any>;
  public _user: BehaviorSubject<any>;
  public _schedules: BehaviorSubject<any[]>;

  constructor(private apiService: ApiService) {
    this.dataStore = { market: null, user: null, schedules: [] };
    this._market = <BehaviorSubject<any>>new BehaviorSubject(null);
    this._user = <BehaviorSubject<any>>new BehaviorSubject(null);
    this._schedules = <BehaviorSubject<any[]>>new BehaviorSubject([]);
  }

  loadData(id) {
    this.marketSub = this.apiService.getMarketById(id)
      .subscribe(
        result => {
          this.dataStore.market = result[0];
          this._market.next(Object.assign({}, this.dataStore).market);
          this.getSchedsByMarketId();
        }, error => console.log('could not load market')
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

  getSchedsByMarketId() {
    this.scheduleSub = this.apiService.getScheduleByMarketId(this.dataStore.market.id)
      .subscribe(
        result => {
          this.dataStore.schedules = result;
          console.log('market dashboard schedules: ', this.dataStore.schedules);
          this._schedules.next(Object.assign({}, this.dataStore).schedules);
        }, error => console.log('could not load schedules')
      );

  };

  getMarket() {
    return this._market.asObservable();
  };

  getUserData() {
    return this._user.asObservable();
  };

  getSchedules() {
    return this._schedules.asObservable();
  };

  reloadData() {
    this.getSchedsByMarketId();
  };

}
