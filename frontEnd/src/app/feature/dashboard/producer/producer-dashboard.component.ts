import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ProducerDashboardService } from '../producer-dashboard.service';

import { UserModel } from '../../../core/models/user.model';
import { ProducerModel } from '../../../core/models/producer.model';

@Component({
  selector: 'app-producer-dashboard',
  templateUrl: './producer-dashboard.component.html',
  styleUrls: ['./producer-dashboard.component.scss'],
  providers: []
})
export class ProducerDashboardComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Input() user: UserModel;
  producer: ProducerModel;

  ngOnChanges() {};

  constructor(private dashboardService: ProducerDashboardService) { }

  ngOnInit() {

    this.dashboardService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
        }
      );

    this.dashboardService.loadData(this.id);

  }

}
