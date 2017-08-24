import { deliveryAdminOrderProduct } from './delivery-admin-order-product.model';

export class deliveryAdminOrder {
    
    constructor(
        public id: number,
        public userName: string,
        public orderStatus: string,
        public dateOrdered: string,
        public orderValue: number,
        public products: deliveryAdminOrderProduct[]
    ) {}
}