// // imported in AppModule

// // called in ...
// // Header Component
// // Cart Product Component
// // Carts Component
// // Checkout Component
// // Edit Order Modal Component
// // Add to Cart Component

// import { Injectable, OnInit } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// import { ApiService } from '../../api.service';
// import { AuthService } from '../../../auth/auth.service';
// import { UserService } from '../../../core/services/user/user.service';

// import { OrderModel } from '../../models/order.model';
// import { ScheduleModel } from '../../models/schedule.model';

// @Injectable()
// export class CartService {

//   // id maker for each cart in the cart service instance
//   // start it at negative one so that the tempId will be the index as well
//   private tempId: number = -1;

//   // data management strategy
//   // create the dataStore for the cart
//   // it will have to be an array of separate carts, one for each producer in the case that products are chosen from more than one producer, or for products not in the same delivery  
//   // create the BehaviorSubject to create a copy of the dataStore and build an observable out of it

//   private dataStore: {
// 	  carts: any[], // for some fucking reason, this can't be typed as an OrderModel or the compiler throws errors randomly
//     cartCount: number,
//     schedulesArray: [{
//       tempId: number,
//       producerId: number,
//       communityList: [{
//         city: string,
//         scheduleList: ScheduleModel[]
//       }]
//     }]
//   };
//   private _carts: BehaviorSubject<OrderModel[]>;
//   private _cartCount: BehaviorSubject<number>;
//   private _schedulesArray: BehaviorSubject<Object[]>;
//   private _cart: BehaviorSubject<OrderModel>;
//   private _scheduleList: BehaviorSubject<any[]>;
//   private _communityList: BehaviorSubject<any[]>;

//   // properties for holding values retreived from localStorage
//   chosenSchedule: ScheduleModel;
//   consumerComment: string;
//   cartId: any;
//   _chosenSchedule: BehaviorSubject<ScheduleModel>;
//   _consumerComment: BehaviorSubject<string>;
//   _cartId: BehaviorSubject<number>;
  
//   // during construction, create the empty dataStore and any BehaviourSubjects
//   constructor(private apiService: ApiService,
//               private authService: AuthService,
//               private userService: UserService) {
//     this.dataStore = { carts: [], cartCount: 0, schedulesArray: [{ tempId: null, producerId: null, communityList: [{ city: null, scheduleList: [] }] }] };
//     this._carts = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
//     this._cartCount = <BehaviorSubject<number>>new BehaviorSubject(null);
//     this._schedulesArray = <BehaviorSubject<Object[]>>new BehaviorSubject([]);
//     this._cart = <BehaviorSubject<OrderModel>>new BehaviorSubject({});
//     this._scheduleList = <BehaviorSubject<any[]>>new BehaviorSubject([]);
//     this._communityList = <BehaviorSubject<any[]>>new BehaviorSubject([]);
//     this._chosenSchedule = <BehaviorSubject<ScheduleModel>>new BehaviorSubject(null);
//     this._consumerComment = <BehaviorSubject<string>>new BehaviorSubject('');
//     this._cartId = <BehaviorSubject<any>>new BehaviorSubject(null);
//   }
  
  
// // ***********DATE LOADING AND OBSERVABLE CREATION**********
  
//   getCarts() {
// 	  return this._carts.asObservable();
//   }
  
//   loadCarts() {
//     this._carts.next(Object.assign({}, this.dataStore).carts);
//   }

//   getCartById() {
//     return this._cart.asObservable();
//   }

//   loadCartById(id) {
//     console.log('load cart by id called: ', id);
//     let cartToLoad: any;
//     this.dataStore.carts.forEach(
//       (cart) => {
//         console.log('cart now: ', cart);
//         if (cart.tempId === id) {
//           cartToLoad = cart;
//         }
//       }
//     )
//     // this._cart.next(Object.assign({}, this.dataStore).carts[id]);
//     this._cart.next(Object.assign(cartToLoad));
//     console.log('datastore: ', this.dataStore);
//   }

//   getCartIndex(tempId) {
//     let cartIndex;
//     console.log('getting cart Index');
//     for (let i = 0; i < this.dataStore.carts.length; i++) {
//       console.log('cart looping now: ', this.dataStore.carts[i]);
//       console.log('tempId: ', tempId);
//       console.log('cart temp id: ', this.dataStore.carts[i].tempId);
//       if (this.dataStore.carts[i].tempId === tempId) {
//         cartIndex = i;
//       }
//     }
//     return cartIndex;
//   }

//   getCartCount() {
//     return this._cartCount.asObservable();
//   }
  
//   loadCartCount() {
//     this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
//   }

