export class ProductQuantitiesModel {

    constructor(public productId: number,
                public orderQuantity: number,
                public orderValue: number
    ) {}
}