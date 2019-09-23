import { Component, OnInit, Input, OnChanges, ViewChild, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModel } from '../../../../core/models/product.model';

@Component({
  selector: 'app-producer-page-product-card',
  templateUrl: './producer-page-product-card.component.html',
  styleUrls: ['./producer-page-product-card.component.scss']
})
export class ProducerPageProductCardComponent implements OnInit, OnChanges {

  @Input() product: ProductModel;
  @Input() noUpcomingScheds: boolean;
  isOutOfStock: boolean;

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  ngOnChanges() {};

  constructor(private modal: NgbModal) {};

  ngOnInit() {

    this.isOutOfStock = this.product.qtyAvailable < 1;

  };

  openModal() {
    this.modal.open(this.modalContent, { size: 'lg' });
  };

}
