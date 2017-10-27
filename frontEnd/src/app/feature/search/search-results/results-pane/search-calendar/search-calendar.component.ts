import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../../../../core/services/search/search.service';

@Component({
  selector: 'app-search-calendar',
  templateUrl: './search-calendar.component.html',
  styleUrls: ['./search-calendar.component.scss']
})
export class SearchCalendarComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {

    this.searchService.getDeliveries()
      .subscribe(
        results => {
          console.log('from getDeliveries');
          console.log(results);
        }
      );

  }

}
