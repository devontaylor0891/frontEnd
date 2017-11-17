import { Injectable } from '@angular/core';

import { ApiService } from '../../api.service';

import { OrderModel } from '../../models/order.model';

@Injectable()
export class CartService {

  // data management strategy
  // create the dataStore for the cart
  // create the BehaviorSubject to create a copy of the dataStore and build an observable out of it

  // create the BehaviorSubject to hold the cart items
  // it will have to be an array of separate carts, one for each producer in the case that products are chosen from more than one producer, or for products not in the same delivery
  private dataStore: OrderModel[];

  // during construction, create the empty dataStore and any BehaviourSubjects
  constructor(private apiService: ApiService) {
    this.dataStore = [];
  }

  // ***********PRODUCT METHODS**********

  // on click from any 'add to cart' buttons, add the product and qty to the cart
  addProduct(product, quantity) {
    // make sure quantity is less than or equal to qtyAvailable
    // get current qtyAvailable
    let currentQtyAvailable = this.getCurrentlyAvailable(product.id);
    // if not, inform user and make quantity = qtyAvailable
    if (quantity > currentQtyAvailable) {
      quantity = currentQtyAvailable;
      // inform user
    };
    // get producerId from product,
    let producerId = product.producerId;
    // if cartContents is empty OR if the producerId is not in the cart, add the info to it
    if ((this.dataStore === []) || (this.findProducer(producerId) === -1)) {

    } else { // if producerId is already in the cart, push the product into that array,

    };
    // if a timer currently exists, clear it, start a new timer
    this.restartTimer();
  }

  // modify the quantity in cart
  changeQty(product, quantity) {
    // find the product in the cartContents,
    // set a new qty,
    // clear timer and start new timer
    this.restartTimer();
  }

  // remove a product from the cart
  deleteProduct(product) {
    // find the product in the cartContents,
    // splice it
    // clear timer and start new timer
    this.restartTimer();
  }

  // ***********SCHEDULE METHODS**********

  // for each cart in the cart contents, select a schedule
  selectSchedule(cartId, schedule) {
    // in specified cart, push the schedule details
  }

  // ***********ORDER STATUS METHODS**********

  // confirm and send the order from consumer to producer
  confirmAndSendOrder() {}

  // producer accepts order
  acceptOrder() {}

  // complete order
  completeOrder() {}

  // modify the status of an order
  changeOrderStatus() {}

  // ***********TIMER METHODS**********

  restartTimer() {
    this.clearTimer(this.cartTimer);
    this.cartTimer();
  }

  cartTimer = function() {
    setTimeout(this.emptyCart(), 1200000);
  };

  // change all product quantities from pending back to available
  emptyCart() {}

  // when timer runs out, send order to abandoned orders table
  logAbandonedCart() {}

  clearTimer(timer) {
    timer.clearTimeout();
  }

  // ***********OTHER METHODS**********

  // API call to get the qtyAvailable right now
  getCurrentlyAvailable(productId) {};

  // look to see if producer is in cart
  findProducer(id) {
    // this.dataStore.forEach(
    //   (order) => {
    //     if (order.producer.id === id) {
    //       return this.dataStore.indexOf(order);
    //     }
    //   })
    return -1;
  };

}
