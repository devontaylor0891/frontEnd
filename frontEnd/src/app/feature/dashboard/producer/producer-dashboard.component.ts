import { Component, OnInit } from '@angular/core';

import { ProducerDashboardService } from '../producer-dashboard.service';

@Component({
  selector: 'app-producer-dashboard',
  templateUrl: './producer-dashboard.component.html',
  styleUrls: ['./producer-dashboard.component.scss'],
  providers: [ProducerDashboardService]
})
export class ProducerDashboardComponent implements OnInit {

  constructor(private dashboard: ProducerDashboardService) { }

  ngOnInit() {
  }

}
