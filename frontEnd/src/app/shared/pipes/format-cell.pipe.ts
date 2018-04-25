import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Pipe({ name: 'formatCell' })
export class FormatCellPipe implements PipeTransform {
    constructor (private datePipe: DatePipe,
                private currencyPipe: CurrencyPipe) { }
    // transform(value: any, format: string) { // make this into an object like { format, nestedProperty }
    transform (value: any, format: string ) {

        let strs;
        let formatType;
        let nestedProperty;
        let newValue;

        // if the format contains a comma, split the formatType and nestedProperty
        if (format.indexOf(',') != -1) {
            strs = format.split(',');
            formatType = strs[0];
            nestedProperty = strs[1];
        } else { // otherwise, just get the formatType
            formatType = format;
        }

        if ( value === undefined ) { // if the cell is empty
            newValue = 'N/A';
        }

        if (typeof value === 'object' && !nestedProperty) { // the cell value is an object, but no property is given
            console.log('type of: ', typeof value);
            console.log('value: ', value);
            newValue = value.name;
        } else if (typeof value === 'object' && nestedProperty) { // cell is object, given a nested property to display
            newValue = value[nestedProperty];
        } else { // otherwise, the value is what it is
            newValue = value;
        }

        if (formatType === 'currency') {
            newValue = this.currencyPipe.transform(newValue, 'USD', true);
        }
        if (formatType === 'mediumDate') {
            newValue = this.datePipe.transform(newValue, 'mediumDate');
        }
        if (formatType === 'shortTime') {
            newValue = this.datePipe.transform(newValue, 'shortTime');
        }

        return newValue;
        
// original code
        // if ( value === undefined ) {
        //     return 'not available';
        // } else if ( format === 'default' ) {
        //     if ( Array.isArray(value) ) {
        //         if ( typeof value[0] !== 'object' ) {
        //             return value.join(', ');
        //         } else {
        //             return value.map( obj => {
        //                 return obj.name;
        //             }).join(', ');
        //         }
        //     }
        //     if ( typeof value === 'object' ) {
        //         return value.name;
        //     }
        // } else if (format === 'currency') {
        //     console.log('format: ', format);
        //     return this.currencyPipe.transform(value, 'USD', true);
        // // } else if (format) {
        // //     return value[format];
        // }
        // return value;
    }
}