//   getCommunityList() {
//     return this._communityList.asObservable();
//   };

//   // loadCommunityList(id) {
//   //   console.log('id from checkout comp: ', id);
//   //   console.log('loadComm List datastore currently: ', this.dataStore);
//   //   this._communityList.next(Object.assign({}, this.dataStore).schedulesArray[id].communityList);
//   // }

//   loadCommunityList(producerId) {
//     console.log('load communityList by id called: ', producerId);
//     let communityListToLoad: any;
//     this.dataStore.schedulesArray.forEach(
//       (schedule) => {
//         if (schedule.producerId === producerId) {
//           communityListToLoad = schedule.communityList;
//         }
//       }
//     );
//     // this._cart.next(Object.assign({}, this.dataStore).carts[id]);
//     this._communityList.next(Object.assign(communityListToLoad));
//     console.log('datastore: ', this.dataStore);
//   ;}


  
// // ***********PRODUCT METHODS**********

//   // on click from any 'add to cart' buttons, add the product and qty to the cart
//   addToCart(product, quantity) {

//     // calculate the total value of this addition
//   	let productValue = this.calculateProductOrderValue(product, quantity);
//     // create the productQuantities object
//     let productQuantities = {
//       productId: product.id,
//       orderQuantity: quantity,
//       orderValue: productValue
//     };
// 	  // get producerId from product,
//     let producerId = product.producer.id;
//     let producerIndex = this.findProducerIndex(producerId);
//     let productIndex = this.findProductIndex(producerIndex, product.id);
//     // make sure quantity is less than or equal to qtyAvailable
//     // get current qtyAvailable
//     // let currentQtyAvailable = this.getCurrentlyAvailable(product.id);
//     // if not, inform user and make quantity = qtyAvailable
//     // if (quantity > currentQtyAvailable) {
//     //   quantity = currentQtyAvailable;
//     //   // inform user
// 	  // // set a property here as an observable that the component can subscribe to, then it can trigger an alert
//     // };
//     // change the product's quantities
//     console.log('productId: ', product.id);
//     console.log('quantity: ', quantity);
// 	  this.makeQtyPending(product.id, quantity);
//     // if cart is empty OR if the producerId is not in the cart, add the info to it
//     if ((producerIndex === -1) || (producerIndex === undefined)) {
//       // add one to the tempIds variable
//       this.tempId += 1;
//       // producer isn't there, so build the order from scratch
//       let newOrder = {
//         id: null,
//         tempId: this.tempId,
//         chosenSchedule: null,
//         producerId: producerId,
//         producer: product.producer,
//         consumerId: null,
//         consumer: null,
//         productList: [
//           product
//         ],
//         orderDetails: {
//           productQuantities: [
//             productQuantities
//           ],
//           consumerComment: '',
//           deliveryAddress: '',
//           deliveryFee: null,
//           createdDate: '',
//           producerComment: '',
//           orderStatus: 'pending',
//           orderValue: productValue // set to product value only for the first product added to the cart
//         }
//       };
//       // push the new order into the cart
//       this.dataStore.carts.push(newOrder);
//     } else if (productIndex !== -1) { // producer is in the cart, product is also in the cart, just increase the qty
//       this.findAndAddMoreQty(product.id, quantity, producerIndex, productValue);
//       this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
//     } else { // if producerId is already in the cart, push the product into that array,
//       this.dataStore.carts[producerIndex].productList.push(product);
//       this.dataStore.carts[producerIndex].orderDetails.productQuantities.push(productQuantities);
//       this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
//     };
//     // add to the schedules array as necessary
//     this.addToSchedulesArray(this.tempId, producerId, product.scheduleList);
//     // calculate/recalc the totalValue of the cart
//     // increase the cartCount
//     this.dataStore.cartCount += quantity;
//     this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
//     console.log('dataStore: ', this.dataStore);
//     // if a timer currently exists, clear it, start a new timer
//     this.restartTimer();
//   };

//   // calculate the total value of the additional product ordered
//   calculateProductOrderValue (product, quantity) {
//     let value = product.pricePerUnit * product.unitsPer * quantity; 
//     return value;
//   };

//   calculateTotalOrderValue(cart) {
// 	  let totalValue = 0;
// 	  cart.orderDetails.productQuantities.forEach((object) => {
// 		  totalValue += object.orderValue;
//     });
// 	  return totalValue;
//   };

//   // remove a product from the cart
//   deleteProduct(productId, producerId) { // not working when hit more than once
// 	  // remove the product from the cart
// 	  // return it's quantity to qtyAvailable
// 	  // change the cartCount
// 	  // restart the cart timer
    
