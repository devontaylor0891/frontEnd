import { Component, OnInit, Input } from '@angular/core';

import { ConsumerDashboardService } from './consumer-dashboard.service';

@Component({
  selector: 'app-consumer-dashboard',
  templateUrl: './consumer-dashboard.component.html',
  styleUrls: ['./consumer-dashboard.component.scss'],
  providers: [ConsumerDashboardService]
})
export class ConsumerDashboardComponent implements OnInit {

  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
