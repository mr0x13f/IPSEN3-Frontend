export class Journey {

    constructor(
        public journeyId: string,
        public kilometers: number,
        public destination: string,
        public description: string,
        public date: string,
        public licensePlate: string,
        public isBilled: boolean,
        public parkingCost: number,
        public otherCost: number,
        public rate: number,
        public projectId: string,
        public creatorId: string
    ) {}
}