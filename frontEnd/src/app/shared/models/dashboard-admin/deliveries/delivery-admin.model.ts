import { deliveryAdminProduct } from './delivery-admin-product.model';
import { deliveryAdminOrder } from './delivery-admin-order.model';

export class DeliveryAdmin {
    
    constructor(
        public id: number,
        public date: string,
        public startTime: number,
        public endTime: number,
        public type: string,
        public location: string,
        public address: string,
        public description: string,
        public producerName: string,
        public deliveryType: string,
        public hasFee: boolean,
        public Fee: number,
        public hasFeeWaiver: boolean,
        public feeWaiverAmount: number,
        public products: deliveryAdminProduct[],
        public orders: deliveryAdminOrder[]
    ) {}
    
}
