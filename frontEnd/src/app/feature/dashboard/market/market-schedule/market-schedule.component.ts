import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Subscription } from 'rxjs/Subscription';

import { MarketDashboardService } from '../../market-dashboard.service';
import { UtilityService } from '../../../../core/services/utility/utility.service';

import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

import { AddMarketScheduleModalComponent } from '../modals/schedules/add-market-schedule-modal/add-market-schedule-modal.component';

@Component({
  selector: 'app-market-schedule',
  templateUrl: './market-schedule.component.html',
  styleUrls: ['./market-schedule.component.scss']
})
export class MarketScheduleComponent implements OnInit {

  upcomingSchedule: any[] = [];
  completedSchedule: any[] = [];

  recordType = 'schedule';
  date: any;

  schedSubscription: Subscription;

  projectSettings: ColumnSettingModel[] =
  [
      {
        primaryKey: 'type',
        header: 'Type',
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
        sortable: false
      },
      {
        primaryKey: 'endDateTime',
        header: 'End Time',
        format: 'shortTime',
        sortable: false
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
        sortable: false
      }
  ];

  constructor(private dashboardService: MarketDashboardService,
              private modal: NgbModal,
              private utilityService: UtilityService) { }

  openModal() {
    console.log('open modal');
    // this.modal.open(this.modalContent, { size: 'lg' });
    const modalRef = this.modal.open(AddMarketScheduleModalComponent, { size: 'lg' });
    modalRef.componentInstance.itemCreated.subscribe((schedule) => {
      // console.log('received: ', schedule);
      this.loadScheds();
    });
  }

  ngOnInit() {

    this.date = new Date().toISOString();
    // console.log('this date: ', this.date);
    this.getScheds();

  };

  createNew(schedule: any) {
    this.upcomingSchedule.push(schedule);
  };

  onScheduleDeleted($event) {
    // console.log('sched deleted event: ', $event);
    // remove from upcoming array
    this.upcomingSchedule = this.utilityService.removeByAttribute(this.upcomingSchedule, 'id', $event.id);
  };

  getScheds() {
    this.schedSubscription = this.dashboardService.getSchedules()
      .subscribe( // returns an array
        (schedules) => {
          const upcoming = schedules.filter(schedule => schedule.endDateTime > this.date);
          this.upcomingSchedule = upcoming;
          // console.log('upcoming: ', this.upcomingSchedule);
          const completed = schedules.filter(schedule => schedule.endDateTime < this.date);
          this.completedSchedule = completed;
        }
      );
  };

  loadScheds() {
    this.dashboardService.reloadData();
  };

}
