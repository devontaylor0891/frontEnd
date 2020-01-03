import { Component, OnInit, Input, OnChanges, ViewChild, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-producer-page-product-card-mobile',
  templateUrl: './producer-page-product-card-mobile.component.html',
  styleUrls: ['./producer-page-product-card-mobile.component.scss']
})
export class ProducerPageProductCardMobileComponent implements OnInit, OnChanges {

  @Input() product: any;
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
