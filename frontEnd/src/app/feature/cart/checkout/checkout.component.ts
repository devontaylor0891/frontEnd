// // // import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
// // // import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// // // import { Location } from '@angular/common';
// // // import { NgForm } from '@angular/forms';
// // // import { Subscription } from 'rxjs';

// // // import { CartService } from '../../../core/services/cart-service/cart.service';
// // // import { AuthService } from '../../../auth/auth.service';

// // // import { OrderModel } from '../../../core/models/order.model';
// // // import { ScheduleModel } from '../../../core/models/schedule.model';


// // // @Component({
// // //   selector: 'app-checkout',
// // //   templateUrl: './checkout.component.html',
// // //   styleUrls: ['./checkout.component.scss']
// // // })
// // // export class CheckoutComponent implements OnInit, OnChanges, OnDestroy {

// // //   order: OrderModel;
// // //   id: any;
// // //   communityList: any[];
// // //   showSchedules: boolean = false;
// // //   selectedSchedulesList: ScheduleModel[];
// // //   radioSelected: any;
// // //   tempOrderValue: number;
// // //   agreement: boolean = false;
// // //   consumerComment: string;
// // //   deliveryAddress: string;
// // //   isLoggedIn: boolean = false;
// // //   dataStoreExists: boolean;
// // //   cartIndex: number;
// // //   getCartByIdSub: any;
// // //   communityListSub: any;

// // //   orderStatusSub: Subscription;
// // //   orderStatus: boolean;
// // //   orderQuantitiesToChangeSub: Subscription;
// // //   orderQuantitiesToChange: any[];
// // //   orderSuccessSub: Subscription;
// // //   orderSuccess: boolean = false;

// // //   constructor(private cartService: CartService,
// // //               private router: Router,
// // //               private route: ActivatedRoute,
// // //               private location: Location,
// // //               private authService: AuthService) { }

// // //   ngOnChanges() {}

// // //   goBack() {
// // //     this.location.back();
// // //   }

// // //   onSelect($event) {
// // //     let selectedCommunity = $event.target.value;
// // //     this.selectedSchedulesList = this.returnSchedules(selectedCommunity);
// // //     this.showSchedules = true;
// // //   }

// // //   onSelectSchedule($event) {
// // //     let index = $event;
// // //     this.order.chosenSchedule = this.selectedSchedulesList[index];
// // //     if ((this.order.chosenSchedule.hasFee) && (this.order.orderDetails.orderValue < this.order.chosenSchedule.feeWaiver)) {
// // //       this.tempOrderValue = this.order.orderDetails.orderValue + this.order.chosenSchedule.fee;
// // //     } else {
// // //       this.tempOrderValue = this.order.orderDetails.orderValue;
// // //     }
// // //   }

// // //   returnSchedules(community) {
// // //     // get the index of the community
// // //     let index;
// // //     for (let i = 0; i < this.communityList.length; i++) {
// // //       if (this.communityList[i].city === community) {
// // //         index = i;
// // //       }
// // //     }
// // //     return this.communityList[index].scheduleList;
// // //   }

// // //   onSubmit(form: NgForm) {
// // //     this.cartService.confirmAndSendOrder(this.cartIndex, this.order.chosenSchedule, this.consumerComment, this.deliveryAddress);
// // //   }

// // //   storeCart() {
// // //     this.cartService.storeCarts();
// // //   };

// // //   onLogin(e) {
// // //     console.log('cart stored from checkout');
// // //     this.storeCart();
// // //     this.authService.login(this.id);
// // //     e.preventDefault();
// // //   }

// // //   ngOnInit() {

// // //     this.id = +this.route.snapshot.paramMap.get('tempId');
// // //     console.log('tempId: ', this.id);

// // //     this.cartIndex = this.cartService.getCartIndex(this.id);

// // //     // load the matching cart
// // //     this.cartService.loadCartById(this.id);

