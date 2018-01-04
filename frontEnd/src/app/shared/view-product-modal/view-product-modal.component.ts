import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModel } from '../../core/models/product.model';

@Component({
  selector: 'app-view-product-modal',
  templateUrl: './view-product-modal.component.html',
  styleUrls: ['./view-product-modal.component.scss']
})
export class ViewProductModalComponent implements OnInit {

  @Input() record: ProductModel;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
