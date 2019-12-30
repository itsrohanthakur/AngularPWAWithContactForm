import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { MainCaroselComponent } from './components/maincarosel/maincarosel.component';
import { FamilySuiteCaroselComponent } from './components/familysuitecarosel/familysuitecarosel.component';
import { DeluxeRoomCaroselComponent } from './components/deluxeroomcarosel/deluxeroomcarosel.component';
import { TwinRoomCaroselComponent } from './components/twinroomcarosel/twinroomcarosel.component';
import { BookingFormComponent } from './components/bookingform/bookingform.component';
import { GoogleMapComponent } from './components/googlemap/googlemap.component';
import { SocialComponent } from './components/social/social.component';
import { AddressComponent } from './components/address/address.component';
//import { MdDatepickerModule, MdInputModule, MdNativeDateModule} from '@angular/material';
//import { BrowserModule } from '@angular/platform-browser';
import { FacilitiesComponent } from './components/facilities/facilities.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoomTypeDataService } from './components/Services/setroomtypeservice';


@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        MainCaroselComponent,
        FamilySuiteCaroselComponent,
        DeluxeRoomCaroselComponent,
        TwinRoomCaroselComponent,
        BookingFormComponent,
        GoogleMapComponent,
        SocialComponent,
        AddressComponent,
        FacilitiesComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBDuwyqr9mCf_inXTWfe-sCoUglJaMfFas'
        }),
        ReactiveFormsModule,
        //MdDatepickerModule,
        //MdInputModule,
        //MdNativeDateModule,
        //BrowserAnimationsModule,
        //BrowserModule,
        
    ],
    providers: [RoomTypeDataService],
    //bootstrap: [AppComponent]
})
export class AppModuleShared {
}
