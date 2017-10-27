import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../../../../core/services/search/search.service'; 

@Component({
  selector: 'app-search-producer',
  templateUrl: './search-producer.component.html',
  styleUrls: ['./search-producer.component.scss']
})
export class SearchProducerComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {

     this.searchService.getProducers()
      .subscribe(
        results => {
          console.log('from getProducers');
          console.log(results);
        }
      );

      

  }

}
