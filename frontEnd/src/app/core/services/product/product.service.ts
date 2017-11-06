import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../../api.service';

import { ProductAdmin } from '../../../core/models/dashboard-admin/products/product-admin.model';
import { ProductCard } from '../../../core/models/product-card.model';

@Injectable()
export class ProductService implements OnInit {

  url = '../../../../assets/api/products.json';
  product: ProductCard;

  constructor(private http: HttpClient,
              private apiService: ApiService) {}

  ngOnInit() {}

  //  for Admin dash only. original that works with the subscription in the products component class
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
    console.log('getProduct called in productService. Id is:');
    console.log(id);
    this.apiService.getProductById(id).
      subscribe(
        response => {
          this.product = response;
          console.log('this is the response from the apiService that appears in the product service call:')
          console.log(response);// this is working
          console.log(this.product);
          return this.product;
        }
      );
  }

  productAdded = new EventEmitter<ProductAdmin>();
  
}
