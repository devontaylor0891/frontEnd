import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../../../core/models/product.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

// import { ProducerService } from '../../../../core/services/producer/producer.service';
import { ProducerDashboardService } from '../../producer-dashboard.service';

@Component({
  selector: 'app-producer-products',
  templateUrl: './producer-products.component.html',
  styleUrls: ['./producer-products.component.scss']
})
export class ProducerProductsComponent implements OnInit {

  
  currentProducts: ProductModel[] = [];
  outOfStockProducts: ProductModel[] = [];
  deletedProducts: ProductModel[] = [];

  editable: boolean = true;
  deletable: boolean = true;

  projectSettings: ColumnSettingModel[] = 
  [
      {
        primaryKey: 'name',
        header: 'Name'
      },
      {
        primaryKey: 'pricePerUnit',
        header: 'Price Per',
        format: 'currency'
      },
      {
        primaryKey: 'unit',
        header: 'Unit'
      },
      {
        primaryKey: 'unitsPer',
        header: 'Units Per'
      },
      {
        primaryKey: 'category',
        header: 'Category'
      },
      {
        primaryKey: 'subcategory',
        header: 'Subcat'
      },
      {
        primaryKey: 'qtyAvailable',
        header: 'Available'
      },
      {
        primaryKey: 'qtyPending',
        header: 'Pending'
      },
      {
        primaryKey: 'producer',
        header: 'Producer'
      }
  ];

  constructor(private dashboardService: ProducerDashboardService) {

    // this.producerService.productAdded.subscribe(
    //   (value: ProductModel) => {
    //     if (value.qtyAvailable > 0) {
    //       this.currentProducts.push(value);
    //     } else {
    //       this.outOfStockProducts.push(value);
    //     }
    //   }
    // );

  }

  // view a single product right in the table
  toggleView(product: any) {
    product.showView = !product.showView;
  }

  // edit a single product right in the table
  toggleEditForm(product: any) {
    product.showEditForm = !product.showEditForm;
  }

  // add a new product via the add-product component, push it to the appropriate array
  addNewProduct(value) {
    console.log(value);
  }

  ngOnInit() {

    this.dashboardService.getProducts()
      .subscribe( // returns an array
        (products) => {
          const current = products.filter(product => product.qtyAvailable > 0 && product.isObsolete === false);
          this.currentProducts = current;
          const outOfStock = products.filter(product => product.qtyAvailable == 0 && product.isObsolete === false);
          this.outOfStockProducts = outOfStock;
          const deleted = products.filter(product => product.isObsolete === true);
          this.deletedProducts = deleted;
        }
      );

    // this.dashboardService.loadAllProducts();

  }


}
