import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ApiService } from '../../api.service';

import { ProductAdmin } from '../../../core/models/dashboard-admin/products/product-admin.model';
import { ProductCard } from '../../../core/models/product-card.model';

@Injectable()
export class ProductService implements OnInit {

  url = '../../../../assets/api/products.json';
  product: ProductCard;

  constructor(private http: Http,
              private apiService: ApiService) {}

  ngOnInit() {}

  //for Admin dash only. original that works with the subscription in the products component class
  getProducts() {
    return this.http.get(this.url)
      .map(
        (response: Response) => {
          const data = response.json();
          return data;
        }  
      )
  }

  getProductById(id) {
    console.log('getProduct called');
    console.log(id);
    this.apiService.getProductById(id).
      subscribe(
        response => {
          this.product = response;
        }
      )
  }

  productAdded = new EventEmitter<ProductAdmin>();
  
}
