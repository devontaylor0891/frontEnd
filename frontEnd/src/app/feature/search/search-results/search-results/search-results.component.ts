import { Component, OnInit, Input, OnChanges} from '@angular/core';

import { ProductModel } from '../../../../core/models/product.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() searchResults: any = {};

  constructor() { }

  ngOnChanges() {}

  ngOnInit() {

    console.log('search results comp results: ', this.searchResults);

  }

}
