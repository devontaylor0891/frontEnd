import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModel } from '../../../../core/models/product.model';
import { ProducerModel } from '../../../../core/models/producer.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

// import { ProducerService } from '../../../../core/services/producer/producer.service';
import { ProducerDashboardService } from '../../producer-dashboard.service';

import { AddProductModalComponent } from '../modals/product/add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-producer-products',
  templateUrl: './producer-products.component.html',
  styleUrls: ['./producer-products.component.scss']
})
export class ProducerProductsComponent implements OnInit {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  form: FormGroup; // this will hold our form data in a js object

  producer: ProducerModel;

  currentProducts: ProductModel[] = [];
  outOfStockProducts: ProductModel[] = [];
  deletedProducts: ProductModel[] = [];

  recordType: string = 'product';
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
        // format: 'currency'
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
      }
  ];

  constructor(private dashboardService: ProducerDashboardService,
              private modal: NgbModal) {  };

  openModal() {
    const modalRef = this.modal.open(AddProductModalComponent, { size: 'lg' });
    modalRef.componentInstance.itemCreated
      .subscribe(
        (product) => {
          this.createNew(product);
        }
      );
  };

  createNew(product: ProductModel) {
    if (product.qtyAvailable > 0) {
      this.currentProducts.push(product);
    } else {
      this.outOfStockProducts.push(product);
    };
  };

  // view a single product right in the table
  toggleView(product: any) {
    product.showView = !product.showView;
  };

  // edit a single product right in the table
  toggleEditForm(product: any) {
    product.showEditForm = !product.showEditForm;
  };

  ngOnInit() {

    this.dashboardService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
        }
      )

    this.dashboardService.getProducts()
      .subscribe( // returns an array
        (products) => {
          const current = products.filter(product => product.qtyAvailable > 0 && product.isObsolete === false);
          this.currentProducts = current;
          const outOfStock = products.filter(product => product.qtyAvailable === 0 && product.isObsolete === false);
          this.outOfStockProducts = outOfStock;
          const deleted = products.filter(product => product.isObsolete === true);
          this.deletedProducts = deleted;
        }
      );

  };

}
