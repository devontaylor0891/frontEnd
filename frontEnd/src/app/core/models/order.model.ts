import { ProductModel } from '../../core/models/product.model';
import { ScheduleModel } from '../../core/models/schedule.model';
import { ProducerModel } from '../../core/models/producer.model';
import { UserModel } from '../../core/models/user.model';
import { ProductQuantitiesModel } from '../../core/models/productQuantities.model';

export class OrderModel {

    constructor(
        public id: number,
        public chosenSchedule: ScheduleModel,
        public producer: ProducerModel,
        public consumer: UserModel,
        public tempId?: number,
        public productList?: ProductModel[],
        public orderDetails?: {
            productQuantities?: ProductQuantitiesModel[],
            consumerComment?: string,
            deliveryAddress?: string,
            deliveryFee?: number,
            createdDate?: string,
            producerComment?: string,
            orderStatus?: string,
            orderValue?: number,
            incompleteReason?: string,
            consumerPhone?: string
        }
    ) {}
}