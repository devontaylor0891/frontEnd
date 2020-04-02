import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MarketService } from '../../core/services/market/market.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit, OnChanges, OnDestroy {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private marketService: MarketService) { }

  ngOnChanges() {};

  ngOnInit() {

    // console.log('producer scheds on init: ', this.schedule);

  // NOTE - because I've moved the producer page out of this component, this 'id' won't work any more.
  // maybe move this declaration to the producer page component and then emit it to this component
  // then, when it is received, call the loadProducerData method
    const id = this.route.snapshot.paramMap.get('id');

    // load the producer's information
    // console.log('loading producer with id: ', id);
    this.marketService.loadMarketData(id);

  }

  ngOnDestroy() {}

}
