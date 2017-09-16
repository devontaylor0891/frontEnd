import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ProductAdmin } from '../../../shared/models/dashboard-admin/products/product-admin.model';

@Injectable()
export class ProductService implements OnInit {

  url = '../../../../assets/api/productsAdmin.json';

  constructor(private http: Http) {}

  ngOnInit() {}

  //original that works with the subscription in the products component class
  getProducts() {
    return this.http.get(this.url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }  
      )
  }

  productAdded = new EventEmitter<ProductAdmin>();
  
}
