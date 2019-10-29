import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ProducerService } from '../../../core/services/producer/producer.service';

import { ProducerModel } from '../../../core/models/producer.model';
import { ProductModel } from '../../../core/models/product.model';
import { ScheduleModel } from '../../../core/models/schedule.model';

import { Subscription } from 'rxjs/Subscription';

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

  noUpcomingScheds: boolean = true;
  noUpcomingSchedsSub: Subscription;
  now = new Date().toISOString();

  constructor(private producerService: ProducerService,
              private title: Title) {}

  ngOnChanges() {}

  ngOnInit() {

    // console.log('products: ', this.products);
    // console.log('outof stock: ', this.outOfStockProducts);

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
                // if (results[i].unitsPer !== 1) {
                //   // console.log('not 1 unitsPer: ', results[i].unitsPer);
                // }
              }
            }
          }
        }
      );

    this.getAllScheduleSub = this.producerService.getAllSchedule()
      .subscribe(
        results => {
          this.schedule = results;
          // console.log('now: ', this.now);
          // console.log('sched lenght: ', this.schedule.length);
          // for (let i = this.schedule.length - 1; i > 0; i--) {
          //   // console.log('index: ', i);
          //   // console.log('sched: ', this.schedule[i]);
          //   // console.log('order deadline: ', this.schedule[i].orderDeadline);
          //   if (this.schedule[i].orderDeadline > this.now) {
          //     // console.log('no upcoming scheds is false');
          //     this.noUpcomingScheds = false;
          //     return;
          //   }
          // }
        }
      );

    this.noUpcomingSchedsSub = this.producerService.getNoUpcomingScheds()
      .subscribe(
        results => {
          console.log('noUpcomingScheds results: ', results);
          this.noUpcomingScheds = results;
        }
      );

    // console.log('outof stock: ', this.outOfStockProducts);
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
