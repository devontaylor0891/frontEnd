import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ProducerModel } from '../../core/models/producer.model';

import { ApiService } from '../../core/api.service';

@Injectable()
export class DashboardService {

  // store the data in memory
  private dataStore: {
    producers: ProducerModel[]
  }

  // create the behaviour subjects
  public _producers: BehaviorSubject<ProducerModel[]>;

  // during construction, create the empty datastore and initialize behaviour subjects
  constructor(private apiService: ApiService) {
    this.dataStore.producers = [];
    this._producers = <BehaviorSubject<ProducerModel[]>>new BehaviorSubject([]);
  }

  // fill the datastore with the producers
  loadAllProducers() {
    this.apiService.getProducers()
      .subscribe(
        response => {
          // fill datastore
          this.dataStore.producers = response;
          // make a copy and assign to the behaviour subject
          this._producers.next(Object.assign({}, this.dataStore).producers);
        }, error => console.log('could not load producers')
      );
  }

  getAllProducers() {
    return this._producers.asObservable();
  }
  

}
