import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import 'rxjs/Rx';

import { SearchResultModel } from '../../../../core/models/search-result.model';

import { ApiService } from '../../../../core/api.service';

@Component({
  selector: 'app-results-pane',
  templateUrl: './results-pane.component.html',
  styleUrls: ['./results-pane.component.scss']
})
export class ResultsPaneComponent implements OnInit {

  products: SearchResultModel[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getSearchResults()
      .subscribe(
        (products) => {
          console.log(products);
          this.products = products;
        }
      )
    
  }

}
