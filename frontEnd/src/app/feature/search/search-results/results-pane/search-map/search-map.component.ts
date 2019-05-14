import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MapsAPILoader, MouseEvent } from '@agm/core';

import { SearchService } from '../../../../../core/services/search/search.service';
import { LocationService } from '../../../../../core/services/location/location.service';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.scss']
})
export class SearchMapComponent implements OnInit, OnChanges, OnDestroy {

  events: any = [];

  userLocation: any;

  public latitude: number;
  public longitude: number;
  public zoom: number;

  currentLocation: any;

  markerClicked: boolean = false;

  constructor(private searchService: SearchService,
              private locationService: LocationService) { }

  ngOnInit() {

    this.zoom = 12;

    // get the location from the browser window
    this.locationService.getLocation()
      .subscribe(
        response => {
          this.userLocation = response;
          this.latitude = this.userLocation.coords.latitude;
          this.longitude = this.userLocation.coords.longitude;
          // console.log('lat and long from location service:');
          // console.log(this.latitude);
          // console.log(this.longitude);
        }
      );

    this.searchService.getSearchResults()
      .subscribe(
        result => {
          // console.log('result.scheds:');
          // console.log(result.schedules);
          this.events = result.schedules;
          // console.log('events: ', this.events);
        });

    // set current position
    // this.setCurrentPosition();  

  };

  // resizeMap() {
  //   this.agmMap.triggerResize();
  // };

  clickedMarker(index) {
    this.markerClicked = true;
  }

  ngOnChanges() {}

  ngOnDestroy() {}

}
