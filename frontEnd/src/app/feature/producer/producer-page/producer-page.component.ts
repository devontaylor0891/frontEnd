import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
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
export class ProducerPageComponent implements OnInit, OnChanges, OnDestroy {

  producer: ProducerModel;
  products: ProductModel[] = [];
  schedule: ScheduleModel[];
  outOfStockProducts: ProductModel[] = [];

  getProducerSub: any;
  getAllProductsSub: any;
  getAllScheduleSub: any;

  constructor(private producerService: ProducerService,
              private title: Title) {}

  ngOnChanges() {}

  ngOnInit() {

    console.log('products: ', this.products);
    console.log('outof stock: ', this.outOfStockProducts);

    this.getProducerSub = this.producerService.getProducer()
      .subscribe(
        result => {
          this.producer = result;
          this.title.setTitle(this.producer.name + ' on Onlylocalfood.com');
        }
      );

    this.getAllProductsSub = this.producerService.getAllProducts()
      .subscribe(
        results => {
          // empty the arrays first
          this.outOfStockProducts = [];
          this.products = [];
          for (let i = 0; i < results.length; i++) {
            if (!results[i].isObsolete) {
              if (results[i].qtyAvailable < 1) {
                this.outOfStockProducts.push(results[i]);
              } else {
                this.products.push(results[i]);
              }
            }
          }
        }
      );

    this.getAllScheduleSub = this.producerService.getAllSchedule()
      .subscribe(
        results => {
          this.schedule = results;
        }
      );

    console.log('products: ', this.products);
    console.log('outof stock: ', this.outOfStockProducts);
  };

  ngOnDestroy() {
    if (this.getProducerSub) {
      this.getProducerSub.unsubscribe();
    };
    if (this.getAllProductsSub) {
      this.getAllProductsSub.unsubscribe();
    };
    if (this.getAllScheduleSub) {
      this.getAllScheduleSub.unsubscribe();
    };
  }

}
