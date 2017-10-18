import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { SearchResultModel } from '../../core/models/search-result.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: []
})
export class ProductCardComponent implements OnInit {
  
  @Input() product: SearchResultModel;

  constructor() { }

  ngOnInit() {}

}
