import { Component, OnInit } from '@angular/core';

import { ScheduleModel } from '../../../../core/models/schedule.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-deliveries',
  templateUrl: './deliveries.component.html',
  styleUrls: ['./deliveries.component.scss']
})

export class DeliveriesComponent implements OnInit {

  upcomingSchedule: ScheduleModel[] = [];
  completedSchedule: ScheduleModel[] = [];

  recordType: string = 'schedule';

  projectSettings: ColumnSettingModel[] =
  [
      {
        primaryKey: 'type',
        header: 'Type',
        format: 'null',
        sortable: true
      },
      {
        primaryKey: 'startDateTime',
        header: 'Date',
        format: 'mediumDate',
        sortable: true
      },
      {
        primaryKey: 'startDateTime',
        header: 'Start Time',
        format: 'shortTime',
        sortable: true
      },
      {
        primaryKey: 'endDateTime',
        header: 'End Time',
        format: 'shortTime'
      },
      {
        primaryKey: 'city',
        header: 'Location',
        sortable: true
      },
      {
        primaryKey: 'orderDeadline',
        header: 'Deadline Date',
        format: 'mediumDate',
        sortable: true
      },
      {
        primaryKey: 'orderDeadline',
        header: 'Deadline Time',
        format: 'shortTime',
        sortable: true
      },
      {
        primaryKey: 'producerId',
        header: 'Producer ID',
        sortable: true
      }
  ];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.dashboardService.getAllSchedules()
      .subscribe( // returns an array
        results => {
          this.upcomingSchedule = results;
        }
      );

    this.dashboardService.loadAllSchedules();

  }

}
