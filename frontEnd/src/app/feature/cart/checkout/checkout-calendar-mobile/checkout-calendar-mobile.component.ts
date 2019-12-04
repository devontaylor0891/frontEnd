import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-checkout-calendar-mobile',
  templateUrl: './checkout-calendar-mobile.component.html',
  styleUrls: ['./checkout-calendar-mobile.component.scss']
})
export class CheckoutCalendarMobileComponent implements OnInit {

  @Input() schedules: any;

  constructor() { }

  onChanges() {};

  ngOnInit() {

    console.log('schedule passed into checkout calendar mobile: ', this.schedules);

  }

}
