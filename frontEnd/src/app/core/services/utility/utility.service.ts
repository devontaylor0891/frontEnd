// provided in App Module

// called in ...
// Table Layout Comp

import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  ConvertToCSV(objArray) {
    console.log('type of array: ', typeof objArray);
    console.log('objArray 0: ', objArray[0]);
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    var jsonObject = JSON.stringify(objArray);
    // let array = JSON.parse(objArray);
    let str = '';
    let row = '';

    console.log(Object.keys(objArray[0]));

    let keys = Object.keys(objArray[0]);
      keys.forEach(name => {
        row += name + ',';
      })

    // for (let index of objArray[0]) {
    //   console.log('index of objarray: ', index);
    //   // Now convert each value to string and comma-separated
    //   row += index + ',';
    // };
    row = row.slice(0, -1);
    console.log('row: ', row);
    // append Label row with line break
    str += row + '\r\n';
    console.log('objArray length: ', objArray.length);
    console.log('array length: ', array);
    let values;
    for (let i = 0; i < objArray.length; i++) {
      let line = '';
      console.log('objectArr: ', objArray[i]);
      let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);
      let commaJoinedValues = lineValues.join(",");
      str += commaJoinedValues + '\r\n';
      // for (let value of objArray[i]) {
      //   console.log('value: ', value);
      //   if (line !== '') { line += ','};
      //   line += objArray[i][value];
      // }
      // str += line + '\r\n';
    }
    return str;
  };

  convertAndDownload(yourData) {
    console.log('data received: ', yourData);
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
