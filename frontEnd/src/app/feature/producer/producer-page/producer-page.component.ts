import { Component, OnInit, OnChanges } from '@angular/core';

import { ProducerService } from '../../../core/services/producer/producer.service';

import { ProducerModel } from '../../../core/models/producer.model';
import { ProductModel } from '../../../core/models/product.model';
import { ScheduleModel } from '../../../core/models/schedule.model';

@Component({
  selector: 'app-producer-page',
  templateUrl: './producer-page.component.html',
  styleUrls: ['./producer-page.component.scss']
})
export class ProducerPageComponent implements OnInit, OnChanges {

  producer: ProducerModel;
  products: ProductModel[];
  schedule: ScheduleModel[];

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

    this.producerService.getAllProducts()
      .subscribe(
        results => {
          this.products = results;
          console.log('products:');
          console.log(this.products);
        }
      );

    this.producerService.getAllSchedule()
      .subscribe(
        results => {
          this.schedule = results;
          console.log('schedule:');
          console.log(this.schedule);
        }
      );
  }

}
