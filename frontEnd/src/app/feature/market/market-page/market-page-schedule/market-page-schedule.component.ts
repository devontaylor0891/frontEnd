import { Component, OnInit, Input, OnChanges, OnDestroy, ViewChild, TemplateRef } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { MarketService } from '../../../../core/services/market/market.service';

import { Subscription } from 'rxjs/Subscription';

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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  selector: 'app-market-page-schedule',
  templateUrl: './market-page-schedule.component.html',
  styleUrls: ['./market-page-schedule.component.scss']
})
export class MarketPageScheduleComponent implements OnInit, OnChanges, OnDestroy {

  @Input() schedules: any[];

  getAllScheduleSub: Subscription;
  noUpcomingSchedsSub: Subscription;

  noUpcomingScheds = true;

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  path: string;
  pathArray: Array<string>;

  view = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: Array<CalendarEvent<{ schedule: any }>> = [];
  schedSub: Subscription;

  activeDayIsOpen = true;

  constructor(private marketService: MarketService,
              private modal: NgbModal,
              private route: ActivatedRoute) { }

  ngOnChanges() {};

  ngOnInit() {

    this.getAllScheduleSub = this.marketService.getAllSchedule()
      .subscribe(
        results => {
          this.schedules = results;
          console.log('scheds from market page: ', this.schedules);
          this.schedules.forEach((result) => {
            this.events.push({
              title: result.locationData[0].locationName + ' - ' + result.city + ' - Quick View',
              color: colors.green,
              start: new Date(result.startDateTime),
              meta: {
                schedule: result
              }
            })
          });
          this.refresh.next();
        }
      );

    this.noUpcomingSchedsSub = this.marketService.getNoUpcomingScheds()
      .subscribe(
        results => {
          console.log('noUpcomingScheds results: ', results);
          this.noUpcomingScheds = results;
        }
      );
  };

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
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
  };

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  };

  ngOnDestroy() {
    if (this.noUpcomingSchedsSub) {
      this.noUpcomingSchedsSub.unsubscribe();
    };
    if (this.getAllScheduleSub) {
      this.getAllScheduleSub.unsubscribe();
    };
  }

}
