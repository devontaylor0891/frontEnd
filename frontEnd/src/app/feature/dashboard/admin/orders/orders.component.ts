import { Component, OnInit } from '@angular/core';

import { Response } from '@angular/http';

import 'rxjs/Rx';

import { OrderAdmin } from '../../../../shared/models/dashboard-admin/orders/order-admin.model';

import { OrderService } from '../../../../shared/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers: [OrderService]
})
export class OrdersComponent implements OnInit {

  pendingOrders: OrderAdmin[] = [];
  acceptedOrders: OrderAdmin[] = [];
  completedOrders: OrderAdmin[] = [];
  deniedOrders: OrderAdmin[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {

    this.orderService.getOrders()
      .subscribe( //returns an array
        (orders) => {
          const pending = orders.filter(order => order.status === 'pending');
          this.pendingOrders = pending;
          const accepted = orders.filter(order => order.status === 'accepted');
          this.acceptedOrders = accepted;
          const completed = orders.filter(order => order.status === 'completed');
          this.completedOrders = completed;
          const denied = orders.filter(order => order.status === 'denied');
          this.deniedOrders = denied;
        }  
      )

  }

}
