import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter, ViewChild, TemplateRef, DoCheck, IterableDiffers } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// producer modals
import { EditProductModalComponent } from '../../feature/dashboard/producer/modals/product/edit-product-modal/edit-product-modal.component';
import { ViewProductModalComponent } from '../../feature/dashboard/producer/modals/product/view-product-modal/view-product-modal.component';
import { DeleteProductModalComponent } from '../../feature/dashboard/producer/modals/product/delete-product-modal/delete-product-modal.component';
import { EditScheduleModalComponent } from '../../feature/dashboard/producer/modals/schedule/edit-schedule-modal/edit-schedule-modal.component';
import { ViewScheduleModalComponent } from '../../feature/dashboard/producer/modals/schedule/view-schedule-modal/view-schedule-modal.component';
import { DeleteScheduleModalComponent } from '../../feature/dashboard/producer/modals/schedule/delete-schedule-modal/delete-schedule-modal.component';
import { EditOrderModalComponent } from '../../feature/dashboard/producer/modals/order/edit-order-modal/edit-order-modal.component';
import { ViewOrderModalComponent } from '../../feature/dashboard/producer/modals/order/view-order-modal/view-order-modal.component';
import { MarkCompleteOrderModalComponent } from '../../feature/dashboard/producer/modals/order/mark-complete-order-modal/mark-complete-order-modal.component';

// consumer modals
import { ConsumerViewOrderModalComponent } from '../../feature/dashboard/consumer/modals/order/view-order-modal/view-order-modal.component';
import { ConsumerEditOrderModalComponent } from '../../feature/dashboard/consumer/modals/order/edit-order-modal/edit-order-modal.component';

// admin modals
import { AdminOrderViewModalComponent } from '../../feature/dashboard/admin/modals/orders/admin-order-view-modal/admin-order-view-modal.component';
import { AdminProductViewModalComponent } from '../../feature/dashboard/admin/modals/products/admin-product-view-modal/admin-product-view-modal.component';
import { AdminScheduleViewModalComponent } from '../../feature/dashboard/admin/modals/schedules/admin-schedule-view-modal/admin-schedule-view-modal.component';
import { AdminUserViewModalComponent } from '../../feature/dashboard/admin/modals/users/admin-user-view-modal/admin-user-view-modal.component';
import { AdminProducerViewModalComponent } from '../../feature/dashboard/admin/modals/producers/admin-producer-view-modal/admin-producer-view-modal.component';

import { UtilityService } from '../../core/services/utility/utility.service';

import { ColumnSettingModel, ColumnMap } from '../../shared/table-layout/layout.model';