// // //     // subscribe to the cart with the matching id
// // //     this.getCartByIdSub = this.cartService.getCartById()
// // //       .subscribe(
// // //         result => {
// // //           if (result === undefined) {
// // //             console.log('no datastore');
// // //             this.dataStoreExists = false;
// // //           } else {
// // //             console.log('datastore exists');
// // //             this.dataStoreExists = true;
// // //             this.order = result;
// // //             console.log('result by id: ', result);
// // //             // set the temporary order value from the order details
// // //             this.tempOrderValue = this.order.orderDetails.orderValue;
// // //           }
// // //         }
// // //       );

// // //     // get the logged in status
// // //     this.authService.getLoggedIn()
// // //       .subscribe(
// // //         result => {
// // //           this.isLoggedIn = result;
// // //           // if they are logged in, load the carts from local storage into datastore
// // //           if (this.isLoggedIn && !this.dataStoreExists) {
// // //             console.log('retrieve carts called');
// // //             this.cartService.retrieveCarts();
// // //           } else {

// // //           };
// // //         }
// // //       );

// // //     this.communityListSub = this.cartService.getCommunityList()
// // //       .subscribe(
// // //         result => {
// // //           this.communityList = result;
// // //         }
// // //       );

// // //     this.cartService.loadCommunityList(this.order.producer.id);

// // //     this.orderStatusSub = this.cartService.getOrderQuantitiesStatus()
// // //       .subscribe(
// // //         result => {
// // //           console.log('orderstatussub: ', result);
// // //           this.orderStatus = result;
// // //         }
// // //       );

// // //     this.orderQuantitiesToChangeSub = this.cartService.getOrderQuantitiesToChange()
// // //       .subscribe(
// // //         result => {
// // //           console.log('orderqtystochange: ', result);
// // //           this.orderQuantitiesToChange = result;
// // //         }
// // //       );

// // //     this.orderSuccessSub = this.cartService.getOrderSentSuccessfully()
// // //       .subscribe(
// // //         result => {
// // //           console.log('orderSuccess: ', result);
// // //           this.orderSuccess = result;
// // //           if (this.orderSuccess) {
// // //             this.router.navigateByUrl('confirmation');
// // //           };
// // //         }
// // //       );

// // //   };

// // //   ngOnDestroy() {

// // //     if (this.communityListSub) {
// // //       this.communityListSub.unsubscribe();
// // //     }

// // //     if (this.getCartByIdSub) {
// // //       this.getCartByIdSub.unsubscribe();
// // //     }

// // //     if (this.orderStatusSub) {
// // //       this.orderStatusSub.unsubscribe();
// // //     }

// // //     if (this.orderQuantitiesToChangeSub) {
// // //       this.orderQuantitiesToChangeSub.unsubscribe();
// // //     }

// // //     if (this.orderSuccessSub) {
// // //       this.orderSuccessSub.unsubscribe();
// // //     }

// // //   }

// // // }

// // import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
// // import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// // import { Location } from '@angular/common';
// // import { NgForm } from '@angular/forms';
// // import { Subscription } from 'rxjs';

// // import { CartService } from '../../../core/services/cart-service/cart.service';
// // import { AuthService } from '../../../auth/auth.service';

// // import { OrderModel } from '../../../core/models/order.model';
// // import { ScheduleModel } from '../../../core/models/schedule.model';


// // @Component({
// //   selector: 'app-checkout',
// //   templateUrl: './checkout.component.html',
// //   styleUrls: ['./checkout.component.scss']
// // })
// // export class CheckoutComponent implements OnInit, OnChanges, OnDestroy {

// //   order: OrderModel;
// //   id: any;
// //   communityList: any[];
// //   showSchedules: boolean = false;
// //   selectedSchedulesList: ScheduleModel[];
// //   radioSelected: any;
// //   tempOrderValue: number;
// //   agreement: boolean = false;
// //   consumerComment: string;
// //   deliveryAddress: string;
// //   isLoggedIn: boolean = false;
// //   dataStoreExists: boolean;
// //   cartIndex: number;
// //   getCartByIdSub: any;
// //   communityListSub: any;

