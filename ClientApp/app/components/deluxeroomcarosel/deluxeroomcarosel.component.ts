import { Component, EventEmitter } from '@angular/core'
import { RoomTypeDataService } from '../Services/setroomtypeservice';
@Component({
    selector: 'deluxe-room-carosel',
    templateUrl: './deluxeroomcarosel.component.html'

})

export class DeluxeRoomCaroselComponent {
    constructor(private _roomtype: RoomTypeDataService) {
        
    }
    setRoomType() {
        
        this._roomtype.setUserData('Deluxe Room');
    }
    roomttypeevent = new EventEmitter<String>();
    setRoomTypeEvent() {
        this.roomttypeevent.emit("Deluxe Room");
    }



}