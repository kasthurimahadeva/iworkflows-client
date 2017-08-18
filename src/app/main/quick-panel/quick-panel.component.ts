import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector     : 'fuse-quick-panel',
    templateUrl  : './quick-panel.component.html',
    styleUrls    : ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseQuickPanelComponent implements OnInit
{
    date: Date;
    settings: any;
    notes: any[];
    events: any[];

    constructor(private http: Http)
    {
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud : false,
            retro : true
        };

    }

    ngOnInit()
    {
        this.http.get('api/quick-panel-notes')
            .subscribe(response => {
                this.notes = response.json().data;
            });

        this.http.get('api/quick-panel-events')
            .subscribe(response => {
                this.events = response.json().data;
            });

    }

}
