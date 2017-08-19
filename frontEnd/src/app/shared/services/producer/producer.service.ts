import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { ProducerAdmin } from '../../models/producer-admin.model';

@Injectable()
export class ProducerService {
  
  url = '../../../../assets/api/producersAdmin.json';
    
    producersAdmin: ProducerAdmin[] = [];

  constructor(private http: Http) { }
  
  getProducers() {
    return this.http.get(this.url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }  
      )
  }

}
