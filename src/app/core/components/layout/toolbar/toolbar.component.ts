import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'fuse-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls  : ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit
{
    @Input() sidenav;

    constructor()
    {
    }

    ngOnInit()
    {
    }
}
