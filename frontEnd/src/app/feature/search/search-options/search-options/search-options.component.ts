import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../../../core/services/search/search.service';

import { CategoryModel } from '../../../../core/models/category.model';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent implements OnInit {

  deliveryTypes: string[];
  categoriesList: CategoryModel[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {

    //subscribe to the delivery types
    this.searchService._deliveryTypes
      .subscribe(
        results => {
          this.deliveryTypes = results;
         console.log("These are the delivery types from the subscription:");
         console.log(this.deliveryTypes);
        }
      );

      //subscribe to the category types
    this.searchService.getCategories()
      .subscribe(
        results => {
          this.categoriesList = results;
         console.log("These are the categories from the subscription:");
         console.log(this.categoriesList);
        }
      );

  }

}
