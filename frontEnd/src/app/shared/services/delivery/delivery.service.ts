import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class DeliveryService {
    
    url = '../../../../assets/api/deliveriesAdmin.json';

  constructor(private http: Http) { }

    getDeliveries() {
        return this.http.get(this.url)
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }  
            )
    }

}
