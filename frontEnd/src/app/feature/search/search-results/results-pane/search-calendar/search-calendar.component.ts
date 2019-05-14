import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
  OnChanges
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

import { ScheduleModel } from '../../../../../core/models/schedule.model';

import { SearchService } from '../../../../../core/services/search/search.service';

const colors: any = {
  red: {
    primary: '#3c910f',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-search-calendar',
  templateUrl: './search-calendar.component.html',
  styleUrls: ['./search-calendar.component.scss']
})
export class SearchCalendarComponent implements OnInit, OnChanges {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: Array<CalendarEvent<{ schedule: any }>> = [];

  activeDayIsOpen: boolean = true;

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
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // console.log('action: ', action);
    // console.log('event: ', event);
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }
  
  constructor(private modal: NgbModal,
              private route: ActivatedRoute,
              private searchService: SearchService) {}

  ngOnChanges() {}

  ngOnInit() {

    // subscribe to the get method results
    // this.searchService.getDeliveries()
    //   .subscribe(
    //     result => {
    //       this.events = [];
    //       console.log('result:');
    //       console.log(result);
    //       let data = result;
    //       data.forEach((result) => {
    //         this.events.push({
    //           title: result.type + ' - ' + result.producerName,
    //           color: colors.red,
    //           start: new Date(result.startDateTime),
    //           meta: {
    //             schedule: result
    //           }
    //         } )
    //       })
    //       this.refresh.next();
    //     }
    //   );

    this.searchService.getSearchResults()
      .subscribe(
        result => {
          this.events = [];
          // console.log('result.scheds:');
          // console.log(result.schedules);
          let data = result.schedules;
          data.forEach((result) => {
            this.events.push({
              title: result.type + ' - ' + result.producerName,
              color: colors.red,
              start: new Date(result.startDateTime),
              meta: {
                schedule: result
              }
            } )
          })
          this.refresh.next();
        }
      );

   }

}
