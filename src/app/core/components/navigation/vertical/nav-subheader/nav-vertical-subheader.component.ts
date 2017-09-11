import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector   : 'fuse-nav-vertical-subheader',
    templateUrl: './nav-vertical-subheader.component.html',
    styleUrls  : ['./nav-vertical-subheader.component.scss']
})
export class FuseNavVerticalSubheaderComponent implements OnInit
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
