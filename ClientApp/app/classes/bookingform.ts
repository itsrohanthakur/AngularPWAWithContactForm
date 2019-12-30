export class bookingform{
    name: string;
    email: string;
    contact: number;
    roomtype: string;
    message: string;
    checkin: Date;
    checkout: Date;

    constructor(values: Object={ }) {
        Object.assign(this, values);
    }

}