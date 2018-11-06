// // provided in App Module

// // called in ...
// // Table Layout Comp

// import { Injectable } from '@angular/core';

// @Injectable()
// export class UtilityService {

//   constructor() { }

//   ConvertProductToCSV(objArray) {
//     let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
//     let str = '';
//     let row = '';

//     let keys = Object.keys(objArray[0]);
//       keys.forEach(name => {
//         row += name + ',';
//       })

//     row = row.slice(0, -1);
//     console.log('row: ', row);
//     // append Label row with line break
//     str += row + '\r\n';
//     console.log('array: ', array);
//     let values;
//     for (let i = 0; i < objArray.length; i++) {
//       let line = '';
//       console.log('objectArr: ', objArray[i]);
//       let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

//       for (let j = 0; j < lineValues.length; j++) {
//         if (typeof lineValues[j] === 'object') {
//           console.log('linevalue[j]: ', lineValues[j]);
//           console.log('typeof: ', typeof lineValues[j])
//           lineValues[j] = lineValues[j].name;
//         }
//       }
//       console.log('linevalues: ', lineValues);
//       let commaJoinedValues = lineValues.join(",");
//       commaJoinedValues = commaJoinedValues.replace(/\r\n|\r|\n/gm, ' '); // replace carriage returns with spaces 
//       console.log('cjv: ', commaJoinedValues);
//       str += commaJoinedValues + '\r\n';
//     }
//     console.log('string: ', str);
//     return str;
//   };

//   ConvertScheduleToCSV(objArray) {
//     let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
//     let str = '';
//     let row = '';

//     let keys = Object.keys(objArray[0]);
//       keys.forEach(name => {
//         row += name + ',';
//       })

//     row = row.slice(0, -1);
//     console.log('row: ', row);
//     // append Label row with line break
//     str += row + '\r\n';
//     console.log('array: ', array);
//     let values;
//     for (let i = 0; i < objArray.length; i++) {
//       let line = '';
//       console.log('objectArr: ', objArray[i]);
//       let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

//       for (let j = 0; j < lineValues.length; j++) {
//         if (typeof lineValues[j] === 'object') {
//           console.log('linevalue[j]: ', lineValues[j]);
//           console.log('typeof: ', typeof lineValues[j])
//           lineValues[j] = lineValues[j].name;
//         }
//       }
//       console.log('linevalues: ', lineValues);
//       let commaJoinedValues = lineValues.join(",");
//       commaJoinedValues = commaJoinedValues.replace(/\r\n|\r|\n/gm, ' '); // replace carriage returns with spaces 
//       console.log('cjv: ', commaJoinedValues);
//       str += commaJoinedValues + '\r\n';
//     }
//     console.log('string: ', str);
//     return str;
//   };

//   ConvertOrderToCSV(objArray) {
//     let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
//     let str = '';
//     let row = '';

//     let keys = Object.keys(objArray[0]);
//       keys.forEach(name => {
//         row += name + ',';
//       })

//     row = row.slice(0, -1);
//     console.log('row: ', row);
//     // append Label row with line break
//     str += row + '\r\n';
//     console.log('array: ', array);
//     let values;
//     for (let i = 0; i < objArray.length; i++) {
//       let line = '';
//       console.log('objectArr: ', objArray[i]);
//       let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

//       for (let j = 0; j < lineValues.length; j++) {
//         if (typeof lineValues[j] === 'object') {
//           console.log('linevalue[j]: ', lineValues[j]);
//           console.log('typeof: ', typeof lineValues[j])
//           lineValues[j] = lineValues[j].name;
//         }
//       }
//       console.log('linevalues: ', lineValues);
//       let commaJoinedValues = lineValues.join(",");
//       commaJoinedValues = commaJoinedValues.replace(/\r\n|\r|\n/gm, ' '); // replace carriage returns with spaces 
//       console.log('cjv: ', commaJoinedValues);
//       str += commaJoinedValues + '\r\n';
//     }
//     console.log('string: ', str);
//     return str;
//   };

//   convertAndDownload(yourData, recordType) {
//     console.log('recordtype: ', recordType);
//     console.log('data received: ', yourData);
//     let csvData;
//     if (recordType === 'schedule') {
//       csvData = this.ConvertScheduleToCSV(yourData);
//     }
//     if (recordType === 'product') {
//       csvData = this.ConvertProductToCSV(yourData);
//     }
//     if (recordType === 'order') {
//       csvData = this.ConvertOrderToCSV(yourData);
//     }
    
//     let a = document.createElement('a');
//     a.setAttribute('style', 'display:none;');
//     document.body.appendChild(a);
//     let blob = new Blob([csvData], { type: 'text/csv' });
//     let url= window.URL.createObjectURL(blob);
//     a.href = url;
//     a.download = 'Results.csv'; /* your file name*/
//     a.click();
//     return 'success';
//   };

//   removeByAttribute(array, attribute, value) {
//     if (array) {
//       let i = array.length;
//       while (i--) {
//          if ( array[i]
//              && array[i].hasOwnProperty(attribute) 
//              && (arguments.length > 2 && array[i][attribute] === value ) 
//             ) {
//               array.splice(i,1);
//          }
//       }
//       return array;
//     } else {
//       return null;
//     }
//   };

//   capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   capitalizeEachFirstLetter(str) {
//     return str.replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
//   };

