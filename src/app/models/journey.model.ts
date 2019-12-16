export class Journey {

    public journeyId: string;
    public kilometers: number;
    public destination: string;
    public description: string;
    public date: string;
    public licensePlate: string;
    public isBilled: boolean;
    public parkingCost: number;
    public otherCost: number;
    public rate: number;
    public projectId: string;
    public creatorId: string;

    constructor(
        journeyId: string,
        kilometers: number,
        destination: string,
        description: string,
        date: string,
        licensePlate: string,
        isBilled: boolean,
        parkingCost: number,
        otherCost: number,
        rate: number,
        projectId: string,
        creatorId: string
    ) {
        this.journeyId = journeyId;
        this.kilometers = kilometers;
        this.destination = destination;
        this.description = description;
        this.date = date;
        this.licensePlate = licensePlate;
        this.isBilled = isBilled;
        this.parkingCost = parkingCost;
        this.otherCost = otherCost;
        this.rate = rate;
        this.projectId = projectId;
        this.creatorId = creatorId;
    }

    getTotalCost(): number {

        return this.kilometers * this.rate + this.parkingCost + this.otherCost;

    }

}