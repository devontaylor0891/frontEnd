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
export class ScheduleComponent implements OnInit, OnChanges {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  path: string;
  pathArray: Array<string>;
  isProducerPage: boolean;
  
    view: string = 'month';
  
    viewDate: Date = new Date();
  
    modalData: {
      action: string;
      event: CalendarEvent;
    };
  
    refresh: Subject<any> = new Subject();

    events: Array<CalendarEvent<{ schedule: any }>> = [];
  
    activeDayIsOpen: boolean = true;
  
    constructor(private modal: NgbModal,
                private route: ActivatedRoute,
                private producerService: ProducerService) {}

    ngOnChanges() {}
  
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

    // test the path in order to display the approprate link in the modal if not on Producer Page
    this.path = window.location.pathname;
    this.pathArray = this.path.split('/');
    this.isProducerPage = this.pathIsProducerPage(this.pathArray);   
    
    // subscribe to the get method results
    this.producerService.getAllSchedule()
      .subscribe(
        result => { 
          let data = result;
          data.forEach((result) => {
            this.events.push({
              title: result.type,
              color: colors.green,
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
