import { Component, OnInit ,EventEmitter} from '@angular/core'
import { RoomTypeDataService } from '../Services/setroomtypeservice';

@Component({
    selector: 'twinroom-carosel',
    templateUrl: './twinroomcarosel.component.html'

})

export class TwinRoomCaroselComponent {
    constructor(private _roomtype:RoomTypeDataService) {

    }

    setRoomType() {

        this._roomtype.setUserData('Twin Room');
    }

    roomttypeevent = new EventEmitter<String>();
    setRoomTypeEvent() {
        this.roomttypeevent.emit("Twin Room");
    }

}