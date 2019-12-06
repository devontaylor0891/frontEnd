import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { Subject } from 'rxjs/Subject';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

const colors: any = {
  green: {
    primary: '#3c910f',
    secondary: '#FAE3E3'
  }
};

@Component({
  selector: 'app-checkout-calendar-mobile',
  templateUrl: './checkout-calendar-mobile.component.html',
  styleUrls: ['./checkout-calendar-mobile.component.scss']
})
export class CheckoutCalendarMobileComponent implements OnInit, OnChanges {

  @Input() schedules: any;
  @Output() schedulesListForDate = new EventEmitter<any>();

  view: string = 'month';
  
  viewDate: Date = new Date();

  refresh: Subject<any> = new Subject();

  events: Array<CalendarEvent<{ schedule: any }>> = [];

  activeDayIsOpen: boolean = true;

  constructor() { }

  ngOnChanges() {
    this.updateSchedules();
    console.log('on changes: ', this.schedules);
  };

  ngOnInit() {

    // let data = this.schedules;
    // data.forEach((result) => {
    //   this.events.push({
    //     title: result.type + ' - ' + result.city,
    //     color: colors.green,
    //     start: new Date(result.startDateTime),
    //     meta: {
    //       schedule: result
    //     }
    //   } )
    // })
    // this.refresh.next();
    // console.log('this.events: ', this.events);
    this.updateSchedules();

  };

  updateSchedules() {
    this.events = [];
    let data = this.schedules;
    data.forEach((result) => {
      this.events.push({
        title: result.type + ' - ' + result.city,
        color: colors.green,
        start: new Date(result.startDateTime),
        meta: {
          schedule: result
        }
      } )
    })
    this.refresh.next();
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log('day clicked triggered: ', date);
    console.log('clicked events; ', events);
    this.schedulesListForDate.emit(events);
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

}
