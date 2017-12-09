import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../api.service';

import { OrderModel } from '../../models/order.model';
import { ScheduleModel } from '../../models/schedule.model';

@Injectable()
export class CartService {

  // id maker for each cart in the cart service instance
  // start it at negative one so that the tempId will be the index as well
  private tempId: number = -1;
  

  // data management strategy
  // create the dataStore for the cart
  // it will have to be an array of separate carts, one for each producer in the case that products are chosen from more than one producer, or for products not in the same delivery  
  // create the BehaviorSubject to create a copy of the dataStore and build an observable out of it

  private dataStore: {
	  carts: any[], // for some fucking reason, this can't be typed as an OrderModel or the compiler throws errors randomly
    cartCount: number,
    schedulesArray: [{
      tempId: number,
      producerId: number,
      communityList: [{
        city: string,
        scheduleList: ScheduleModel[]
      }]
    }]
  };
  private _carts: BehaviorSubject<OrderModel[]>;
  private _cartCount: BehaviorSubject<number>;
  private _schedulesArray: BehaviorSubject<Object[]>;
  private _cart: BehaviorSubject<OrderModel>;
  private _scheduleList: BehaviorSubject<any[]>;
  private _communityList: BehaviorSubject<any[]>;
  
  // during construction, create the empty dataStore and any BehaviourSubjects
  constructor(private apiService: ApiService) {
    this.dataStore = { carts: [], cartCount: 0, schedulesArray: [{ tempId: null, producerId: null, communityList: [{ city: null, scheduleList: [] }] }] };
    this._carts = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
    this._cartCount = <BehaviorSubject<number>>new BehaviorSubject(null);
    this._schedulesArray = <BehaviorSubject<Object[]>>new BehaviorSubject([]);
    this._cart = <BehaviorSubject<OrderModel>>new BehaviorSubject({});
    this._scheduleList = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this._communityList = <BehaviorSubject<any[]>>new BehaviorSubject([]);
  }
  
  getCarts() {
	  return this._carts.asObservable();
  }

  getCartById() {
    return this._cart.asObservable();
  }

  loadCartById(id) {
    this._cart.next(Object.assign({}, this.dataStore).carts[id]);
  }

  getCartCount() {
    return this._cartCount.asObservable();
  }

  getSchedulesByIdAndCommunity(id, community) {
    
  }

  getCommunityList() {
    return this._communityList.asObservable();
  };

  loadCommunityList(id) {
    this._communityList.next(Object.assign({}, this.dataStore).schedulesArray[id].communityList);
  }

  // ***********PRODUCT METHODS**********

  // on click from any 'add to cart' buttons, add the product and qty to the cart
  addToCart(product, quantity) {
    // increase the cartCount
    this.dataStore.cartCount += quantity;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    // calculate the total value of this addition
  	let productValue = this.calculateProductOrderValue(product, quantity);
    // create the productQuantities object
    let productQuantities = {
      productId: product.id,
      orderQuantity: quantity,
      orderValue: productValue
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
      // add one to the tempIds variable
      this.tempId += 1;
      // producer isn't there, so build the order from scratch
      let newOrder = {
        id: null,
        tempId: this.tempId,
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
          deliveryFee: null,
          createdDate: '',
          producerComment: '',
          orderStatus: 'pending',
          orderValue: productValue // set to product value only for the first product added to the cart
        }
      };
      // push the new order into the cart
      this.dataStore.carts.push(newOrder);
    } else if (productIndex !== -1) { // producer is in the cart, product is also in the cart, just increase the qty
      this.findAndAddMoreQty(product.id, quantity, producerIndex, productValue);
      this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
    } else { // if producerId is already in the cart, push the product into that array,
      this.dataStore.carts[producerIndex].productList.push(product);
      this.dataStore.carts[producerIndex].orderDetails.productQuantities.push(productQuantities);
      this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
    };
    // add to the schedules array as necessary
    this.addToSchedulesArray(this.tempId, producerId, product.scheduleList);
    // calculate/recalc the totalValue of the cart

