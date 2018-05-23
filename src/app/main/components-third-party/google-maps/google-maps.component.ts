import { Component } from '@angular/core';

@Component({
    selector   : 'google-maps-docs',
    templateUrl: './google-maps.component.html',
    styleUrls  : ['./google-maps.component.scss']
})
export class GoogleMapsDocsComponent
{
    lat: number;
    lng: number;

    /**
     * Constructor
     */
    constructor()
    {
        // Set the defaults
        this.lat = -34.397;
        this.lng = 150.644;
    }
}
