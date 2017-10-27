import { SimpleProducer } from './simple-producer.model';

export class SearchDeliveryModel {
	constructor (
		public id: number,
        public type: string,
        public startDateTime: string,
        public endDateTime: string,
        public hasFee: boolean,
        public city: string,
        public address: string,
        public province: string,
        public orderDeadline: string,
		public producer: SimpleProducer
	) {}
}