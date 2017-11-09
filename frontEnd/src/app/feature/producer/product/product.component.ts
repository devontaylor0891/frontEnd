import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProducerService } from '../../../core/services/producer/producer.service';

import { ProductCardModel } from '../../../core/models/product-card.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProducerService]
})
export class ProductComponent implements OnInit, OnChanges {

  product: ProductCardModel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private producerService: ProducerService) { }
  
  ngOnChanges() {}

  ngOnInit() {
    console.log('this.product at onInit:')
    console.log(this.product);

    // note - the snapshot method being used here won't work if the user can navigate directly between product pages
    // see https://angular.io/guide/router#activated-route-in-action
    let id = this.route.snapshot.paramMap.get('id');

    // subscribe to the get method results
    this.producerService.getProductById(id)
      .subscribe(
        result => { this.product = result }
      );

      console.log('id being called');
      console.log(id);

    console.log('this.product after call to service:')
    console.log(this.product);

    // load the product in the service
    this.producerService.loadProduct(id);

    
    // this is the non-snapshot method, it doesn't work right now but that might be caused by 'undefined' data being returned right now
    // try again after the endpoint is returning data I want
    // this.product = this.route.paramMap
    //   .switchMap((params: ParamMap) => {
    //     this.productService.getProductById(params.get('id'))
    //   });
    // console.log(this.route.paramMap)

  }

}
