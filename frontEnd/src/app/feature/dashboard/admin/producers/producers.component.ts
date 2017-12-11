import { Component, OnInit, OnChanges } from '@angular/core';

import { ProducerModel } from '../../../../core/models/producer.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.scss']
})
export class ProducersComponent implements OnInit, OnChanges {
  
  activeProducers: ProducerModel[] = [];
  inactiveProducers: ProducerModel[] = [];

  editable: boolean = true;
  deletable: boolean = true;

  projectSettings: ColumnSettingModel[] = 
  [
      {
          primaryKey: 'name',
          header: 'Name'
      },
      {
          primaryKey: 'location',
          header: 'Location'
      },
      {
          primaryKey: 'province',
          header: 'Province'
      },
      {
        primaryKey: 'firstName',
        header: 'First Name'
      },
      {
        primaryKey: 'email',
        header: 'Email'
      }, {
        primaryKey: 'registrationDate',
        header: 'Reg. Date'
      }
  ];

  ngOnChanges() {};

  constructor(private dashboardService: DashboardService) {};

  ngOnInit() {
    this.dashboardService.getAllProducers()
    .subscribe(
      response => {
        const active = response.filter(producer => producer.status === 'active');
        this.activeProducers = active;
        const inactive = response.filter(producer => producer.status === 'inactive');
        this.inactiveProducers = inactive;
      }
    );

  this.dashboardService.loadAllProducers();

  }
}
 