//     // if only one cart in datastore, set it equal to cart, otherwise loop through each until you find the productId
//     let cart;
//     let cartIndex;
//     let productIndex;
//     if (this.dataStore.carts.length === 1 ) {
//       cart = this.dataStore.carts[0];
//       for (let j = 0; j < cart.orderDetails.productQuantities.length; j++) {
//         if (cart.orderDetails.productQuantities[j].productId === productId) {
//           cartIndex = 0;
//           productIndex = j;
//         };
//       };
//     } else {
//       for (let i = 0; i < this.dataStore.carts.length; i++) {
//         for (let j = 0; j < this.dataStore.carts[i].orderDetails.productQuantities.length; j++) {
//           if (this.dataStore.carts[i].orderDetails.productQuantities[j].productId === productId) {
//             cart = this.dataStore.carts[i];
//             cartIndex = i;
//             productIndex = j;
//           };
//         };
//       };
//     };
//     console.log('cart: ', cart); // works
//     console.log('cartIndex: ', cartIndex); // undefined
//     console.log('productIndex: ', productIndex); // undefined
//     // get the quantity
//     console.log('qty: ', cart.orderDetails.productQuantities[productIndex].orderQuantity);
//     let quantity = cart.orderDetails.productQuantities[productIndex].orderQuantity;
//     // splice the product out of the arrays
//     this.dataStore.carts[cartIndex].orderDetails.productQuantities.splice(productIndex, 1);
//     this.dataStore.carts[cartIndex].productList.splice(productIndex, 1);
//     // update the order value
//     this.dataStore.carts[cartIndex].orderDetails.orderValue = this.calculateTotalOrderValue(cart);
//     // emit the new carts
//     this._carts.next(Object.assign({}, this.dataStore).carts);
//     // change the qtyAvailable
//     this.makeQtyAvailable(productId, quantity);
//     // decrease the cartCount
//     this.dataStore.cartCount -= quantity;
//     this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
//     // clear timer and start new timer
//     this.restartTimer();
//   };




// // ***********CART MODIFICATION METHODS**********

// 	// build the cart
// 	buildCart(cartId, chosenSchedule, consumerComment, deliveryAddress?) {
// 		// add the consumer to the cart
// 		this.addConsumer(cartId);
// 		// add the chosen schedule to the cart
// 		this.selectSchedule(cartId, chosenSchedule);
// 		// add the consumer comment to the cart
// 		this.addConsumerComment(cartId, consumerComment);
// 		// date stamp the cart
//     this.dateStampCart(cartId);
//     // add the delivery fee
//     this.addDeliveryFee(cartId, chosenSchedule.fee);
// 		if (chosenSchedule.type === "Door-to-door Delivery") {
// 		  // add the delivery address, if it exists
// 		  this.addDeliveryAddress(cartId, deliveryAddress);
// 		}
// 		// change status to pending
// 		this.makeCartPending(cartId);
// 		return this.dataStore.carts[cartId];
// 	};

//   // for each cart in the cart contents, select a schedule
//   selectSchedule(cartId, schedule) {
//     // in specified cart, push the schedule details
//     console.log('chosen sched given to select schedule method: ', schedule);
//     this.dataStore.carts[cartId].chosenSchedule = schedule;
//     console.log('cart in dataStore after sched added: ', this.dataStore.carts[cartId]);
//   };
  
//   addConsumer(cartId) {
//     // this.dataStore.carts[cartId].consumer = this.authService.userProfile;
//     // let idArray = this.authService.userProfile.sub.split('|');
//     // this.dataStore.carts[cartId].consumerId = idArray[1];
//     this.userService.getUser()
//       .subscribe(
//         result => {
//           this.dataStore.carts[cartId].consumer = result;
//           this.dataStore.carts[cartId].consumerId = result.id;
//         }
//       );
//   };

//   addConsumerComment(cartId, comment) {
//     this.dataStore.carts[cartId].orderDetails.consumerComment = comment || '';
//   };

//   addDeliveryAddress(cartId, address) {
//     this.dataStore.carts[cartId].orderDetails.deliveryAddress = address;
//   };

//   addDeliveryFee(cartId, fee) {
//     console.log('delivery fee value: ', fee);
//     if (!fee) {
//       this.dataStore.carts[cartId].orderDetails.deliveryFee = 0;
//     } else {
//       this.dataStore.carts[cartId].orderDetails.deliveryFee = fee;
//     }
//   };

//   makeCartPending(cartId) {
//     this.dataStore.carts[cartId].orderDetails.orderStatus = 'pending';
//   }

//   dateStampCart(cartId) {
//     let date = new Date();
//     this.dataStore.carts[cartId].orderDetails.createdDate = date;
//   }

