// provided in App Module

// called in ...
// Table Layout Comp

import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  ConvertScheduleToCSV(objArray) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let returnString = '';
    let row = '';

    // create the header row, append to returnString
    let headers = 'ID,Type,Address,City,Province,Description,Date,Start Time,End Time,Order Deadline Date,Order Deadline Time,Fee,Fee Waiver,Number of Orders';
    // append Label row with line break
    returnString += headers + '\r\n';
    let line = '';
    let startDateTime,
      endDateTime,
      orderDeadlineDateTime;
    let id,
      type,
      address,
      city,
      province,
      description,
      date,
      startTime,
      endTime,
      orderDeadlineDate,
      orderDeadlineTime,
      fee,
      feeWaiver,
      orderCount;
    
    // loop through each order in the array
    for (let i = 0; i < objArray.length; i++) {
      // console.log('objectArr: ', objArray[i]); // **********************************************
      startDateTime = new Date(objArray[i].startDateTime);
      endDateTime = new Date(objArray[i].endDateTime);
      orderDeadlineDateTime = new Date(objArray[i].orderDeadline);
      id = objArray[i].id;
      type = objArray[i].type;
      address = objArray[i].address;
      city = objArray[i].city;
      province = objArray[i].province;
      description = objArray[i].description;
      date = startDateTime.getMonth() + 1 + '/' +  startDateTime.getDate() + '/' +  startDateTime.getFullYear();
      startTime = startDateTime.getHours() + ':' +  startDateTime.getMinutes();
      endTime = endDateTime.getHours() + ':' +  endDateTime.getMinutes();
      orderDeadlineDate = orderDeadlineDateTime.getMonth() + 1 + '/' +  orderDeadlineDateTime.getDate() + '/' +  orderDeadlineDateTime.getFullYear();
      orderDeadlineTime = orderDeadlineDateTime.getHours() + ':' +  orderDeadlineDateTime.getMinutes();
      fee = objArray[i].fee;
      feeWaiver = objArray[i].feeWaiver;
      orderCount = objArray[i].orderCount

      // create the line
      line = 
        id + ',' + 
        type + ',' +
        '"' + address + '"' + ',' + 
        '"' + city + '"' + ',' + 
        province + ',' +
        '"' + description + '"' + ',' + 
        date + ',' +
        startTime + ',' +
        endTime + ',' +
        orderDeadlineDate + ',' +
        orderDeadlineTime + ',' +
        fee + ',' +
        feeWaiver + ',' +
        orderCount;

      // replace any carriage returns
      line = line.replace(/\r\n|\r|\n/gm, ' ');
      // force line to string
      line = line.toString();
      // append the new line to the returnString
      returnString += line + '\r\n';
      // console.log('line this iteration: ', line);
    };
    // return the entire string
    // console.log('string: ', returnString);
    return returnString;
  };

  ConvertProductToCSV(objArray) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let returnString = '';
    let row = '';

    // create the header row, append to returnString
    let headers = 'ID,Name,Description,Image Path,Price Per Unit,Unit,Units Per Final Product,Category,Subcategory,Date Added,Qty Available,Qty Pending,Qty Accepted,Qty Completed,Obsolete?';
    // append Label row with line break
    returnString += headers + '\r\n';
    let line = '';
    let createdDate;
    let id,
      name,
      description,
      imagePath,
      pricePerUnit,
      unit,
      unitsPerFinal,
      category,
      subcategory,
      dateAdded,
      qtyAvailable,
      qtyPending,
      qtyAccepted,
      qtyCompleted,
      isObsolete;
    
    // loop through each order in the array
    for (let i = 0; i < objArray.length; i++) {
      // console.log('objectArr: ', objArray[i]); // **********************************************
      id = objArray[i].id;
      name = objArray[i].name;
      description = objArray[i].description;
      imagePath = objArray[i].image;
      pricePerUnit = objArray[i].pricePerUnit;
      unit = objArray[i].unit;
      unitsPerFinal = objArray[i].unitsPer;
      category = objArray[i].category;
      subcategory = objArray[i].subcategory;
      createdDate = new Date(objArray[i].dateAdded);
      dateAdded = createdDate.getMonth() + 1 + '/' +  createdDate.getDate() + '/' +  createdDate.getFullYear();
      qtyAvailable = objArray[i].qtyAvailable;
      qtyPending = objArray[i].qtyPending;
      qtyAccepted = objArray[i].qtyAccepted;
      qtyCompleted = objArray[i].qtyCompleted;
      isObsolete = objArray[i].isObsolete;
      // create the line
      line = 
        id + ',' + 
        '"' + name + '"' + ',' + 
        '"' + description + '"' + ',' + 
        imagePath + ',' + 
        pricePerUnit + ',' + 
        unit + ',' + 
        unitsPerFinal + ',' + 
        category + ',' + 
        subcategory + ',' + 
        dateAdded + ',' + 
        qtyAvailable + ',' + 
        qtyPending + ',' + 
        qtyAccepted + ',' + 
        qtyCompleted + ',' + 
        isObsolete;
      // replace any carriage returns
      line = line.replace(/\r\n|\r|\n/gm, ' ');
      // force line to string
      line = line.toString();
      // append the new line to the returnString
      returnString += line + '\r\n';
      // console.log('line this iteration: ', line);
    };
    // return the entire string
    // console.log('string: ', returnString);
    return returnString;
  };

  ConvertOrderToCSV(objArray) {
    let array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let returnString = '';
    let row = '';
    
    // create the header row, append to returnString
    let headers = 'ID,Order Date,Order Status,Consumer Name,Consumer Comment,Producer Comment,Total Order Value,Schedule Type,Schedule Date,City,Province,Address,Fee,Fee Waiver,Product Name,Quantity,Product Total Cost';

    // append Label row with line break
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
      // console.log('objectArr: ', objArray[i]); // **********************************************
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
          '"' + consumerName + '"' + ',' + 
          '"' + consumerComment + '"' + ',' + 
          '"' + producerComment + '"' + ',' + 
          totalOrderValue + ',' + 
          scheduleType + ',' + 
          scheduleDate + ',' + 
          '"' + city + '"' + ',' + 
          province + ',' + 
          '"' + address + '"' + ',' + 
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
        // console.log('line this iteration: ', line);
      }
      
      
      // let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

      // for (let j = 0; j < lineValues.length; j++) {
      //   if (typeof lineValues[j] === 'object') {
          // console.log('linevalue[j]: ', lineValues[j]);
          // console.log('typeof: ', typeof lineValues[j])
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
      // console.log('objectArr: ', objArray[i]); // **********************************************
    //   let lineValues = Object.keys(objArray[i]).map(key => objArray[i][key]);

    //   for (let j = 0; j < lineValues.length; j++) {
    //     if (typeof lineValues[j] === 'object') {
          // console.log('linevalue[j]: ', lineValues[j]);
          // console.log('typeof: ', typeof lineValues[j])
    //       lineValues[j] = lineValues[j].name;
    //     }
    //   }
      // console.log('linevalues: ', lineValues);
    //   let commaJoinedValues = lineValues.join(",");
    //   commaJoinedValues = commaJoinedValues.replace(/\r\n|\r|\n/gm, ' '); // replace carriage returns with spaces 
      // console.log('cjv: ', commaJoinedValues);
    //   returnString += commaJoinedValues + '\r\n';
    // }
    // console.log('string: ', returnString);
    return returnString;
  };

  convertAndDownload(yourData, recordType) {
    // console.log('recordtype: ', recordType);
    // console.log('data received: ', yourData);
    let csvData, fileName;
    if (recordType === 'schedule') {
      fileName = 'schedules.csv';
      csvData = this.ConvertScheduleToCSV(yourData);
    }
    if (recordType === 'product') {
      fileName = 'products.csv';
      csvData = this.ConvertProductToCSV(yourData);
    }
    if (recordType === 'order') {
      fileName = 'orders.csv';
      csvData = this.ConvertOrderToCSV(yourData);
    }
    
    let a = document.createElement('a');
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    let blob = new Blob([csvData], { type: 'text/csv' });
    let url= window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName; /* your file name*/
    a.click();
    return 'success';
  };

  removeByAttribute(array, attribute, value) {
    // console.log('array: ', array);
    // console.log('attribute: ', attribute);
    // console.log('value: ', value);
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
      // console.log('array after: ', array);
      return array;
    } else {
      return null;
    }
  };

  returnValueFromArrayByAttributeValue(array, returnAttibute, lookupAttribute, lookupValue) {
    let returnValue;
    for (let i = 0; i < array.length; i++) {
      if (array[i][lookupAttribute] === lookupValue) {
        // console.log('lookup attribute: ', array[i][lookupAttribute]);
        // console.log('lookup value: ', lookupValue)
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

  randomizeArray(array) {
    return array.sort(function() { return 0.5 - Math.random() });
  };

  alphabetizeArray(array) {
    array.sort(function(a, b) {
      let textA = a.name.toUpperCase();
      let textB = b.name.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return array;
  };

  dateToISOLikeButLocal(input) {
    let date = new Date(input);
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    const msLocal =  date.getTime() - offsetMs;
    const dateLocal = new Date(msLocal);
    const iso = dateLocal.toISOString();
    const isoLocal = iso.slice(0, 19);
    return isoLocal;
  };

  readableDate(date) {
    let readable = new Date(date);  // When we pass the ISO format to the JS Date constructor, the return is "Fri Jul 04 2014 21:06:08 GMT-0400 (Eastern Daylight Time)"
    let m = readable.getMonth();  // returns 6 (note that this number is one less than the number of the month in isoformat)
    let d = readable.getDate();  // returns 15
    let y = readable.getFullYear();  // returns 2012

    // we define an array of the months in a year
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    // we get the text name of the month by using the value of m to find the corresponding month name
    let mlong = months[m];


    let fulldate = mlong + ' ' + d + ', ' + y;
    return fulldate;
  }

}
