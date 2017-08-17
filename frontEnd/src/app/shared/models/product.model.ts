export class Product {
    public id: number;
    public name: string;
    public description: string;
    public image: string;
    public pricePerUnit: number;
    public unit: string;
    public unitsPer: number;
    public categoryId: number;
    public producerName: string;
    public dateAdded: string;
    public qtyAvailable: number;
    public qtyPending: number;
    public qtyAccepted: number;
    public qtyCompleted: number;
    public isObsolete: boolean;

    constructor(id: number, 
                name: string, 
                description: string, 
                image: string, 
                pricePerUnit: number, 
                unit: string, 
                unitsPer: number,
                categoryId: number,
                producerName: string,
                dateAdded: string,
                qtyAvailable: number, 
                qtyPending: number, 
                qtyAccepted: number,
                qtyCompleted: number,
                isObsolete: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.pricePerUnit = pricePerUnit;
        this.unit = unit;
        this.unitsPer = unitsPer;
        this.categoryId = categoryId;
        this.producerName = producerName;
        this.dateAdded = dateAdded;
        this.qtyAvailable = qtyAvailable;
        this.qtyPending = qtyPending;
        this.qtyAccepted = qtyAccepted;
        this.qtyCompleted = qtyCompleted;
        this.isObsolete = isObsolete;
    }
}

