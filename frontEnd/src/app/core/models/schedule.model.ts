export class ScheduleModel {
    constructor(
        public id: number,
        public producerId: number,
        public productList: number[],
        public type: string,
        public description: string,
        public startDateTime: string,
        public endDateTime: string,
        public readableDate: string,
        public hasFee: boolean,
        public hasWaiver: boolean,
        public latitude: number,
        public longitude: number,
        public city: string,
        public province: string,
        public orderDeadline: string,
        public address?: string,
        public fee?: number,
        public feeWaiver?: number,
        public orderCount?: number
    ) {}
}
