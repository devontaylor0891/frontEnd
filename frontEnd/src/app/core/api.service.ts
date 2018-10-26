import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RequestOptions, Response } from '@angular/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ENV } from './env.config';

// import AWS = require('aws-sdk');
import * as AWS from 'aws-sdk';
import { AnalysisOptions } from 'aws-sdk/clients/cloudsearch';
// import { AnyAaaaRecord } from 'dns';

@Injectable()
export class ApiService {

  // apiUrl = 'http://localhost:3000';
  // apiUrl = 'http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api';
  // apiUrl = 'http://api-server-env.u4xn8vrpir.us-west-2.elasticbeanstalk.com/api';
  apiUrl = 'https://api.olfdev.com/api';

  productsUrl = '../../../../assets/api/products/';
  producerUrl = '../../../../assets/api/producer/';
  producersUrl = '../../../../assets/api/producers.json';
  allProductsUrl = '../../../../assets/api/products.json';
  allSchedulesUrl = '../../../../assets/api/schedules.json';
  allUsersUrl = '../../../../assets/api/users.json';
  allOrdersUrl = '../../../../assets/api/orders.json';

  constructor(private http: HttpClient,
              private auth: AuthService) { }

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  };

// ***************** SEARCH *******
  // GET list of PRODUCTS that are attached to DELIVERIES that occur in the future and within the search radius
  // this is using the mock data via json-server
  getSearchResults(searchOptions: any): Observable<any> {
    return this.http
      // .get(`http://localhost:3000/searchResults`)
      // .get(`${ENV.BASE_API}searchResults`)
      .post(this.apiUrl + `/searchResults/`, searchOptions)
      .catch(this._handleError);
  };

