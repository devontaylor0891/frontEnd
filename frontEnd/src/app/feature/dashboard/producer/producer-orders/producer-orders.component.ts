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
      primaryKey: 'consumer',
      header: 'Consumer',
      format: 'null,firstName',
      sortable: true,
      sortPath: 'firstName',
      nested: false
    },
    {
      primaryKey: 'orderDetails',
      header: 'Order Date',
      format: 'mediumDate,createdDate',
      sortable: true,
      sortPath: '',
      nested: false
    },
    {
      primaryKey: 'orderDetails',
      header: 'Order Time',
      format: 'shortTime,createdDate',
      sortable: false,
      sortPath: '',
      nested: false
    },
    {
      primaryKey: 'chosenSchedule',
      header: 'Location',
      format: 'null,city',
      sortable: true,
      sortPath: 'city',
      nested: false
    },
    {
      primaryKey: 'chosenSchedule',
      header: 'Schedule Date',
      format: 'mediumDate,startDateTime',
      sortable: true,
      sortPath: '',
      nested: false
    },
    {
      primaryKey: 'orderDetails',
      header: 'Order Total',
      format: 'currency,orderValue',
      sortable: true,
      sortPath: '',
      nested: false
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
          console.log('orders from service: ', orders);
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
        }
      );

  }

  onAcceptOrder($event) { // move order from pending array to accepted array
    // remove from pending array
    this.pendingOrders = this.utilityService.removeByAttribute(this.pendingOrders, 'id', $event.id);
    // add to accepted orders
    this.acceptedOrders.push($event);
  };

  onDenyOrder($event) { // move order from pending array to denied array
    // remove from pending array
    this.pendingOrders = this.utilityService.removeByAttribute(this.pendingOrders, 'id', $event.id);
    // add to denied orders
    this.deniedOrders.push($event);
  };

  onCompleteOrder($event) { // move order from accepted to completed
    // remove from pending array
    this.acceptedOrders = this.utilityService.removeByAttribute(this.acceptedOrders, 'id', $event.id);
    // add to denied orders
    this.completedOrders.push($event);
  };

  onIncompleteOrder($event) { // move order from accepted to incompleted
    // remove from pending array
    this.acceptedOrders = this.utilityService.removeByAttribute(this.acceptedOrders, 'id', $event.id);
    // add to denied orders
    this.incompletedOrders.push($event);
  };

}
