import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProducerService } from '../../../core/services/producer/producer.service';

import { ProductModel } from '../../../core/models/product.model';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnChanges {

  product: ProductModel;

  path: string;
  pathArray: Array<string>;
  producerId: string;
  noUpcomingScheds: boolean;
  noUpcomingSchedsSub: Subscription;

  constructor(private route: ActivatedRoute,
              private producerService: ProducerService) { }
  
  ngOnChanges() {  }

  ngOnInit() {

    // this.path = window.location.pathname;
    // this.pathArray = this.path.split('/');
    // this.producerId = this.pathArray[2];

    // note - the snapshot method being used here won't work if the user can navigate directly between product pages
    // see https://angular.io/guide/router#activated-route-in-action
    let id = this.route.snapshot.paramMap.get('id');
    // console.log(id);

    // subscribe to the get method results
    this.producerService.getProductById(id)
      .subscribe(
        result => {
          console.log('product: ', result);
          this.product = result;
        }
      );

    // load the product in the service
    this.producerService.loadProduct(id);

    this.noUpcomingSchedsSub = this.producerService.getNoUpcomingScheds()
      .subscribe(
        results => {
          console.log('noUpcomingScheds results: ', results);
          this.noUpcomingScheds = results;
        }
      );

  }
  

}
