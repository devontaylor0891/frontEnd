import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { ProductAdmin } from '../../../../core/models/dashboard-admin/products/product-admin.model';

import { ProductService } from '../../../../core/services/product/product.service';

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

  constructor(private productService: ProductService) {

    this.productService.productAdded.subscribe(
      (value: ProductAdmin) => {
        if (value.qtyAvailable > 0) {
          this.currentProducts.push(value);
        } else {
          this.outOfStockProducts.push(value);
        }
      }
    )

  }

  //view a single product right in the table
  toggleView(product: any) {
    product.showView = !product.showView;
  }

  //edit a single product right in the table
  toggleEditForm(product: any) {
    product.showEditForm = !product.showEditForm;
  }

  //add a new product via the add-product component, push it to the appropriate array
  addNewProduct(value) {
    console.log(value);
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
