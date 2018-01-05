import { Component, OnInit } from '@angular/core';

import { ProducerDashboardService } from '../../producer-dashboard.service';

import { OrderModel } from '../../../../core/models/order.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

@Component({
  selector: 'app-producer-orders',
  templateUrl: './producer-orders.component.html',
  styleUrls: ['./producer-orders.component.scss']
})
export class ProducerOrdersComponent implements OnInit {

  pendingOrders: OrderModel[] = [];
  acceptedOrders: OrderModel[] = [];
  completedOrders: OrderModel[] = [];
  deniedOrders: OrderModel[] = [];

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

  constructor(private dashboardService: ProducerDashboardService) { }

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
        }  
      );

  }

}