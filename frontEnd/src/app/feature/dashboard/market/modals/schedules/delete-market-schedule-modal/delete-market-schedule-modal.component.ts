import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { ApiService } from '../../../../../../core/api.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-market-schedule-modal',
  templateUrl: './delete-market-schedule-modal.component.html',
  styleUrls: ['./delete-market-schedule-modal.component.scss']
})
export class DeleteMarketScheduleModalComponent implements OnInit, OnDestroy {

  @Input() record: any;
  producerArray = [];
  @Output() onScheduleDeleted = new EventEmitter<any>();
  submitting: boolean;
  error: boolean;

  deleteScheduleSub: any;

  constructor(public activeModal: NgbActiveModal,
              private api: ApiService) { }

  ngOnInit() {
    this.getUniqueProducers();
    console.log('record to delete: ', this.record);
  };

  getUniqueProducers() {
    this.producerArray = this.record.producerSchedules.filter((x, i, a) => a.indexOf(x) === i);
    console.log('producerArray: ', this.producerArray);
  };

  onDelete() {
    this.submitting = true;
    this.deleteScheduleSub = this.api.deleteMarketSchedule(this.record.id)
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