// //   orderStatusSub: Subscription;
// //   orderStatus: boolean;
// //   orderQuantitiesToChangeSub: Subscription;
// //   orderQuantitiesToChange: any[];
// //   orderSuccessSub: Subscription;
// //   orderSuccess: boolean = false;
// //   orderFailureSub: Subscription;
// //   orderFailed: boolean = false;

// //   constructor(private cartService: CartService,
// //               private router: Router,
// //               private route: ActivatedRoute,
// //               private location: Location,
// //               private authService: AuthService) { }

// //   ngOnChanges() {}

// //   goBack() {
// //     this.location.back();
// //   }

// //   onSelect($event) {
// //     let selectedCommunity = $event.target.value;
// //     this.selectedSchedulesList = this.returnSchedules(selectedCommunity);
// //     this.showSchedules = true;
// //   }

// //   onSelectSchedule($event) {
// //     let index = $event;
// //     this.order.chosenSchedule = this.selectedSchedulesList[index];
// //     if ((this.order.chosenSchedule.hasFee) && (this.order.orderDetails.orderValue < this.order.chosenSchedule.feeWaiver)) {
// //       this.tempOrderValue = this.order.orderDetails.orderValue + this.order.chosenSchedule.fee;
// //     } else {
// //       this.tempOrderValue = this.order.orderDetails.orderValue;
// //     }
// //   }

// //   returnSchedules(community) {
// //     // get the index of the community
// //     let index;
// //     for (let i = 0; i < this.communityList.length; i++) {
// //       if (this.communityList[i].city === community) {
// //         index = i;
// //       }
// //     }
// //     return this.communityList[index].scheduleList;
// //   }

// //   onSubmit(form: NgForm) {
// //     this.cartService.confirmAndSendOrder(this.cartIndex, this.order.chosenSchedule, this.consumerComment, this.deliveryAddress);
// //   }

// //   storeCart() {
// //     this.cartService.storeCarts();
// //   };

// //   onLogin(e) {
// //     console.log('cart stored from checkout');
// //     this.storeCart();
// //     this.authService.login(this.id);
// //     e.preventDefault();
// //   }

// //   ngOnInit() {

// //     this.id = +this.route.snapshot.paramMap.get('tempId');
// //     console.log('tempId: ', this.id);

// //     this.cartIndex = this.cartService.getCartIndex(this.id);

// //     // load the matching cart
// //     this.cartService.loadCartById(this.id);

// //     // subscribe to the cart with the matching id
// //     this.getCartByIdSub = this.cartService.getCartById()
// //       .subscribe(
// //         result => {
// //           if (result === undefined) {
// //             console.log('no datastore');
// //             this.dataStoreExists = false;
// //           } else {
// //             console.log('datastore exists');
// //             this.dataStoreExists = true;
// //             this.order = result;
// //             console.log('result by id: ', result);
// //             // set the temporary order value from the order details
// //             this.tempOrderValue = this.order.orderDetails.orderValue;
// //           }
// //         }
// //       );

// //     // get the logged in status
// //     this.authService.getLoggedIn()
// //       .subscribe(
// //         result => {
// //           this.isLoggedIn = result;
// //           // if they are logged in, load the carts from local storage into datastore
// //           if (this.isLoggedIn && !this.dataStoreExists) {
// //             console.log('retrieve carts called');
// //             this.cartService.retrieveCarts();
// //           } else {

// //           };
// //         }
// //       );

// //     this.communityListSub = this.cartService.getCommunityList()
// //       .subscribe(
// //         result => {
// //           this.communityList = result;
// //         }
// //       );

// //     this.cartService.loadCommunityList(this.order.producer.id);

// //     this.orderStatusSub = this.cartService.getOrderQuantitiesStatus()
// //       .subscribe(
// //         result => {
// //           console.log('orderstatussub: ', result);
// //           this.orderStatus = result;
// //         }
// //       );

