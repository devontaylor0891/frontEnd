import { Component, OnInit, Input } from '@angular/core';

import { ApiService } from '../../../../core/api.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ScheduleModel } from '../../../../core/models/schedule.model';

@Component({
  selector: 'app-delete-schedule-modal',
  templateUrl: './delete-schedule-modal.component.html',
  styleUrls: ['./delete-schedule-modal.component.scss']
})
export class DeleteScheduleModalComponent implements OnInit {

  @Input() record: ScheduleModel;
  submitObject: ScheduleModel;
  hasOrders: boolean;
  submitting: boolean;
  error: boolean;

  constructor(private activeModal: NgbActiveModal,
              private api: ApiService) { }

  ngOnInit() {
    if (this.record.orderList.length > 0) {
      this.hasOrders = true;
    } else {
      this.submitObject = this.record;
    }
  }

  onDelete() {
    this.submitting = true;
    this.api.deleteSchedule(this.record.id)
      .subscribe(
        response => {
          this.submitting = false;
          this.activeModal.close();
        },
        err => {
          console.error(err);
          this.submitting = false;
          this.error = true;
        }
      )
  }

}
