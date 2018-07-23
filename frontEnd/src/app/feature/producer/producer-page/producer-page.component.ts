import { Component, OnInit, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
  products: ProductModel[] = [];
  schedule: ScheduleModel[];
  outOfStockProducts: ProductModel[] = [];

  constructor(private producerService: ProducerService,
              private title: Title) {}

  ngOnChanges() {}

  ngOnInit() {

    this.producerService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
          this.title.setTitle(this.producer.name + ' on Onlylocalfood.com');
        }
      );

    this.producerService.getAllProducts()
      .subscribe(
        results => {
          for (let i = 0; i < results.length; i++) {
            console.log('result: ', results[i]);
            if (results[i].qtyAvailable < 1) {
              this.outOfStockProducts.push(results[i]);
            } else {
              this.products.push(results[i]);
            }
          }
          // this.products = results;
        }
      );

    this.producerService.getAllSchedule()
      .subscribe(
        results => {
          this.schedule = results;
        }
      );
  }

}
