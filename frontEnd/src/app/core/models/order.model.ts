import { ProductModel } from '../../core/models/product.model';
import { ScheduleModel } from '../../core/models/schedule.model';
import { ProducerModel } from '../../core/models/producer.model';
import { UserModel } from '../../core/models/user.model';

export class OrderModel {

    constructor(
        public id?: number,
        public chosenSchedule?: ScheduleModel,
        public producer?: ProducerModel,
        public consumer?: UserModel,
        public productList?: ProductModel[],
        public orderDetails?: {
            consumerComment?: string,
            deliveryAddress?: string,
            createdDate?: string,
            producerComment?: string,
            orderStatus?: string
        }
    ) {}
}