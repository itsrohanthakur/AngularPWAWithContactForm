import { Injectable } from '@angular/core';

@Injectable()
export class RoomTypeDataService {
    roomtype: any;
    getUserData(): string {
        console.log("here" + this.roomtype)
        return this.roomtype;

    }
    setUserData(data: string) {
        this.roomtype = data;
        console.log("setting" + this.roomtype)

 
       
    }
   
    
}