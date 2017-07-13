import { Component, OnInit } from '@angular/core';

@Component({
    selector   : 'fuse-left-sidenav',
    templateUrl: './left-sidenav.component.html',
    styleUrls  : ['./left-sidenav.component.scss']
})
export class CardedLeftSidenavComponent implements OnInit
{
    sidenavMode: string;

    constructor()
    {

        this.sidenavMode = 'side';
    }

    ngOnInit()
    {
        setTimeout(() =>
        {
            this.sidenavMode = 'over'
        }, 1000);
    }
}
