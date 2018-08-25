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

  recordType: string = 'producer';

  editable: boolean = true;
  deletable: boolean = true;

  projectSettings: ColumnSettingModel[] =
  [
      {
        primaryKey: 'name',
        header: 'Name',
        format: 'null',
        sortable: true
      },
      {
        primaryKey: 'location',
        header: 'Location',
        format: 'null',
        sortable: true
      },
      {
        primaryKey: 'province',
        header: 'Province',
        format: 'null',
        sortable: true
      },
      {
        primaryKey: 'firstName',
        header: 'First Name',
        format: 'null',
        sortable: true
      },
      {
        primaryKey: 'email',
        header: 'Email',
        format: 'null',
        sortable: true
      },
      {
        primaryKey: 'registrationDate',
        header: 'Reg. Date',
        format: 'mediumDate',
        sortable: true
      }
  ];

  ngOnChanges() {};

  constructor(private dashboardService: DashboardService) {};

  ngOnInit() {
    this.dashboardService.getAllProducers()
    .subscribe(
      response => {
        console.log('producers from api: ', response);
        const active = response.filter(producer => producer.status === 'active');
        this.activeProducers = active;
        const inactive = response.filter(producer => producer.status === 'inactive');
        this.inactiveProducers = inactive;
      }
    );

  this.dashboardService.loadAllProducers();

  }
}
