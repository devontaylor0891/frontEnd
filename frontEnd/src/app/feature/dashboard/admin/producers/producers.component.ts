import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ProducerAdmin } from '../../../../shared/models/producer-admin.model';

import { ProducerService } from '../../../../shared/services/producer/producer.service';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.scss'],
  providers: [ProducerService]
})
export class ProducersComponent implements OnInit {
  
  producers: ProducerAdmin[] = [];

  constructor(private producerService: ProducerService) { }

  ngOnInit() {
    this.producers = this.producerService.producersAdmin;
    this.producerService.getProducers()
      .subscribe(
        (producers: any[]) => {
          console.log(producers);
          this.producers = producers;
        }  
      )
  }

}