//   getCartCountOfSingleCart(cartId) {
//     let count: number = 0;
//     // get the cart
//     let cart = this.dataStore.carts[cartId];
//     console.log('cart: ', cart);
//     // loop through the productQuantities, adding them to count
//     for (let i = 0; i < cart.orderDetails.productQuantities.length; i++) {
//       console.log('cart.orderDetails.productQuantities[i].orderQuantity; ', cart.orderDetails.productQuantities[i].orderQuantity);
//       count += cart.orderDetails.productQuantities[i].orderQuantity;
//     }
//     console.log('count: ', count);
//     return count;
//   }

//   clearCart(cartId) {
// 	  // splice the provided cart from the array
//     this.dataStore.carts.splice(cartId, 1);
// 		// refresh localstorage
//     this.removeCarts();
//     this.storeCarts();    
// 	  // refresh the observable
// 	  this._carts.next(Object.assign({}, this.dataStore).carts);
//   };
  
  
  
// // ***********ORDER CONFIRMATION**********

//   // confirm and send the order from consumer to producer
//   confirmAndSendOrder(cartId, chosenSchedule, consumerComment, deliveryAddress?) {
// 		// build the cart
// 		let newOrder = this.buildCart(cartId, chosenSchedule, consumerComment, deliveryAddress);
// 		// send the cart via the api
// 		console.log('finished cart: ', newOrder);
// 		this.apiService.postOrder(newOrder)
// 			.subscribe(
// 				result => {
//           console.log('successfully posted: ', result);
//           // remove the cart contents from the cart count
// 					this.dataStore.cartCount -= this.getCartCountOfSingleCart(cartId); // unnecessary??? throws error on single cart checkout, not sure about multi
// 					// remove the cart from the dataStore on success
// 					this.clearCart(cartId);
// 					console.log('new cartCount: ', this.dataStore.cartCount);
// 					this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
// 				}, error => console.log('could not add new order')
// 			);
//   };
  
//   storeCarts() {
//     console.log('storing carts: ', this.dataStore);
//     // store all carts in datastore
//     localStorage.setItem('dataStore', JSON.stringify(this.dataStore));
//   };

//   retrieveCarts() {
//     let localCarts = JSON.parse(localStorage.getItem('dataStore'));
//     if (localCarts) {
//       console.log('carts in local storage: ', localCarts);
//       // add it/them to the carts array in datastore
//       this.dataStore = localCarts;
//       this.loadCarts();
//       this.loadCartCount();
//     } else {
//       console.log('no carts in local storage');
//     }
//   };

//   removeCarts() {
//     localStorage.removeItem('dataStore');
//   }

  
  
// // ***********TIMER METHODS**********

//   // 20 minute timer, then mark as abandoned
//   cartTimer() {
//     // setTimeout(this.logAbandonedCart, 1200000);
//   };

//   restartTimer() {
//     // clear the old timer
// 	  // this.cartTimer.clearTimeout();
//     // restart as new
//     this.cartTimer();
//   };

  
  
  
// // ***********OTHER METHODS**********

//   formatProduct(resultFromDb) {
//     let formattedProduct = {
//       userId: resultFromDb.producer.id,
//       name: resultFromDb.name,
//       description: resultFromDb.description,
//       image: resultFromDb.image,
//       pricePerUnit: resultFromDb.pricePerUnit,
//       unit: resultFromDb.unit,
//       unitsPer: resultFromDb.unitsPer,
//       category: resultFromDb.category,
//       subcategory: resultFromDb.subcategory,
//       qtyAvailable: resultFromDb.qtyAvailable,
//       qtyPending: resultFromDb.qtyPending,
//       qtyAccepted: resultFromDb.qtyAccepted,
//       qtyCompleted: resultFromDb.qtyCompleted,
//       dateAdded: resultFromDb.dateAdded,
//       isObsolete: resultFromDb.isObsolete,
//       scheduleList: resultFromDb.scheduleList,
//       producerId: resultFromDb.producerId
//     };
//     return formattedProduct;
//   }

//   makeQtyPending(productId, qty) {
//     console.log('productId: ', productId);
//     console.log('qty: ', qty);
//     let newProduct;
//     // call the API
//     this.apiService.getProductById(productId)
//       .subscribe(
//         result => {
//           console.log('product from db ', result);
//           newProduct = this.formatProduct(result[0]);
//           console.log('new Product: ', newProduct);
//           newProduct.qtyAvailable -= qty;
//           newProduct.qtyPending += qty;
//           console.log('qty: ', qty);
//           this.apiService.putProduct(productId, newProduct)
//       		.subscribe(
//       			result => {
//       				console.log('successfully patched product: ', result);
//       			}, error => console.log('could not patch product')
//       		)
//         }
//       );
//   };

