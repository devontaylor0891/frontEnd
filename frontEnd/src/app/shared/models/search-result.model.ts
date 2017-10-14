import { SimpleProducer } from './simple-producer.model';
import { Delivery } from './delivery.model';

export class SearchResultModel {

    constructor(
        public id: number,
        public name: string,
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