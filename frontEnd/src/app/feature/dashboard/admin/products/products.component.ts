import { Component, OnInit } from '@angular/core';

import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: Product[] = [
    new Product(
      3,
      'Carrots',
      'This is a description',
      'beet.png',
      4,
      'lb',
      4,
      5,
      'Garden Farms',
      '1968-11-16T00:00:00',
      55,
      5,
      34,
      23,
      false
    ),
    new Product(
      3,
      'Carrots',
      'This is a description',
      'beet.png',
      4,
      'lb',
      4,
      5,
      'Garden Farms',
      '1968-11-16T00:00:00',
      55,
      5,
      34,
      23,
      false
    ) 
  ];

  constructor() {
    
  }

  ngOnInit() {
    
  }

}