// //     this.orderQuantitiesToChangeSub = this.cartService.getOrderQuantitiesToChange()
// //       .subscribe(
// //         result => {
// //           console.log('orderqtystochange: ', result);
// //           this.orderQuantitiesToChange = result;
// //           // make the changes automatically to the cart
// //           // throw an alert notifying the user that they will have to reconfirm
// //           if (this.orderQuantitiesToChange.length > 0) {
// //             let retVal = confirm('orderqtystochange?' + result.toString());
// //             if (retVal === true) {
// //               console.log('User wants to continue!');
// //               return true;
// //             } else {
// //               console.log('User does not want to continue!');
// //               return false;
// //             }
// //           }
// //         }
// //       );

// //     this.orderSuccessSub = this.cartService.getOrderSentSuccessfully()
// //       .subscribe(
// //         result => {
// //           console.log('orderSuccess: ', result);
// //           this.orderSuccess = result;
// //           if (this.orderSuccess) {
// //             this.router.navigateByUrl('confirmation');
// //           };
// //         }
// //       );

// //     this.orderFailureSub = this.cartService.getOrderSentFailed()
// //       .subscribe(
// //         result => {
// //           console.log('order send failed result: ', result);
// //           this.orderFailed = result;
// //           if (this.orderFailed) {
// //             console.log('order send failed, do something');
// //           };
// //         }
// //       )

// //   };

// //   ngOnDestroy() {

// //     if (this.communityListSub) {
// //       this.communityListSub.unsubscribe();
// //     }

// //     if (this.getCartByIdSub) {
// //       this.getCartByIdSub.unsubscribe();
// //     }

// //     if (this.orderStatusSub) {
// //       this.orderStatusSub.unsubscribe();
// //     }

// //     if (this.orderQuantitiesToChangeSub) {
// //       this.orderQuantitiesToChangeSub.unsubscribe();
// //     }

// //     if (this.orderSuccessSub) {
// //       this.orderSuccessSub.unsubscribe();
// //     }

// //     if (this.orderFailureSub) {
// //       this.orderFailureSub.unsubscribe();
// //     }

// //   }

// // }


// import { Component, OnInit, OnChanges, OnDestroy, ViewChild } from '@angular/core';
// import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Location } from '@angular/common';
// import { NgForm } from '@angular/forms';
// import { Subscription } from 'rxjs';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { CartService } from '../../../core/services/cart-service/cart.service';
// import { AuthService } from '../../../auth/auth.service';

// import { OrderModel } from '../../../core/models/order.model';
// import { ScheduleModel } from '../../../core/models/schedule.model';


// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.scss']
// })
// export class CheckoutComponent implements OnInit, OnChanges, OnDestroy {

//   order: OrderModel;
//   id: any;
//   communityList: any[];
//   showSchedules: boolean = false;
//   selectedSchedulesList: ScheduleModel[];
//   radioSelected: any;
//   tempOrderValue: number;
//   agreement: boolean = false;
//   consumerComment: string;
//   deliveryAddress: string;
//   isLoggedIn: boolean = false;
//   dataStoreExists: boolean;
//   cartIndex: number;
//   getCartByIdSub: any;
//   communityListSub: any;

//   orderQuantityOkaySub: Subscription;
//   orderQuantityOkay: boolean;
//   orderQuantitiesToChangeSub: Subscription;
//   orderQuantitiesToChange: any[];
//   orderSuccessSub: Subscription;
//   orderSuccess: boolean = false;
//   orderFailureSub: Subscription;
//   orderFailed: boolean = false;

//   @ViewChild('basicExampleModal') basicExampleModal;

//   constructor(private cartService: CartService,
//               private router: Router,
//               private route: ActivatedRoute,
//               private location: Location,
//               private authService: AuthService,
//               private modal: NgbModal) { }

//   ngOnChanges() {}

//   goBack() {
//     this.location.back();
//   }

//   onSelect($event) {
//     let selectedCommunity = $event.target.value;
//     this.selectedSchedulesList = this.returnSchedules(selectedCommunity);
//     this.showSchedules = true;
//   }

