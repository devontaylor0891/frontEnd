import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ApiService } from '../../api.service';

import { ProducerModel } from '../../models/producer.model';

import 'rxjs/add/operator/map';

@Injectable()
export class ProducerService {
  
  url = '../../../../assets/api/producers.json';
  producer: ProducerModel;
    
  constructor(private http: Http,
              private apiService: ApiService) { }
  
  getProducers() {
    return this.http.get(this.url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }  
      )
  }

  getProducerById(id) {
    console.log('getProduct called');
    console.log(id);
    this.apiService.getProducerById(id).
      subscribe(
        response => {
          this.producer = response;
        }
      )
  }

}
