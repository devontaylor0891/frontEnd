import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../../../../core/models/product.model';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  @Input() products: ProductModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