//   makeQtyAvailable(productId, qty) {
//     console.log('productId: ', productId);
//     console.log('qty: ', qty);
//     let newProduct;
//     // call the API
//     this.apiService.getProductById(productId)
//       .subscribe(
//         result => {
//           console.log('product from db ', result);
//           newProduct = this.formatProduct(result[0]);
//           console.log('new Product: ', newProduct);
//           newProduct.qtyAvailable += qty;
//           newProduct.qtyPending -= qty;
//           console.log('qty: ', qty);
//           this.apiService.putProduct(productId, newProduct)
//       		.subscribe(
//       			result => {
//       				console.log('successfully patched product: ', result);
//       			}, error => console.log('could not patch product')
//       		)
//         }
//       );
//   };

//   makeQtyAccepted(productId, qty) {
//     console.log('productId: ', productId);
//     console.log('qty: ', qty);
//     let newProduct;
//     this.apiService.getProductById(productId)
//       .subscribe(
//         result => {
//           console.log('product from db ', result);
//           newProduct = this.formatProduct(result[0]);
//           console.log('new Product: ', newProduct);
//           newProduct.qtyAccepted += qty;
//           newProduct.qtyPending -= qty;
//           console.log('qty: ', qty);
//           console.log('newVals: ', newProduct); // not working
//           this.apiService.putProduct(productId, newProduct)
//       		.subscribe(
//       			result => {
//       				console.log('successfully patched product: ', result);
//       			}, error => console.log('could not patch product')
//       		)
//         }
//       );
//   };

//   // look to see if producer is in cart, return the index number or -1
//   findProducerIndex(id) {
//     let index;
//     if (this.dataStore.carts.length === 0) {
//       index = -1;
//     } else {
//       this.dataStore.carts.forEach(
//         (order) => {
//           if (order.producer.id === id) {
//             index = (this.dataStore.carts.indexOf(order));
//           }
//         });
//     }
//     return index;
//   };

//   findProductIndex(producerIndex, productId) {
//     if ((this.dataStore.carts[producerIndex] === undefined)) {
//       return -1;
//     } else {
//       let j;
//       let length = this.dataStore.carts[producerIndex].productList.length;
//       for (j = 0; j < length; j++) {
//         if ((this.dataStore.carts[producerIndex].productList[j].id) === productId) {
//           return j;
//         };
//       };
//       return -1;
//     };
//   };
  
//   // find the product in the array and add the given qty to the existing qty
//   findAndAddMoreQty(productId, quantity, producerIndex, productValue) {
//     // access the productQuantities array
//     let array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
//     // loop through the array and return the index of the appropriate product
//     let productIndex;
//     for (let i = 0; i < array.length; i++) {
//       if (array[i].productId === productId) {
//         productIndex = i;
//       }
//     }
//     this.dataStore.carts[producerIndex].orderDetails.productQuantities[productIndex].orderQuantity += quantity;
//     this.dataStore.carts[producerIndex].orderDetails.productQuantities[productIndex].orderValue += productValue;
//   };

//   addOne(productId, producerId) {
//     // change the product's quantities
//     this.makeQtyPending(productId, 1);
//     // increase the cartCount
//     this.dataStore.cartCount += 1;
//     this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
//     let producerIndex = this.findProducerIndex(producerId);
//     let productIndex = this.findProductIndex(producerIndex, productId);
//     let array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
//     let productQuantitiesIndex;
//     // find the target product in the productQuantities array
//     for (let i = 0; i < array.length; i++) {
//       if (array[i].productId === productId) {
//         productQuantitiesIndex = i;
//       };
//     };
//     // change the quantity of that product
//     this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity += 1;
//     // calculate the new order value of that product
//     this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderValue = this.calculateProductOrderValue(this.dataStore.carts[producerIndex].productList[productIndex], this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity);
//     this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
//   }

//   minusOne(productId, producerId) {
//     // change the product's quantities
//     this.makeQtyPending(productId, -1);
//     // increase the cartCount
//     this.dataStore.cartCount -= 1;
//     this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
//     let producerIndex = this.findProducerIndex(producerId);
//     let productIndex = this.findProductIndex(producerIndex, productId);
//     let array = this.dataStore.carts[producerIndex].orderDetails.productQuantities;
//     let productQuantitiesIndex;
//     // find the target product in the productQuantities array
//     for (let i = 0; i < array.length; i++) {
//       if (array[i].productId === productId) {
//         productQuantitiesIndex = i;
//       };
//     };
//     // change the quantity of that product
//     this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity -= 1;
//     // calculate the new order value of that product
//     this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderValue = this.calculateProductOrderValue(this.dataStore.carts[producerIndex].productList[productIndex], this.dataStore.carts[producerIndex].orderDetails.productQuantities[productQuantitiesIndex].orderQuantity);
//     this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
//   }

