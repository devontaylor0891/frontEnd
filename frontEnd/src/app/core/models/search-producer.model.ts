import { SimpleProducer } from './simple-producer.model';
import { SimpleProductModel } from './simple-product.model';

export class SearchProducerModel {
	constructor (
		public producer: SimpleProducer,
		public products: SimpleProductModel[]
	) {}
}