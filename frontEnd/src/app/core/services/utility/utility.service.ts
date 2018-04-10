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

    for (let index of objArray[0]) {
      // Now convert each value to string and comma-separated
      row += index + ',';
    };
    row = row.slice(0, -1);
    // append Label row with line break
    str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index of array[i]) {
        if (line !== '') { line += ','};
        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  };

  convertAndDownload(yourData){
    let csvData = this.ConvertToCSV(yourData);
    let a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    let blob = new Blob([csvData], { type: 'text/csv' });
    let url= window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'Results.csv'; /* your file name*/
    a.click();
    return 'success';
  };

  removeByAttribute(array, attribute, value) {
    let i = array.length;
    while (i--) {
       if ( array[i]
           && array[i].hasOwnProperty(attribute) 
           && (arguments.length > 2 && array[i][attribute] === value ) 
          ) {
            array.splice(i,1);
       }
    }
    return array;
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  capitalizeEachFirstLetter(str) {
    return str.replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

}
