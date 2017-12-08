import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: []
})
export class ProductCardComponent implements OnInit {
  
  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() { }

}
