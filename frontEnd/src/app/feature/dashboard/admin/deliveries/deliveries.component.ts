import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { DeliveryAdmin } from '../../../../shared/models/dashboard-admin/deliveries/delivery-admin.model';

import { DeliveryService } from '../../../../shared/services/delivery/delivery.service';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss'],
  providers: [DeliveryService]
})
export class DeliveriesComponent implements OnInit {
  
  upcomingDeliveries: DeliveryAdmin[] = [];
  completedDeliveries: DeliveryAdmin[] = [];

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    
    this.deliveryService.getDeliveries()
      .subscribe( //returns an array
        (deliveries) => {
          console.log(deliveries);
          this.upcomingDeliveries = deliveries;
        }  
      )
    
  }

}
