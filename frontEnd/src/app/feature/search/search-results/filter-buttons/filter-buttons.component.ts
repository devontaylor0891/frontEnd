import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../../../core/services/search/search.service';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onClick(view) {
	  this.searchService.changeView(view);
  }

}
