import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../api.service';

import { OrderModel } from '../../models/order.model';

@Injectable()
export class CartService {

  // data management strategy
  // create the dataStore for the cart
  // it will have to be an array of separate carts, one for each producer in the case that products are chosen from more than one producer, or for products not in the same delivery  
  // create the BehaviorSubject to create a copy of the dataStore and build an observable out of it

  private dataStore: {
	  carts: OrderModel[]
  };
  private _carts: BehaviorSubject<OrderModel[]>;
  
	// note - I think I should also create an array of available schedule choices based on the products in the cart
	// as a product is added to the cart, the schedule id's on that product are pushed to an array based on producer
	// this way, i can populate the options with an API call on checkout
	private schedulesArray: Object[] = [];
  
  // during construction, create the empty dataStore and any BehaviourSubjects
  constructor(private apiService: ApiService) {
    this.dataStore.carts = [];
	  this._carts = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
  }
  
  getCarts() {
	  return this._carts.asObservable();
  }

  // ***********PRODUCT METHODS**********

  // on click from any 'add to cart' buttons, add the product and qty to the cart
  addToCart(product, quantity) {
	// get producerId from product,
    let producerId = product.producer.id;
    // make sure quantity is less than or equal to qtyAvailable
    // get current qtyAvailable
    let currentQtyAvailable = this.getCurrentlyAvailable(product.id, producerId);
    // if not, inform user and make quantity = qtyAvailable
    if (quantity > currentQtyAvailable) {
      quantity = currentQtyAvailable;
      // inform user
	  // alert?
    };
	// change the product's quantities
	this.makeQtyPending(quantity);
    // if cart is empty OR if the producerId is not in the cart, add the info to it
    if ((!this.dataStore) || (this.dataStore === null) || (this.findProducer(producerId) === -1)) {
		// producer isn't there, so build the order from scratch
		let newOrder = {
			id: null,
			chosenSchedule: null,
			producer: product.producer,
			consumer: null,
			productList: [
        null
      ],
			orderDetails: {
        consumerComment: '',
        deliveryAddress: '',
        createdDate: '',
        producerComment: '',
				orderStatus: 'pending'
			}
		};
		// push the new order into the cart
		this.dataStore.carts.push(newOrder);
    } else { // if producerId is already in the cart, push the product into that array,
		this.dataStore.carts[this.findProducer(producerId)].productList.push(product);
    };
    // if a timer currently exists, clear it, start a new timer
    this.restartTimer();
  };

  // modify the quantity in cart
  changeQty(product, quantity) {
    // find the product in the cartContents,
    // set a new qty,
    // clear timer and start new timer
    this.restartTimer();
  };

  // remove a product from the cart
  deleteProduct(product) {
    // find the product in the cartContents,
    // splice it
    // clear timer and start new timer
    this.restartTimer();
  };

  // ***********SCHEDULE METHODS**********

  // for each cart in the cart contents, select a schedule
  selectSchedule(cartId, schedule) {
    // in specified cart, push the schedule details
  };

  // ***********ORDER STATUS METHODS**********

  // confirm and send the order from consumer to producer
  confirmAndSendOrder(orderId) {};

  // producer accepts order
  acceptOrder(orderId) {};

  // complete order
  completeOrder(orderId) {};

  // modify the status of an order
  changeOrderStatus(orderId, status) {};

  // ***********TIMER METHODS**********

  restartTimer() {
    this.clearTimer(this.cartTimer);
    this.cartTimer();
  };

  // 20 minute timer
  cartTimer = function() {
    setTimeout(this.emptyCart(), 1200000);
  };

  // send order to abandoned orders table
  logAbandonedCart() {};

  clearTimer(timer) {
    timer.clearTimeout();
  };

  // ***********OTHER METHODS**********

  // API call to get the qtyAvailable right now
  getCurrentlyAvailable(productId, producerId) {
	  this.apiService.getProductById(productId, producerId)
		.subscribe((result) => {
			return result.qtyAvailable;
		})
  };
  
  makeQtyPending(qty) {};

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

    // change all product quantities from pending back to available
  emptyCart() {};
  
}