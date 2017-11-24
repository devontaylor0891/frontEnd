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
	  carts: any[], // for some fucking reason, this can't be typed as an OrderModel or the compiler throws errors randomly
    cartCount: number
  };
  private _carts: BehaviorSubject<OrderModel[]>;
  private _cartCount: BehaviorSubject<number>;
  
	// note - I think I should also create an array of available schedule choices based on the products in the cart
	// as a product is added to the cart, the schedule id's on that product are pushed to an array based on producer
	// this way, i can populate the options with an API call on checkout
	private schedulesArray: Object[] = [];
  
  // during construction, create the empty dataStore and any BehaviourSubjects
  constructor(private apiService: ApiService) {
    this.dataStore = { carts: [], cartCount: 0 };
    this._carts = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
    this._cartCount = <BehaviorSubject<number>>new BehaviorSubject(null);
  }
  
  getCarts() {
	  return this._carts.asObservable();
  }

  getCartCount() {
    return this._cartCount.asObservable();
  }

  // ***********PRODUCT METHODS**********

  // on click from any 'add to cart' buttons, add the product and qty to the cart
  addToCart(product, quantity) {
    // increase the cartCount
    this.dataStore.cartCount += quantity;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    // create the productQuantities object
    let productQuantities = {
      productId: product.id,
      orderQuantity: quantity
    };
	  // get producerId from product,
    let producerId = product.producer.id;
    let producerIndex = this.findProducerIndex(producerId);
    let productIndex = this.findProductIndex(producerIndex, product.id);
    // make sure quantity is less than or equal to qtyAvailable
    // get current qtyAvailable
    // let currentQtyAvailable = this.getCurrentlyAvailable(product.id, producerId);
    // if not, inform user and make quantity = qtyAvailable
    // if (quantity > currentQtyAvailable) {
    //   quantity = currentQtyAvailable;
    //   // inform user
	  // // alert?
    // };
	// change the product's quantities
	this.makeQtyPending(product.id, quantity);
    // if cart is empty OR if the producerId is not in the cart, add the info to it
    if ((producerIndex === -1) || (producerIndex === undefined)) {
      // producer isn't there, so build the order from scratch
      let newOrder = {
        id: null,
        chosenSchedule: null,
        producer: product.producer,
        consumer: null,
        productList: [
          product
        ],
        orderDetails: {
          productQuantities: [
            productQuantities
          ],
          consumerComment: '',
          deliveryAddress: '',
          createdDate: '',
          producerComment: '',
          orderStatus: 'pending'
        }
      };
      // push the new order into the cart
      this.dataStore.carts.push(newOrder);
    } else if (productIndex !== -1) { // producer is in the cart, product is also in the cart, just increase the qty
      this.findAndAddMoreQty(product.id, quantity, producerIndex);
    } else { // if producerId is already in the cart, push the product into that array,
      this.dataStore.carts[producerIndex].productList.push(product);
      this.dataStore.carts[producerIndex].orderDetails.productQuantities.push(productQuantities);
    };
    console.log('dataStore: ', this.dataStore);
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

  // 20 minute timer
  cartTimer = function(cart) {
    setTimeout(this.emptyCart(cart), 1200000);
  };

  // send order to abandoned orders table
  logAbandonedCart() {};

  clearTimer(timer) {
    timer.clearTimeout();
  };

  restartTimer() {
    // this.cartTimer.clearTimeout();
    // this.cartTimer(cart);
  };

  // ***********OTHER METHODS**********

  // API call to get the qtyAvailable right now
  getCurrentlyAvailable(productId, producerId) {
	  this.apiService.getProductById(productId, producerId)
		.subscribe((result) => {
			return result.qtyAvailable;
		})
  };
  
  makeQtyPending(id, qty) {};

  // look to see if producer is in cart, return the index number or -1
  findProducerIndex(id) {
    let index;
    if (this.dataStore.carts.length === 0) {
      index = -1;
    } else {
      this.dataStore.carts.forEach(
        (order) => {
          if (order.producer.id === id) {
            index = (this.dataStore.carts.indexOf(order));
          }
        });
    }
    return index;
  };

  findProductIndex(producerIndex, productId) {
    if ((this.dataStore.carts[producerIndex] === undefined)) {
      return -1;
    } else {
      let j;
      let length = this.dataStore.carts[producerIndex].productList.length;
      for (j = 0; j < length; j++) {
        if ((this.dataStore.carts[producerIndex].productList[j].id) === productId) {
          return j;
        };
      };
      return -1;
    };
  };
  
  // find the product in the array and add the given qty to the existing qty
  findAndAddMoreQty(productId, quantity, producerIndex) {
    // access the productQuantities array
    let array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
    // loop through the array and return the index of the appropriate product
    let productIndex;
    for (let i = 0; i < array.length; i++) {
      if (array[i].productId === productId) {
        productIndex = i;
      }
    }
	  this.dataStore.carts[producerIndex].orderDetails.productQuantities[productIndex].orderQuantity += quantity;
  };

    // change all product quantities from pending back to available
  emptyCart() {};

  loadCartCount() {
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
  }
  
}