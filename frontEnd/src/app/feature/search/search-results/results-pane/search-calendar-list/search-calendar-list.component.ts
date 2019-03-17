import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../../core/services/search/search.service';
import { UtilityService } from '../../../../../core/services/utility/utility.service';

@Component({
  selector: 'app-search-calendar-list',
  templateUrl: './search-calendar-list.component.html',
  styleUrls: ['./search-calendar-list.component.scss']
})
export class SearchCalendarListComponent implements OnInit {

  scheduleList: any;
  builtDateArray: any = [];
  dateArrays: any = [];

  constructor(private searchService: SearchService,
              private utilityService: UtilityService) { }

  ngOnInit() {

    this.searchService.getSearchResults()
      .subscribe(
        results => {
          this.scheduleList = this.sortDates(results.schedules);
          this.builtDateArray = this.buildDateArray(results.schedules);
          // this.dateArrays = this.splitDates(this.builtDateArray);
          console.log('dateArray: ', this.builtDateArray);
          this.dateArrays = this.builtDateArray;
          this.addScheds(results.schedules);
        }
      );

    console.log('searchresults: ', this.scheduleList);

  }

  // sort dates ascending by start date
  sortDates(array) {
    array.sort(function(a, b) {
      return (a.startDateTime < b.startDateTime) ? -1 : (a.startDateTime > b.startDateTime) ? 1 : 0;
    });
    return array;
  };

  // build an array of dates
  buildDateArray(scheds) {
    let date;
    let localDate;
    let localReadable;
    let dateObj;
    let dateArray = new Array();
    scheds.forEach((sched) => {
      console.log('orig date: ', sched.startDateTime);
      localDate = this.utilityService.dateToISOLikeButLocal(sched.startDateTime);
      console.log('local date: ', localDate);
      localReadable = this.utilityService.readableDate(sched.startDateTime);
      date = localDate.split('T')[0];
      dateObj = {
        date: date,
        readableDate: localReadable,
        schedules: []
      };
      // add date object to array
      console.log('dateArray.length: ', dateArray.length);
      if (dateArray.length === 0 ) {
        dateArray.push(dateObj);
      } else {
        console.log('index test: ', dateArray.map(function(x) {return x.date; }).indexOf(dateObj.date))
        if (dateArray.map(function(x) {return x.date; }).indexOf(dateObj.date) === -1) {
          console.log('adding object');
          dateArray.push(dateObj);
        }
      }
    });
    return dateArray;
  };

  // put each date into the array of dates
  splitDates(array) {
    console.log('array: ', array);
    let dateObj;
    let dateArray = [];
    array.forEach((date) => {
      console.log('for each date: ', date);
      dateObj = {
        date: date,
        schedules: []
      };
      dateArray.push(dateObj)
    });
    return dateArray;
  };

  // put each sched into the array of dates
  addScheds(scheds) {
    let schedLocalDate;
    // loop through each sched
    scheds.forEach((sched) => {
      // change start date to local time
      schedLocalDate = this.utilityService.dateToISOLikeButLocal(sched.startDateTime);
      // loop through each date in array
      this.dateArrays.forEach((date) => {
        // if sched date equals date in array, push it
        if (schedLocalDate.split('T')[0] === date.date.split('T')[0]) {
          date.schedules.push(sched);
        }
      })
    })
  };

}
