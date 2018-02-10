import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { LocationService } from '../../core/services/location/location.service';
import { SearchService } from '../../core/services/search/search.service';

import { ProductModel } from '../../core/models/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {

  userLocation;

  searchResults: ProductModel[] = [];

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
        }
      );

      this.searchService.getProducers()
      .subscribe(
        results => {}
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
