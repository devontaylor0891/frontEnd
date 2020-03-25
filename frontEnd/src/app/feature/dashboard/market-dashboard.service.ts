import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../core/api.service';

@Injectable()
export class MarketDashboardService {

  marketSub: Subscription;
  userSub: Subscription;
  scheduleSub: Subscription;
  locationSub: Subscription;

  // dataStore
  dataStore: {
    market: any,
    user: any,
    locations: any[],
    schedules: any[]
  };

  // create the behaviour subjects
  public _market: BehaviorSubject<any>;
  public _user: BehaviorSubject<any>;
  public _schedules: BehaviorSubject<any[]>;
  public _locations: BehaviorSubject<any[]>;

  constructor(private apiService: ApiService) {
    this.dataStore = { market: null, user: null, locations: [], schedules: [] };
    this._market = <BehaviorSubject<any>>new BehaviorSubject(null);
    this._user = <BehaviorSubject<any>>new BehaviorSubject(null);
    this._locations = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this._schedules = <BehaviorSubject<any[]>>new BehaviorSubject([]);
  }

  loadData(id) {
    this.marketSub = this.apiService.getMarketById(id)
      .subscribe(
        result => {
          this.dataStore.market = result[0];
          console.log('market received in service: ', this.dataStore.market);
          this._market.next(Object.assign({}, this.dataStore).market);
          this.getSchedsByMarketId();
          this.getLocationsByMarketId();
        }, error => console.log('could not load market')
      );
    this.userSub = this.apiService.getUserById(id)
      .subscribe(
        result => {
          this.dataStore.user = result;
          this._user.next(Object.assign({}, this.dataStore).user);
        }, error => console.log('could not load user')
      );
  };

  getLocationsByMarketId() {
    console.log('market id: ', this.dataStore.market);
    this.locationSub = this.apiService.getLocationsByMarketId(this.dataStore.market.marketId)
      .subscribe(
        result => {
          console.log('market lcoations received: ', result);
          this.dataStore.locations = result;
          console.log('market dashboard locations: ', this.dataStore.locations);
          this._locations.next(Object.assign({}, this.dataStore).locations);
        }, error => console.log('could not load locations')
      );
  };

  getSchedsByMarketId() {
    this.scheduleSub = this.apiService.getScheduleByMarketId(this.dataStore.market.marketId)
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

  getLocations() {
    return this._locations.asObservable();
  };

  getSchedules() {
    return this._schedules.asObservable();
  };

  reloadData() {
    this.getSchedsByMarketId();
  };

}
