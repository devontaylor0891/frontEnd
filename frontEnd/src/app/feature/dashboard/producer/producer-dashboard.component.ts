import { Component, OnInit, Input } from '@angular/core';

import { ProducerDashboardService } from '../producer-dashboard.service';

import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-producer-dashboard',
  templateUrl: './producer-dashboard.component.html',
  styleUrls: ['./producer-dashboard.component.scss'],
  providers: [ProducerDashboardService]
})
export class ProducerDashboardComponent implements OnInit {

  @Input() id: number;
  user: UserModel;

  constructor(private dashboardService: ProducerDashboardService) { }

  ngOnInit() {

    this.dashboardService._user
      .subscribe(
        result => this.user = result
      );

    this.dashboardService.loadData(this.id);

  }

}
