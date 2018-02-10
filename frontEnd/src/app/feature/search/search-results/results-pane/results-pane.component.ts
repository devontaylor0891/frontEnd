import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { SearchService } from '../../../../core/services/search/search.service';

import { ProductModel } from '../../../../core/models/product.model';


@Component({
  selector: 'app-results-pane',
  templateUrl: './results-pane.component.html',
  styleUrls: ['./results-pane.component.scss']
})
export class ResultsPaneComponent implements OnInit, OnChanges {

  searchResults: ProductModel[] = [];
  view: string = "product";

  constructor(private searchService: SearchService) { }

  ngOnChanges() { }

  ngOnInit() {
    
    //subscribe to the copied collection
    this.searchService.getSearchResults()
      .subscribe(
        results => {
          this.searchResults = results;
          // console.log("These are the search results from the subscription:");
          // console.log(this.searchResults);
        }
      );
      
    //load all search results
    this.searchService.loadAll();
	
    //get the view setting
    this.searchService._viewStatus
      .subscribe(
        result => {
          this.view = result;
        }
      );

  }

}