//   onSelectSchedule($event) {
//     let index = $event;
//     this.order.chosenSchedule = this.selectedSchedulesList[index];
//     if ((this.order.chosenSchedule.hasFee) && (this.order.orderDetails.orderValue < this.order.chosenSchedule.feeWaiver)) {
//       this.tempOrderValue = this.order.orderDetails.orderValue + this.order.chosenSchedule.fee;
//     } else {
//       this.tempOrderValue = this.order.orderDetails.orderValue;
//     }
//   }

//   returnSchedules(community) {
//     // get the index of the community
//     let index;
//     for (let i = 0; i < this.communityList.length; i++) {
//       if (this.communityList[i].city === community) {
//         index = i;
//       }
//     }
//     return this.communityList[index].scheduleList;
//   }

//   onSubmit(form: NgForm) {
//     this.cartService.confirmAndSendOrder(this.cartIndex, this.order.chosenSchedule, this.consumerComment, this.deliveryAddress);
//   }

//   storeCart() {
//     this.cartService.storeCarts();
//   };

//   onLogin(e) {
//     console.log('cart stored from checkout');
//     this.storeCart();
//     this.authService.login(this.id);
//     e.preventDefault();
//   }

//   ngOnInit() {

//     this.id = +this.route.snapshot.paramMap.get('tempId');
//     console.log('tempId: ', this.id);

//     this.cartIndex = this.cartService.getCartIndex(this.id);

//     // load the matching cart
//     this.cartService.loadCartById(this.id);

//     // subscribe to the cart with the matching id
//     this.getCartByIdSub = this.cartService.getCartById()
//       .subscribe(
//         result => {
//           if (result === undefined) {
//             console.log('no datastore');
//             this.dataStoreExists = false;
//           } else {
//             console.log('datastore exists');
//             this.dataStoreExists = true;
//             this.order = result;
//             console.log('result by id: ', result);
//             // set the temporary order value from the order details
//             this.tempOrderValue = this.order.orderDetails.orderValue;
//           }
//         }
//       );

//     // get the logged in status
//     this.authService.getLoggedIn()
//       .subscribe(
//         result => {
//           this.isLoggedIn = result;
//           // if they are logged in, load the carts from local storage into datastore
//           if (this.isLoggedIn && !this.dataStoreExists) {
//             console.log('retrieve carts called');
//             this.cartService.retrieveCarts();
//           } else {

//           };
//         }
//       );

//     this.communityListSub = this.cartService.getCommunityList()
//       .subscribe(
//         result => {
//           this.communityList = result;
//         }
//       );

//     this.cartService.loadCommunityList(this.order.producer.id);

//     this.orderQuantityOkaySub = this.cartService.getOrderQuantityOkay()
//       .subscribe(
//         result => {
//           console.log('orderstatussub: ', result);
//           this.orderQuantityOkay = result;
//         }
//       );

//     this.orderQuantitiesToChangeSub = this.cartService.getOrderQuantitiesToChange()
//       .subscribe(
//         result => {
//           console.log('orderqtystochange: ', result);
//           this.orderQuantitiesToChange = result;
//           // make the changes automatically to the cart
//           // throw an alert notifying the user that they will have to reconfirm
//           if (this.orderQuantitiesToChange.length > 0) {
//             this.modal.open(this.basicExampleModal);
//             // let retVal = confirm('orderqtystochange?' + result.toString());
//             // if (retVal === true) {
//             //   console.log('User wants to continue!');
//             //   return true;
//             // } else {
//             //   console.log('User does not want to continue!');
//             //   return false;
//             // }
//           }
//         }
//       );

//     this.orderSuccessSub = this.cartService.getOrderSentSuccessfully()
//       .subscribe(
//         result => {
//           console.log('orderSuccess: ', result);
//           this.orderSuccess = result;
//           if (this.orderSuccess) {
//             this.router.navigateByUrl('confirmation');
//           };
//         }
//       );

