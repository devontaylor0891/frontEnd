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
export class MarketService implements OnInit {

  // DATASTORE - using to store info about a single producer and their accompanying arrays. This should help response time when dealing with one single producer's information (producer page)
  private dataStore: {
    market: any,
    schedule: any[],
    locations: any[],
    producers: any[]
  }

  // BEHAVIOR SUBJECTS
  // use a BehaviorSubject to create an observable out of a COPY of the dataStore
  public _market: BehaviorSubject<any>;
  public _marketSchedule: BehaviorSubject<any[]>;
  public _noUpcomingScheds: BehaviorSubject<boolean>;
  public _marketLocations: BehaviorSubject<any[]>;
  public _marketProducers: BehaviorSubject<any[]>;

  now = new Date().toISOString();

  constructor(private http: Http,
    private apiService: ApiService) {
      this.dataStore = {
        market: null,
        schedule: [],
        locations: [],
        producers: []
      };
      this._market = <BehaviorSubject<any>>new BehaviorSubject({});
      this._marketSchedule = <BehaviorSubject<any[]>>new BehaviorSubject([]);
      this._noUpcomingScheds = <BehaviorSubject<boolean>>new BehaviorSubject(true);
      this._marketLocations = <BehaviorSubject<any[]>>new BehaviorSubject([]);
      this._marketProducers = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    }

    ngOnInit() {}

    // **************************** LOAD ALL INTO DATASTORE ************************
    // GET the producer and store the info in the dataStore, if it's not already in there
    loadMarketData(id) {
      console.log('id: ', id);
      // console.log('datastore: ', this.dataStore);
      if ((this.dataStore.market === null) || (id !== this.dataStore.market.id)) {
        this.apiService.getMarketById(id)
          .subscribe(
            response => {
              this.dataStore.market = response[0];
              // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
              this._market.next(Object.assign({}, this.dataStore).market);
              this.apiService.getScheduleByMarketId(this.dataStore.market.marketId)
                .subscribe(
                  result => {
                    this.dataStore.schedule = result;
                    console.log('scheds received in service: ', result);
                    for (let i = this.dataStore.schedule.length - 1; i >= 0; i--) {
                      if (this.dataStore.schedule[i].orderDeadline > this.now) {
                        // console.log('no upcoming scheds is false');
                        this._noUpcomingScheds.next(false);
                        break;
                      }
                    }
                    // make a copy and put it in the appropriate BehaviorSubjects that will become the Observable for the components
                    this._marketSchedule.next(Object.assign({}, this.dataStore).schedule);
                    this.buildProducers();
                  }
                );
              this.apiService.getLocationsByMarketId(this.dataStore.market.marketId)
                .subscribe(
                  results => {
                    console.log('locs received in service: ', results);
                    this.dataStore.locations = results;
                    this._marketLocations.next(Object.assign({}, this.dataStore).locations);
                  }
                );
            }
          );

      } else {
        // console.log('producer service datastore already full'); // NEVER GETS CALLED
        return;
      }
      // console.log('datastore: ', this.dataStore);
    }

    // **************************** SINGLE PRODUCER ************************

    getMarket() {
      return this._market.asObservable();
    };

    getNoUpcomingScheds() {
      return this._noUpcomingScheds.asObservable();
    };

      // **************************** MULTIPLE SCHEDULES ************************

    getAllSchedule() {
      return this._marketSchedule.asObservable();
    };

    getAllLocations() {
      return this._marketLocations.asObservable();
    };

    buildProducers() {
      // using scheds, build a unique producers array
      // assign to behsubj
      let producers = [];
      let uniques;
      this.dataStore.schedule.forEach(
        sched => {
          uniques = sched.producerSchedules.filter((x, i, a) => a.indexOf(x) === i);
          producers = producers.concat(uniques);
          console.log('filtering scheds: ', sched);
          // producers.concat(sched.producerSchedules)
        }
      );
      // const uniqueProducers = producers.filter((x, i, a) => a.indexOf(x) === i);
      this.dataStore.producers = producers;
      this._marketProducers.next(Object.assign(this.dataStore).producers);
    };

    getUniqueProducers() {
      return this._marketProducers.asObservable();
    };

      //     const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
      // const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i)
      // console.log(uniqueAges)

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
        market: null,
        schedule: [],
        locations: [],
        producers: []
      };
      this._marketSchedule.next(Object.assign({}, this.dataStore).schedule);
      this._marketLocations.next(Object.assign({}, this.dataStore).locations);
    };

}
