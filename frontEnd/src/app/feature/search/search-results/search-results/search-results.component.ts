import { Component, OnInit, Input, OnChanges} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProductModel } from '../../../../core/models/product.model';
import { SearchService } from '../../../../core/services/search/search.service';

import { LocationNotificationSignUpModalComponent } from '../../../../shared/location-notification-sign-up-modal/location-notification-sign-up-modal.component';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() searchResults: any;
  @Input() zeroResults: boolean;

  constructor(private searchService: SearchService,
              private modal: NgbModal) { }

  ngOnChanges() {
    console.log('zeroSearch: ', this.zeroResults);
    console.log('search results comp results: ', this.searchResults);
  }

  ngOnInit() {

    // this.searchService.getZeroSearchResults()
    //   .subscribe(
    //     results => {
    //       this.zeroSearchResults = results;
    //     }
    //   )

  };

  onLocationNotificationSignUp() {
    const modalRef = this.modal.open(LocationNotificationSignUpModalComponent, { size: 'lg' });
  }

}
