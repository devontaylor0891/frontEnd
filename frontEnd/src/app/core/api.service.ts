import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RequestOptions, Response } from '@angular/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ENV } from './env.config';
// import { ProductModel } from '../core/models/product.model';
// import { ScheduleModel } from '../core/models/schedule.model';
// import { ProducerModel } from '../core/models/producer.model';
// import { UserModel } from '../core/models/user.model';
// import { OrderModel } from '../core/models/order.model';

import AWS = require('aws-sdk');
import { AnalysisOptions } from 'aws-sdk/clients/cloudsearch';

@Injectable()
export class ApiService {

  // apiUrl = 'http://localhost:3000';
  apiUrl = 'http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api';

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

// ********** SEARCH *******
  // GET list of PRODUCTS that are attached to DELIVERIES that occur in the future and within the search radius
  // this is using the mock data via json-server
  getSearchResults(): Observable<any[]> {
    return this.http
      // .get(`http://localhost:3000/searchResults`)
      .get(`${ENV.BASE_API}searchResults`)
      .catch(this._handleError);
  };

// ********** FILE UPLOAD *******
  // upload the file
  uploadFile(formData): Observable<any> {
    return this.http
      .post(`${ENV.BASE_API}images/`, formData, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
        .append('Content-Type', 'multipart/form-data')
        .append('Accept', 'application/json')
      })
      .catch(this._handleError);
  };