//   findProducerInSchedList(id) { // return true if producerId is already in scheduleList array, false if not
//     let result;
//     this.dataStore.schedulesArray.forEach((scheduleObject) => {
//       if (scheduleObject.producerId === id) {
//         result = true;
//       }
//     });
//     return result;
//   };

//   addToSchedulesArray(tempId, producerId, scheduleList) {
//     let communityList;
//     // if dataStore.scheduleList is empty
//     if (this.dataStore.schedulesArray[0].producerId === null) {
//       //build the communityList array
//       communityList = this.buildCommunityList(scheduleList);
//       this.dataStore.schedulesArray = [{ // build the object and put it in the dataStore
//         tempId: tempId,
//         producerId: producerId,
//         communityList: communityList
//       }];
//     } else if (!this.findProducerInSchedList(producerId)) { // producerId is not in the dataStore yet
//       //build the communityList array
//       communityList = this.buildCommunityList(scheduleList);
//       let newObject = { // build the new object and push it into the array
//         tempId: tempId,
//         producerId: producerId,
//         communityList: communityList
//       };
//       this.dataStore.schedulesArray.push(newObject);
//     }
//   };

//   buildCommunityList(scheduleList) {
//     let city;
//     let communityList;
//     // for each item in the scheduleList
//     scheduleList.forEach((sched) => {
//       // get the city
//       city = sched.city;
//       if (!communityList) { // if the communityList is empty, add a new one
//         communityList = [{
//           city: city,
//           scheduleList: [sched]
//         }];
//       } else {
//         // get the index of the city
//         let index = this.findCityInCommunityList(city, communityList);
//         if (index === -1) { // if city isn't in there, add it
//           communityList.push({city: city, scheduleList: [sched]});
//         } else {
//           communityList[index].scheduleList.push(sched);
//         }
//       }
//     })
//     return communityList;
//   };

//   findCityInCommunityList(city, communityList) {
//     for (let i = 0; i < communityList.length; i++) {
//       if (communityList[i].city === city) {
//         return i;
//       }
//     };
//     return -1;
//   };

//    // send order to abandoned orders table
//   logAbandonedCart() {
// 	  // let cart;
// 	  // // loop through each cart
// 	  // for (let i = 0; i < this.dataStore.carts.length; i++) {
// 		// 	cart = this.dataStore.carts[i]
// 		// 	// return quantities to qtyAvailable
// 		// 	for (let i = 0; i < cart.orderDetails.productQuantities.length; i++) {
// 		// 		this.makeQtyAvailable(cart.orderDetails.productQuantities[i].productId, cart.orderDetails.productQuantities[i].orderQuantity);
// 		// 	};
// 		// 	// api method to log cart in abandoned cart table
// 		// 	this.apiService.postAbandonedOrder(cart)
// 		// 		.subscribe(
// 		// 			result => {
// 		// 				console.log('cart Abandoned: ', cart);
// 		// 			}, error => console.log('could not log order')
// 		// 		);
// 	  // };
// 	  // // empty the cart
// 	  // this.emptyAbandonedCart();
//   };
  
//     // change all product quantities from pending back to available
//   emptyAbandonedCart() {
// 	  this.dataStore.carts = [];
// 	  this._carts.next(Object.assign({}, this.dataStore).carts);
//   };
  
