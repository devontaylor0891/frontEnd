import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-market-schedule-modal',
  templateUrl: './view-market-schedule-modal.component.html',
  styleUrls: ['./view-market-schedule-modal.component.scss']
})
export class ViewMarketScheduleModalComponent implements OnInit, OnChanges {

  @Input() record: any;
  producerArray = [];

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.getUniqueProducers();
  }

  ngOnChanges() {
  }

  getUniqueProducers() {
    this.producerArray = this.record.producerSchedules.filter((x, i, a) => a.indexOf(x) === i);
    console.log('producerArray: ', this.producerArray);
    console.log('record recd: ', this.record);
  }

}
