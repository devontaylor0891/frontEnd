import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ScheduleModel } from '../../../../../../core/models/schedule.model';

@Component({
  selector: 'app-view-schedule-modal',
  templateUrl: './view-schedule-modal.component.html',
  styleUrls: ['./view-schedule-modal.component.scss']
})
export class ViewScheduleModalComponent implements OnInit, OnChanges {

  @Input() record: ScheduleModel;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
