import { Component, OnInit, OnChanges } from '@angular/core';

import { SearchService } from '../../../../../core/services/search/search.service';

import { SearchProducerModel } from '../../../../../core/models/search-producer.model';

@Component({
  selector: 'app-search-producer',
  templateUrl: './search-producer.component.html',
  styleUrls: ['./search-producer.component.scss']
})
export class SearchProducerComponent implements OnInit, OnChanges {

  producers: SearchProducerModel[] = [];

  constructor(private searchService: SearchService) { }

  ngOnChanges() {}

  ngOnInit() {

     this.searchService.getProducers()
      .subscribe(
        results => {
          this.producers = results;
        }
      );

      

  }

}
