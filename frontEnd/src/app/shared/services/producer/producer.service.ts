import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { ProducerAdmin } from '../../models/producer-admin.model';

@Injectable()
export class ProducerService {
  
  url = '../../../../assets/api/producersAdmin.json';
    
    //this will be where a getAll() method is called, to populate this array
    producersAdmin: ProducerAdmin[] = [
        // new ProducerAdmin(
        //   4,
        //   'Garden Farms',
        //   'Moosomin',
        //   'SK',
        //   'This is a description',
        //   'email@email.com',
        //   'beet.png',
        //   444,
        //   555,
        //   'Devon',
        //   'Jan 1 2017'
        // ),
        // new ProducerAdmin(
        //   4,
        //   'Garden Farms',
        //   'Moosomin',
        //   'SK',
        //   'This is a description',
        //   'email@email.com',
        //   'beet.png',
        //   444,
        //   555,
        //   'Devon',
        //   'Jan 1 2017'
        // )
    ];

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
