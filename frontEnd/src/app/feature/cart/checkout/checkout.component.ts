import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { CartService } from '../../../core/services/cart-service/cart.service';

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

  ngOnInit() {

    this.id = +this.route.snapshot.paramMap.get('tempId');

    this.cartService.getCartById()
      .subscribe(
        result => { this.order = result }
      );

    this.cartService.loadCartById(this.id);

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
  }

}
