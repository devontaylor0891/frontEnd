import { ProducerModel } from './producer.model';
import { ScheduleModel } from './schedule.model';
//import { CategoryModel } from './category.model';

export class SearchResultModel {

    constructor(
        public id: number,
        public name: string,
        public category: string,
        public description: string,
        public imageUrl: string,
        public pricePerUnit: number,
        public unit: string,
        public unitsPer: number,
        public qtyAvailable: number,
        public producer: ProducerModel,
        public deliveries: ScheduleModel[]
    ) {}

}