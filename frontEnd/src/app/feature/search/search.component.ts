import { Component, OnInit, OnChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { LocationService } from '../../core/services/location/location.service';
import { SearchService } from '../../core/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnChanges {

  pageTitle = 'Your custom search - Onlylocalfood.com';

  userLocationSubscription: Subscription;
  location: any;

  userLocation;
  cityProvince: string;

  searchResults;
  searchOptions = {
    latitude: null,
    longitude: null,
    radius: null
  };

  showingSearchResults: boolean = true;
  showingSearchOptions: boolean;

  searchResultsReceived: boolean = false;
  zeroSearchResults: boolean;

  constructor(private locationService: LocationService,
              private searchService: SearchService,
              private title: Title) { };

  ngOnChanges() {};

  ngOnInit() {

    this.title.setTitle(this.pageTitle);

    // this.locationService.getUserLocation();

    this.userLocationSubscription = this.locationService.getFullLocation()
      .subscribe(
        (result) => {
          // console.log('result from sub: ', result);
          if (result == null || result.latitude == null) {
            // console.log('no result, getting new one');
            // get the location from the browser window
            this.locationService.getUserLocation();
          } else {
            // console.log('results found, assigning');
            this.location = result;
          }
        }
      );

    this.locationService.getCityProvince()
      .subscribe(
        response => {
          this.cityProvince = response;
          // console.log('cityProvince: ', this.cityProvince);
        }
      );

    // subscribe to the copied collection
    this.searchService.getSearchResults()
      .subscribe(
        results => {
          // console.log('search comp receiving results...');
          this.searchResults = results;
          this.searchResultsReceived = true;
          if (results && results.schedules && results.schedules.length < 1) {
            this.zeroSearchResults = true;
          } else {
            this.zeroSearchResults = false;
          }
          // console.log('search comp results: ', this.searchResults);
        }
      );

  }

  goToOptions() {
    this.showingSearchOptions = true;
    this.showingSearchResults = false;
  };

  goToResults() {
    this.showingSearchOptions = false;
    this.showingSearchResults = true;
  };

  switchToSearchResultsHandler($event) {
    // console.log('navigating back to results ');
    this.goToResults();
  }

}
