import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
<<<<<<< HEAD
import { Location } from '@angular/common';
=======
>>>>>>> bce2d401fce9ea7bff0f85b51f742f7b2d9488d8

import { CartService } from '../../../core/services/cart-service/cart.service';

import { OrderModel } from '../../../core/models/order.model';
<<<<<<< HEAD
import { ScheduleModel } from '../../../core/models/schedule.model';
=======
>>>>>>> bce2d401fce9ea7bff0f85b51f742f7b2d9488d8

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnChanges {

  order: OrderModel;
  id: number;
<<<<<<< HEAD
  communityList: any[];
  showSchedules: boolean = false;
  selectedSchedulesList: ScheduleModel[];

  constructor(private cartService: CartService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnChanges() {}

  goBack() {
    this.location.back();
  }

  onSelect($event) {
    let selectedCommunity = $event.target.value;
    this.selectedSchedulesList = this.returnSchedules(selectedCommunity);
    this.showSchedules = true;
    console.log('selectedSchedules: ', this.selectedSchedulesList);
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

=======

  constructor(private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnChanges() {}

>>>>>>> bce2d401fce9ea7bff0f85b51f742f7b2d9488d8
  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('tempId');

    this.cartService.getCartById()
      .subscribe(
        result => { this.order = result }
      );

    this.cartService.loadCartById(this.id);

<<<<<<< HEAD
    this.cartService.getCommunityList()
      .subscribe(
        result => {
          console.log('checkout communityList: ', result);
          this.communityList = result;
        }
      );

    this.cartService.loadCommunityList(this.id);

    console.log('this order: ', this.order); 
    console.log('communityList: ', this.communityList);
=======
      console.log('this order: ', this.order);  

>>>>>>> bce2d401fce9ea7bff0f85b51f742f7b2d9488d8
  }

}
