// import { Component, OnInit, Input } from '@angular/core';

// import { ApiService } from '../../../../../../core/api.service';

// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// import { ScheduleModel } from '../../../../../../core/models/schedule.model';

// @Component({
//   selector: 'app-delete-schedule-modal',
//   templateUrl: './delete-schedule-modal.component.html',
//   styleUrls: ['./delete-schedule-modal.component.scss']
// })
// export class DeleteScheduleModalComponent implements OnInit {

//   @Input() record: ScheduleModel;
//   submitObject: ScheduleModel;
//   hasOrders: boolean;
//   submitting: boolean;
//   error: boolean;

//   constructor(private activeModal: NgbActiveModal,
//               private api: ApiService) { }

//   ngOnInit() {
//     if (this.record.orderList.length > 0) {
//       this.hasOrders = true;
//     } else {
//       this.submitObject = this.record;
//     }
//   }

//   onDelete() {
//     this.submitting = true;
//     this.api.deleteSchedule(this.record.id)
//       .subscribe(
//         response => {
//           this.submitting = false;
//           this.activeModal.close();
//         },
//         err => {
//           console.error(err);
//           this.submitting = false;
//           this.error = true;
//         }
//       )
//   }

// }


import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { ApiService } from '../../../../../../core/api.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ScheduleModel } from '../../../../../../core/models/schedule.model';

@Component({
  selector: 'app-delete-schedule-modal',
  templateUrl: './delete-schedule-modal.component.html',
  styleUrls: ['./delete-schedule-modal.component.scss']
})
export class DeleteScheduleModalComponent implements OnInit, OnDestroy {

  @Input() record: ScheduleModel;
  @Output() onScheduleDeleted = new EventEmitter<number>();
  submitObject: ScheduleModel;
  hasOrders: boolean;
  submitting: boolean;
  error: boolean;

  deleteScheduleSub: any;

  constructor(public activeModal: NgbActiveModal,
              private api: ApiService) { }

  ngOnInit() {
    if (this.record.orderCount > 0) {
      this.hasOrders = true;
    } else {
      this.submitObject = this.record;
    }
  }

  onDelete() {
    this.submitting = true;
    console.log('schedule deleted from modal: ', this.record);
    this.deleteScheduleSub = this.api.deleteSchedule(this.record.id)
      .subscribe(
        response => {
          this.handleSubmitSuccess(response, this.record);
        },
        err => {
          this.handleSubmitError(err);
        }
      )
  };

  handleSubmitSuccess(res, record) {
    this.submitting = false;
    console.log('schedule deleted from modal: ', record);
    this.onScheduleDeleted.emit(record);
		// close modal
		this.activeModal.close();
  };
  
  handleSubmitError(err) {
		console.error(err);
		this.submitting = false;
		this.error = true;
  };
  
  ngOnDestroy() {
    if (this.deleteScheduleSub) {
      this.deleteScheduleSub.unsubscribe();
    };
  };

}