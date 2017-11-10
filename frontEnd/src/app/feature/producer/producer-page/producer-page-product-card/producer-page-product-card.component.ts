import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../../../core/models/product.model';

@Component({
  selector: 'app-producer-page-product-card',
  templateUrl: './producer-page-product-card.component.html',
  styleUrls: ['./producer-page-product-card.component.scss']
})
export class ProducerPageProductCardComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
