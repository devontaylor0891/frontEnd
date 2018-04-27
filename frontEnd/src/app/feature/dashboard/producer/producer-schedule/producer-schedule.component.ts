// import { Component, OnInit } from '@angular/core';

// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { ProducerDashboardService } from '../../producer-dashboard.service';

// import { ScheduleModel } from '../../../../core/models/schedule.model';
// import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

// import { AddScheduleModalComponent } from '../modals/schedule/add-schedule-modal/add-schedule-modal.component';

// @Component({
//   selector: 'app-producer-schedule',
//   templateUrl: './producer-schedule.component.html',
//   styleUrls: ['./producer-schedule.component.scss']
// })
// export class ProducerScheduleComponent implements OnInit {
	
//   upcomingSchedule: ScheduleModel[] = [];
//   completedSchedule: ScheduleModel[] = [];

//   recordType: string = 'schedule';

//   projectSettings: ColumnSettingModel[] = 
//   [
//       {
//         primaryKey: 'type',
//         header: 'Type'
//       },
//       {
//         primaryKey: 'startDateTime',
//         header: 'Date',
//         format: 'mediumDate'
//       },
//       {
//         primaryKey: 'startDateTime',
//         header: 'Start Time',
//         format: 'shortTime'
//       },
//       {
//         primaryKey: 'endDateTime',
//         header: 'End Time',
//         format: 'shortTime'
//       },
//       {
//         primaryKey: 'city',
//         header: 'Location'
//       },
//       {
//         primaryKey: 'orderDeadline',
//         header: 'Deadline Date',
//         format: 'mediumDate'
//       },
//       {
//         primaryKey: 'orderDeadline',
//         header: 'Deadline Time',
//         format: 'shortTime'
//       }
//   ];

//   constructor(private dashboardService: ProducerDashboardService,
//               private modal: NgbModal) { }

//   openModal() {
//     // this.modal.open(this.modalContent, { size: 'lg' });  
//     const modalRef = this.modal.open(AddScheduleModalComponent, { size: 'lg' });
//     modalRef.componentInstance.itemCreated.subscribe((schedule) => {
//       console.log('schedule from event emitter: ', schedule);
//       this.createNew(schedule);
//     });
//   }

//   ngOnInit() {

//     let date = new Date().toISOString();

//     this.dashboardService.getSchedules()
//       .subscribe( // returns an array
//         (schedules) => {
//           const upcoming = schedules.filter(schedule => schedule.endDateTime > date);
//           this.upcomingSchedule = upcoming;
//           console.log('upcoming: ', this.upcomingSchedule);
//           const completed = schedules.filter(schedule => schedule.endDateTime < date);
//           this.completedSchedule = completed;
//           console.log('completed: ', this.completedSchedule);
//         }
//       );

//   }

//   createNew(schedule: ScheduleModel) {
//     this.upcomingSchedule.push(schedule);
//   };
// }

import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProducerDashboardService } from '../../producer-dashboard.service';
import { UtilityService } from '../../../../core/services/utility/utility.service';

import { ScheduleModel } from '../../../../core/models/schedule.model';
import { ColumnSettingModel } from '../../../../shared/table-layout/layout.model';

import { AddScheduleModalComponent } from '../modals/schedule/add-schedule-modal/add-schedule-modal.component';

@Component({
  selector: 'app-producer-schedule',
  templateUrl: './producer-schedule.component.html',
  styleUrls: ['./producer-schedule.component.scss']
})
export class ProducerScheduleComponent implements OnInit {
	
  upcomingSchedule: ScheduleModel[] = [];
  completedSchedule: ScheduleModel[] = [];

  recordType: string = 'schedule';

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

  constructor(private dashboardService: ProducerDashboardService,
              private modal: NgbModal,
              private utilityService: UtilityService) { }

  openModal() {
    // this.modal.open(this.modalContent, { size: 'lg' });  
    const modalRef = this.modal.open(AddScheduleModalComponent, { size: 'lg' });
    modalRef.componentInstance.itemCreated.subscribe((schedule) => {
      this.createNew(schedule);
    });
  }

  ngOnInit() {

    let date = new Date().toISOString();

    this.dashboardService.getSchedules()
      .subscribe( // returns an array
        (schedules) => {
          const upcoming = schedules.filter(schedule => schedule.endDateTime > date);
          this.upcomingSchedule = upcoming;
          console.log('upcoming: ', this.upcomingSchedule);
          const completed = schedules.filter(schedule => schedule.endDateTime < date);
          this.completedSchedule = completed;
        }
      );

  };

  createNew(schedule: ScheduleModel) {
    this.upcomingSchedule.push(schedule);
  };

  onScheduleDeleted($event) {
    // remove from upcoming array
    this.upcomingSchedule = this.utilityService.removeByAttribute(this.upcomingSchedule, 'id', $event);
  };

}