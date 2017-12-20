import { Component, OnInit } from '@angular/core';

import { ProducerDashboardService } from '../../producer-dashboard.service';

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

  constructor(private dashboardService: ProducerDashboardService) { }

  ngOnInit() {

    let date = new Date().toISOString();

    this.dashboardService.getSchedules()
      .subscribe( // returns an array
        (schedules) => {
          const upcoming = schedules.filter(schedule => schedule.endDateTime > date);
          this.upcomingSchedule = upcoming;
          const completed = schedules.filter(schedule => schedule.endDateTime < date);
          this.completedSchedule = completed;
        }
      );

  }
}