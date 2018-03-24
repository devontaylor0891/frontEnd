// provided in App Module

// called in ...
// Table Layout Comp

import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  ConvertToCSV(objArray) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    for (let index in objArray[0]) {
      // Now convert each value to string and comma-separated
      row += index + ',';
    };
    row = row.slice(0, -1);
    // append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','
        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  };

  convertAndDownload(yourData){    
    let csvData = this.ConvertToCSV(yourData);
    let a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    let blob = new Blob([csvData], { type: 'text/csv' });
    let url= window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Results.csv'; /* your file name*/
    a.click();
    return 'success';
  }

}
