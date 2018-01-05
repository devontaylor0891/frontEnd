import { Component, OnInit, OnChanges, Input, ViewChild, TemplateRef } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EditProductModalComponent } from '../modals/product/edit-product-modal/edit-product-modal.component';
import { ViewProductModalComponent } from '../modals/product/view-product-modal/view-product-modal.component';
import { DeleteProductModalComponent } from '../modals/product/delete-product-modal/delete-product-modal.component';

import { UtilityService } from '../../core/services/utility/utility.service';

import { ColumnSettingModel, ColumnMap } from '../../shared/table-layout/layout.model';

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
  // columnMaps: ColumnSettingModel[];
  columnMaps: ColumnMap[];
  @Input() editable: boolean; // governs display of Edit button
  @Input() deletable: boolean; // display of Delete button
  record: Object; // single record
  sortedRecords: any[]; 
  sortDirection: any[]; // array of the column and it's sort value

  ngOnChanges() {
    if (this.settings) { // when settings provided in the parent component property binding
      this.columnMaps = this.settings
        .map( col => new ColumnMap(col) );
    } else { // no settings, create column maps with defaults
      this.columnMaps = Object.keys(this.records[0])
        .map( key => {
          return new ColumnMap( { primaryKey: key } );
      });
    }
  }

  constructor(private modal: NgbModal,
              private utility: UtilityService) {}

  ngOnInit() {}

  download(records) {
    this.utility.convertAndDownload(records);
  }

  onOpenView(record) {
    this.record = record;
    console.log('record: ', record);
    // this.modal.open(this.viewModalContent, { size: 'lg' });
    const modalRef = this.modal.open(ViewProductModalComponent, { size: 'lg' });
    modalRef.componentInstance.record = record;
  }

  onOpenEdit(record) {
    this.record = record;
    console.log('record: ', record);
    // this.modal.open(this.editModalContent, { size: 'lg' });
    const modalRef = this.modal.open(EditProductModalComponent, { size: 'lg' });
    modalRef.componentInstance.record = record;
  }

  onSelectDelete(record) {
    this.record = record;
    console.log('record: ', record);
    // this.modal.open(this.deleteModalContent, { size: 'lg' });
    const modalRef = this.modal.open(DeleteProductModalComponent, { size: 'lg' });
    modalRef.componentInstance.record = record;
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
      let first;
      let second;
      // if the sortColumn is an Object
      if (typeof a[sortColumn] === 'object') {
        first = a[sortColumn].name.toLowerCase();
        second = b[sortColumn].name.toLowerCase();
        if (first < second) {
          return -1
        } else if (first > second) {
          return 1
        } else {
          return 0
        };
      } else {
        first = a[sortColumn].toLowerCase();
        second = b[sortColumn].toLowerCase();
        if (first < second) {
          return -1
        } else if (first > second) {
          return 1
        } else {
          return 0
        };
      } 
    });
  }

  sortDescending(array, sortColumn) {
    return array.sort(function (a,b) {
      let first;
      let second;
      // if the sortColumn is an Object
      if (typeof a[sortColumn] === 'object') {
        first = a[sortColumn].name.toLowerCase();
        second = b[sortColumn].name.toLowerCase();
        if (first > second) {
          return -1
        } else if (first < second) {
          return 1
        } else {
          return 0
        };
      } else {
        first = a[sortColumn].toLowerCase();
        second = b[sortColumn].toLowerCase();
        if (first > second) {
          return -1
        } else if (first < second) {
          return 1
        } else {
          return 0
        };
      } 
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