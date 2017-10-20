import { Component, OnInit, Input, OnChanges} from '@angular/core';

import { SearchResultModel } from '../../../../core/models/search-result.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() searchResults: SearchResultModel[] = [];

  constructor() { }

  ngOnChanges() {}

  ngOnInit() {}

}
