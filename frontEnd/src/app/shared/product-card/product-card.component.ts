import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { ProductCard } from '../models/product-card.model';

import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [ProductService]
})
export class ProductCardComponent implements OnInit {
  
  @Input() product: ProductCard;

  constructor(private productService: ProductService) { }

  ngOnInit() {}

}
