export class ProducerModel {

    constructor(public id: number,
                public name: string,
                public location: string,
                public province: string,
                public address: string,
                public email: string,
                public longitude: number,
                public latitude: number,
                public firstName: string,
                public status: string,
                public productList: number[],
                public scheduleList: number[],
                public description?: string,
                public logoUrl?: string,
                public registrationDate?: string
    ) {}
}