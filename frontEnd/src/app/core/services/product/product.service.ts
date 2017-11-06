import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../api.service';

import { ProductAdmin } from '../../../core/models/dashboard-admin/products/product-admin.model';
import { ProductCardModel } from '../../../core/models/product-card.model';

@Injectable()
export class ProductService implements OnInit {

  url = '../../../../assets/api/products.json';

  // create a Behavior Subject for the product
  public _product: BehaviorSubject<ProductCardModel>;

  constructor(private http: HttpClient,
              private apiService: ApiService) {
    this._product = <BehaviorSubject<ProductCardModel>>new BehaviorSubject({});
  }

  // use this to return a product for now
  getProductById(id) {
    return this._product.asObservable();
  }

  load(id) {
    this.apiService.getProductById(id)
    .subscribe(
      response => { 
        console.log('response from api service:')
        console.log(response);
        this._product.next(Object.assign({}, response)); }
    );
  }

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



  // this is returning the data from Nikki's endpoint
  // getProductById(id) {
  //   this.apiService.getProductById(id).
  //     subscribe(
  //       response => {
  //         this.product = response;
  //         return this.product;
  //       }
  //     );
  // }

  productAdded = new EventEmitter<ProductAdmin>();
  
}
