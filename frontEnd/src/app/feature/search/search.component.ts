import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../shared/services/location/location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  ngOnInit() {

    this.locationService.getLocation()
      .subscribe(
        response => {
          console.log(response);
        }
      )

  }

}
