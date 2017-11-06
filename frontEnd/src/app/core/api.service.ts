import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ENV } from './env.config';
import { SearchResultModel } from '../core/models/search-result.model';
import { ProductCardModel } from '../core/models/product-card.model';

@Injectable()
export class ApiService {

  productsUrl = '../../../../assets/api/products/';

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  };

  // GET list of PRODUCTS that are attached to DELIVERIES that occur in the future and within the search radius
  // this is using the mock data via json-server
  getSearchResults(): Observable<SearchResultModel[]> {
    return this.http
      .get(`http://localhost:3000/searchResults`)
      .catch(this._handleError);
  };

  // this method will return a product from the mock data
  getProductById(id): Observable<ProductCardModel> {
    return this.http
      .get(this.productsUrl + id + '.json')
      .catch(this._handleError); 
  };

  // this is returning the proper results, but I will use a mock endpoint for development so we can design proper data
  // GET one product by id from Nikki's endpoint
  // getProductById(id): Observable<ProductCardModel> {
  //   console.log('api service called.')
  //     return this.http
  //       .get('http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api/products/' + id)
  //       .map(response => { return response })
  //       .catch(this._handleError);
  // };

  // GET one prodcuer by id
  getProducerById(id): Observable<any> {
    return this.http
      .get('http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api/producers/' + id)
      .catch(this._handleError);
  };
	
	
	// from RWAS
  // GET list of public, future events
  // getEvents$(): Observable<EventModel[]> {
    // return this.http
      // .get(`${ENV.BASE_API}events`)
      // .catch(this._handleError);
  // }

  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return Observable.throw(errorMsg);
  }

}