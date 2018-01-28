import { Component, OnInit, Input } from '@angular/core';

import { ConsumerDashboardService } from '../consumer-dashboard.service';

import { OrderModel } from '../../../../core/models/order.model';

@Component({
  selector: 'app-consumer-orders',
  templateUrl: './consumer-orders.component.html',
  styleUrls: ['./consumer-orders.component.scss']
})
export class ConsumerOrdersComponent implements OnInit {

  @Input() id: number;
  orders: OrderModel[];

  constructor(private dashboardService: ConsumerDashboardService) { }

  ngOnInit() {

    this.dashboardService.loadData(this.id);

    this.dashboardService._orders
      .subscribe(
        result => {
          this.orders = result;
          console.log('orders: ', this.orders);
        }
      );

    
    console.log('id: ', this.id);

  }

}
