import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ProducerDashboardService } from '../producer-dashboard.service';
import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-producer-dashboard',
  templateUrl: './producer-dashboard.component.html',
  styleUrls: ['./producer-dashboard.component.scss'],
  providers: []
})
export class ProducerDashboardComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Input() user: any;
  producer: any;
  customUrlObject: any;
  activeLink = 'productsLink';

  ngOnChanges() {};

  constructor(private dashboardService: ProducerDashboardService,
              private apiService: ApiService) { }

  ngOnInit() {

    this.dashboardService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
          if (this.producer) {
            // console.log('producer id: ', this.producer.id);
            this.apiService.getCustomUrlByProducerId(this.producer.id)
              .subscribe(
                results => {
                  // console.log('custom result: ', result);
                  this.customUrlObject = results[0];
                }
              )
          }
        }
      );

    this.dashboardService.loadData(this.id);

  }

  setActive(arg) {
    this.activeLink = arg;
  }


}
