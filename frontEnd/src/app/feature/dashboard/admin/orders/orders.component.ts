import { Component, OnInit, OnChanges } from '@angular/core';

import { OrderModel } from '../../../../core/models/order.model';

import { DashboardService } from '../../dashboard.service';

import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnChanges {

  pendingOrders: OrderModel[] = [];
  acceptedOrders: OrderModel[] = [];
  completedOrders: OrderModel[] = [];
  deniedOrders: OrderModel[] = [];

  recordType: string = 'order';

  projectSettings: ColumnSettingModel[] =
  [
      {
        primaryKey: 'producer',
        header: 'Producer',
        format: 'null,name',
        sortable: true,
        sortPath: 'name',
        nested: false
      },
      {
        primaryKey: 'orderDetails',
        header: 'Order Date',
        format: 'mediumDate,createdDate',
        sortable: true,
        sortPath: 'createdDate',
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
        primaryKey: 'orderDetails',
        header: 'Order Total',
        format: 'currency,orderValue',
        sortable: true,
        sortPath: 'orderValue',
        nested: false
      },
      {
        primaryKey: 'consumer',
        header: 'Consumer',
        format: 'null,firstName',
        sortable: true,
        sortPath: 'firstName',
        nested: false
      }
  ];

  constructor(private dashboardService: DashboardService) { }

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
