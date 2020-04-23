import { Component, OnInit, Input, OnChanges, ViewChild, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-card-compact',
  templateUrl: './product-card-compact.component.html',
  styleUrls: ['./product-card-compact.component.scss']
})
export class ProductCardCompactComponent implements OnInit, OnChanges {

  @Input() product: any;
  @Input() isMarket = false;

  modalData: any;

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  constructor(private modal: NgbModal) { }

  ngOnInit() {

    console.log('product into product card compact: ', this.product);
  }

  ngOnChanges() {}

  openProductModal() {
    console.log('opening modal: ', this.product);
    this.modalData = this.product;
    this.modal.open(this.modalContent);
  }

}
