import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

import { CartService } from '../../../core/services/cart-service/cart.service';
import { AuthService } from '../../../auth/auth.service';

import { OrderModel } from '../../../core/models/order.model';
import { ScheduleModel } from '../../../core/models/schedule.model';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnChanges {

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

  constructor(private cartService: CartService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthService) { }

  ngOnChanges() {}

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
    this.cartService.confirmAndSendOrder(this.order.tempId, this.order.chosenSchedule, this.consumerComment, this.deliveryAddress);
    this.router.navigateByUrl('confirmation');
  }

  storeCart() {
    this.cartService.storeCarts();
  };

  onLogin(e) {
    this.storeCart();
    this.authService.login(this.id);
    e.preventDefault();
  }

  ngOnInit() {

    // get the logged in status
    this.authService.getLoggedIn()
      .subscribe(
        result => {
          this.isLoggedIn = result;
          // if they are logged in, load the carts from local storage into datastore
          if (this.isLoggedIn) {
            this.cartService.retrieveCarts();
          };
        }
      );

    this.id = +this.route.snapshot.paramMap.get('tempId');
    console.log('tempId: ', this.id);

    // load the matching cart
    this.cartService.loadCartById(this.id);

    // subscribe to the cart with the matching id
    this.cartService.getCartById()
      .subscribe(
        result => {
          this.order = result;
          console.log('result by id: ', result);
          // set the temporary order value from the order details
          if (this.order.orderDetails) {
            this.tempOrderValue = this.order.orderDetails.orderValue;
          }
        }
      );

    this.cartService.getCommunityList()
      .subscribe(
        result => {
          this.communityList = result;
        }
      );

    this.cartService.loadCommunityList(this.id);

  };

}