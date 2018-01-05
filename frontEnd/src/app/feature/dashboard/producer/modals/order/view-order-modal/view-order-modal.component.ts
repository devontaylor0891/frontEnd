import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { OrderModel } from '../../../../../../core/models/order.model';

@Component({
  selector: 'app-view-order-modal',
  templateUrl: './view-order-modal.component.html',
  styleUrls: ['./view-order-modal.component.scss']
})
export class ViewOrderModalComponent implements OnInit {

  @Input() record: OrderModel;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
