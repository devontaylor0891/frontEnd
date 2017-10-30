import { Component, OnInit, Input } from '@angular/core';

import { SearchProducerModel } from '../../../../../../core/models/search-producer.model';

@Component({
  selector: 'app-producer-card',
  templateUrl: './producer-card.component.html',
  styleUrls: ['./producer-card.component.scss']
})
export class ProducerCardComponent implements OnInit {

  @Input() producer: SearchProducerModel;

  constructor() { }

  ngOnInit() {}

}
