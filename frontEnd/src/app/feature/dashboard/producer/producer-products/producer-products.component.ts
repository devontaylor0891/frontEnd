// import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { ProductModel } from '../../../../core/models/product.model';
// import { ProducerModel } from '../../../../core/models/producer.model';
// import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

// // import { ProducerService } from '../../../../core/services/producer/producer.service';
// import { ProducerDashboardService } from '../../producer-dashboard.service';

// import { AddProductModalComponent } from '../modals/product/add-product-modal/add-product-modal.component';

// @Component({
//   selector: 'app-producer-products',
//   templateUrl: './producer-products.component.html',
//   styleUrls: ['./producer-products.component.scss']
// })
// export class ProducerProductsComponent implements OnInit {

//   @ViewChild('modalContent') modalContent: TemplateRef<any>;

//   form: FormGroup; // this will hold our form data in a js object

//   producer: ProducerModel;

//   currentProducts: ProductModel[] = [];
//   outOfStockProducts: ProductModel[] = [];
//   deletedProducts: ProductModel[] = [];

//   recordType: string = 'product';
//   editable: boolean = true;
//   deletable: boolean = true;

//   projectSettings: ColumnSettingModel[] =
//   [
//       {
//         primaryKey: 'name',
//         header: 'Name'
//       },
//       {
//         primaryKey: 'pricePerUnit',
//         header: 'Price Per',
//         // format: 'currency'
//         format: 'currency'
//       },
//       {
//         primaryKey: 'unit',
//         header: 'Unit'
//       },
//       {
//         primaryKey: 'unitsPer',
//         header: 'Units Per'
//       },
//       {
//         primaryKey: 'category',
//         header: 'Category'
//       },
//       {
//         primaryKey: 'subcategory',
//         header: 'Subcat'
//       },
//       {
//         primaryKey: 'qtyAvailable',
//         header: 'Available'
//       },
//       {
//         primaryKey: 'qtyPending',
//         header: 'Pending'
//       }
//   ];

//   constructor(private dashboardService: ProducerDashboardService,
//               private modal: NgbModal) {  };

//   openModal() {
//     const modalRef = this.modal.open(AddProductModalComponent, { size: 'lg' });
//     modalRef.componentInstance.itemCreated
//       .subscribe(
//         (product) => {
//           this.createNew(product);
//         }
//       );
//   };

//   createNew(product: ProductModel) {
//     if (product.qtyAvailable > 0) {
//       this.currentProducts.push(product);
//     } else {
//       this.outOfStockProducts.push(product);
//     };
//   };

//   // view a single product right in the table
//   toggleView(product: any) {
//     product.showView = !product.showView;
//   };

//   // edit a single product right in the table
//   toggleEditForm(product: any) {
//     product.showEditForm = !product.showEditForm;
//   };

//   ngOnInit() {

//     this.dashboardService.getProducer()
//       .subscribe(
//         result => {
//           this.producer = result;
//         }
//       )

//     this.dashboardService.getProducts()
//       .subscribe( // returns an array
//         (products) => {
//           const current = products.filter(product => product.qtyAvailable > 0 && product.isObsolete === false);
//           this.currentProducts = current;
//           const outOfStock = products.filter(product => product.qtyAvailable === 0 && product.isObsolete === false);
//           this.outOfStockProducts = outOfStock;
//           const deleted = products.filter(product => product.isObsolete === true);
//           this.deletedProducts = deleted;
//         }
//       );

//   };

// }


import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
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
              private utilityService: UtilityService) {  };

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

  onProductObsoleted($event) { // move from either current or out of stock into obsoletedProducts
    // loop through each of the 2 arrays
    // find the product with the matching id
    // return the array name
    console.log('obsoleting: ', $event.id);
    // let arrayName = this.findArrayProductIsCurrentlyIn($event.id);
    // continue as per usual
    this.utilityService.removeByAttribute(this.currentProducts, 'id', $event.id);
    this.utilityService.removeByAttribute(this.outOfStockProducts, 'id', $event.id);
    // add to obsoleted array
    this.obsoletedProducts.push($event);
  };

  onProductDeleted($event) { // remove from wherever it is located
    console.log('removing: ', $event);
    this.obsoletedProducts = this.utilityService.removeByAttribute(this.obsoletedProducts, 'id', $event);
  };

  findArrayProductIsCurrentlyIn(id) {
    let arrayName;
    for (let i; i < this.currentProducts.length; i++ ) {
      if (this.currentProducts[i].id === id) {
        console.log('currentProducts id: ', this.currentProducts[i].id);
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
    console.log('arrayName: ', arrayName);
    return arrayName;
  }

}