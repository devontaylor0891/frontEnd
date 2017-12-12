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

  projectSettings: ColumnSettingModel[] = 
  [
      {
        primaryKey: 'type',
        header: 'Type'
      },
      {
        primaryKey: 'startDateTime',
        header: 'Start'
      },
      {
        primaryKey: 'endDateTime',
        header: 'End'
      },
      {
        primaryKey: 'city',
        header: 'Location'
      },
      {
        primaryKey: 'orderDeadline',
        header: 'Deadline'
      }, {
        primaryKey: 'producerId',
        header: 'Producer ID'
      }
  ];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    let date = new Date().toISOString();

    this.dashboardService.getAllSchedules()
      .subscribe( // returns an array
        results => {
          this.upcomingSchedule = results;
        }
      );

    this.dashboardService.loadAllSchedules();

  }

}