    console.log('dataStore: ', this.dataStore);
    // if a timer currently exists, clear it, start a new timer
    this.restartTimer();
  };

  // calculate the total value of the additional product ordered
  calculateProductOrderValue (product, quantity) {
    let value = product.pricePerUnit * product.unitsPer * quantity; 
    return value;
  };

  calculateTotalOrderValue(cart) {
	  let totalValue = 0;
	  cart.orderDetails.productQuantities.forEach((object) => {
		  totalValue += object.orderValue;
    });
	  return totalValue;
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
    this.dataStore.carts[cartId].orderDetails.chosenSchedule = schedule;
  };

  addConsumerComment(cartId, comment) {
    this.dataStore.carts[cartId].orderDetails.consumerComment = comment;
  };

  addDeliveryAddress(cartId, address) {
    this.dataStore.carts[cartId].orderDetails.deliveryAddress = address;
  };

  addDeliveryFee(cartId, fee) {
    this.dataStore.carts[cartId].orderDetails.deliveryFee = fee;
  };

  changeCartStatus(cartId, status) {
    this.dataStore.carts[cartId].orderDetails.orderStatus = status;
  }

  returnCartById(id) {
    return this.dataStore.carts[id];
  }

  dateStampCart(cartId) {
    let date = new Date();
    this.dataStore.carts[cartId].orderDetails.createdDate = date;
  }

  getCartCountOfSingleCart(cartId) {
    let count: number = 0;
    // get the cart
    let cart = this.dataStore.carts[cartId];
    console.log('cart: ', cart);
    // loop through the productQuantities, adding them to count
    for (let i = 0; i < cart.orderDetails.productQuantities.length; i++) {
      console.log('cart.orderDetails.productQuantities[i].orderQuantity; ', cart.orderDetails.productQuantities[i].orderQuantity);
      count += cart.orderDetails.productQuantities[i].orderQuantity;
    }
    console.log('count: ', count);
    return count;
  }

  // ***********ORDER STATUS METHODS**********

  // confirm and send the order from consumer to producer
  confirmAndSendOrder(cartId, chosenSchedule, consumerComment, deliveryAddress?) {
    // add the chosen schedule to the cart
    this.selectSchedule(cartId, chosenSchedule);
    // add the consumer comment to the cart
    this.addConsumerComment(cartId, consumerComment);
    // date stamp the cart
    this.dateStampCart(cartId);
    if (chosenSchedule.type === "Door-to-door Delivery") {
      // add the delivery fee, if required
      this.addDeliveryFee(cartId, chosenSchedule.fee);
      // add the delivery address, if it exists
      this.addDeliveryAddress(cartId, deliveryAddress);
    }
    console.log('finished cart: ', this.dataStore.carts);
    // remove the cart contents from the cart count
    this.dataStore.cartCount -= this.getCartCountOfSingleCart(cartId);
    console.log('new cartCount: ', this.dataStore.cartCount);
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
  };

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
  findAndAddMoreQty(productId, quantity, producerIndex, productValue) {
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
    this.dataStore.carts[producerIndex].orderDetails.productQuantities[productIndex].orderValue += productValue;
  };

  addOne(productId, producerId) {
    // change the product's quantities
    this.makeQtyPending(productId, 1);
    // increase the cartCount
    this.dataStore.cartCount += 1;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    let producerIndex = this.findProducerIndex(producerId);
    let productIndex = this.findProductIndex(producerIndex, productId);
    let array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
    let productQuantitiesIndex;
    // find the target product in the productQuantities array
    for (let i = 0; i < array.length; i++) {
      if (array[i].productId === productId) {
        productQuantitiesIndex = i;
      };
    };
    // change the quantity of that product
    this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity += 1;
    // calculate the new order value of that product
    this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderValue = this.calculateProductOrderValue(this.dataStore.carts[producerIndex].productList[productIndex], this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity);
    this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
  }

  minusOne(productId, producerId) {
    // change the product's quantities
    this.makeQtyPending(productId, -1);
    // increase the cartCount
    this.dataStore.cartCount -= 1;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    let producerIndex = this.findProducerIndex(producerId);
    let productIndex = this.findProductIndex(producerIndex, productId);
    let array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
    let productQuantitiesIndex;
    // find the target product in the productQuantities array
    for (let i = 0; i < array.length; i++) {
      if (array[i].productId === productId) {
        productQuantitiesIndex = i;
      };
    };
    // change the quantity of that product
    this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity -= 1;
    // calculate the new order value of that product
    this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderValue = this.calculateProductOrderValue(this.dataStore.carts[producerIndex].productList[productIndex], this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity);
    this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
  }

  findAndMakeQuantity(productId, quantity, producerId, cartCountAdjustment) {
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
    this.makeQtyPending(productId, quantity);
    // increase the cartCount
    this.dataStore.cartCount += cartCountAdjustment;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    let producerIndex = this.findProducerIndex(producerId);
    let productIndex = this.findProductIndex(producerIndex, productId);
    let array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
    let productQuantitiesIndex;
    // find the target product in the productQuantities array
    for (let i = 0; i < array.length; i++) {
      if (array[i].productId === productId) {
        productQuantitiesIndex = i;
      };
    };
    // change the quantity of that product
    this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity = quantity;
    // calculate the new order value of that product
    this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderValue = this.calculateProductOrderValue(this.dataStore.carts[producerIndex].productList[productIndex], quantity);
    this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
  }

  findProducerInSchedList(id) { // return true if producerId is already in scheduleList array, false if not
    let result;
    this.dataStore.schedulesArray.forEach((scheduleObject) => {
      if (scheduleObject.producerId === id) {
        result = true;
      }
    });
    return result;
  };

  addToSchedulesArray(tempId, producerId, scheduleList) {
    let communityList;
    // if dataStore.scheduleList is empty
    if (this.dataStore.schedulesArray[0].producerId === null) {
      //build the communityList array
      communityList = this.buildCommunityList(scheduleList);
      this.dataStore.schedulesArray = [{ // build the object and put it in the dataStore
        tempId: tempId,
        producerId: producerId,
        communityList: communityList
      }];
    } else if (!this.findProducerInSchedList(producerId)) { // producerId is not in the dataStore yet
      //build the communityList array
      communityList = this.buildCommunityList(scheduleList);
      let newObject = { // build the new object and push it into the array
        tempId: tempId,
        producerId: producerId,
        communityList: communityList
      };
      this.dataStore.schedulesArray.push(newObject);
    }
  };

  buildCommunityList(scheduleList) {
    let city;
    let communityList;
    // for each item in the scheduleList
    scheduleList.forEach((sched) => {
      // get the city
      city = sched.city;
      if (!communityList) { // if the communityList is empty, add a new one
        communityList = [{
          city: city,
          scheduleList: [sched]
        }];
      } else {
        // get the index of the city
        let index = this.findCityInCommunityList(city, communityList);
        if (index === -1) { // if city isn't in there, add it
          communityList.push({city: city, scheduleList: [sched]});
        } else {
          communityList[index].scheduleList.push(sched);
        }
      }
    })
    return communityList;
  };

  findCityInCommunityList(city, communityList) {
    for (let i = 0; i < communityList.length; i++) {
      if (communityList[i].city === city) {
        return i;
      }
    };
    return -1;
  };

    // change all product quantities from pending back to available
  emptyCart() {};

  loadCartCount() {
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
  }

  loadCarts() {
    this._carts.next(Object.assign({}, this.dataStore).carts);
  }
  
}