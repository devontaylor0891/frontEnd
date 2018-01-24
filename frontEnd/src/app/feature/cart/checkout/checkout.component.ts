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
  id: number;
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

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('tempId');

    this.cartService.getCartById()
      .subscribe(
        result => { this.order = result; }
      );

    this.cartService.loadCartById(this.id);

    this.cartService.getCommunityList()
      .subscribe(
        result => {
          this.communityList = result;
        }
      );

    this.cartService.loadCommunityList(this.id);

    this.tempOrderValue = this.order.orderDetails.orderValue;

    this.isLoggedIn = this.authService.loggedIn; // this should really be a sub to the behaviour subject, but I kept getting an error

  }

}
