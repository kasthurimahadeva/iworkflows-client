import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector   : 'fuse-icons',
    templateUrl: './icons.component.html',
    styleUrls  : ['./icons.component.scss']
})
export class FuseIconsComponent implements OnInit
{
    icons: string[];
    filteredIcons: string[];
    loading = true;

    constructor(private http: Http)
    {

    }

    ngOnInit()
    {
        this.http.get('api/icons')
            .subscribe(icons => {
                this.icons = icons.json().data;
                this.filteredIcons = this.icons;
                this.loading = false;
            });
    }

    filterIcons(event)
    {
        const value = event.target.value;

        this.filteredIcons = this.icons.filter(icon => {
            return icon.includes(value);
        });
    }
}
