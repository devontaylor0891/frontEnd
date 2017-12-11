import { Component, OnInit, Input, OnChanges, ViewChild, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CartService } from '../../core/services/cart-service/cart.service';

import { ProductModel } from '../../core/models/product.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit, OnChanges {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  @Input() product: ProductModel;
  
  orderQty: number;
  
  constructor(private modal: NgbModal,
              private cartService: CartService) { }
	
	ngOnChanges() {}
  
    addOne() {
      if (this.orderQty < this.product.qtyAvailable) {
        this.orderQty += 1;
      }
    }
  
    lessOne() {
      if (this.orderQty > 1) {
        this.orderQty -= 1;
      }
    }
  
    onAdd() {
	    this.cartService.addToCart(this.product, this.orderQty);
      if (this.product.qtyAvailable > 0) { // this will need to update after the orderQty is sent to the cart service
        this.orderQty = 1;
      } else {
        this.orderQty = 0;
      }
      this.modal.open(this.modalContent, { size: 'lg' });
    }

  
    ngOnInit() {
      this.orderQty = 1; // no, this needs to be initialized as the value in the cart, or one if none exists
    }

}