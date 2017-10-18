import { SimpleProducer } from './simple-producer.model';
import { Delivery } from './delivery.model';
import { CategoryModel } from './category.model';

export class SearchResultModel {

    constructor(
        public id: number,
        public name: string,
        public category: CategoryModel,
        public description: string,
        public imageUrl: string,
        public pricePerUnit: number,
        public unit: string,
        public unitsPer: number,
        public qtyAvailable: number,
        public producer: SimpleProducer,
        public deliveries: Delivery[]
    ) {}

}