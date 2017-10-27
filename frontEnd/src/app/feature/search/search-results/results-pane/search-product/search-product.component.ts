import { Component, OnInit, Input } from '@angular/core';

import { SearchResultModel } from '../../../../../core/models/search-result.model';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent implements OnInit {

  @Input() products: SearchResultModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
