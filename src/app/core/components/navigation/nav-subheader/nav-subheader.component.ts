import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'fuse-nav-subheader',
    templateUrl: './nav-subheader.component.html',
    styleUrls  : ['./nav-subheader.component.scss']
})
export class FuseNavSubheaderComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-subheader';
    @Input() item: any;

    constructor()
    {
    }

    ngOnInit()
    {
    }

}
