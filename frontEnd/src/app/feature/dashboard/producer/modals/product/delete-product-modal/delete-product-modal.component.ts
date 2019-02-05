import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

import { ApiService } from '../../../../../../core/api.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModel } from '../../../../../../core/models/product.model';

@Component({
  selector: 'app-delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.scss']
})
export class DeleteProductModalComponent implements OnInit, OnDestroy {

  @Input() record: ProductModel;
  @Output() onProductDelete = new EventEmitter<any>();
  @Output() onProductObsolete = new EventEmitter<any>();

  submitObject: ProductModel;
  hasPending: boolean;
  submitting: boolean;
  error: boolean;
  subscription: any;

  constructor(public activeModal: NgbActiveModal,
              private api: ApiService) { }

  ngOnInit() {
    if (this.record.qtyPending > 0) {
      this.hasPending = true;
    } else {
      this.submitObject = this.record;
    }
  };

  onObsolete() {
    this.submitObject.qtyAvailable = 0;
    this.submitObject.isObsolete = true;
    this.submitting = true;
    this.subscription = this.api.putProduct(this.record.id, this.submitObject)
      .subscribe(
        response => {
          console.log('modal obsolete done: ', response.id);
          this.handleObsoleteSuccess(this.submitObject);
        },
        err => {
          this.handleSubmitError(err);
        }
      )
  };

  onDelete() {
    this.submitObject.qtyAvailable = 0;
    this.submitObject.isObsolete = true;
    this.submitting = true;
    console.log('record to delete: ', this.record);
    this.subscription = this.api.deleteProduct(this.record.id, this.record)
      .subscribe(
        response => {
          console.log('response: ', response);
          console.log('modal delete done: ', this.record.id);
          this.handleDeleteSuccess(this.record);
        },
        err => {
          this.handleSubmitError(err);
        }
      )
  };

  handleDeleteSuccess(record) {
    this.submitting = false;
    this.onProductDelete.emit(record);
		// close modal
		this.activeModal.close();
  };

  handleObsoleteSuccess(response) {
    this.submitting = false;
    this.onProductObsolete.emit(response);
		// close modal
		this.activeModal.close();
  };
  
  handleSubmitError(err) {
		console.error(err);
		this.submitting = false;
		this.error = true;
  };

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  };

}