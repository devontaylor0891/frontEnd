import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-market-schedule-modal',
  templateUrl: './view-market-schedule-modal.component.html',
  styleUrls: ['./view-market-schedule-modal.component.scss']
})
export class ViewMarketScheduleModalComponent implements OnInit, OnChanges {

  @Input() record: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
