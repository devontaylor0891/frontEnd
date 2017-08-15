export class Product {
    public id: number;
    public name: string;
    public description: string;
    public price: number;
    public unit: string;
    public unitsPer: number;
    public totalPrice: number;
    public producerName: string;
    public imagePath: string;
    public quantityAvailable: number;
    public quantityPending: number;
    public quantitySold: number;
    public status: string;

    constructor(id: number, 
                name: string, 
                description: string, 
                price: number, 
                unit: string, 
                unitsPer: number, 
                totalPrice: number, 
                producerName: string, 
                imagePath: string, 
                quantityAvailable: number, 
                quantityPending: number, 
                quantitySold: number, 
                status: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.unit = unit;
        this.unitsPer = unitsPer;
        this.totalPrice = totalPrice;
        this.producerName = producerName;
        this.imagePath = imagePath;
        this.quantityAvailable = quantityAvailable;
        this.quantityPending = quantityPending;
        this.quantitySold = quantitySold;
        this.status = status;
    }
}

