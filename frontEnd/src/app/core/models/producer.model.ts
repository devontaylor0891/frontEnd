export class ProducerModel {

    constructor(public id: number,
                public name: string,
                public location: string,
                public province: string,
                public description: string,
                public email: string,
                public logoUrl: string,
                public longitude: number,
                public latitude: number,
                public firstName: string,
                public registrationDate: string,
                public status: string,
				public productList: number[],
                public scheduleList: number[]
    ) {}
}