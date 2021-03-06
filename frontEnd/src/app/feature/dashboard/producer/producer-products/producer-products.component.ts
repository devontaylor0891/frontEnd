import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModel } from '../../../../core/models/product.model';
import { ProducerModel } from '../../../../core/models/producer.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

// import { ProducerService } from '../../../../core/services/producer/producer.service';
import { ProducerDashboardService } from '../../producer-dashboard.service';
import { UtilityService } from '../../../../core/services/utility/utility.service';

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
  obsoletedProducts: ProductModel[] = [];

  recordType: string = 'product';
  editable: boolean = true;
  deletable: boolean = true;

  projectSettings: ColumnSettingModel[] =
  [
      {
        primaryKey: 'name',
        header: 'Name',
        sortable: true
      },
      {
        primaryKey: 'pricePerUnit',
        header: 'Price Per',
        format: 'currency',
        sortable: true
      },
      {
        primaryKey: 'unit',
        header: 'Unit',
        format: 'uppercase',
        sortable: true
      },
      {
        primaryKey: 'unitsPer',
        header: 'Units Per',
        sortable: true
      },
      {
        primaryKey: 'category',
        header: 'Category',
        sortable: true
      },
      {
        primaryKey: 'subcategory',
        header: 'Subcat',
        sortable: true
      },
      {
        primaryKey: 'qtyAvailable',
        header: 'Available',
        sortable: true
      },
      {
        primaryKey: 'qtyPending',
        header: 'Pending',
        sortable: true
      }
  ];

  constructor(private dashboardService: ProducerDashboardService,
              private modal: NgbModal,
              private utilityService: UtilityService,
              private ref: ChangeDetectorRef) {  };

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
          const obsolete = products.filter(product => product.isObsolete === true);
          this.obsoletedProducts = obsolete;
        }
      );

  };

  onProductObsoleted(arrayName, $event) { // move from either current or out of stock into obsoletedProducts
    // loop through each of the 2 arrays
    // find the product with the matching id
    // return the array name
    // let arrayName = this.findArrayProductIsCurrentlyIn($event.id);
    // continue as per usual
    if (arrayName === 'current') {
      this.utilityService.removeByAttribute(this.currentProducts, 'id', $event.id);
       // make a copy of the array to force template to update view
       this.currentProducts = this.currentProducts.slice();
    };
    if (arrayName === 'outOfStock') {
      this.utilityService.removeByAttribute(this.outOfStockProducts, 'id', $event.id);
      this.outOfStockProducts = this.outOfStockProducts.slice();
    };
    // add to obsoleted array
    this.obsoletedProducts.push($event);
    this.ref.detectChanges();
  };

  onProductRenewed($event) { // move from obsolete to out of stock
    // console.log('product renewed: ', $event.id);
    this.utilityService.removeByAttribute(this.obsoletedProducts, 'id', $event.id);
    this.obsoletedProducts = this.obsoletedProducts.slice();
    // add to obsoleted array
    this.outOfStockProducts.push($event);
    this.ref.detectChanges();
  };

  onProductDeleted($event) { // remove from wherever it is located
    this.obsoletedProducts = this.utilityService.removeByAttribute(this.obsoletedProducts, 'id', $event.id);
    this.obsoletedProducts = this.obsoletedProducts.slice();
  };

  onProductRestocked($event) {
    this.outOfStockProducts = this.utilityService.removeByAttribute(this.outOfStockProducts, 'id', $event.id);
    this.outOfStockProducts = this.outOfStockProducts.slice();
    this.currentProducts.push($event);
  }

  findArrayProductIsCurrentlyIn(id) {
    let arrayName;
    for (let i; i < this.currentProducts.length; i++ ) {
      if (this.currentProducts[i].id === id) {
        arrayName = 'currentProducts';
      }
    };
    for (let i; i < this.outOfStockProducts.length; i++ ) {
      if (this.outOfStockProducts[i].id === id) {
        arrayName = 'outOfStockProducts';
      }
    };
    for (let i; i < this.obsoletedProducts.length; i++ ) {
      if (this.obsoletedProducts[i].id === id) {
        arrayName = 'obsoletedProducts';
      }
    };
    return arrayName;
  }

}