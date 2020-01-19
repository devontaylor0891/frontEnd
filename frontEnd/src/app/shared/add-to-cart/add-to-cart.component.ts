import { Component, OnInit, Input, OnChanges, ViewChild, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CartService } from '../../core/services/cart-service/cart.service';

import { ProductModel } from '../../core/models/product.model';
import { isThisSecond } from 'date-fns';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit, OnChanges {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  @Input() product: ProductModel;
  @Input() noUpcomingScheds: boolean;

  orderQty: number;
  quantityAlreadyInCart: number;
  cartId: number;

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
    this.cartId = this.cartService.getCartIndex(this.cartService.getCartIdByProducerId(this.product.producer.id));
    // check if the cart Index is -1 (meaning it doesn't exist)

    // ****** CARTS EMPTY *****

    if (this.cartId === -1) {
      // console.log('cart doesnt exist: ', this.cartId);
      // cart doesn't exist, add the product
      this.cartService.addToCart(this.product, this.orderQty);
      this.resetOrderQty(this.orderQty);
    } else if (this.cartService.findProductIndexInCart(this.cartId, this.product.id) === -1) { // cart exists, but product isn't in it yet

    // ****** CART EXISTS - PRODUCT IS NOT IN IT *****

      // console.log('product index returned: ', this.cartService.findProductIndexInDataStore(this.product.id))
      this.cartService.addToCart(this.product, this.orderQty);
      this.resetOrderQty(this.orderQty);
      // if (this.orderQty === this.product.qtyAvailable) { // reset orderqty
      //   this.orderQty = 0;
      // } else {
      //   this.orderQty = 1;
      // }
    } else { // cart exists, so we need to get the quantity already in the cart
      // console.log('cart exists: ', this.cartId);
      this.quantityAlreadyInCart = this.cartService.getQtyAlreadyInCart(this.product.id, this.cartId);
      let productIndex = this.cartService.findProductIndexInDataStore(this.product.id);
      // add that to the orderQty
      // compare to product.qtyAvailable
      if ((this.orderQty + this.quantityAlreadyInCart) > this.product.qtyAvailable) { // if too many, alert, change qty in cart so it equals qtyAvailable

        // ****** CART EXISTS - PRODUCT IS ALREADY THERE - BUT TRYING TO ORDER TOO MANY *****

        // console.log('not enough qty');
        this.cartService.addMoreQty(productIndex, (this.product.qtyAvailable - this.quantityAlreadyInCart), this.cartId, ((this.product.qtyAvailable - this.quantityAlreadyInCart) * this.product.pricePerUnit * this.product.unitsPer));
        this.orderQty = 0;
        let message = 'Uh oh! There are only ' + this.product.qtyAvailable + ' available to order. We are adding them all to your cart.';
        alert(message);
      } else { // if less than or equal, add orderQty to cart

        // ****** CART EXISTS - PRODUCT IS ALREADY THERE - QTYS ARE GOOD, SO ADD IT TO WHAT'S ALREADY THERE *****

        // console.log('enough qty, just adding more');
        this.cartService.addMoreQty(productIndex, this.orderQty, this.cartId, (this.orderQty * this.product.pricePerUnit * this.product.unitsPer));
        this.resetOrderQty(this.orderQty + this.quantityAlreadyInCart);
        if ((this.orderQty + this.quantityAlreadyInCart) === this.product.qtyAvailable) {
          this.orderQty = 0; // if qty maxed out, set orderQty to zero
        } else {
          this.orderQty = 1; // else set back to 1
        }
      };
    }

    this.modal.open(this.modalContent, { size: 'lg' });
  }

  resetOrderQty (qtyOrdered) {
    if (qtyOrdered === this.product.qtyAvailable) {
      this.orderQty = 0;
    } else {
      this.orderQty = 1;
    }
  }

  ngOnInit() {
    this.orderQty = 1;
  }
}
