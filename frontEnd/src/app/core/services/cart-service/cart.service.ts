// imported in AppModule

// called in ...
// Header Component
// Cart Product Component
// Carts Component
// Checkout Component
// Edit Order Modal Component
// Add to Cart Component

import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../api.service';
import { AuthService } from '../../../auth/auth.service';
import { UserService } from '../../../core/services/user/user.service';

import { OrderModel } from '../../models/order.model';
import { ScheduleModel } from '../../models/schedule.model';

@Injectable()
export class CartService implements OnDestroy {

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
    }],
    products: any[]
  };

  private _carts: BehaviorSubject<OrderModel[]>;
  private _cartCount: BehaviorSubject<number>;
  private _schedulesArray: BehaviorSubject<Object[]>;
  private _cart: BehaviorSubject<OrderModel>;
  private _scheduleList: BehaviorSubject<any[]>;
  private _communityList: BehaviorSubject<any[]>;

  // properties for holding values retreived from localStorage
  chosenSchedule: ScheduleModel;
  consumerComment: string;
  cartId: any;
  _chosenSchedule: BehaviorSubject<ScheduleModel>;
  _consumerComment: BehaviorSubject<string>;
  _cartId: BehaviorSubject<number>;

  // properties for holding the values for the cart we are trying to confirm
  sendingCartId;
  sendingChosenSchedule;
  sendingConsumerComment;
  sendingDeliveryAddress;
  sendingConsumerPhone;

  // properties for use when product quantities have changed on checkout
  orderQuantityOkay: boolean = true;
  _orderQuantityOkay: BehaviorSubject<boolean>;
  orderQuantitiesToChange: any[];
  _orderQuantitiesToChange: BehaviorSubject<any[]>;
  orderSentSuccessfully: boolean = false;
  _orderSentSuccessfully: BehaviorSubject<boolean>;
  orderSentFailed: boolean = false;
  _orderSentFailed: BehaviorSubject<boolean>;

  getFutureSchedsSubscription: Subscription;
  
  // during construction, create the empty dataStore and any BehaviourSubjects
  constructor(private apiService: ApiService,
              private authService: AuthService,
              private userService: UserService) {
    this.dataStore = {
      carts: [],
      cartCount: 0,
      schedulesArray: [{ tempId: null, producerId: null, communityList: [{ city: null, scheduleList: [] }] }],
      products: []
    };
    this._carts = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
    this._cartCount = <BehaviorSubject<number>>new BehaviorSubject(null);
    this._schedulesArray = <BehaviorSubject<Object[]>>new BehaviorSubject([]);
    this._cart = <BehaviorSubject<OrderModel>>new BehaviorSubject({});
    this._scheduleList = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this._communityList = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this._chosenSchedule = <BehaviorSubject<ScheduleModel>>new BehaviorSubject(null);
    this._consumerComment = <BehaviorSubject<string>>new BehaviorSubject('');
    this._cartId = <BehaviorSubject<any>>new BehaviorSubject(null);
    this._orderQuantityOkay = <BehaviorSubject<boolean>>new BehaviorSubject(this.orderQuantityOkay);
    this._orderQuantitiesToChange = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this._orderSentSuccessfully = <BehaviorSubject<boolean>>new BehaviorSubject(this.orderSentSuccessfully);
    this._orderSentFailed = <BehaviorSubject<boolean>>new BehaviorSubject(this.orderSentFailed);
  }


