import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MarketService } from '../../../core/services/market/market.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.scss']
})
export class MarketPageComponent implements OnInit, OnChanges, OnDestroy {

  market: any;
  getMarketSub: Subscription;
  locations: any[];
  getLocationsSub: Subscription;
  producers: any[];
  getProducersSub: Subscription;

  constructor(private marketService: MarketService,
              private title: Title) {}

  ngOnChanges(changes: SimpleChanges) {}

  ngOnInit() {

    this.getMarketSub = this.marketService.getMarket()
      .subscribe(
        result => {
          this.market = result;
          // console.log('market result: ', this.market);
          this.title.setTitle(this.market.name + ' on Onlylocalfood.com');
        }
      );
    this.getLocationsSub = this.marketService.getAllLocations()
      .subscribe(
        results => {
          this.locations = results;
          // console.log('lcoations recd: ', this.locations);
        }
      );
    this.getProducersSub = this.marketService.getUniqueProducers()
      .subscribe(
        results => {
          this.producers = results;
          // console.log('producers recd: ', this.producers);
        }
      );

  };

  ngOnDestroy() {
    // this.marketService.clearDataStore();
    if (this.getMarketSub) {
      this.getMarketSub.unsubscribe();
    };
    if (this.getLocationsSub) {
      this.getLocationsSub.unsubscribe();
    };
    if (this.getProducersSub) {
      this.getProducersSub.unsubscribe();
    };
  }

}
