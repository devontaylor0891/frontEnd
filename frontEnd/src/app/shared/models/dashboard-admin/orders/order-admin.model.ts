import { ProductAdmin } from './product-admin.model';

export class OrderAdmin {
    
    constructor(
        public id: number,
        public firstName: string,
        public userId: number,
        public deliveryId: number,
        public deliveryType: string,
        public deliverydate: string,
        public deliveryStartTime: number,
        public deliveryEndTime: number,
        public deliveryLocation: string,
        public deliveryAddress: string,
        public producerName: string,
        public productList: any[]
    ) {}
    
}