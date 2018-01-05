import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../../../core/api.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModel } from '../../../../core/models/product.model';

@Component({
  selector: 'app-delete-order-modal',
  templateUrl: './delete-order-modal.component.html',
  styleUrls: ['./delete-order-modal.component.scss']
})
export class DeleteOrderModalComponent implements OnInit {

  @Input() record: ProductModel;
  submitObject: ProductModel;
  hasPending: boolean;
  submitting: boolean;
  error: boolean;

  constructor(private activeModal: NgbActiveModal,
              private api: ApiService) { }

  ngOnInit() {
    if (this.record.qtyPending > 0) {
      this.hasPending = true;
    } else {
      this.submitObject = this.record;
    }
  }

  onObsolete() {
    this.submitObject.qtyAvailable = 0;
    this.submitObject.isObsolete = true;
    this.submitting = true;
    this.api.putProduct(this.record.id, this.submitObject)
      .subscribe(
        response => {
          this.submitting = false;
          this.activeModal.close();
        },
        err => {
          console.error(err);
          this.submitting = false;
          this.error = true;
        }
      )
  }

  onDelete() {
    this.submitting = true;
    this.api.deleteProduct(this.record.id)
      .subscribe(
        response => {
          this.submitting = false;
          this.activeModal.close();
        },
        err => {
          console.error(err);
          this.submitting = false;
          this.error = true;
        }
      )
  }

}