// ***********DATE LOADING AND OBSERVABLE CREATION**********

  getCarts() {
	  return this._carts.asObservable();
  }

  loadCarts() {
    this._carts.next(Object.assign({}, this.dataStore).carts);
  }

  getCartById() {
    return this._cart.asObservable();
  }

  loadCartById(id) {
    // console.log('load cart by id called: ', id);
    let cartToLoad: any;
    this.dataStore.carts.forEach(
      (cart) => {
        // console.log('cart now: ', cart);
        if (cart.tempId === id) {
          cartToLoad = cart;
        }
      }
    )
    // this._cart.next(Object.assign({}, this.dataStore).carts[id]);
    this._cart.next(Object.assign(cartToLoad));
    // console.log('datastore: ', this.dataStore);
  }

  getCartIndex(tempId) {
    console.log('tempId: ', tempId);
    if (tempId === -1) {
      return -1;
    } else {
      let cartIndex;
      for (let i = 0; i < this.dataStore.carts.length; i++) {
        if (this.dataStore.carts[i].tempId === tempId) {
          cartIndex = i;
        }
      }
      return cartIndex;
    };
  };

  getCartCount() {
    return this._cartCount.asObservable();
  }
  
  loadCartCount() {
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
  }

  getCartIdByProducerId(producerId) {
    for (let i = 0; i < this.dataStore.carts.length; i++) {
      if (this.dataStore.carts[i].producerId === producerId) {
        return this.dataStore.carts[i].tempId;
      }
    }
    return -1;
  };

  getQtyAvailable(productId) {
    let qtyAvailable;
    let index = this.findProductIndexInDataStore(productId);
    qtyAvailable = this.dataStore.products[index].qtyAvailable;
    return qtyAvailable;
  };

  getQtyAlreadyInCart(productId, cartId) {
    console.log('getQtyAlready in cart cart Id: ', cartId);
    let currentOrderQty;
    let productIndex = this.findProductIndexInCart(cartId, productId);
    // console.log('productIndex returned: ', productIndex);
    if (productIndex === -1) {
      return 0;
    } else {
      // console.log('carts: ', this.dataStore.carts);
      currentOrderQty = this.dataStore.carts[cartId].orderDetails.productQuantities[productIndex].orderQuantity;
      return currentOrderQty;
    };
  };

  getProductQuantities(cartId, productId) {
    let quantities = {
      quantityAvailable: null,
      currentQuantityInCart: null
    }
    quantities.quantityAvailable = this. getQtyAvailable(productId);
    quantities.currentQuantityInCart = this.getQtyAlreadyInCart(productId, cartId);
    return quantities;
  }

  getCommunityList() {
    return this._communityList.asObservable();
  };

  getOrderQuantityOkay() {
    return this._orderQuantityOkay.asObservable();
  };

  getOrderQuantitiesToChange() {
    return this._orderQuantitiesToChange.asObservable();
  };

  getOrderSentSuccessfully() {
    return this._orderSentSuccessfully.asObservable();
  }

  getOrderSentFailed() {
    return this._orderSentFailed.asObservable();
  }

  // called from checkout component to load the list of communities in the dropdown
  loadCommunityList(producerId) {
    // console.log('load communityList by id called: ', producerId);
    let communityListToLoad: any;
    this.dataStore.schedulesArray.forEach(
      (schedule) => {
        if (schedule.producerId === producerId) {
          communityListToLoad = schedule.communityList;
        }
      }
    );
    // this._cart.next(Object.assign({}, this.dataStore).carts[id]);
    this._communityList.next(Object.assign(communityListToLoad));
    // console.log('datastore: ', this.dataStore);
  ;}

  
