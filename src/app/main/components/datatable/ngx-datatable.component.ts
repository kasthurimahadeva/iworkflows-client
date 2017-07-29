import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector   : 'fuse-ngx-datatable',
    templateUrl: './ngx-datatable.component.html',
    styleUrls  : ['./ngx-datatable.component.scss']
})
export class NgxDatatableComponent implements OnInit
{
    rows: any[];
    loadingIndicator = true;
    reorderable = true;

    columns = [
        {
            prop: 'name'
        },
        {
            prop: 'lastName'
        },
        {
            prop: 'company'
        }
    ];

    constructor(private http: Http)
    {

    }

    ngOnInit()
    {
        this.http.get('api/contacts')
            .subscribe(contacts => {
                this.rows = contacts.json().data;
                this.loadingIndicator = false;
            });
    }
}
