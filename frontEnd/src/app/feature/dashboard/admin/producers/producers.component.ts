import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { ProducerAdmin } from '../../../../shared/models/producer-admin.model';

import { ProducerService } from '../../../../shared/services/producer/producer.service';

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.scss'],
  providers: [ProducerService]
})
export class ProducersComponent implements OnInit {
  
  activeProducers: ProducerAdmin[] = [];
  inactiveProducers: ProducerAdmin[] = [];

  constructor(private producerService: ProducerService) { }

  ngOnInit() {
    this.producerService.getProducers()
      .subscribe( //returns an array
        (producers) => {
          const active = producers.filter(producer => producer.status === 'active');
          this.activeProducers = active;
          const inactive = producers.filter(producer => producer.status === 'inactive');
          this.inactiveProducers = inactive;
        }  
      )

  }
}
 