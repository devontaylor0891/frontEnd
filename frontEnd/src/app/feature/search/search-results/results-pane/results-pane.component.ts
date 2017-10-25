import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { SearchResultModel } from '../../../../core/models/search-result.model';

@Component({
  selector: 'app-results-pane',
  templateUrl: './results-pane.component.html',
  styleUrls: ['./results-pane.component.scss']
})
export class ResultsPaneComponent implements OnInit, OnChanges {

  @Input() products: SearchResultModel[] = [];

  constructor() { }

  ngOnChanges() { }

  ngOnInit() {}

}
