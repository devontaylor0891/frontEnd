import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { LocationService } from '../../core/services/location/location.service';
import { SearchService } from '../../core/services/search/search.service';

import { SearchResultModel } from '../../core/models/search-result.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  userLocation;

  searchResults: SearchResultModel[] = [];

  constructor(private locationService: LocationService,
              private searchService: SearchService) { }

  ngOnInit() {

    // get the location from the browser window
    this.locationService.getLocation()
      .subscribe(
        response => {
          this.userLocation = response;
          // console.log(this.userLocation.coords.latitude);
          // console.log(this.userLocation.coords.longitude);
        }
      );

    //subscribe to the copied collection
    this.searchService.getSearchResults()
      .subscribe(
        results => {
          this.searchResults = results;
          console.log("These are the search results from the subscription:");
          console.log(this.searchResults);
        }
      );

      this.searchService.getProducers()
      .subscribe(
        results => {
          console.log('from getProducers');
          console.log(results);
        }
      );

      // this.searchService.getDeliveries()
      // .subscribe(
      //   results => {
      //     console.log('from getDeliveries');
      //     console.log(results);
      //   }
      // );
      
    //load all search results
    this.searchService.loadAll();

  }

  

}
