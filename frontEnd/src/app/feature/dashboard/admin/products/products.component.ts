import { Component, OnInit, OnChanges } from '@angular/core';

import { ProductModel } from '../../../../core/models/product.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

import { ProducerService } from '../../../../core/services/producer/producer.service';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProducerService]
})
export class ProductsComponent implements OnInit, OnChanges {

  currentProducts: ProductModel[] = [];
  outOfStockProducts: ProductModel[] = [];
  deletedProducts: ProductModel[] = [];

  editable: boolean = true;
  deletable: boolean = true;

  projectSettings: ColumnSettingModel[] = 
  [
      {
        primaryKey: 'name',
        header: 'Name',
        sortable: true,
      },
      {
        primaryKey: 'pricePerUnit',
        header: 'Price Per',
        format: 'currency',
        sortable: true,
      },
      {
        primaryKey: 'unit',
        header: 'Unit',
        format: 'uppercase',
        nested: false
      },
      {
        primaryKey: 'unitsPer',
        header: 'Units Per'
      },
      {
        primaryKey: 'category',
        header: 'Category',
        sortable: true,
      },
      {
        primaryKey: 'subcategory',
        header: 'Subcat',
        sortable: true,
      },
      {
        primaryKey: 'qtyAvailable',
        header: 'Available',
        sortable: true,
      },
      {
        primaryKey: 'qtyPending',
        header: 'Pending',
        sortable: true,
      },
      {
        primaryKey: 'producer',
        header: 'Producer',
        format: 'null,name',
        sortable: true,
        sortPath: 'name',
        nested: true
      }
  ];

  ngOnChanges() {};

  constructor(private producerService: ProducerService,
              private dashboardService: DashboardService) {

    this.producerService.productAdded.subscribe(
      (value: ProductModel) => {
        if (value.qtyAvailable > 0) {
          this.currentProducts.push(value);
        } else {
          this.outOfStockProducts.push(value);
        }
      }
    );

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

    this.dashboardService.getAllProducts()
      .subscribe( // returns an array
        (products) => {
          console.log('products received: ', products);
          const current = products.filter(product => product.qtyAvailable > 0 && (product.isObsolete === false || !product.isObsolete));
          this.currentProducts = current;
          const outOfStock = products.filter(product => product.qtyAvailable == 0 && (product.isObsolete === false || !product.isObsolete));
          this.outOfStockProducts = outOfStock;
          const deleted = products.filter(product => (product.isObsolete === true || product.isObsolete));
          this.deletedProducts = deleted;
        }
      );

    this.dashboardService.loadAllProducts();

  }

}
