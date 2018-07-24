import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ProductModel } from '../../../../core/models/product.model';

@Component({
  selector: 'app-producer-page-product-card',
  templateUrl: './producer-page-product-card.component.html',
  styleUrls: ['./producer-page-product-card.component.scss']
})
export class ProducerPageProductCardComponent implements OnInit, OnChanges {

  @Input() product: ProductModel;
  isOutOfStock: boolean;

  ngOnChanges() {};

  constructor() {};

  ngOnInit() {

    this.isOutOfStock = this.product.qtyAvailable < 1;

  };

}
