import { Component, OnInit, Input } from '@angular/core';

import { ProducerModel } from '../../../../../../core/models/producer.model';

@Component({
  selector: 'app-producer-card',
  templateUrl: './producer-card.component.html',
  styleUrls: ['./producer-card.component.scss']
})
export class ProducerCardComponent implements OnInit {

  @Input() producer: ProducerModel;

  constructor() { }

  ngOnInit() {}

}
