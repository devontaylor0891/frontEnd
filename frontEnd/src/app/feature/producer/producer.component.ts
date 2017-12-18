import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ProducerService } from '../../core/services/producer/producer.service';

import { ProducerModel } from '../../core/models/producer.model';
import { ProductModel } from '../../core/models/product.model';
import { ScheduleModel } from '../../core/models/schedule.model';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss'],
  providers: [ProducerService]
})
export class ProducerComponent implements OnInit, OnChanges {

  producer: ProducerModel;
  products: ProductModel[] = [];
  schedule: ScheduleModel[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private producerService: ProducerService) { }

  ngOnChanges() {};

  ngOnInit() {

	// NOTE - because I've moved the producer page out of this component, this 'id' won't work any more.
	// maybe move this declaration to the producer page component and then emit it to this component
	// then, when it is received, call the loadProducerData method
    let id = this.route.snapshot.paramMap.get('id');

	 // subscribe to the appropriate methods to populate data
    this.producerService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
        }
      );

    this.producerService.getAllProducts()
      .subscribe(
        result => {
          this.products = result;
        }
      );

    this.producerService.getAllSchedule()
      .subscribe(
        result => {
          this.schedule = result;
        }
      );

    // load the producer's information
    this.producerService.loadProducerData(+id);

  }
}