//     this.orderFailureSub = this.cartService.getOrderSentFailed()
//       .subscribe(
//         result => {
//           console.log('order send failed result: ', result);
//           this.orderFailed = result;
//           if (this.orderFailed) {
//             console.log('order send failed, do something');
//           };
//         }
//       )

//   };

//   ngOnDestroy() {

//     if (this.communityListSub) {
//       this.communityListSub.unsubscribe();
//     }

//     if (this.getCartByIdSub) {
//       this.getCartByIdSub.unsubscribe();
//     }

//     if (this.orderQuantityOkaySub) {
//       this.orderQuantityOkaySub.unsubscribe();
//     }

//     if (this.orderQuantitiesToChangeSub) {
//       this.orderQuantitiesToChangeSub.unsubscribe();
//     }

//     if (this.orderSuccessSub) {
//       this.orderSuccessSub.unsubscribe();
//     }

//     if (this.orderFailureSub) {
//       this.orderFailureSub.unsubscribe();
//     }

//   }

// }

import { Component, OnInit, OnChanges, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { CartService } from '../../../core/services/cart-service/cart.service';
import { AuthService } from '../../../auth/auth.service';

import { OrderModel } from '../../../core/models/order.model';
import { ScheduleModel } from '../../../core/models/schedule.model';

import { CheckoutWarningModalComponent } from './checkout-warning-modal/checkout-warning-modal.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnChanges, OnDestroy {

  order: OrderModel;
  id: any;
  communityList: any[];
  showSchedules: boolean = false;
  selectedSchedulesList: ScheduleModel[];
  radioSelected: any;
  tempOrderValue: number;
  agreement: boolean = false;
  consumerComment: string;
  deliveryAddress: string;
  isLoggedIn: boolean = false;
  dataStoreExists: boolean;
  cartIndex: number;
  getCartByIdSub: any;
  communityListSub: any;

  orderQuantityOkaySub: Subscription;
  orderQuantityOkay: boolean;
  orderQuantitiesToChangeSub: Subscription;
  orderQuantitiesToChange: any[];
  orderSuccessSub: Subscription;
  orderSuccess: boolean = false;
  orderFailureSub: Subscription;
  orderFailed: boolean = false;

  ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false,
    size: 'lg'
  };

  constructor(private cartService: CartService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthService,
              private modal: NgbModal) { }

  ngOnChanges() {}

  openModal(orderQuantities) {
    // make the changes in the cart in the background
    this.cartService.updateProductQuantitiesToQtyAvailable(this.id, orderQuantities);
    const modalRef = this.modal.open(CheckoutWarningModalComponent, this.ngbModalOptions);
    console.log('orderqtys pushed into modal: ', orderQuantities);
    modalRef.componentInstance.orderQuantities = orderQuantities;
    modalRef.componentInstance.goToCart
      .subscribe(
        (result) => {
          this.goBack();
        }
      );
    modalRef.componentInstance.changesAccepted
      .subscribe(
        result => {
          console.log(result);
          // changes may already be propagated to the cart
          // need to get the changes from the cart
          // this.order = this.cartService.getCartById();
          // if that doesn't work
          // try calling loadCart again
          this.cartService.loadCartById(this.id);
        }
      );
  };

  goBack() {
    this.location.back();
  }

  onSelect($event) {
    let selectedCommunity = $event.target.value;
    this.selectedSchedulesList = this.returnSchedules(selectedCommunity);
    this.showSchedules = true;
  }

  onSelectSchedule($event) {
    let index = $event;
    this.order.chosenSchedule = this.selectedSchedulesList[index];
    if ((this.order.chosenSchedule.hasFee) && (this.order.orderDetails.orderValue < this.order.chosenSchedule.feeWaiver)) {
      this.tempOrderValue = this.order.orderDetails.orderValue + this.order.chosenSchedule.fee;
    } else {
      this.tempOrderValue = this.order.orderDetails.orderValue;
    }
  }

  returnSchedules(community) {
    // get the index of the community
    let index;
    for (let i = 0; i < this.communityList.length; i++) {
      if (this.communityList[i].city === community) {
        index = i;
      }
    }
    return this.communityList[index].scheduleList;
  }

  onSubmit(form: NgForm) {
    this.cartService.confirmAndSendOrder(this.cartIndex, this.order.chosenSchedule, this.consumerComment, this.deliveryAddress);
  }

  storeCart() {
    this.cartService.storeCarts();
  };

  onLogin(e) {
    console.log('cart stored from checkout');
    this.storeCart();
    this.authService.login(this.id);
    e.preventDefault();
  }

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('tempId');

    this.cartIndex = this.cartService.getCartIndex(this.id);

    // load the matching cart
    this.cartService.loadCartById(this.id);

    // subscribe to the cart with the matching id
    this.getCartByIdSub = this.cartService.getCartById()
      .subscribe(
        result => {
          if (result === undefined) {
            console.log('no datastore');
            this.dataStoreExists = false;
          } else {
            console.log('datastore exists');
            this.dataStoreExists = true;
            this.order = result;
            console.log('result by id: ', result);
            // set the temporary order value from the order details
            this.tempOrderValue = this.order.orderDetails.orderValue;
          }
        }
      );

    
    // get the logged in status
    this.authService.getLoggedIn()
      .subscribe(
        result => {
          this.isLoggedIn = result;
          // if they are logged in, load the carts from local storage into datastore
          if (this.isLoggedIn && !this.dataStoreExists) {
            console.log('retrieve carts called');
            this.cartService.retrieveCarts();
          } else {

          };
        }
      );

    this.communityListSub = this.cartService.getCommunityList()
      .subscribe(
        result => {
          this.communityList = result;
        }
      );

    this.cartService.loadCommunityList(this.order.producer.id);

    this.orderQuantityOkaySub = this.cartService.getOrderQuantityOkay()
      .subscribe(
        result => {
          console.log('orderstatussub: ', result);
          this.orderQuantityOkay = result;
        }
      );

    this.orderQuantitiesToChangeSub = this.cartService.getOrderQuantitiesToChange()
      .subscribe(
        result => {
          console.log('orderqtystochange: ', result);
          this.orderQuantitiesToChange = result;
          // make the changes automatically to the cart
          // throw an alert notifying the user that they will have to reconfirm
          if (this.orderQuantitiesToChange.length > 0) {
            this.openModal(this.orderQuantitiesToChange);
            // let retVal = confirm('orderqtystochange?' + result.toString());
            // if (retVal === true) {
            //   console.log('User wants to continue!');
            //   return true;
            // } else {
            //   console.log('User does not want to continue!');
            //   return false;
            // }
          }
        }
      );

    this.orderSuccessSub = this.cartService.getOrderSentSuccessfully()
      .subscribe(
        result => {
          console.log('orderSuccess: ', result);
          this.orderSuccess = result;
          if (this.orderSuccess) {
            this.router.navigateByUrl('confirmation');
          };
        }
      );

    this.orderFailureSub = this.cartService.getOrderSentFailed()
      .subscribe(
        result => {
          console.log('order send failed result: ', result);
          this.orderFailed = result;
          if (this.orderFailed) {
            console.log('order send failed, do something');
          };
        }
      )

  };

  ngOnDestroy() {

    if (this.communityListSub) {
      this.communityListSub.unsubscribe();
    }

    if (this.getCartByIdSub) {
      this.getCartByIdSub.unsubscribe();
    }

    if (this.orderQuantityOkaySub) {
      this.orderQuantityOkaySub.unsubscribe();
    }

    if (this.orderQuantitiesToChangeSub) {
      this.orderQuantitiesToChangeSub.unsubscribe();
    }

    if (this.orderSuccessSub) {
      this.orderSuccessSub.unsubscribe();
    }

    if (this.orderFailureSub) {
      this.orderFailureSub.unsubscribe();
    }

  }

}