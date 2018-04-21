import { Component, OnInit, OnChanges } from '@angular/core';

import { ProducerDashboardService } from '../../producer-dashboard.service';

import { OrderModel } from '../../../../core/models/order.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';
import { UtilityService } from '../../../../core/services/utility/utility.service';

@Component({
  selector: 'app-producer-orders',
  templateUrl: './producer-orders.component.html',
  styleUrls: ['./producer-orders.component.scss']
})
export class ProducerOrdersComponent implements OnInit, OnChanges {

  pendingOrders: OrderModel[] = [];
  acceptedOrders: OrderModel[] = [];
  completedOrders: OrderModel[] = [];
  deniedOrders: OrderModel[] = [];
  incompletedOrders: OrderModel[] = [];

  recordType: string = 'order';

  projectSettings: ColumnSettingModel[] =
  [
      {
        primaryKey: 'producer',
        header: 'Producer'
      },
      {
        primaryKey: 'orderDetails',
        header: 'Order Date',
        format: 'mediumDate,createdDate'
      },
      {
        primaryKey: 'orderDetails',
        header: 'Order Time',
        format: 'shortTime,createdDate'
      },
      {
        primaryKey: 'orderDetails',
        header: 'Order Total',
        format: 'currency,orderValue'
      },
      {
        primaryKey: 'consumer',
        header: 'Consumer'
      }
  ];

  constructor(private dashboardService: ProducerDashboardService,
              private utilityService: UtilityService) { }

  ngOnChanges() {}

  toggleView(order: any) {
    order.showView = !order.showView;
  }

  ngOnInit() {

    this.dashboardService.getOrders()
      .subscribe( // returns an array
        (orders) => {
          const pending = orders.filter(order => order.orderDetails.orderStatus === 'pending');
          this.pendingOrders = pending;
          const accepted = orders.filter(order => order.orderDetails.orderStatus === 'accepted');
          this.acceptedOrders = accepted;
          const completed = orders.filter(order => order.orderDetails.orderStatus === 'completed');
          this.completedOrders = completed;
          const denied = orders.filter(order => order.orderDetails.orderStatus === 'denied');
          this.deniedOrders = denied;
          const incomplete = orders.filter(order => order.orderDetails.orderStatus === 'incomplete');
          this.incompletedOrders = incomplete;
          console.log('pending orders: ', this.pendingOrders);
          console.log('accepted orders: ', this.acceptedOrders);
          console.log('completed orders: ', this.completedOrders);
          console.log('denied orders: ', this.deniedOrders);
          console.log('incomplete orders: ', this.incompletedOrders);
        }
      );

  }

  onAcceptOrder($event) { // move order from pending array to accepted array
    console.log('order was accepted: ', $event);
    // remove from pending array
    this.pendingOrders = this.utilityService.removeByAttribute(this.pendingOrders, 'id', $event.id);
    // add to accepted orders
    this.acceptedOrders.push($event);
  };

  onDenyOrder($event) { // move order from pending array to denied array
    console.log('order was denied: ', $event);
    // remove from pending array
    this.pendingOrders = this.utilityService.removeByAttribute(this.pendingOrders, 'id', $event.id);
    // add to denied orders
    this.deniedOrders.push($event);
  };

  onCompleteOrder($event) { // move order from accepted to completed
    console.log('order was completed: ', $event);
    // remove from pending array
    this.acceptedOrders = this.utilityService.removeByAttribute(this.acceptedOrders, 'id', $event.id);
    // add to denied orders
    this.completedOrders.push($event);
  };

  onIncompleteOrder($event) { // move order from accepted to incompleted
    console.log('order was incompleted: ', $event);
    // remove from pending array
    console.log('accepted orders before: ', this.acceptedOrders);
    this.acceptedOrders = this.utilityService.removeByAttribute(this.acceptedOrders, 'id', $event.id);
    console.log('accepted orders after: ', this.acceptedOrders);
    // add to denied orders
    this.incompletedOrders.push($event);
  };

}
