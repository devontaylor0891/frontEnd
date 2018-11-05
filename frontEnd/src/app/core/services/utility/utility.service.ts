// provided in App Module

// called in ...
// Table Layout Comp

import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  ConvertProductToCSV(objArray) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    let keys = Object.keys(objArray[0]);
      keys.forEach(name => {
        row += name + ',';
      })

    row = row.slice(0, -1);
    console.log('row: ', row);
    // append Label row with line break
    str += row + '\r\n';
    console.log('array: ', array);
    let values;
    for (let i = 0; i < objArray.length; i++) {
      let line = '';
      console.log('objectArr: ', objArray[i]);
      let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

      for (let j = 0; j < lineValues.length; j++) {
        if (typeof lineValues[j] === 'object') {
          console.log('linevalue[j]: ', lineValues[j]);
          console.log('typeof: ', typeof lineValues[j])
          lineValues[j] = lineValues[j].name;
        }
      }
      console.log('linevalues: ', lineValues);
      let commaJoinedValues = lineValues.join(",");
      commaJoinedValues = commaJoinedValues.replace(/\r\n|\r|\n/gm, ' '); // replace carriage returns with spaces 
      console.log('cjv: ', commaJoinedValues);
      str += commaJoinedValues + '\r\n';
    }
    console.log('string: ', str);
    return str;
  };

  ConvertScheduleToCSV(objArray) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    let keys = Object.keys(objArray[0]);
      keys.forEach(name => {
        row += name + ',';
      })

    row = row.slice(0, -1);
    console.log('row: ', row);
    // append Label row with line break
    str += row + '\r\n';
    console.log('array: ', array);
    let values;
    for (let i = 0; i < objArray.length; i++) {
      let line = '';
      console.log('objectArr: ', objArray[i]);
      let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

      for (let j = 0; j < lineValues.length; j++) {
        if (typeof lineValues[j] === 'object') {
          console.log('linevalue[j]: ', lineValues[j]);
          console.log('typeof: ', typeof lineValues[j])
          lineValues[j] = lineValues[j].name;
        }
      }
      console.log('linevalues: ', lineValues);
      let commaJoinedValues = lineValues.join(",");
      commaJoinedValues = commaJoinedValues.replace(/\r\n|\r|\n/gm, ' '); // replace carriage returns with spaces 
      console.log('cjv: ', commaJoinedValues);
      str += commaJoinedValues + '\r\n';
    }
    console.log('string: ', str);
    return str;
  };

  ConvertOrderToCSV(objArray) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    let keys = Object.keys(objArray[0]);
      keys.forEach(name => {
        row += name + ',';
      })

    row = row.slice(0, -1);
    console.log('row: ', row);
    // append Label row with line break
    str += row + '\r\n';
    console.log('array: ', array);
    let values;
    for (let i = 0; i < objArray.length; i++) {
      let line = '';
      console.log('objectArr: ', objArray[i]);
      let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

      for (let j = 0; j < lineValues.length; j++) {
        if (typeof lineValues[j] === 'object') {
          console.log('linevalue[j]: ', lineValues[j]);
          console.log('typeof: ', typeof lineValues[j])
          lineValues[j] = lineValues[j].name;
        }
      }
      console.log('linevalues: ', lineValues);
      let commaJoinedValues = lineValues.join(",");
      commaJoinedValues = commaJoinedValues.replace(/\r\n|\r|\n/gm, ' '); // replace carriage returns with spaces 
      console.log('cjv: ', commaJoinedValues);
      str += commaJoinedValues + '\r\n';
    }
    console.log('string: ', str);
    return str;
  };

  convertAndDownload(yourData, recordType) {
    console.log('recordtype: ', recordType);
    console.log('data received: ', yourData);
    let csvData;
    if (recordType === 'schedule') {
      csvData = this.ConvertScheduleToCSV(yourData);
    }
    if (recordType === 'product') {
      csvData = this.ConvertProductToCSV(yourData);
    }
    if (recordType === 'order') {
      csvData = this.ConvertOrderToCSV(yourData);
    }
    
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
    if (array) {
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
    } else {
      return null;
    }
  };

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  capitalizeEachFirstLetter(str) {
    return str.replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

}
