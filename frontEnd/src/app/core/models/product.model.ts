import { CategoryModel } from '../../core/models/category.model';

export class ProductModel {

    constructor(public id: number, 
                public name: string, 
                public description: string, 
                public image: string, 
                public pricePerUnit: number, 
                public unit: string, 
                public unitsPer: number,
                public category: CategoryModel,
                public producerName: string,
                public producerId: number,
                public dateAdded: string,
                public qtyAvailable: number, 
                public qtyPending: number, 
                public qtyAccepted: number,
                public qtyCompleted: number,
                public isObsolete: boolean
    ) {}
}