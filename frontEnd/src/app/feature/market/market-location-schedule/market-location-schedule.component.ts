import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { ApiService } from '../../../core/api.service';

@Component({
  selector: 'app-market-location-schedule',
  templateUrl: './market-location-schedule.component.html',
  styleUrls: ['./market-location-schedule.component.scss']
})
export class MarketLocationScheduleComponent implements OnInit {

  schedSub: Subscription;
  schedule: any;
  id: any;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService) { }

  ngOnInit() {

    console.log('id: ', this.route.snapshot.paramMap.get('id'));
    this.id = this.route.snapshot.paramMap.get('id');

    this.schedSub = this.apiService.getMarketScheduleById(parseInt(this.id, 10))
      .subscribe(
        result => {
          this.schedule = result;
          console.log('sched recieved from api: ', this.schedule);
        }
      )

  }

}