// ********** PRODUCTS *******

  // get all products for admin dash
  getProducts(): Observable<any[]> {
    return this.http
      .get(this.apiUrl + `/products/`)
      // .get(`${ENV.BASE_API}products`)
      // .get(this.allProductsUrl)
      .catch(this._handleError);
  }

  // this method will return a product from the mock data
  getProductById(productId): Observable<any> {
    return this.http
      .get(`${ENV.BASE_API}products/` + productId)
      // .get(this.producerUrl + producerId + '/products/' + productId + '.json')
      .catch(this._handleError); 
  };
  
  // GET all products from a single producer
  getProductsByProducerId(id): Observable<any[]> {
  return this.http
    .get(`${ENV.BASE_API}producer/` + id + '/products')
		// .get(this.producerUrl + id + '/products.json')
		.catch(this._handleError);
  }

  // POST new product - producer or admin only
  postProduct(product: any): Observable<any> {
    return this.http
      .post(`${ENV.BASE_API}products/`, product, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // PUT existing product - producer or admin only
  putProduct(id: number, product: any): Observable<any> {
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
  getSchedules(): Observable<any[]> {
    return this.http
      .get(`${ENV.BASE_API}schedules`)
      .catch(this._handleError);
  }

  // GET entire schedule from a single producers
  getScheduleByProducerId(id): Observable<any[]> {
    return this.http
      .get(`${ENV.BASE_API}producer/`+ id + '/schedules')
      .catch(this._handleError);
  }

  // POST new schedule - producer or admin only
  postSchedule(schedule: any): Observable<any> {
    return this.http
      .post(`${ENV.BASE_API}schedules/`, schedule, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // PUT existing schedule - producer or admin only
  putSchedule(id: number, schedule: any): Observable<any> {
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
  getProducers(): Observable<any[]> {
    return this.http
      .get(this.apiUrl + `/producers/`)
      // .get(`${ENV.BASE_API}producer/`)
      .catch(this._handleError);
  };

  // GET one producer by id
  getProducerById(id): Observable<any> {
    return this.http
      // .get(this.apiUrl + `/producers/` + id)
      .get(`${ENV.BASE_API}producer/` + id)
      // .get('http://onlylocalfood-api.a3jw4x3uey.us-west-2.elasticbeanstalk.com/api/producers/' + id)
      .catch(this._handleError);
  };

  // POST a new producer
  createProducer(producer: any): Observable<any> {
    return this.http
      .post(`${ENV.BASE_API}producer/`, producer, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // PATCH producer info
  patchProducer(id: number, newFieldAndValue: Object): Observable<any> {
    return this.http
      .patch(`${ENV.BASE_API}producer/${id}/`, newFieldAndValue, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

// ***************** USERS *****************

  // get all users for admin
  getUsers(): Observable<any[]> {
    return this.http
      .get(`${ENV.BASE_API}users/`)
      .catch(this._handleError);
  };

  // single user by id
  // getUserById(id) {
  //   return this.http
  //     .get(`${ENV.BASE_API}users/` + id)
  //     .catch(this._handleError);
  // }

  getUserById(id) {
    return this.http
      .get(`${ENV.BASE_API}users/` + id)
      .catch(this._handleError);
  };

  // create a new user
  createUser(user: any): Observable<any> {
    return this.http
    .post(`${ENV.BASE_API}users/`, user, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

  // PATCH user
  patchUser(id: number, newFieldAndValue: Object): Observable<any> {
    console.log('api patch: ', id, newFieldAndValue);
    return this.http
      .patch(`${ENV.BASE_API}users/${id}/`, newFieldAndValue, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };

// **************** ORDERS *******************

  // POST order
  postOrder(order: any): Observable<any> {
    return this.http
      .post(`${ENV.BASE_API}orders/`, order, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .catch(this._handleError);
  };
  
  // get all orders for admin
  getOrders(): Observable<any[]> {
    return this.http
      .get(`${ENV.BASE_API}orders`)
      .catch(this._handleError);
  };

  // get all orders for a single producer
  getOrdersByProducerId(id) {
    return this.http
      .get(`${ENV.BASE_API}producer/`+ id + '/orders')
      .catch(this._handleError);
  };

  // get all orders for a single consumer
  getOrdersByConsumerId(id) {
    return this.http
      .get(`${ENV.BASE_API}consumer/`+ id + '/orders')
      .catch(this._handleError);
  };

  // PUT existing order - producer or admin only
  putOrder(id: number, order: any): Observable<any> {
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
  postAbandonedOrder(order: any): Observable<any> {
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

// ******** ERROR HANDLING *******
  private _handleError(err: HttpErrorResponse | any) {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return Observable.throw(errorMsg);
  };

// ********* get presigned url for image uploads ***************
  getPresignedUrl(imageName: any) {
    // return this.http
    //   .get(`${ENV.BASE_API}getPresignedUrl/`, {
    //     headers: new HttpHeaders().set('Authorization', this._authHeader)
    //   })
    //   .catch(this._handleError);
    // temporary test of getting signed url, this will be moved into api.js on server in future
    AWS.config.update({
      accessKeyId: 'AKIAIENH4IWLFJKTGY6Q', 
      secretAccessKey: '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',
      region: 'us-west-2'
    })

    // Tried with and without this. Since s3 is not region-specific, I don't
    // think it should be necessary.
    // AWS.config.update({region: 'us-west-2'})

    const myBucket = 'onlylocalfood-images';
    const myKey = imageName + '.jpg';
    const s3 = new AWS.S3();
    // const params = {
    //   Bucket: myBucket,
    //   Key: myKey
    // };
    // let url;
    // url = s3.getSignedUrl('getObject', params, function (err, url) {
    //   console.log('url: ', url);
    //   return url;
    // });
    // return url;
    let params = {
      Bucket: 'onlylocalfood-images',
      Key: imageName + '.jpg',
      Expires: 1000000,
      ContentType: 'image/jpg',
      ACL: 'public-read'
    };
    console.log('presigned url params: ', params);
    let url = s3.getSignedUrl('putObject', params);
    console.log('The URL is', url);
    return url;
  };

  // putFileToS3(body: File, presignedUrl: any) {
  //   // // const headers = new Headers({'Content-Type': 'image/jpeg'});
  //   // headers: new HttpHeaders().set('Content-Type', 'image/jpeg')
  //   // // const options = new RequestOptions({ headers: headers});
  //   // return this.http.put(presignedUrl, body, )

  //   AWS.config.accessKeyId = 'AKIAJE3RP7EN3LSHXBWA';
  //   AWS.config.secretAccessKey = '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';
  //   AWS.config.region = 'US-WEST-2';
  //   const bucket = new AWS.S3({params: {Bucket: 'onlylocalfood-images'}});
  //   const myKey = 'file-2name.jpg'
  //   // var params = {Key: myKey, Body: body};
  //   // bucket.upload(params, function (err, data) {
  //   //     console.log(err, data);
  //   // });

  //   const params = {
  //     Bucket: 'onlylocalfood-images',
  //     Fields: {
  //       key: myKey
  //     }
  //   };
  //   const httpTest = this.http;
  //   bucket.createPresignedPost(params, function(err, data) {
  //     if (err) {
  //       console.error('Presigning post data encountered an error', err);
  //     } else {
  //       console.log('The post data is', data);
  //       // this.putImage(data.url, body);
  //       console.log('body: ', body)
  //       httpTest.put(data.url, body);
  //     }
  //   });
  // };

  // putImage(url: any, image: any): Observable<any> {
  //   return this.http
  //     .put(url, image)
  //     .catch(this._handleError);
  // };

  putFileToS3(file: File, url: string): Observable<any> {
    console.log('put called');
    return this.http.put(url, file
      , {
        headers: new HttpHeaders().set('Content-Type', 'image/jpg')
      }
    )
      .map((response: Response) => {
        console.log('image uploaded');
        // response.json();
      });
  };

}
