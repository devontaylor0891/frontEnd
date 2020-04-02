import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  Input
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

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

import { ScheduleModel } from '../../../core/models/schedule.model';

import { ProducerService } from '../../../core/services/producer/producer.service';

const colors: any = {
  green: {
    primary: '#3c910f',
    secondary: '#FAE3E3'
  }
};
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;
  // @Input() schedule: any;

  path: string;
  pathArray: Array<string>;
  isProducerPage: boolean;

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

  constructor(private modal: NgbModal,
    private route: ActivatedRoute,
    private producerService: ProducerService) {}

    // ngOnChanges(changes: SimpleChanges) {
    //   console.log('changes in schedule comp: ', changes);
    // }

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
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }

    pathIsProducerPage(pathArray) {
      if (pathArray.length === 3) {
        return true;
      } else {
        return false;
      }
    }


    ngOnInit() {

      this.events = [];

      // test the path in order to display the approprate link in the modal if not on Producer Page
      this.path = window.location.pathname;
      this.pathArray = this.path.split('/');
      this.isProducerPage = this.pathIsProducerPage(this.pathArray);

      // subscribe to the get method results
      this.schedSub = this.producerService.getAllSchedule()
      .subscribe(
        result => {
          // console.log('scheds received in sched comp: ', result);
          const data = result;
          data.forEach((datum) => {
            this.events.push({
              title: datum.type + ' - ' + datum.city,
              color: colors.green,
              start: new Date(datum.startDateTime),
              meta: {
                schedule: datum
              }
            } )
          })
          this.refresh.next();
        }
      );

    };

    ngOnDestroy() {
      console.log('ondestroy called');
      this.producerService.clearDataStore();
      this.schedSub.unsubscribe();
    }

  }