// }

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
    }]
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

  getFutureSchedsSubscription: Subscription;
  
  // during construction, create the empty dataStore and any BehaviourSubjects
  constructor(private apiService: ApiService,
              private authService: AuthService,
              private userService: UserService) {
    this.dataStore = { carts: [], cartCount: 0, schedulesArray: [{ tempId: null, producerId: null, communityList: [{ city: null, scheduleList: [] }] }] };
    this._carts = <BehaviorSubject<OrderModel[]>>new BehaviorSubject([]);
    this._cartCount = <BehaviorSubject<number>>new BehaviorSubject(null);
    this._schedulesArray = <BehaviorSubject<Object[]>>new BehaviorSubject([]);
    this._cart = <BehaviorSubject<OrderModel>>new BehaviorSubject({});
    this._scheduleList = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this._communityList = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    this._chosenSchedule = <BehaviorSubject<ScheduleModel>>new BehaviorSubject(null);
    this._consumerComment = <BehaviorSubject<string>>new BehaviorSubject('');
    this._cartId = <BehaviorSubject<any>>new BehaviorSubject(null);
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
    console.log('load cart by id called: ', id);
    let cartToLoad: any;
    this.dataStore.carts.forEach(
      (cart) => {
        console.log('cart now: ', cart);
        if (cart.tempId === id) {
          cartToLoad = cart;
        }
      }
    )
    // this._cart.next(Object.assign({}, this.dataStore).carts[id]);
    this._cart.next(Object.assign(cartToLoad));
    console.log('datastore: ', this.dataStore);
  }

  getCartIndex(tempId) {
    let cartIndex;
    console.log('getting cart Index');
    for (let i = 0; i < this.dataStore.carts.length; i++) {
      console.log('cart looping now: ', this.dataStore.carts[i]);
      console.log('tempId: ', tempId);
      console.log('cart temp id: ', this.dataStore.carts[i].tempId);
      if (this.dataStore.carts[i].tempId === tempId) {
        cartIndex = i;
      }
    }
    return cartIndex;
  }

  getCartCount() {
    return this._cartCount.asObservable();
  }
  
  loadCartCount() {
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
  }

  getCommunityList() {
    return this._communityList.asObservable();
  };

  // loadCommunityList(id) {
  //   console.log('id from checkout comp: ', id);
  //   console.log('loadComm List datastore currently: ', this.dataStore);
  //   this._communityList.next(Object.assign({}, this.dataStore).schedulesArray[id].communityList);
  // }

  // called from checkout component to load the list of communities in the dropdown
  loadCommunityList(producerId) {
    console.log('load communityList by id called: ', producerId);
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
    console.log('datastore: ', this.dataStore);
  ;}


  
