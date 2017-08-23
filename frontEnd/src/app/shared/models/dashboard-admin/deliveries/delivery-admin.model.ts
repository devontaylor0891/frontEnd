import { ProductAdmin } from './product-admin.model';
import { OrderAdmin } from './order-admin.model';

export class DeliveryAdmin {
    
    constructor(
        public id: number,
        public date: string,
        public startTime: number,
        public endTime: number,
        public location: string,
        public latitude: number,
        public longitude: number,
        public producerName: string,
        public deliveryType: string,
        public hasDeliveryFee: boolean,
        public deliveryFee: number,
        public products: ProductAdmin[],
        public orders: OrderAdmin[]
    ) {}
    
}