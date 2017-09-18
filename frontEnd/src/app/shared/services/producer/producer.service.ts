import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ProducerService {
  
  url = '../../../../assets/api/producers.json';
    
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
