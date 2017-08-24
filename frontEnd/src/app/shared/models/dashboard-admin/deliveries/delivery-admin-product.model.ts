export class deliveryAdminProduct {
    
    constructor(
        public id: number,
        public productName: string,
        public pricePerUnit: number,
        public unit: string,
        public unitsPer: number,
        public qtyOrdered: number
    ) {}
    
}