import { Component, OnInit, Input } from '@angular/core';

import { ProducerModel } from '../../../../../../core/models/producer.model';

@Component({
  selector: 'app-producer-card-mobile',
  templateUrl: './producer-card-mobile.component.html',
  styleUrls: ['./producer-card-mobile.component.scss']
})
export class ProducerCardMobileComponent implements OnInit {

  @Input() producer: ProducerModel;

  constructor() { }

  ngOnInit() {

    // console.log('input producer: ', this.producer);
  }

}
