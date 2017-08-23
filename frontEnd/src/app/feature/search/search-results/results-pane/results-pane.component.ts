import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { ProductCard } from '../../../../shared/models/product-card.model';

import { ProductService } from '../../../../shared/services/product/product.service';

@Component({
  selector: 'app-results-pane',
  templateUrl: './results-pane.component.html',
  styleUrls: ['./results-pane.component.scss'],
  providers: [ProductService]
})
export class ResultsPaneComponent implements OnInit {

  products: ProductCard[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    
    this.productService.getProducts()
      .subscribe( //returns an array
        (products) => {
          this.products = products;
        }  
      )
    
  }

}
