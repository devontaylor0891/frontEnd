import { Component, OnInit, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
export class SearchComponent implements OnInit, OnChanges {

  pageTitle = 'Your custom search - Onlylocalfood.com';

  userLocation;
  cityProvince: string;

  searchResults;
  searchOptions = {
    latitude: null,
    longitude: null,
    radius: null
  };

  constructor(private locationService: LocationService,
              private searchService: SearchService,
              private title: Title) { };

  ngOnChanges() {};

  ngOnInit() {

    this.title.setTitle(this.pageTitle);

    // get the location from the browser window
    this.locationService.getLocation()
      .subscribe(
        response => {
          this.userLocation = response;
          this.searchOptions.latitude = this.userLocation.coords.latitude;
          this.searchOptions.longitude = this.userLocation.coords.longitude;
          this.searchOptions.radius = 25;
          console.log(this.userLocation.coords.latitude);
          console.log(this.userLocation.coords.longitude);
          this.locationService.codeLatLng(this.userLocation.coords.latitude, this.userLocation.coords.longitude);
          // load all search results
          this.searchService.loadAll(this.searchOptions);
        }
      );

    this.locationService.getCityProvince()
      .subscribe(
        response => {
          this.cityProvince = response;
          console.log('cityProvince: ', this.cityProvince);
        }
      );

    // subscribe to the copied collection
    this.searchService.getSearchResults()
      .subscribe(
        results => {
          this.searchResults = results;
          console.log('search comp results: ', this.searchResults);
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

  }

}
