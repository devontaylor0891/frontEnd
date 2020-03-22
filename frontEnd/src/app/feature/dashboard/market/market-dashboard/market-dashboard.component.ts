import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { MarketDashboardService } from '../../market-dashboard.service';
import { ApiService } from '../../../../core/api.service';

@Component({
  selector: 'app-market-dashboard',
  templateUrl: './market-dashboard.component.html',
  styleUrls: ['./market-dashboard.component.scss']
})
export class MarketDashboardComponent implements OnInit, OnChanges {

  @Input() id: number;
  @Input() user: any;
  market: any;
  customUrlObject: any;
  activeLink = 'schedulesLink';

  ngOnChanges() {};

  constructor(private dashboardService: MarketDashboardService,
              private apiService: ApiService) { }

  ngOnInit() {

    this.dashboardService.getMarket()
      .subscribe(
        result => {
          this.market = result;
          if (this.market) {
            this.apiService.getCustomUrlByProducerId(this.market.id)
              .subscribe(
                results => {
                  this.customUrlObject = results[0];
                }
              )
          }
        }
      );

    this.dashboardService.loadData(this.id);

  };

  setActive(arg) {
    this.activeLink = arg;
  };


}
