import { Component, OnInit, Input } from '@angular/core';

import { ProducerDashboardService } from '../producer-dashboard.service';

@Component({
  selector: 'app-producer-dashboard',
  templateUrl: './producer-dashboard.component.html',
  styleUrls: ['./producer-dashboard.component.scss'],
  providers: [ProducerDashboardService]
})
export class ProducerDashboardComponent implements OnInit {

  @Input() id: number;

  constructor(private dashboardService: ProducerDashboardService) { }

  ngOnInit() {

    this.dashboardService.loadData(this.id);

  }

}
