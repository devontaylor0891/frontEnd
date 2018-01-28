import { Component, OnInit, Input } from '@angular/core';

import { ConsumerDashboardService } from '../consumer-dashboard.service';

import { OrderModel } from '../../../../core/models/order.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

@Component({
  selector: 'app-consumer-orders',
  templateUrl: './consumer-orders.component.html',
  styleUrls: ['./consumer-orders.component.scss']
})
export class ConsumerOrdersComponent implements OnInit {

  @Input() id: number;
  orders: OrderModel[];

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
        primaryKey: 'chosenSchedule',
        header: 'Type',
        format: 'null,type'
      },
      {
        primaryKey: 'chosenSchedule',
        header: 'Date',
        format: 'mediumDate,startDateTime'
      },
      {
        primaryKey: 'chosenSchedule',
        header: 'Start Time',
        format: 'shortTime,startDateTime'
      },
      {
        primaryKey: 'chosenSchedule',
        header: 'End Time',
        format: 'shortTime,endDateTime'
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

  constructor(private dashboardService: ConsumerDashboardService) { }

  toggleView(order: any) {
    order.showView = !order.showView;
  };

  ngOnInit() {

    this.dashboardService.loadData(this.id);

    this.dashboardService._orders
      .subscribe(
        orders => {
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

    
    console.log('id: ', this.id);

  }

}
