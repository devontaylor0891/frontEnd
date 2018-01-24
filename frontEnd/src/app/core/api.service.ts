import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ENV } from './env.config';
import { ProductModel } from '../core/models/product.model';
import { ScheduleModel } from '../core/models/schedule.model';
import { ProducerModel } from '../core/models/producer.model';
import { UserModel } from '../core/models/user.model';
import { OrderModel } from '../core/models/order.model';

@Injectable()
export class ApiService {

  apiUrl = 'http://localhost:3000';

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

  // GET list of PRODUCTS that are attached to DELIVERIES that occur in the future and within the search radius
  // this is using the mock data via json-server
  getSearchResults(): Observable<ProductModel[]> {
    return this.http
      // .get(`http://localhost:3000/searchResults`)
      .get(`${ENV.BASE_API}searchResults`)
      .catch(this._handleError);
  };

  // ********** PRODUCTS *******

  // get all products for admin dash
  getProducts(): Observable<ProductModel[]> {
    return this.http
      .get(`${ENV.BASE_API}products`)
      // .get(this.allProductsUrl)
      .catch(this._handleError);
  }

  // this method will return a product from the mock data
  getProductById(productId): Observable<ProductModel> {
    return this.http
      .get(`${ENV.BASE_API}products/` + productId)
      // .get(this.producerUrl + producerId + '/products/' + productId + '.json')
      .catch(this._handleError); 
  };
  
  // GET all products from a single producer
  getProductsByProducerId(id): Observable<ProductModel[]> {
  return this.http
    .get(`${ENV.BASE_API}producer/` + id + '/products')
		// .get(this.producerUrl + id + '/products.json')
		.catch(this._handleError);
  }

  // POST new product - producer or admin only
  postProduct(product: ProductModel): Observable<ProductModel> {
    return this.http
      .post(`${ENV.BASE_API}products/`, product, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // PUT existing product - producer or admin only
  putProduct(id: number, product: ProductModel): Observable<ProductModel> {
    return this.http
      .put(`${ENV.BASE_API}products/${id}`, product, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // PATCH product fields
  patchProduct(id: number, newFieldAndValue: Object): Observable<any> {
    return this.http
      .patch(`${ENV.BASE_API}products/${id}/`, newFieldAndValue, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // DELETE existing event and all associated RSVPs (admin only)
  deleteProduct(id: number): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}products/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // ************** SCHEDULES ****************
  
  // get all schedules for admin
  getSchedules(): Observable<ScheduleModel[]> {
    return this.http
      .get(`${ENV.BASE_API}schedules`)
      // .get(this.allSchedulesUrl)
      .catch(this._handleError);
  }

  // GET entire schedule from a single producers
  getScheduleByProducerId(id): Observable<ScheduleModel[]> {
    return this.http
      .get(`${ENV.BASE_API}producer/`+ id + '/schedules')
      // .get(this.producerUrl + id + '/schedule.json')
      .catch(this._handleError);
  }

  // POST new schedule - producer or admin only
  postSchedule(schedule: ScheduleModel): Observable<ScheduleModel> {
    return this.http
      .post(`${ENV.BASE_API}schedules/`, schedule, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // PUT existing schedule - producer or admin only
  putSchedule(id: number, schedule: ScheduleModel): Observable<ScheduleModel> {
    return this.http
      .put(`${ENV.BASE_API}schedules/${id}`, schedule, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  deleteSchedule(id): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}schedules/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // this is returning the proper results, but I will use a mock endpoint for development so we can design proper data
  // GET one product by id from Nikki's endpoint
  // getProductById(id): Observable<ProductCardModel> {
  //   console.log('api service called.')
  //     return this.http
  //       .get('http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api/products/' + id)
  //       .map(response => { return response })
  //       .catch(this._handleError);
  // };

  // **************** PRODUCERS ***************

  // get all producers
  getProducers(): Observable<ProducerModel[]> {
    return this.http
      .get(`${ENV.BASE_API}producer/`)
      // .get(this.producersUrl)
      .catch(this._handleError);
  };

  // GET one producer by id
  getProducerById(id): Observable<ProducerModel> {
    return this.http
    .get(`${ENV.BASE_API}producer/` + id)
		// .get(this.producerUrl + id + '/producer.json')
		// .get('http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api/producers/' + id)
		.catch(this._handleError);
  };

  // ***************** USERS *****************

  // get all users for admin
  getUsers(): Observable<UserModel[]> {
    return this.http
      .get(`${ENV.BASE_API}users/`)
      // .get(this.allUsersUrl)
      .catch(this._handleError);
  };

  // single user by id
  getUserById(id) {
    return this.http
      .get(`${ENV.BASE_API}users/` + id)
      // .get('../../../../assets/api/user/' + id + '/user.json')
      .catch(this._handleError);
  }

  // **************** ORDERS *******************

  // POST order
  postOrder(order: OrderModel): Observable<OrderModel> {
    return this.http
      .post(`${ENV.BASE_API}orders/`, order, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };
  
  // get all orders for admin
  getOrders(): Observable<OrderModel[]> {
    return this.http
      .get(`${ENV.BASE_API}orders`)
      // .get(this.allOrdersUrl)
      .catch(this._handleError);
  };

  // get all orders for a single producer
  getOrdersByProducerId(id) {
    return this.http
      .get(`${ENV.BASE_API}producer/`+ id + '/orders')
      // .get(this.producerUrl + id + '/orders.json')
      .catch(this._handleError);
  };

  // PUT existing order - producer or admin only
  putOrder(id: number, order: OrderModel): Observable<OrderModel> {
    return this.http
      .put(`${ENV.BASE_API}orders/${id}`, order, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  }

  // PATCH order
  patchOrder(id: number, newFieldAndValue: Object): Observable<any> {
    return this.http
      .patch(`${ENV.BASE_API}orders/${id}/`, newFieldAndValue, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // POST abandoned order
  postAbandonedOrder(order: OrderModel): Observable<OrderModel> {
    return this.http
      .post(`${ENV.BASE_API}abandonedOrders/`, order, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
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