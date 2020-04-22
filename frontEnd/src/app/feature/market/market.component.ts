import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MarketService } from '../../core/services/market/market.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private route: ActivatedRoute,
              private marketService: MarketService) { }

  ngOnChanges() {};

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.marketService.loadMarketData(id);

  }

  ngOnDestroy() {}

}
