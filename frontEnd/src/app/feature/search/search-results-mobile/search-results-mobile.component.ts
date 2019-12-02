import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LocationNotificationSignUpModalComponent } from '../../../shared/location-notification-sign-up-modal/location-notification-sign-up-modal.component';

@Component({
  selector: 'app-search-results-mobile',
  templateUrl: './search-results-mobile.component.html',
  styleUrls: ['./search-results-mobile.component.scss']
})
export class SearchResultsMobileComponent implements OnInit, OnChanges {

  @Input() searchResults: any;
  @Input() zeroResults: boolean;
  activeLink = 'productsLink';

  constructor(private modal: NgbModal) { }

  ngOnChanges() {
    // console.log('zeroSearch: ', this.zeroResults);
    // console.log('search results comp results: ', this.searchResults);
  }

  ngOnInit() {
    console.log('search results: ', this.searchResults);
  }

  onLocationNotificationSignUp() {
    const modalRef = this.modal.open(LocationNotificationSignUpModalComponent, { size: 'lg' });
  }

  setActive(arg) {
    this.activeLink = arg;
    console.log('activeLink:' , this.activeLink);
  }

}
