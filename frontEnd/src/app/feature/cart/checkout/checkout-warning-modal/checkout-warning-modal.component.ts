import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-checkout-warning-modal',
  templateUrl: './checkout-warning-modal.component.html',
  styleUrls: ['./checkout-warning-modal.component.scss']
})
export class CheckoutWarningModalComponent implements OnInit {

  @Output() goToCart = new EventEmitter<boolean>();
  @Output() changesAccepted = new EventEmitter<boolean>();
  @Input() orderQuantities: any;

  constructor(public activeModal: NgbActiveModal) {}

  onMakeChanges() {
      this.goToCart.emit(true);
      this.activeModal.close();
  };

  onAccept() {
      this.changesAccepted.emit(true);
      this.activeModal.close();
  };

  ngOnInit() {};

}