// ***************** USERS *****************

  // get all users for admin
  getUsers(): Observable<any> {
    return this.http
      .get(this.apiUrl + `/users/`)
      // .get(`${ENV.BASE_API}users/`)
      .catch(this._handleError);
  };

  // get single user by id
  getUserById(id) {
    return this.http
      // .get(`${ENV.BASE_API}users/` + id)
      .get(this.apiUrl + `/users/` + id)
      .catch(this._handleError);
  };

  // get single user by id that was created by the database
  getUserByDBId(id) {
    return this.http
      // .get(`${ENV.BASE_API}users/` + id)
      .get(this.apiUrl + `/users/` + id)
      .catch(this._handleError);
  };

  // get a single user by their Auth0 id
  getUserByAuthId(id) {
    return this.http
      .get(this.apiUrl + `/users/auth/` + id)
      .catch(this._handleError);
  };

  // create a new user
  createUser(user: any): Observable<any> {
    console.log('create user called: ', user);
    return this.http
      .post(this.apiUrl + `/users`, user, {
          headers: new HttpHeaders().set('Authorization', this._authHeader)
        })
      .catch(this._handleError);
  };

  // PATCH user
  patchUser(id: number, newFieldAndValue: Object): Observable<any> {
    console.log('api patch: ', id, newFieldAndValue);
    return this.http
      // .patch(`${ENV.BASE_API}users/${id}/`, newFieldAndValue, {
      .put(this.apiUrl + `/users/${id}/`, newFieldAndValue, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  deleteUser(id: number, user: any): Observable<any> {
    return this.http
      .put(this.apiUrl + `/usersDelete/${id}/`, user, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

// ***************** LOCATION NOTIFICATION METHODS *******

  addLocationNotifications(id: number, locationNotificationArray: Array<any>): Observable<any> {
    return this.http
      .post(this.apiUrl + `/users/${id}/locationNotifications/`, locationNotificationArray, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

// ***************** PRODUCERS ***************

  // get all producers
  getProducers(): Observable<any> {
    return this.http
      .get(this.apiUrl + `/producers/`)
      // .get(`${ENV.BASE_API}producer/`)
      .catch(this._handleError);
  };

  // GET one producer by id
  getProducerById(id): Observable<any> {
    return this.http
      .get(this.apiUrl + `/producers/` + id)
      // .get(`${ENV.BASE_API}producer/` + id)
      // .get('http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api/producers/' + id)
      .catch(this._handleError);
  };

  // POST a new producer
  createProducer(producer: any): Observable<any> {
    return this.http
      .post(this.apiUrl + `/producers/`, producer, {
      // .post(`${ENV.BASE_API}producer/`, producer, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // PATCH producer info
  patchProducer(id: number, newFieldAndValue: Object): Observable<any> {
    return this.http
      .put(this.apiUrl + `/producers/${id}/`, newFieldAndValue, {
      // .patch(`${ENV.BASE_API}producer/${id}/`, newFieldAndValue, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

// ***************** PRODUCTS *******

  // get all products for admin dash
  getProducts(): Observable<any> {
    return this.http
      .get(this.apiUrl + `/products/`)
      // .get(`${ENV.BASE_API}products`)
      // .get(this.allProductsUrl)
      .catch(this._handleError);
  };

  // this method will return a product from the mock data
  getProductById(productId): Observable<any> {
    return this.http
      .get(this.apiUrl + `/products/` + productId)
      // .get(`${ENV.BASE_API}products/` + productId)
      // .get(this.producerUrl + producerId + '/products/' + productId + '.json')
      .catch(this._handleError); 
  };
  
  // GET all products from a single producer
  getProductsByProducerId(id): Observable<any> {
  return this.http
    .get(this.apiUrl + `/producersProducts/` + id)
    // .get(`${ENV.BASE_API}producer/` + id + '/products')
		// .get(this.producerUrl + id + '/products.json')
		.catch(this._handleError);
  };

  // POST new product - producer or admin only
  postProduct(product: any): Observable<any> {
    return this.http
      .post(this.apiUrl + `/products/`, product, {
      // .post(`${ENV.BASE_API}products/`, product, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // PUT existing product - producer or admin only
  putProduct(id: number, product: any): Observable<any> {
    console.log('id and product: ', id, product);
    return this.http
      .put(this.apiUrl + `/products/${id}/`, product, {
      // .put(`${ENV.BASE_API}products/${id}`, product, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // DELETE existing event and all associated RSVPs (admin only)
  deleteProduct(id: number, product: any): Observable<any> {
    return this.http
      .put(this.apiUrl + `/productsDelete/${id}/`, product, {
      // .delete(`${ENV.BASE_API}products/${id}`, {
        // responseType: 'text', // remove this after the api code is done
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

// ***************** SCHEDULES ****************
  
  // get all schedules for admin
  getSchedules(): Observable<any> {
    return this.http
      // .get(`${ENV.BASE_API}schedules`)
      .get(this.apiUrl + `/schedules/`)
      .catch(this._handleError);
  };

  // GET entire schedule from a single producers
  getScheduleByProducerId(id): Observable<any> {
    return this.http
    .get(this.apiUrl + `/producersSchedules/` + id)
      // .get(`${ENV.BASE_API}producer/`+ id + '/schedules')
      .catch(this._handleError);
  };

  // GET future schedule from a single producer
  getFutureScheduleByProducerId(id): Observable<any> {
    return this.http
      .get(this.apiUrl + `/producersFutureSchedules/` + id)
      // .get(`${ENV.BASE_API}producer/`+ id + '/schedules')
      .catch(this._handleError);
  };

  // POST new schedule - producer or admin only
  postSchedule(schedule: any): Observable<any> {
    return this.http
      .post(this.apiUrl + `/schedules/`, schedule, {
      // .post(`${ENV.BASE_API}schedules/`, schedule, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // PUT existing schedule - producer or admin only
  putSchedule(id: number, schedule: any): Observable<any> {
    return this.http
      .put(this.apiUrl + `/schedules/${id}/`, schedule, {
      // .put(`${ENV.BASE_API}schedules/${id}`, schedule, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  deleteSchedule(id: number): Observable<any> {
    return this.http
      .delete(this.apiUrl + `/schedules/${id}/`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };


// ***************** ORDERS *******************

  // POST order
  postOrder(order: any): Observable<any> {
    return this.http
      .post(this.apiUrl + `/orders/`, order, {
      // .post(`${ENV.BASE_API}orders/`, order, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // get all orders for admin
  getOrders(): Observable<any> {
    return this.http
      .get(this.apiUrl + `/orders/`)
      // .get(`${ENV.BASE_API}orders`)
      .catch(this._handleError);
  };

  // get all orders for a single producer
  getOrdersByProducerId(id) {
    return this.http
      .get(this.apiUrl + `/producersOrders/` + id)
      // .get(`${ENV.BASE_API}producer/`+ id + '/orders')
      .catch(this._handleError);
  };

  // get all orders for a single consumer
  getOrdersByConsumerId(id) {
    return this.http
    .get(this.apiUrl + `/usersOrders/` + id)
      .catch(this._handleError);
  };

  // get all orders for a single user
  getOrdersByUserId(id) {
    return this.http
    .get(this.apiUrl + `/usersOrders/` + id)
      .catch(this._handleError);
  };

  getOrdersByScheduleId(id) {
    return this.http
      .get(this.apiUrl + `/ordersBySchedule/` + id)
      .catch(this._handleError);
  };

  // PUT existing order - producer or admin only
  putOrder(id: number, order: any): Observable<any> {
    return this.http
      .put(this.apiUrl + `/orders/${id}/`, order, {
      // .put(`${ENV.BASE_API}orders/${id}`, order, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // DELETE order
  deleteOrder(id: number): Observable<any> {
    return this.http
      .delete(this.apiUrl + `/orders/${id}/`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // POST abandoned order
  postAbandonedOrder(order: any): Observable<any> {
    return this.http
      .post(`${ENV.BASE_API}abandonedOrders/`, order, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

// ***************** ERROR HANDLING *******
  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return Observable.throw(errorMsg);
  };

// ***************** get presigned url for image uploads ***************
  getPresignedUrl(imageName: any): Observable<string> {
    AWS.config.update({
      accessKeyId: ``,
      secretAccessKey: ``,
      region: 'us-west-2'
    });
    const s3 = new AWS.S3();
    let params = {
      Bucket: 'onlylocalfood-images',
      Key: imageName,
      Expires: 1000000,
      ContentType: 'image/jpeg'
      // ACL: 'public-read'
    };
    let url = s3.getSignedUrl('putObject', params);
    console.log('params: ', params);
    console.log('url: ', url);
    return Observable.of(url);
  };

// ***************** upload image to S3 ***************  
  putFileToS3(file: any, url: string): Observable<any> {
    return this.http.put(url, file, { headers: new HttpHeaders().set('Content-Type', 'image/jpeg') })
      .map((response: Response) => {
        console.log('image uploaded');
      });
  };

// *************** CAPTCHA VERIFICATION AND EMAIL SEND *****************
  verifyAndSendEmail(email) {
    return this.http
      .post(this.apiUrl + `/captcha`, email)
      .catch(this._handleError);
  }

}