// }

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
    let returnString = '';
    let row = '';
    
    // create the header row, append to returnString
    let headers = 'ID,Order Date,Order Status,Consumer Name,Consumer Comment,Producer Comment,Total Order Value,Schedule Type,Schedule Date,City,Province,Address,Fee,Fee Waiver,Product Name,Quantity,Product Total Cost';

    // let keys = Object.keys(objArray[0]);
    //   keys.forEach(name => {
    //     row += name + ',';
    //   })

    // row = row.slice(0, -1);
    // console.log('row: ', row);  // **********************************************
    // append Label row with line break
    // returnString += row + '\r\n';
    returnString += headers + '\r\n';

    let numberOfProducts = 0;
    let line = '';
    let productInfo = '';
    let createdDate, startDate;
    let id,
      orderDate, 
      orderStatus, 
      consumerName, 
      consumerComment, 
      producerComment, 
      totalOrderValue, 
      scheduleType, 
      scheduleDate, 
      city, 
      province, 
      address, 
      fee, 
      feeWaiver,
      productName,
      productQty,
      productTotalCost;
    // loop through each order in the array
    for (let i = 0; i < objArray.length; i++) {
      console.log('objectArr: ', objArray[i]); // **********************************************
      // break out the basic object information
      id = objArray[i].id;
      createdDate = new Date(objArray[i].orderDetails.createdDate);
      startDate = new Date(objArray[i].chosenSchedule.startDateTime);
      orderDate = createdDate.getMonth() + 1 + '/' +  createdDate.getDate() + '/' +  createdDate.getFullYear();
      orderStatus = objArray[i].orderDetails.orderStatus;
      consumerName = objArray[i].consumer.firstName;
      consumerComment = objArray[i].orderDetails.consumerComment;
      producerComment = objArray[i].orderDetails.producerComment;
      totalOrderValue = objArray[i].orderDetails.orderValue;
      scheduleType = objArray[i].chosenSchedule.type;
      scheduleDate = startDate.getMonth() + 1 + '/' +  startDate.getDate() + '/' + startDate.getFullYear();
      city = objArray[i].chosenSchedule.city;
      province = objArray[i].chosenSchedule.province;
      address = objArray[i].chosenSchedule.address;
      fee = objArray[i].chosenSchedule.fee;
      feeWaiver = objArray[i].chosenSchedule.feeWaiver;
      // get the number of products in the order
      numberOfProducts = objArray[i].orderDetails.productQuantities.length;
      // create a loop against the number of products
      for (let k = 0; k < numberOfProducts; k++) {
        // build the new line using the basic schedule info
        line = 
          id + ',' + 
          orderDate + ',' + 
          orderStatus + ',' + 
          consumerName + ',' + 
          consumerComment + ',' + 
          producerComment + ',' + 
          totalOrderValue + ',' + 
          scheduleType + ',' + 
          scheduleDate + ',' + 
          city + ',' + 
          province + ',' + 
          address + ',' + 
          fee + ',' + 
          feeWaiver + ',';
        // get the product info
        productQty = objArray[i].orderDetails.productQuantities[k].orderQuantity;
        productTotalCost = objArray[i].orderDetails.productQuantities[k].orderValue;
        productName = this.returnValueFromArrayByAttributeValue(objArray[i].productList, 'name', 'id', objArray[i].orderDetails.productQuantities[k].productId); 
        productInfo = productName + ',' + productQty + ',' + productTotalCost;
        // add the product info to the new line
        line += productInfo;
        // replace any carriage returns
        line = line.replace(/\r\n|\r|\n/gm, ' ');
        // force line to string
        line = line.toString();
        // append the new line to the returnString
        returnString += line + '\r\n';
        console.log('line this iteration: ', line);
      }
      
      
      // let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

      // for (let j = 0; j < lineValues.length; j++) {
      //   if (typeof lineValues[j] === 'object') {
      //     console.log('linevalue[j]: ', lineValues[j]);
      //     console.log('typeof: ', typeof lineValues[j])
      //     lineValues[j] = lineValues[j].name;
      //   }
      // }
      // console.log('linevalues: ', lineValues);
      // let commaJoinedValues = lineValues.join(",");
      // commaJoinedValues = commaJoinedValues.replace(/\r\n|\r|\n/gm, ' '); // replace carriage returns with spaces 
      // console.log('cjv: ', commaJoinedValues);
      
    }
    // console.log('array: ', array);
    // let values;
    // for (let i = 0; i < objArray.length; i++) {
    //   let line = '';
    //   console.log('objectArr: ', objArray[i]); // **********************************************
    //   let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

    //   for (let j = 0; j < lineValues.length; j++) {
    //     if (typeof lineValues[j] === 'object') {
    //       console.log('linevalue[j]: ', lineValues[j]);
    //       console.log('typeof: ', typeof lineValues[j])
    //       lineValues[j] = lineValues[j].name;
    //     }
    //   }
    //   console.log('linevalues: ', lineValues);
    //   let commaJoinedValues = lineValues.join(",");
    //   commaJoinedValues = commaJoinedValues.replace(/\r\n|\r|\n/gm, ' '); // replace carriage returns with spaces 
    //   console.log('cjv: ', commaJoinedValues);
    //   returnString += commaJoinedValues + '\r\n';
    // }
    console.log('string: ', returnString);
    return returnString;
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

  returnValueFromArrayByAttributeValue(array, returnAttibute, lookupAttribute, lookupValue) {
    let returnValue;
    for (let i = 0; i < array.length; i++) {
      if (array[i][lookupAttribute] === lookupValue) {
        console.log('lookup attribute: ', array[i][lookupAttribute]);
        console.log('lookup value: ', lookupValue)
        returnValue = array[i][returnAttibute];
      }
    }
    return returnValue;
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  capitalizeEachFirstLetter(str) {
    return str.replace(/\w\S*/g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  };

}