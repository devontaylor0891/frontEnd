import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../dashboard.service';

import { ScheduleModel } from '../../../../core/models/schedule.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

@Component({
  selector: 'app-producer-schedule',
  templateUrl: './producer-schedule.component.html',
  styleUrls: ['./producer-schedule.component.scss']
})
export class ProducerScheduleComponent implements OnInit {
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
        header: 'Date',
        format: 'mediumDate'
      },
      {
        primaryKey: 'startDateTime',
        header: 'Start Time',
        format: 'shortTime'
      },
      {
        primaryKey: 'endDateTime',
        header: 'End Time',
        format: 'shortTime'
      },
      {
        primaryKey: 'city',
        header: 'Location'
      },
      {
        primaryKey: 'orderDeadline',
        header: 'Deadline Date',
        format: 'mediumDate'
      },
      {
        primaryKey: 'orderDeadline',
        header: 'Deadline Time',
        format: 'shortTime'
      }, 
      {
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