import { FormatCellPipe } from '../../shared/pipes/format-cell.pipe';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss']
})
export class TableLayoutComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() records: any[];
  @Input() caption: string;
  keys: string[];
  @Input() settings: ColumnSettingModel[];
  columnMaps: ColumnMap[];
  @Input() editable: boolean; // governs display of Edit button
  @Input() deletable: boolean; // display of Delete button
  @Input() pending: boolean; // for orders that are pending
  @Input() accepted: boolean; // for orders that are accepted
  @Input() isConsumer: boolean = false; // to display the proper modals if a consumer
  @Input() isAdmin: boolean = false; // to display the proper modals if admin
  record: Object; // single record
  @Input() recordType: string; // this will hold the type of record so that the proper modals can be shown
  sortedRecords: any[];
  sortDirection: any[]; // array of the column and it's sort value

  firstModalSubscription: any;
  secondModalSubscription: any;

  @Output() orderAccepted = new EventEmitter<any>();
  @Output() orderDenied = new EventEmitter<any>();
  @Output() orderCompleted = new EventEmitter<any>();
  @Output() orderIncompleted = new EventEmitter<any>();
  @Output() scheduleDeleted = new EventEmitter<any>();
  @Output() productObsoleted = new EventEmitter<any>();
  @Output() productDeleted = new EventEmitter<any>();

  // for pagination
  recordsCount: number = 0; // total quantity of records
  currentPage: number = 1; // current page number
  perPage: number = 5; // number of records to show per page
  paginatedRecords: any[]; // the array that will hold the current page's records

  iterableDiffer: any;
  now: string;

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

    this.sortedRecords = this.records; // set sorted records to initial record list
    this.recordsCount = this.records.length; // get the count
    this.getPaginatedRecords(this.currentPage); // get the page of records
  }

  ngDoCheck() { // update the pagination count when a record is added.
    let changes = this.iterableDiffer.diff(this.records);
    if (changes) {
      this.recordsCount = this.records.length;
    }
  }

  constructor(private modal: NgbModal,
              private utility: UtilityService,
              private _iterableDiffers: IterableDiffers) {

    this.iterableDiffer = this._iterableDiffers.find([]).create(null);

    this.now = new Date().toISOString();

  }

  ngOnInit() {
  }

  download(records) {
    this.utility.convertAndDownload(records);
  };

  onOpenView(record) {
    this.record = record;
    console.log('recordType: ', this.recordType);
    console.log('isAdmin: ', this.isAdmin);
    console.log('isConsumer: ', this.isConsumer);
    if (this.recordType === 'product' && this.isAdmin === false) { // producer
      const modalRef = this.modal.open(ViewProductModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    } else if (this.recordType === 'product' && this.isAdmin === true) {  //  admin
      const modalRef = this.modal.open(AdminProductViewModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    }
    if (this.recordType === 'schedule' && this.isAdmin === false) { // producer
      const modalRef = this.modal.open(ViewScheduleModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    } else if (this.recordType === 'schedule' && this.isAdmin === true) {  //  admin
      const modalRef = this.modal.open(AdminScheduleViewModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    }
    if (this.recordType === 'order' && this.isConsumer === false && this.isAdmin === false) { // producer
      const modalRef = this.modal.open(ViewOrderModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    } else if (this.recordType === 'order' && this.isConsumer === true) { // consumer
      const modalRef = this.modal.open(ConsumerViewOrderModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    } else if (this.recordType === 'order' && this.isAdmin === true) {  //  admin
      const modalRef = this.modal.open(AdminOrderViewModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    }
    if (this.recordType === 'user') { // only admin
      const modalRef = this.modal.open(AdminUserViewModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    }
    if (this.recordType === 'producer') { // only admin
      const modalRef = this.modal.open(AdminProducerViewModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    }
  }

  onOpenEdit(record) {
    this.record = record;
    if (this.recordType === 'product') {
      const modalRef = this.modal.open(EditProductModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    }
    if (this.recordType === 'schedule') {
      const modalRef = this.modal.open(EditScheduleModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    }
    if (this.recordType === 'order' && this.isConsumer === false) {
      const modalRef = this.modal.open(EditOrderModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
      this.firstModalSubscription = modalRef.componentInstance.onOrderAccepted
        .subscribe(
          result => {
            console.log('here is the accepted result from table layout: ', result);
            this.orderAccepted.emit(result);
          }
        );
      this.secondModalSubscription = modalRef.componentInstance.onOrderDenied
        .subscribe(
          result => {
            console.log('here is the denied result from table layout: ', result);
            this.orderDenied.emit(result);
          }
        );
    } else if (this.recordType === 'order' && this.isConsumer === true) {
      const modalRef = this.modal.open(ConsumerEditOrderModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
    }
  }

  onSelectDelete(record) {
    this.record = record;
    if (this.recordType === 'product') {
      const modalRef = this.modal.open(DeleteProductModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
      this.firstModalSubscription = modalRef.componentInstance.onProductObsolete
        .subscribe(
          result => {
            console.log('table layout obsolete kicked out: ', result);
            this.productObsoleted.emit(result);
          }
        );
      this.secondModalSubscription = modalRef.componentInstance.onProductDelete
        .subscribe(
          result => {
            this.productDeleted.emit(result);
          }
        )
    }
    if (this.recordType === 'schedule') {
      const modalRef = this.modal.open(DeleteScheduleModalComponent, { size: 'lg' });
      modalRef.componentInstance.record = record;
      this.firstModalSubscription = modalRef.componentInstance.onScheduleDeleted
        .subscribe(
          result => {
            this.scheduleDeleted.emit(result);
          }
        );
    }
  };

  onMarkComplete(record) {
    this.record = record;
    const modalRef = this.modal.open(MarkCompleteOrderModalComponent, { size: 'lg'});
    modalRef.componentInstance.record = record;
    this.firstModalSubscription = modalRef.componentInstance.onOrderCompleted
      .subscribe(
        result => {
          console.log('from table layout: order completed');
          this.orderCompleted.emit(result);
        }
      );
    this.secondModalSubscription = modalRef.componentInstance.onOrderIncompleted
      .subscribe(
        result => {
          console.log('from table layout: order incompleted');
          this.orderIncompleted.emit(result);
        }
      );
  };

  onSort(map) {
    this.setSortDirection(map);
    // get the sorting column
    let sortColumn = map.primaryKey;
    // get the sort direction
    let currentSortDirection = this.sortDirection[this.getSortDirectionIndex(sortColumn)].direction;
    // see if column contains numbers
    let isTypeOfNumber = this.isNumber(sortColumn);

    // if nested sortPath exists
    if (map.nested && !isTypeOfNumber) {
      if (currentSortDirection === 'descending') {
        this.sortedRecords = this.sortAscendingSortPath(this.records, sortColumn, map.sortPath);
      } else {
        this.sortedRecords = this.sortDescendingSortPath(this.records, sortColumn, map.sortPath);
      }
    }

    // if column is not numbers, sort as text
    if (!map.nested && !isTypeOfNumber) {
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
    this.getPaginatedRecords(this.currentPage);
  }

  sortAscending(array, sortColumn) {
    return array.sort(function (a, b) {
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
  };

  sortAscendingSortPath(array, sortColumn, sortPath?) {
    return array.sort(function (a, b) {
      let first;
      let second;
      first = a[sortColumn][sortPath].toLowerCase();
      second = b[sortColumn][sortPath].toLowerCase();
      if (first < second) {
        return -1
      } else if (first > second) {
        return 1
      } else {
        return 0
      };
    });
  };

  sortDescendingSortPath(array, sortColumn, sortPath?) {
    return array.sort(function (a, b) {
      let first;
      let second;
      first = a[sortColumn][sortPath].toLowerCase();
      second = b[sortColumn][sortPath].toLowerCase();
      if (first > second) {
        return -1
      } else if (first < second) {
        return 1
      } else {
        return 0
      };
    });
  }

  sortDescending(array, sortColumn) {
    return array.sort(function (a, b) {
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
        if (this.sortDirection[i].key === map.primaryKey) {
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

  // ********* PAGINATION *********

  getPaginatedRecords(pageNumber) {
    if (this.recordsCount <= this.perPage) {
      this.paginatedRecords = this.sortedRecords;
    } else {
      let startIndex = ((pageNumber * this.perPage) - this.perPage);
      let endIndex = (pageNumber * this.perPage || this.recordsCount);
      this.paginatedRecords = this.sortedRecords.slice(startIndex, endIndex);
    }
  };

  goToPage(n: number): void {
    this.currentPage = n;
    this.getPaginatedRecords(this.currentPage);
  };


  nextPage(): void {
    this.currentPage++;
    this.getPaginatedRecords(this.currentPage);
  };


  prevPage(): void {
    this.currentPage--;
    this.getPaginatedRecords(this.currentPage);
  };

  ngOnDestroy() {
    if (this.firstModalSubscription) {
      this.firstModalSubscription.unsubscribe();
    }
    if (this.secondModalSubscription) {
      this.secondModalSubscription.unsubscribe();
    }
  };

}
