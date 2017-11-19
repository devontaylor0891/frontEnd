export class Delivery {

    constructor(
        public id: number,
        public productList: number[],
        public type: string,
        public description: string,
        public startDateTime: string,
        public endDateTime: string,
        public hasFee: boolean,
        public fee: number,
        public feeWaiver: number,
        public latitude: number,
        public longitude: number,
        public city: string,
        public address: string,
        public province: string,
        public orderDeadline: string
    ) {}

}