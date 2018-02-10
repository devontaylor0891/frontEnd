import { Component, OnInit, OnChanges } from '@angular/core';

import { SearchService } from '../../../../../core/services/search/search.service';

import { ProducerModel } from '../../../../../core/models/producer.model';

@Component({
  selector: 'app-search-producer',
  templateUrl: './search-producer.component.html',
  styleUrls: ['./search-producer.component.scss']
})
export class SearchProducerComponent implements OnInit, OnChanges {

  producers: ProducerModel[] = [];

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
