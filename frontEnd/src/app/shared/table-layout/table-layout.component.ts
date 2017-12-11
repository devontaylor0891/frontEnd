import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { ColumnSettingModel } from '../../shared/table-layout/layout.model';

import { FormatCellPipe } from '../../shared/format-cell.pipe';

@Component({
  selector: 'app-table-layout',
  templateUrl: './table-layout.component.html',
  styleUrls: ['./table-layout.component.scss']
})
export class TableLayoutComponent implements OnInit, OnChanges {

  @Input() records: any[];
  @Input() caption: string;
  keys: string[];
  @Input() settings: ColumnSettingModel[];
  columnMaps: ColumnSettingModel[];
  @Input() editable: boolean;
  @Input() deletable: boolean;

  ngOnChanges() {
    if (this.settings) { // when settings provided
      this.columnMaps = this.settings;
  } else { // no settings, create column maps with defaults
      this.columnMaps = Object.keys(this.records[0])
          .map( key => {
               return {
                   primaryKey: key,
                   header: key.slice(0, 1).toUpperCase() + 
                      key.replace(/_/g, ' ' ).slice(1)
          }
      });
  }
  }

  constructor() { }

  ngOnInit() {
  }

}
