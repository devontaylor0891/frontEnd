import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ApiService } from '../../api.service';

import { SearchResultModel } from '../../../core/models/search-result.model';

@Injectable()
export class SearchService implements OnInit {

  // create a place to store the original search results in memory
	private dataStore: {
		searchResults: SearchResultModel[]
	}
	
	// use a BehaviorSubject to create an observable out of a COPY of the search results
	public _searchResults: BehaviorSubject<SearchResultModel[]>;
	
	//during construction of service, create an empty dataStore and a new searchResults BehaviorSubject
	constructor(private apiService: ApiService) {
		this.dataStore = { searchResults: [] };
		this._searchResults = <BehaviorSubject<SearchResultModel[]>>new BehaviorSubject([]);
  }
  
  //fill up the dataStore with a call to the API
	loadAll() {
		this.apiService.getSearchResults()
			.subscribe(
				response => {
					//fill dataStore
          this.dataStore.searchResults = response;
          console.log("loadAll called");
          console.log("dataStore contents:");
          console.log(this.dataStore);
					//make a copy and put it in the SearchResults that will become the Observable for the components
					this._searchResults.next(Object.assign({}, this.dataStore).searchResults);
				}, error => console.log('could not load search results')
			);
	}
	
	//create an observable out of the copy of the results
	getSearchResults() {
		return this._searchResults.asObservable();
	}

  ngOnInit() {}

}
