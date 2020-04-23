import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../../core/api.service';
import { MarketService } from '../../../core/services/market/market.service';

@Component({
  selector: 'app-market-location-schedule',
  templateUrl: './market-location-schedule.component.html',
  styleUrls: ['./market-location-schedule.component.scss']
})
export class MarketLocationScheduleComponent implements OnInit {

  schedSub: Subscription;
  schedule: any;
  id: any;
  market: any;
  marketSub: Subscription;
  producers = [];
  producerObj: any;
  productsLoaded = false;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private marketService: MarketService) { }

  ngOnInit() {

    // console.log('id: ', this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');

    this.schedSub = this.apiService.getMarketScheduleById(parseInt(this.id, 10))
      .subscribe(
        result => {
          this.schedule = result[0];
          console.log('sched recieved from api: ', this.schedule);
          for (let i = 0; i < this.schedule.producerSchedules.length; i++) {
            this.producerObj = {};
            // console.log('current userId: ', this.schedule.producerSchedules[i].producerUserId);
            this.apiService.getProductsByProducerId(this.schedule.producerSchedules[i].producerUserId)
              .subscribe(
                results => {
                  this.producerObj = {
                    producerInfo: this.schedule.producerSchedules[i],
                    products: results.filter(function (e) {
                      return e.qtyAvailable > 0;
                    })
                  };
                  this.producers.push(this.producerObj);
                }
              )
            if (i === this.schedule.producerSchedules.length - 1) {
              this.productsLoaded = true;
            }
          }
          console.log('this.producers: ', this.producers);
        }
      );

    this.marketSub = this.marketService.getMarket()
      .subscribe(
        result => {
          this.market = result;
        }
      );

  }

}
