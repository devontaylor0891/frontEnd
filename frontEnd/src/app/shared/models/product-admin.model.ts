export class ProductAdmin {

    constructor(public id: number, 
                public name: string, 
                public description: string, 
                public image: string, 
                public pricePerUnit: number, 
                public unit: string, 
                public unitsPer: number,
                public categoryId: number,
                public producerName: string,
                public dateAdded: string,
                public qtyAvailable: number, 
                public qtyPending: number, 
                public qtyAccepted: number,
                public qtyCompleted: number,
                public isObsolete: boolean) {}
}

