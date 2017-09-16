import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { ProductAdmin } from '../../../../shared/models/dashboard-admin/products/product-admin.model';

import { ProductService } from '../../../../shared/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  
  currentProducts: ProductAdmin[] = [];
  outOfStockProducts: ProductAdmin[] = [];
  deletedProducts: ProductAdmin[] = [];

  constructor(private productService: ProductService) {}

  toggleView(product: any) {
    product.showView = !product.showView;
  }

  toggleEditForm(product: any) {
    product.showEditForm = !product.showEditForm;
  }

  ngOnInit() {
    
    this.productService.getProducts()
      .subscribe( //returns an array
        (products) => {
          const current = products.filter(product => product.qtyAvailable > 0 && product.isObsolete === false);
          this.currentProducts = current;
          const outOfStock = products.filter(product => product.qtyAvailable == 0 && product.isObsolete === false);
          this.outOfStockProducts = outOfStock;
          const deleted = products.filter(product => product.isObsolete === true);
          this.deletedProducts = deleted;
        }  
      )

  }

}
