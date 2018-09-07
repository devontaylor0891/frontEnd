import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { SearchService } from '../../../../core/services/search/search.service';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent implements OnInit {

  view: string;

  constructor(private searchService: SearchService) { }

  ngOnInit() {

    // get the view setting
    this.searchService._viewStatus
      .subscribe(
        result => {
          this.view = result;
        }
      );

  }

  onClick(view) {
    this.searchService.changeView(view);
  }

}
