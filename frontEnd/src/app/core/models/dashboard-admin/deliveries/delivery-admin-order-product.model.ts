export class deliveryAdminOrderProduct {
    
    constructor(
        public id: number,
        public productName: string,
        public pricePerUnit: number,
        public unit: string,
        public unitsPer: number,
        public qtyOrdered: number
    ) {}
}