// ***********PRODUCT METHODS**********

  // on click from any 'add to cart' buttons, add the product and qty to the cart
  addToCart(product, quantity) {
    // console.log('adding to cart datastore: ', this.dataStore);
    // console.log('product added: ', product);

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
    let productIndex = this.findProductIndexInDataStore(product.id);
    // make sure quantity is less than or equal to qtyAvailable
    // get current qtyAvailable
    // let currentQtyAvailable = this.getCurrentlyAvailable(product.id);
    // if not, inform user and make quantity = qtyAvailable
    // if (quantity > currentQtyAvailable) {
    //   quantity = currentQtyAvailable;
    //   // inform user
	  // // set a property here as an observable that the component can subscribe to, then it can trigger an alert
    // };
    // change the product's quantities
    // console.log('productId: ', product.id);
    // console.log('quantity: ', quantity);
    // this.makeQtyPending(product.id, quantity);
    
    // if cart is empty OR if the producerId is not in the cart, add the info to it
    if ((producerIndex === -1) || (producerIndex === undefined)) {
      // add one to the tempIds variable
      this.tempId += 1;

      // add the product into the datastore
      this.dataStore.products = [product];

      // producer isn't there, so build the order from scratch
      let newOrder = {
        id: null,
        tempId: this.tempId,
        chosenSchedule: null,
        producerId: producerId,
        producer: product.producer,
        consumerId: null,
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
      // console.log('datastore after new product added: ', this.dataStore)
    } else if (productIndex !== -1) { // producer is in the cart, product is also in the cart, just increase the qty
      // console.log('product exists productIndex: ', productIndex);
      this.addMoreQty(productIndex, quantity, producerIndex, productValue);
      this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
    } else { // producerId is already in the cart, product is not yet, push the product into that array,
      this.dataStore.products.push(product);
      this.dataStore.carts[producerIndex].productList.push(product);
      this.dataStore.carts[producerIndex].orderDetails.productQuantities.push(productQuantities);
      this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
    };
    // add to the schedules array as necessary
    this.addToSchedulesArray(this.tempId, producerId);
    // calculate/recalc the totalValue of the cart
    // increase the cartCount
    this.dataStore.cartCount += quantity;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    // console.log('dataStore: ', this.dataStore);
    // if a timer currently exists, clear it, start a new timer
    // this.restartTimer();
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
  deleteProduct(productId, producerId) { // not working when hit more than once
    // remove product from the datastore.products array
    let dataStoreProductIndex = this.findProductIndexInDataStore(productId);
    this.dataStore.products.splice(dataStoreProductIndex, 1);
	  // remove the product from the cart
	  // return it's quantity to qtyAvailable
	  // change the cartCount
	  // restart the cart timer
    
    // if only one cart in datastore, set it equal to cart, otherwise loop through each until you find the productId
    let cart;
    let cartIndex;
    let productIndex;
    // console.log('dataStore: ', this.dataStore);
    // get the index of the cart and product
    if (this.dataStore.carts.length === 1 ) {
      cart = this.dataStore.carts[0];
      for (let j = 0; j < cart.orderDetails.productQuantities.length; j++) {
        if (cart.orderDetails.productQuantities[j].productId === productId) {
          cartIndex = 0;
          productIndex = j;
        };
      };
    } else {
      for (let i = 0; i < this.dataStore.carts.length; i++) {
        for (let j = 0; j < this.dataStore.carts[i].orderDetails.productQuantities.length; j++) {
          if (this.dataStore.carts[i].orderDetails.productQuantities[j].productId === productId) {
            cart = this.dataStore.carts[i];
            cartIndex = i;
            productIndex = j;
          };
        };
      };
    };
    // console.log('cart: ', cart); // works
    // console.log('cartIndex: ', cartIndex); // undefined
    // console.log('productIndex: ', productIndex); // undefined
    // get the quantity
    // console.log('qty: ', cart.orderDetails.productQuantities[productIndex].orderQuantity);
    let quantity = cart.orderDetails.productQuantities[productIndex].orderQuantity;
    // splice the product out of the arrays
    this.dataStore.carts[cartIndex].orderDetails.productQuantities.splice(productIndex, 1);
    this.dataStore.carts[cartIndex].productList.splice(productIndex, 1);
    // update the order value
    this.dataStore.carts[cartIndex].orderDetails.orderValue = this.calculateTotalOrderValue(cart);
    // if all products are gone from that specific cart, remove all it's info
    if (this.dataStore.carts[cartIndex].productList.length === 0) {
      this.dataStore.carts.splice(cartIndex, 1);
    }
    // console.log('dataStore after removal: ', this.dataStore);
    // emit the new carts
    this._carts.next(Object.assign({}, this.dataStore).carts);
    // change the qtyAvailable
    // this.makeQtyAvailable(productId, quantity);
    // decrease the cartCount
    this.dataStore.cartCount -= quantity;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    // clear timer and start new timer
    this.restartTimer();
  };


// ***********CART MODIFICATION METHODS**********

	// build the cart
	buildCart(cartId, chosenSchedule, consumerComment, deliveryAddress?, consumerPhone?) {
		// add the consumer to the cart
		this.addConsumer(cartId);
		// add the chosen schedule to the cart
		this.selectSchedule(cartId, chosenSchedule);
		// add the consumer comment to the cart
    this.addConsumerComment(cartId, consumerComment);
    console.log('consumer phone in build cart: ', consumerPhone);
    if (consumerPhone) {
      this.addConsumerPhone(cartId, consumerPhone);
    };
		// date stamp the cart
    this.dateStampCart(cartId);
    // add the delivery fee
    this.addDeliveryFee(cartId, chosenSchedule.fee);
		if (chosenSchedule.type === "Door-to-door Delivery") {
		  // add the delivery address, if it exists
		  this.addDeliveryAddress(cartId, deliveryAddress);
		}
		// change status to pending
		this.makeCartPending(cartId);
    let newOrder = this.dataStore.carts[cartId];
    console.log('newOrder: ', newOrder);
    this.apiService.postOrder(newOrder)
      .subscribe(
        result => {
          console.log('successfully posted: ', result);
          this._orderSentSuccessfully.next(true);
          // remove the cart contents from the cart count
          this.dataStore.cartCount -= this.getCartCountOfSingleCart(this.sendingCartId); // unnecessary??? throws error on single cart checkout, not sure about multi
          // remove the cart from the dataStore on success
          this.clearCart(this.sendingCartId);
          // console.log('new cartCount: ', this.dataStore.cartCount);
          this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
        }, error => {
          // console.log('could not add new order');
          this._orderSentFailed.next(true);
        }
      );
	};

  // for each cart in the cart contents, select a schedule
  selectSchedule(cartId, schedule) {
    // in specified cart, push the schedule details
    // console.log('chosen sched given to select schedule method: ', schedule);
    this.dataStore.carts[cartId].chosenSchedule = schedule;
    // console.log('cart in dataStore after sched added: ', this.dataStore.carts[cartId]);
  };
  
  addConsumer(cartId) {
    // this.dataStore.carts[cartId].consumer = this.authService.userProfile;
    // let idArray = this.authService.userProfile.sub.split('|');
    // this.dataStore.carts[cartId].consumerId = idArray[1];
    this.userService.getUser()
      .subscribe(
        result => {
          this.dataStore.carts[cartId].consumer = result;
          this.dataStore.carts[cartId].consumerId = result.id;
        }
      );
  };

  addConsumerComment(cartId, comment) {
    this.dataStore.carts[cartId].orderDetails.consumerComment = comment || '';
  };

  addConsumerPhone(cartId, phone) {
    this.dataStore.carts[cartId].orderDetails.consumerPhone = phone;
  };

  addDeliveryAddress(cartId, address) {
    this.dataStore.carts[cartId].orderDetails.deliveryAddress = address;
  };

  addDeliveryFee(cartId, fee) {
    // console.log('delivery fee value: ', fee);
    if (!fee) {
      this.dataStore.carts[cartId].orderDetails.deliveryFee = 0;
    } else {
      this.dataStore.carts[cartId].orderDetails.deliveryFee = fee;
    }
  };

  makeCartPending(cartId) {
    this.dataStore.carts[cartId].orderDetails.orderStatus = 'pending';
  }

  dateStampCart(cartId) {
    let date = new Date();
    this.dataStore.carts[cartId].orderDetails.createdDate = date;
  }

  getCartCountOfSingleCart(cartId) {
    let count: number = 0;
    // get the cart
    let cart = this.dataStore.carts[cartId];
    // console.log('cart: ', cart);
    // loop through the productQuantities, adding them to count
    for (let i = 0; i < cart.orderDetails.productQuantities.length; i++) {
      // console.log('cart.orderDetails.productQuantities[i].orderQuantity; ', cart.orderDetails.productQuantities[i].orderQuantity);
      count += cart.orderDetails.productQuantities[i].orderQuantity;
    }
    // console.log('count: ', count);
    return count;
  };

  calculateCartCount() {
    let totalCartCount = 0;
    for (let i = 0; i < this.dataStore.carts.length; i++) {
      totalCartCount += this.getCartCountOfSingleCart(i);
    }
    this.dataStore.cartCount = totalCartCount;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
  }

  clearCart(cartId) {
	  // splice the provided cart from the array
    this.dataStore.carts.splice(cartId, 1);
		// refresh localstorage
    this.removeCarts();
    this.storeCarts();    
	  // refresh the observable
	  this._carts.next(Object.assign({}, this.dataStore).carts);
  };
  
  
  
// ***********ORDER CONFIRMATION**********

  // confirm and send the order from consumer to producer
  confirmAndSendOrder(cartId, chosenSchedule, consumerComment, deliveryAddress?, consumerPhone?) {
    console.log('confirm and send order sched: ', chosenSchedule);
    // console.log('confirm and send order cart: ', this.dataStore.carts);
    // set the properties
    this.sendingCartId = cartId;
    this.sendingChosenSchedule = chosenSchedule;
    this.sendingConsumerComment = consumerComment;
    this.sendingDeliveryAddress = deliveryAddress || null;
    this.sendingConsumerPhone = consumerPhone || null;
    // create an array of the product id's
    let productsArray = this.dataStore.carts[cartId].orderDetails.productQuantities;
    // get the products' current quantities
    this.getProductsCurrentQuantities(productsArray, cartId);
  };

  buildCartAndSendOrder() {
    // console.log('buildCart and send order carts: ', this.dataStore.carts);
    // console.log('sending chosen sched: ', this.sendingChosenSchedule);
    // get the producer's email, subscribe to an api call, then continue with this function
    this.apiService.getProducerById(this.sendingChosenSchedule.userId)
      .subscribe(
        result => {
          // console.log('result of get producer by id: ', result);
          let producerEmail = result[0].email;
          this.sendingChosenSchedule.producerEmail = producerEmail;
          // build the cart
          this.buildCart(this.sendingCartId, this.sendingChosenSchedule, this.sendingConsumerComment, this.sendingDeliveryAddress, this.sendingConsumerPhone);
          // send the cart via the api
          // console.log('finished cart: ', newOrder);
        }
      );
  }

  getProductsCurrentQuantities(productsArray, cartId) {
    let productCheckArray = [];
    // console.log('carts at product check: ', this.dataStore.carts[cartId]);
    // empty the productList
    this.dataStore.carts[cartId].productList = [];
    productsArray.forEach((product, index, array) => {
      // console.log('checking product: ', product);
      let productChecked = {
        'id': null,
        'quantityOrdered': null,
        'quantityAvailable': null,
        'quantityPending': null,
        'name': null
      };
      // console.log('products passed in: ', product);
      productChecked.id = product.productId;
      productChecked.quantityOrdered = product.orderQuantity;
      this.apiService.getProductById(product.productId)
        .subscribe(
          (result) => {
            // add the refreshed product back into the product list
            this.dataStore.carts[cartId].productList.push(result);
            // console.log('api result: ', result);
            productChecked.quantityAvailable = result[0].qtyAvailable;
            productChecked.quantityPending = result[0].qtyPending;
            productChecked.name = result[0].name;
            // console.log('checking product result: ', productChecked);
            productCheckArray.push(productChecked);
            if (index === (array.length - 1)) {
              // console.log('cart refreshed: ', this.dataStore.carts[cartId]);
              // triggered on last one.
              // console.log('last one');
              this.compareProductQuantities(productCheckArray, cartId);
            };
          }
        )
    });
    // return productCheckArray;
  };

  compareProductQuantities(array, cartId) {
    
    let productArray = array.slice();
    this.orderQuantityOkay = true;
    let orderQuantityNotOkayArray = [];
    for (let i = 0; i < productArray.length; i++) {
      let product = productArray[i];
      // console.log('product looping: ', product);
      if (product.quantityOrdered > product.quantityAvailable) {
        this.orderQuantityOkay = false;
        orderQuantityNotOkayArray.push(product);
      }
      if (i === (productArray.length - 1)) {
        this.orderQtyOkayNotOkay(this.orderQuantityOkay, orderQuantityNotOkayArray, productArray, cartId);
      }
    }

  };

  orderQtyOkayNotOkay (orderQuantityOkay, orderQuantityNotOkayArray, productArray, cartId) {
    if (orderQuantityOkay) {
      this._orderQuantityOkay.next(orderQuantityOkay);
      this.updateProductQuantities(productArray, cartId);
      // console.log('orderqty ok');
    } else {
      // product stock is low and user must make changes
      this._orderQuantityOkay.next(orderQuantityOkay);
      // console.log('products out of stock: ', orderQuantityNotOkayArray);
      this._orderQuantitiesToChange.next(Object.assign(orderQuantityNotOkayArray));
    }
  };

  updateProductQuantities(productArray, cartId) {
    // console.log('productArray before send: ', productArray);
    // by now, all the pending order quantities should be ok as far as what is available
    // loop through the productList in the cart, add to qtyPending, remove from qtyAvailable
    // then call buildcartandsendorder
    let productListLength = this.dataStore.carts[cartId].productList.length;
    // loop over productList in cart
    for (let i = 0; i < productListLength; i++) {
      let fullProduct = this.dataStore.carts[cartId].productList[i][0];
      // loop over productArray (which comes from productQuantities)
      for (let j = 0; j < productArray.length; j++) {
        if (fullProduct.id == productArray[j].id) {
          fullProduct.qtyAvailable -= productArray[j].quantityOrdered;
          fullProduct.qtyPending += productArray[j].quantityOrdered;
        }
      }
      if (i === (productListLength - 1)) {
        this.buildCartAndSendOrder();
      }
    }
  }

  updateProductQuantitiesToQtyAvailable(cartId, productQuantitiesToUpdate) {
    let cartIndex = this.getCartIndex(cartId);
    // console.log('productqtys to update: ', productQuantitiesToUpdate);
    // for each product qty to update
    for (let i = 0; i < productQuantitiesToUpdate.length; i++) {
      // get the qty actually available
      let qty = productQuantitiesToUpdate[i].quantityAvailable;
      // console.log('qty: ', qty);
      // loop through the cart's productQtys to find the matching product
      for (let j = 0; j < this.dataStore.carts[cartIndex].orderDetails.productQuantities.length; j++) {
        // console.log('cart product id test: ', this.dataStore.carts[cartIndex].orderDetails.productQuantities[j].productId);
        if (productQuantitiesToUpdate[i].id === this.dataStore.carts[cartIndex].orderDetails.productQuantities[j].productId) {
          // set the qty ordered to the qty available
          this.dataStore.carts[cartIndex].orderDetails.productQuantities[j].orderQuantity = qty;
        }
      }
    };
    this.removeProductsWithZeroQty(cartIndex);
    // clear the orderqtynotokay array and re-emit
    this._orderQuantitiesToChange.next(Object.assign([]));
    // recalculate the total order value
    this.dataStore.carts[cartIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[cartIndex]);
    // reload the cart
    // console.log('reloading cart from updateProductQty: ', cartIndex);
    // console.log('cart: ', this.dataStore.carts[cartIndex]);
    this.loadCartById(cartId);
    // console.log('new datastore: ', this.dataStore.carts[cartIndex]);
  };

  removeProductsWithZeroQty(id) {
    // console.log('cart before removal: ', this.dataStore.carts[id]);
    let productIdsToRemove = [];
    let currentCart = this.dataStore.carts[id];
    let productQtys = currentCart.orderDetails.productQuantities;
    let productList = currentCart.productList;
    // loop through the productQuantities, return an array of productIds where the qtyOrdered is zero, remove those ones as well
    for (let i = 0; i < productQtys.length; i++) {
      if (productQtys[i].orderQuantity === 0) {
        productIdsToRemove.push(productQtys[i].productId);
      }
    };
    // loop through product quantities and remove zero quantities
    for (let i = productQtys.length - 1; i >= 0; i--) {
      for (let j = 0; j < productIdsToRemove.length; j++) {
        if (productQtys[i] && (productQtys[i].productId === productIdsToRemove[j])) {
          productQtys.splice(i, 1);
        }
      }
    };
    // loop through the productList, remove any products where the id matches those contained in the above array
    for (let i = productList.length - 1; i >= 0; i--) {
      for (let j = 0; j < productIdsToRemove.length; j++) {
        if (productList[i] && (productList[i].id === productIdsToRemove[j])) {
          productList.splice(i, 1);
        }
      }
    };
    // let length = productQtys.length;
    // while(length--) {

    // }
    // for (let i = 0; i < productQtys.length; i++) {

    // };
    this.dataStore.carts[id].orderDetails.productQuantities = productQtys;
    this.dataStore.carts[id].orderDetails.productList = productList;
    this.calculateCartCount();
    // console.log('cart after removal: ', this.dataStore.carts[id]);
  };

  resetOrderSubscriptions() {
    // _orderQuantityOkay true
    // _orderQuantitiesToChange []
    // _orderSentSuccessfully false
    // _orderSentFailed false
    this.orderQuantityOkay = true;
    this.orderQuantitiesToChange = [];
    this.orderSentSuccessfully = false;
    this.orderSentFailed = false;
    this._orderQuantityOkay.next(this.orderQuantityOkay);
    this._orderQuantitiesToChange.next([]);
    this._orderSentSuccessfully.next(this.orderSentSuccessfully);
    this._orderSentFailed.next(this.orderSentFailed);
  };

  storeCarts() {
    // console.log('storing carts: ', this.dataStore);
    // store all carts in datastore
    localStorage.setItem('dataStore', JSON.stringify(this.dataStore));
  };

  retrieveCarts() {
    let localCarts = JSON.parse(localStorage.getItem('dataStore'));
    if (localCarts) {
      // console.log('carts in local storage: ', localCarts);
      // add it/them to the carts array in datastore
      this.dataStore = localCarts;
      this.loadCarts();
      this.loadCartCount();
    } else {
      // console.log('no carts in local storage');
    }
  };

  removeCarts() {
    localStorage.removeItem('dataStore');
  }

  
  
// ***********TIMER METHODS**********

  // 20 minute timer, then mark as abandoned
  cartTimer() {
    // setTimeout(this.logAbandonedCart, 1200000);
  };

  restartTimer() {
    // clear the old timer
	  // this.cartTimer.clearTimeout();
    // restart as new
    this.cartTimer();
  };

  
  
  
// ***********OTHER METHODS**********

  formatProduct(resultFromDb) {
    let formattedProduct = {
      userId: resultFromDb.producer.id,
      name: resultFromDb.name,
      description: resultFromDb.description,
      image: resultFromDb.image,
      pricePerUnit: resultFromDb.pricePerUnit,
      unit: resultFromDb.unit,
      unitsPer: resultFromDb.unitsPer,
      category: resultFromDb.category,
      subcategory: resultFromDb.subcategory,
      qtyAvailable: resultFromDb.qtyAvailable,
      qtyPending: resultFromDb.qtyPending,
      qtyAccepted: resultFromDb.qtyAccepted,
      qtyCompleted: resultFromDb.qtyCompleted,
      dateAdded: resultFromDb.dateAdded,
      isObsolete: resultFromDb.isObsolete,
      scheduleList: resultFromDb.scheduleList,
      producerId: resultFromDb.producerId
    };
    return formattedProduct;
  }

  makeQtyPending(productId, qty) {
    // console.log('productId: ', productId);
    // console.log('qty: ', qty);
    let newProduct;
    // call the API
    this.apiService.getProductById(productId)
      .subscribe(
        result => {
          // console.log('product from db ', result);
          newProduct = this.formatProduct(result[0]);
          // console.log('new Product: ', newProduct);
          newProduct.qtyAvailable -= qty;
          newProduct.qtyPending += qty;
          // console.log('qty: ', qty);
          this.apiService.putProduct(productId, newProduct)
      		.subscribe(
      			result => {
      				// console.log('successfully patched product: ', result);
      			}, error => console.log('could not patch product')
      		)
        }
      );
  };

  makeQtyAvailable(productId, qty) {
    // console.log('productId: ', productId);
    // console.log('qty: ', qty);
    let newProduct;
    // call the API
    this.apiService.getProductById(productId)
      .subscribe(
        result => {
          // console.log('product from db ', result);
          newProduct = this.formatProduct(result[0]);
          // console.log('new Product: ', newProduct);
          newProduct.qtyAvailable += qty;
          newProduct.qtyPending -= qty;
          // console.log('qty: ', qty);
          this.apiService.putProduct(productId, newProduct)
      		.subscribe(
      			result => {
      				console.log('successfully patched product: ', result);
      			}, error => console.log('could not patch product')
      		)
        }
      );
  };

  makeQtyAccepted(productId, qty) {
    // console.log('productId: ', productId);
    // console.log('qty: ', qty);
    let newProduct;
    this.apiService.getProductById(productId)
      .subscribe(
        result => {
          // console.log('product from db ', result);
          newProduct = this.formatProduct(result[0]);
          // console.log('new Product: ', newProduct);
          newProduct.qtyAccepted += qty;
          newProduct.qtyPending -= qty;
          // console.log('qty: ', qty);
          // console.log('newVals: ', newProduct); // not working
          this.apiService.putProduct(productId, newProduct)
      		.subscribe(
      			result => {
      				console.log('successfully patched product: ', result);
      			}, error => console.log('could not patch product')
      		)
        }
      );
  };

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

  findCartIndex(tempId) {
    // console.log('tempId passed in: ', tempId);
    let index;
    if (this.dataStore.carts.length === 1) {
      index = 0;
    } else {
      this.dataStore.carts.forEach(
        (order) => {
          if (order.tempId === tempId) {
            index = (this.dataStore.carts.indexOf(order));
          }
        });
    }
    // console.log('index returned: ', index);
    return index;
  };

  findProductIndexInDataStore(productId) {
    console.log('product id supplied: ', productId);
    // if product already in datastore, return index, else return -1
    if (this.dataStore.products === undefined) {
      // console.log('undefined');
      return -1;
    } else {
      console.log('products in datstore: ', this.dataStore.products);
      for (let i = 0; i < this.dataStore.products.length; i ++) {
        console.log('product id in datastore: ', this.dataStore.products[i].id)
        if (this.dataStore.products[i].id === productId) {
          
          return i;
        }
      }
      return -1;
    }
  };

  findProductIndexInCart(index, productId) {
    console.log('this.datastore: ', this.dataStore);
    console.log('index: ', index);
    console.log('product id: ', productId);
    if (this.dataStore.carts.length === 0) {
      return -1;
    } else {
      let length = this.dataStore.carts[index].orderDetails.productQuantities.length;
      for (let j = 0; j < length; j++) {
        if ((this.dataStore.carts[index].orderDetails.productQuantities[j].productId) === productId) {
          return j;
        };
      };
    }
    return -1;
  };
  
  // find the product in the array and add the given qty to the existing qty
  addMoreQty(productIndex, quantity, producerIndex, productValue) {
    console.log('values passed into addMoreqty: ', productIndex, quantity, producerIndex, productValue);
    console.log('addmoreqty called');
    // check if the new total quantity is greater than the dataStore.product's qtyAvailable
    let maxQtyOrderable = this.dataStore.products[productIndex].qtyAvailable;
    // console.log('maxQtyOrderable: ', maxQtyOrderable);
    // get product's index in the cart
    let productIndexInCart = this.findProductIndexInCart(producerIndex, this.dataStore.products[productIndex].id);
    let productIndexInDataStore = this.findProductIndexInDataStore(this.dataStore.products[productIndex].id);
    console.log('productIndex in datastore: ', productIndexInDataStore);
    console.log('productIndexin cart: ', productIndexInCart);
    let qtyWantingToOrder = this.dataStore.carts[producerIndex].orderDetails.productQuantities[productIndexInCart].orderQuantity + quantity;
    // console.log('qtyWantingToOrder:, ', qtyWantingToOrder);
    this.dataStore.carts[producerIndex].orderDetails.productQuantities[productIndex].orderQuantity += quantity;
    this.dataStore.carts[producerIndex].orderDetails.productQuantities[productIndex].orderValue += productValue;
    this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
    // increase the cartCount
    this.dataStore.cartCount += quantity;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    // console.log('datastore carts now: ', this.dataStore.carts);
  };

  addOne(productId, producerId) {
    // change the product's quantities
    // this.makeQtyPending(productId, 1);
    // increase the cartCount
    console.log('addOne called');
    this.dataStore.cartCount += 1;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    let producerIndex = this.findProducerIndex(producerId);
    let productIndex = this.findProductIndexInCart(producerIndex, productId);
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
    console.log('minusOne called');
    // change the product's quantities
    // this.makeQtyPending(productId, -1);
    // increase the cartCount
    this.dataStore.cartCount -= 1;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    let producerIndex = this.findProducerIndex(producerId);
    let productIndex = this.findProductIndexInCart(producerIndex, productId);
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

  findProducerInSchedList(id) { // return true if producerId is already in scheduleList array, false if not
    let result;
    this.dataStore.schedulesArray.forEach((scheduleObject) => {
      // console.log('schedule object producer id: ', scheduleObject.producerId);
      if (scheduleObject.producerId === id) {
        result = true;
      }
    });
    return result;
  };

  addToSchedulesArray(tempId, producerId) {
    // console.log('add to scheds array called');
    let communityList;
    // console.log('datastore in add to scheds array: ', this.dataStore);
    // if dataStore.scheduleList is empty
    if (this.dataStore.schedulesArray[0].producerId === null) {
      // console.log('producer id is null');
      this.getFutureSchedsSubscription = this.apiService.getFutureScheduleByProducerId(producerId)
        .subscribe(
          result => {
            // console.log('future sched for this producer: ', result);
            //build the communityList array
            communityList = this.buildCommunityList(result);
            this.dataStore.schedulesArray = [{ // build the object and put it in the dataStore
              tempId: tempId,
              producerId: producerId,
              communityList: communityList
            }];
          }
        )
    } else if (this.findProducerInSchedList(producerId)) { // producerId is not in the dataStore yet
      // console.log('producer id is not in list');
      this.getFutureSchedsSubscription = this.apiService.getFutureScheduleByProducerId(producerId)
        .subscribe(
          result => {
            // console.log('future sched for this producer: ', result);
            //build the communityList array
            communityList = this.buildCommunityList(result);
            let newObject = { // build the new object and push it into the array
              tempId: tempId,
              producerId: producerId,
              communityList: communityList
            };
            this.dataStore.schedulesArray.push(newObject);
            // console.log('datastore now: ', this.dataStore);
          }
        )
    } else if (!this.findProducerInSchedList(producerId)) { // producerId is not in the dataStore yet
      // console.log('producer id is not null');
      this.getFutureSchedsSubscription = this.apiService.getFutureScheduleByProducerId(producerId)
        .subscribe(
          result => {
            // console.log('future sched for this producer: ', result);
            //build the communityList array
            communityList = this.buildCommunityList(result);
            let newObject = { // build the new object and push it into the array
              tempId: tempId,
              producerId: producerId,
              communityList: communityList
            };
            this.dataStore.schedulesArray.push(newObject);
          }
        )
    }
  };

  buildCommunityList(scheduleList) {
    console.log('starting sched list: ', scheduleList)
    // first sort the scheduleList by date
    let newSchedList = scheduleList.sort((first, second) => {
      return new Date(first.startDateTime).getTime() - new Date (second.startDateTime).getTime()
    });
    console.log('newSchedList: ', newSchedList)
    let city;
    let communityList;
    // for each item in the scheduleList
    newSchedList.forEach((sched) => {
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
    communityList.sort(function(a, b) {
      var textA = a.city.toUpperCase();
      var textB = b.city.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
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

   // send order to abandoned orders table
  logAbandonedCart() {
	  // let cart;
	  // // loop through each cart
	  // for (let i = 0; i < this.dataStore.carts.length; i++) {
		// 	cart = this.dataStore.carts[i]
		// 	// return quantities to qtyAvailable
		// 	for (let i = 0; i < cart.orderDetails.productQuantities.length; i++) {
		// 		this.makeQtyAvailable(cart.orderDetails.productQuantities[i].productId, cart.orderDetails.productQuantities[i].orderQuantity);
		// 	};
		// 	// api method to log cart in abandoned cart table
		// 	this.apiService.postAbandonedOrder(cart)
		// 		.subscribe(
		// 			result => {
		// 				console.log('cart Abandoned: ', cart);
		// 			}, error => console.log('could not log order')
		// 		);
	  // };
	  // // empty the cart
	  // this.emptyAbandonedCart();
  };
  
    // change all product quantities from pending back to available
  emptyAbandonedCart() {
	  this.dataStore.carts = [];
	  this._carts.next(Object.assign({}, this.dataStore).carts);
  };

  ngOnDestroy() {
    if (this.getFutureSchedsSubscription) {
      this.getFutureSchedsSubscription.unsubscribe();
    };
  };
  
}