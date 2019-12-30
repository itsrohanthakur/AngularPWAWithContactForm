
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule,Component, OnInit, Input } from '@angular/core'
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { setApiKey, send } from '@sendgrid/mail';
import { bookingform } from '../../classes/bookingform';
import { RoomTypeDataService } from '../Services/setroomtypeservice';


@Component({
    selector: 'booking-form',
    templateUrl: './bookingform.component.html'

})

export class BookingFormComponent implements OnInit {
    constructor(private roomtypeservice: RoomTypeDataService) {
    }
    bookingform = new bookingform;  
    ngOnInit() {
            this.bookingform = new bookingform({
            name: "", email: "", contact: "0", roomtype:"Select Room Type",
            message: "", checkin: "03-31-2018", checkout: "03-31-2018"
        });
 
    }
    getRoomType() {
        //console.log("data returned by getdata" + this.roomtypeservice.getUserData())
        return this.roomtypeservice.getUserData();
    }
   

}