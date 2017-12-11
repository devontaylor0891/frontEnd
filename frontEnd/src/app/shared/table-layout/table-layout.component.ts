import { Component, OnInit, OnChanges, Input, ViewChild, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ColumnSettingModel } from '../../shared/table-layout/layout.model';

import { FormatCellPipe } from '../../shared/format-cell.pipe';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss']
})
export class TableLayoutComponent implements OnInit, OnChanges {

  @ViewChild('viewModalContent') viewModalContent: TemplateRef<any>;
  @ViewChild('editModalContent') editModalContent: TemplateRef<any>;
  @ViewChild('deleteModalContent') deleteModalContent: TemplateRef<any>;

  @Input() records: any[];
  @Input() caption: string;
  keys: string[];
  @Input() settings: ColumnSettingModel[];
  columnMaps: ColumnSettingModel[];
  @Input() editable: boolean;
  @Input() deletable: boolean;
  record: Object;
  sortedRecords: any[];
  sortDirection: any[];

  ngOnChanges() {
    if (this.settings) { // when settings provided in the parent component property binding
      this.columnMaps = this.settings;
    } else { // no settings, create column maps with defaults
      this.columnMaps = Object.keys(this.records[0])
        .map( key => {
          return {
            primaryKey: key,
            header: key.slice(0, 1).toUpperCase() + key.replace(/_/g, ' ' ).slice(1)
          };
      });
    }
  }

  constructor(private modal: NgbModal) {
    //this.sortDirection = [{ columnMap: ''}]
   }

  ngOnInit() {
  }

  onOpenView(record) {
    console.log(record);
    this.record = record;
    this.modal.open(this.viewModalContent, { size: 'lg' });
  }

  onOpenEdit(record) {
    console.log(record);
    this.record = record;
    this.modal.open(this.editModalContent, { size: 'lg' });
  }

  onSelectDelete(record) {
    console.log(record);
    this.record = record;
    this.modal.open(this.deleteModalContent, { size: 'lg' });
  }

  onSort(map) {
    this.setSortDirection(map);
    // get the sorting column
    let sortColumn = map.primaryKey;
    // get the sort direction
    let currentSortDirection = this.sortDirection[this.getSortDirectionIndex(sortColumn)].direction;
    // see if column contains numbers
    let isTypeOfNumber = this.isNumber(sortColumn);
    // if column is not numbers, sort as text
    if (!isTypeOfNumber) {
      if (currentSortDirection === 'descending') {
        this.sortedRecords = this.sortAscending(this.records, sortColumn);
      } else {
        this.sortedRecords = this.sortDescending(this.records, sortColumn);
      }
    };
    // column is numbers
    if (isTypeOfNumber && currentSortDirection === 'descending') {
      this.sortedRecords = this.records.sort(function(a, b) {
        return a[sortColumn] - b[sortColumn];
      });
    } else if (isTypeOfNumber && currentSortDirection === 'ascending') {
      this.sortedRecords = this.records.sort(function(a, b) {
        return b[sortColumn] - a[sortColumn];
      });
    };
  }

  sortAscending(array, sortColumn) {
    return array.sort(function (a,b) {
      let first = a[sortColumn].toLowerCase();
      let second = b[sortColumn].toLowerCase();
      if (first < second) {
        return -1
      } else if (first > second) {
        return 1
      } else {
        return 0
      };
    });
  }

  sortDescending(array, sortColumn) {
    return array.sort(function (a,b) {
      let first = a[sortColumn].toLowerCase();
      let second = b[sortColumn].toLowerCase();
      if (first > second) {
        return -1
      } else if (first < second) {
        return 1
      } else {
        return 0
      };
    });
  }

  isNumber(column) {
    if (typeof this.records[0][column] === 'number') {
      return true;
    } else {
      return false;
    }
  }

  setSortDirection(map) {
    let index;
    // get the index of the map.primaryKey
    if (this.sortDirection) {
      for (let i = 0; i < this.sortDirection.length; i++) {
        if (this.sortDirection[i].key == map.primaryKey) {
          
          index = i;
          break;
        } else {
          index = -1;
        }
      }
    }
    let key = map.primaryKey;
    // set the sort direction of this column
    if (!this.sortDirection) {
      this.sortDirection = [{ key: key, direction: 'ascending' }];
    } else if (index === -1) {
      this.sortDirection.push({ key: key, direction: 'ascending'});
    } else if (this.sortDirection && this.sortDirection[index].direction === 'ascending') {
      this.sortDirection[index].direction = 'descending';
    } else {
      this.sortDirection[index].direction = 'ascending';
    } 
  }

  getSortDirectionIndex(key) {
    let index = -1;
    for (let i = 0; i < this.sortDirection.length; i++) {
      if (this.sortDirection[i].key === key) {
        index = i;
      }
    }
    return index;
  }

}