// ***********PRODUCT METHODS**********

  // on click from any 'add to cart' buttons, add the product and qty to the cart
  addToCart(product, quantity) {

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
    // let currentQtyAvailable = this.getCurrentlyAvailable(product.id);
    // if not, inform user and make quantity = qtyAvailable
    // if (quantity > currentQtyAvailable) {
    //   quantity = currentQtyAvailable;
    //   // inform user
	  // // set a property here as an observable that the component can subscribe to, then it can trigger an alert
    // };
    // change the product's quantities
    console.log('productId: ', product.id);
    console.log('quantity: ', quantity);
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
    } else if (productIndex !== -1) { // producer is in the cart, product is also in the cart, just increase the qty
      this.findAndAddMoreQty(product.id, quantity, producerIndex, productValue);
      this.dataStore.carts[producerIndex].orderDetails.orderValue = this.calculateTotalOrderValue(this.dataStore.carts[producerIndex]);
    } else { // if producerId is already in the cart, push the product into that array,
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
  deleteProduct(productId, producerId) { // not working when hit more than once
	  // remove the product from the cart
	  // return it's quantity to qtyAvailable
	  // change the cartCount
	  // restart the cart timer
    
    // if only one cart in datastore, set it equal to cart, otherwise loop through each until you find the productId
    let cart;
    let cartIndex;
    let productIndex;
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
    console.log('cart: ', cart); // works
    console.log('cartIndex: ', cartIndex); // undefined
    console.log('productIndex: ', productIndex); // undefined
    // get the quantity
    console.log('qty: ', cart.orderDetails.productQuantities[productIndex].orderQuantity);
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
    // emit the new carts
    this._carts.next(Object.assign({}, this.dataStore).carts);
    // change the qtyAvailable
    this.makeQtyAvailable(productId, quantity);
    // decrease the cartCount
    this.dataStore.cartCount -= quantity;
    this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
    // clear timer and start new timer
    this.restartTimer();
  };




// ***********CART MODIFICATION METHODS**********

	// build the cart
	buildCart(cartId, chosenSchedule, consumerComment, deliveryAddress?) {
		// add the consumer to the cart
		this.addConsumer(cartId);
		// add the chosen schedule to the cart
		this.selectSchedule(cartId, chosenSchedule);
		// add the consumer comment to the cart
		this.addConsumerComment(cartId, consumerComment);
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
		return this.dataStore.carts[cartId];
	};

  // for each cart in the cart contents, select a schedule
  selectSchedule(cartId, schedule) {
    // in specified cart, push the schedule details
    console.log('chosen sched given to select schedule method: ', schedule);
    this.dataStore.carts[cartId].chosenSchedule = schedule;
    console.log('cart in dataStore after sched added: ', this.dataStore.carts[cartId]);
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

  addDeliveryAddress(cartId, address) {
    this.dataStore.carts[cartId].orderDetails.deliveryAddress = address;
  };

  addDeliveryFee(cartId, fee) {
    console.log('delivery fee value: ', fee);
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
    console.log('cart: ', cart);
    // loop through the productQuantities, adding them to count
    for (let i = 0; i < cart.orderDetails.productQuantities.length; i++) {
      console.log('cart.orderDetails.productQuantities[i].orderQuantity; ', cart.orderDetails.productQuantities[i].orderQuantity);
      count += cart.orderDetails.productQuantities[i].orderQuantity;
    }
    console.log('count: ', count);
    return count;
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
  confirmAndSendOrder(cartId, chosenSchedule, consumerComment, deliveryAddress?) {
		// build the cart
		let newOrder = this.buildCart(cartId, chosenSchedule, consumerComment, deliveryAddress);
		// send the cart via the api
		console.log('finished cart: ', newOrder);
		this.apiService.postOrder(newOrder)
			.subscribe(
				result => {
          console.log('successfully posted: ', result);
          // remove the cart contents from the cart count
					this.dataStore.cartCount -= this.getCartCountOfSingleCart(cartId); // unnecessary??? throws error on single cart checkout, not sure about multi
					// remove the cart from the dataStore on success
					this.clearCart(cartId);
					console.log('new cartCount: ', this.dataStore.cartCount);
					this._cartCount.next(Object.assign({}, this.dataStore).cartCount);
				}, error => console.log('could not add new order')
			);
  };
  
  storeCarts() {
    console.log('storing carts: ', this.dataStore);
    // store all carts in datastore
    localStorage.setItem('dataStore', JSON.stringify(this.dataStore));
  };

  retrieveCarts() {
    let localCarts = JSON.parse(localStorage.getItem('dataStore'));
    if (localCarts) {
      console.log('carts in local storage: ', localCarts);
      // add it/them to the carts array in datastore
      this.dataStore = localCarts;
      this.loadCarts();
      this.loadCartCount();
    } else {
      console.log('no carts in local storage');
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
    console.log('productId: ', productId);
    console.log('qty: ', qty);
    let newProduct;
    // call the API
    this.apiService.getProductById(productId)
      .subscribe(
        result => {
          console.log('product from db ', result);
          newProduct = this.formatProduct(result[0]);
          console.log('new Product: ', newProduct);
          newProduct.qtyAvailable -= qty;
          newProduct.qtyPending += qty;
          console.log('qty: ', qty);
          this.apiService.putProduct(productId, newProduct)
      		.subscribe(
      			result => {
      				console.log('successfully patched product: ', result);
      			}, error => console.log('could not patch product')
      		)
        }
      );
  };

  makeQtyAvailable(productId, qty) {
    console.log('productId: ', productId);
    console.log('qty: ', qty);
    let newProduct;
    // call the API
    this.apiService.getProductById(productId)
      .subscribe(
        result => {
          console.log('product from db ', result);
          newProduct = this.formatProduct(result[0]);
          console.log('new Product: ', newProduct);
          newProduct.qtyAvailable += qty;
          newProduct.qtyPending -= qty;
          console.log('qty: ', qty);
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
    console.log('productId: ', productId);
    console.log('qty: ', qty);
    let newProduct;
    this.apiService.getProductById(productId)
      .subscribe(
        result => {
          console.log('product from db ', result);
          newProduct = this.formatProduct(result[0]);
          console.log('new Product: ', newProduct);
          newProduct.qtyAccepted += qty;
          newProduct.qtyPending -= qty;
          console.log('qty: ', qty);
          console.log('newVals: ', newProduct); // not working
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

  findProducerInSchedList(id) { // return true if producerId is already in scheduleList array, false if not
    let result;
    this.dataStore.schedulesArray.forEach((scheduleObject) => {
      if (scheduleObject.producerId === id) {
        result = true;
      }
    });
    return result;
  };

  addToSchedulesArray(tempId, producerId) {
    let communityList;
    // if dataStore.scheduleList is empty
    if (this.dataStore.schedulesArray[0].producerId === null) {
      this.getFutureSchedsSubscription = this.apiService.getFutureScheduleByProducerId(producerId)
        .subscribe(
          result => {
            //build the communityList array
            communityList = this.buildCommunityList(result);
            this.dataStore.schedulesArray = [{ // build the object and put it in the dataStore
              tempId: tempId,
              producerId: producerId,
              communityList: communityList
            }];
          }
        )
    } else if (!this.findProducerInSchedList(producerId)) { // producerId is not in the dataStore yet
      this.getFutureSchedsSubscription = this.apiService.getFutureScheduleByProducerId(producerId)
        .subscribe(
          result => {
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