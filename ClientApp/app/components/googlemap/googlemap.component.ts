import { Component } from '@angular/core';
//import { Component } from '@agm/core';

@Component({
    selector: 'google-map',
    templateUrl: './googlemap.component.html',
    styleUrls: ['./googlemap.component.css']

})

export class GoogleMapComponent {
    title: string ='Valley view location';
    lat: number = 31.093899969933325;
    long: number = 77.16573715209961;

}