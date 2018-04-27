// export class ColumnSettingModel {
//     public primaryKey: string;
//     public header?: string;
//     public format?: string;
//     public alternativeKeys?: string[];
//     public sortable?: boolean;
//     public sortPath?: string;
//     public nested?: boolean; // this will tell the table component that it needs a sortPath to use to sort
// };

// export class ColumnMap {
//     primaryKey: string;
//     private _header: string;
//     private _format: string;
//     alternativeKeys?: string[];
//     sortable?: boolean;
//     sortPath?: string;
//     nested?: boolean;

//     constructor ( settings ) {
//         this.primaryKey = settings.primaryKey;
//         this.header = settings.header;
//         this.format = settings.format;
//         this.alternativeKeys = settings.alternativeKeys;
//         this.sortable = settings.sortable;
//         this.sortPath = settings.sortPath;
//         this.nested = settings.nested;
//     }
//     set header(setting: string) {
//         this._header = setting ?
//             setting :
//             this.primaryKey.slice(0, 1).toUpperCase() +
//                 this.primaryKey.replace(/_/g, ' ' ).slice(1);
//     }
//     get header() {
//         return this._header;
//     }
//     set format(setting: string) {
//         this._format = setting ? setting : 'default';
//     }
//     get format() {
//         return this._format;
//     }
    
//     access = function ( object: any ) {
//         if (object[this.primaryKey] || !this.alternativeKeys) {
//             return this.primaryKey;
//         }
//         for (let key of this.alternativeKeys) {
//             if (object[key]) {
//                 return key;
//             }
//         }
//         return this.primaryKey;
//     };

// }


export class ColumnSettingModel {
    public primaryKey: string;
    public header?: string;
    public format?: string;
    public alternativeKeys?: string[];
    public sortable?: boolean;
    public sortPath?: string;
    public nested?: boolean; // this will tell the table component that it needs a sortPath to use to sort
};

export class ColumnMap {
    primaryKey: string;
    private _header: string;
    private _format: string;
    alternativeKeys?: string[];
    sortable?: boolean;
    sortPath?: string;
    nested?: boolean;

    constructor ( settings ) {
        this.primaryKey = settings.primaryKey;
        this.header = settings.header;
        this.format = settings.format;
        this.alternativeKeys = settings.alternativeKeys;
        this.sortable = settings.sortable;
        this.sortPath = settings.sortPath;
        this.nested = settings.nested;
    }
    set header(setting: string) {
        this._header = setting ?
            setting :
            this.primaryKey.slice(0, 1).toUpperCase() +
                this.primaryKey.replace(/_/g, ' ' ).slice(1);
    }
    get header() {
        return this._header;
    }
    set format(setting: string) {
        this._format = setting ? setting : 'default';
    }
    get format() {
        return this._format;
    }
    
    access = function ( object: any ) {
        if (object[this.primaryKey] || !this.alternativeKeys) {
            console.log('object has primary key: ', this.primaryKey);
            console.log('object has primary key: ', object[this.primaryKey]);
            return this.primaryKey;
        }
        for (let key of this.alternativeKeys) {
            if (object[key]) {
                return key;
            }
        }
        return this.primaryKey;
    };

}