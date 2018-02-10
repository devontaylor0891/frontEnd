import { ProducerModel } from './producer.model';
import { ScheduleModel } from './schedule.model';

export class ProductModel {

    constructor(public id: number, 
                public name: string, 
                public description: string, 
                public image: string, 
                public pricePerUnit: number, 
                public unit: string, 
                public unitsPer: number,
                public category: string,
                public subcategory: string,
                public producer: ProducerModel,
                public dateAdded: string,
                public qtyAvailable: number, 
                public qtyPending: number, 
                public qtyAccepted: number,
                public qtyCompleted: number,
                public isObsolete: boolean,
                public scheduleList: ScheduleModel[]
    ) {}
}