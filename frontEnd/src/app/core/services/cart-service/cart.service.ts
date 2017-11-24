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
    this.dataStore = { carts: [] };
	  this._carts = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
  }
  
  getCarts() {
	  return this._carts.asObservable();
  }

  // ***********PRODUCT METHODS**********

  // on click from any 'add to cart' buttons, add the product and qty to the cart
  addToCart(product, quantity) {
    // create the productQuantities object
    let productQuantities = {
      productId: product.id,
      orderQuantity: quantity
    };
	  // get producerId from product,
    let producerId = product.producer.id;
    console.log('producer id: ', producerId);
    let producerIndex = this.findProducerIndex(producerId);
    console.log('producerIndex: ', producerIndex);
    // let productIndex = this.findProductIndex(producerIndex, product.id);
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
      let newOrder: OrderModel = {
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
    //   ublic id: number,
    //   public chosenSchedule: ScheduleModel,
    //   public producer: ProducerModel,
    //   public consumer: UserModel,
    //   public productList: ProductModel[],
    //   public orderDetails: {
    //       productQuantities: [
    //   {
    //     productId: number,
    //     orderQuantity: number
    //   }
    // ],
    //       consumerComment: string,
    //       deliveryAddress: string,
    //       createdDate: string,
    //       producerComment: string,
    //       orderStatus: string
    //   }
      // push the new order into the cart
      console.log('newOrder: ', newOrder);
      this.dataStore.carts.push(newOrder);
      console.log('dataStore: ', this.dataStore);
      // } else if (productIndex !== -1) { // producer is in the cart, product is also in the cart, just increase the qty
      // 	this.findAndAddMoreQty(product.id, quantity, this.dataStore.carts[producerIndex].orderDetails.productQuantities);
    } else { // if producerId is already in the cart, push the product into that array,
      console.log('this.dataStore.carts[producerIndex].productList: ', this.dataStore.carts[producerIndex].productList);
		  this.dataStore.carts[producerIndex].productList.push(product);
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
          console.log('order: ', order);
          console.log('orderId: ', order.producer.id);
          console.log('id: ', id);
          if (order.producer.id === id) {
            console.log('this.dataStore.carts.indexOf(order) ', this.dataStore.carts.indexOf(order));
            index = (this.dataStore.carts.indexOf(order));
          }
        });
    }
    return index;
  };

  findProductIndex(producerIndex, productId) {
    if ((this.dataStore.carts[producerIndex].productList.indexOf(productId) === null) || (this.dataStore.carts[producerIndex].productList.indexOf(productId) === undefined)) {
      return -1;
    } else {
      return this.dataStore.carts[producerIndex].productList.indexOf(productId);
    }
  }
  
  // find the product in the array and add the given qty to the existing qty
  findAndAddMoreQty(productId, quantity, array) {
	  for (let i = 0; i < array.length; i++) {
		  if (array[i].productId === productId) {
			  array[i].orderQuantity += quantity;
			  break;
		  }
	  }
  };

    // change all product quantities from pending back to available
  emptyCart() {};
  
}