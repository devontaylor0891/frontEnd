import { Component, OnInit } from '@angular/core';

import { Producer } from '../../../../shared/models/producer.model';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.scss']
})
export class ProducersComponent implements OnInit {
  
  producers: Producer[] = [
    new Producer(
      4,
      'Garden Farms',
      'Moosomin',
      'SK',
      'This is a description',
      'email@email.com',
      'beet.png',
      444,
      555,
      'Devon',
      'Jan 1 2017'
    ),
    new Producer(
      4,
      'Garden Farms',
      'Moosomin',
      'SK',
      'This is a description',
      'email@email.com',
      'beet.png',
      444,
      555,
      'Devon',
      'Jan 1 2017'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
