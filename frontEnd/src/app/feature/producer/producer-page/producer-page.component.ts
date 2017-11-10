import { Component, OnInit, OnChanges } from '@angular/core';

import { ProducerService } from '../../../core/services/producer/producer.service';

import { ProducerModel } from '../../../core/models/producer.model';

@Component({
  selector: 'app-producer-page',
  templateUrl: './producer-page.component.html',
  styleUrls: ['./producer-page.component.scss']
})
export class ProducerPageComponent implements OnInit, OnChanges {

  producer: ProducerModel;

  constructor(private producerService: ProducerService) {}

  ngOnChanges() {}

  ngOnInit() {

    this.producerService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
          console.log('result');
          console.log(result);
        }
      );
  }

}
