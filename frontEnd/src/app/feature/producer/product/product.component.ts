import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProductService } from '../../../core/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  product: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit() {

    //note - the snapshot method being used here won't work if the user can navigate directly between product pages
    // see https://angular.io/guide/router#activated-route-in-action
    let id = this.route.snapshot.paramMap.get('id');

    this.product = this.productService.getProductById(id);

    
    //this is the non-snapshot method, it doesn't work right now but that might be caused by 'undefined' data being returned right now
    //try again after the endpoint is returning data I want
    // this.product = this.route.paramMap
    //   .switchMap((params: ParamMap) => {
    //     this.productService.getProductById(params.get('id'))
    //   });
    // console.log(this.route.paramMap)

  }

}
