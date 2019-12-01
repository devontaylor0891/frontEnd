import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../../core/models/product.model';


@Component({
  selector: 'app-product-card-mobile',
  templateUrl: './product-card-mobile.component.html',
  styleUrls: ['./product-card-mobile.component.scss']
})
export class ProductCardMobileComponent implements OnInit {

  @Input() product: ProductModel;

  constructor() { }

  ngOnInit() {
  }

}
