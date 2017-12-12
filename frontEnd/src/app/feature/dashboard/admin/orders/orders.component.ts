import { Component, OnInit, OnChanges } from '@angular/core';

import { OrderModel } from '../../../../core/models/order.model';

import { DashboardService } from '../../dashboard.service';

import { OrderService } from '../../../../core/services/order/order.service';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit, OnChanges {

  pendingOrders: OrderModel[] = [];
  acceptedOrders: OrderModel[] = [];
  completedOrders: OrderModel[] = [];
  deniedOrders: OrderModel[] = [];

  projectSettings: ColumnSettingModel[] = 
  [
      {
          primaryKey: 'producer',
          header: 'Producer'
      },
      {
          primaryKey: 'location',
          header: 'Location'
      },
      {
          primaryKey: 'province',
          header: 'Province'
      },
      {
        primaryKey: 'firstName',
        header: 'First Name'
      },
      {
        primaryKey: 'email',
        header: 'Email'
      }, {
        primaryKey: 'registrationDate',
        header: 'Reg. Date'
      }
  ];

  constructor(private orderService: OrderService,
              private dashboardService: DashboardService) { }

  ngOnChanges() {}
  
  toggleView(order: any) {
    order.showView = !order.showView;
  }

  ngOnInit() {

    this.dashboardService.getAllOrders()
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
        }  
      );

    this.dashboardService.loadAllOrders();

  }

}
