import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  url = '../../../../assets/api/ordersAdmin.json';

  constructor(private http: Http) { }

  getOrders() {
    return this.http.get(this.url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }  
      )
  }

}
