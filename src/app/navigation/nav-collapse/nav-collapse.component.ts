import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector   : 'fuse-nav-collapse',
    templateUrl: './nav-collapse.component.html',
    styleUrls  : ['./nav-collapse.component.scss']
})
export class NavCollapseComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-collapse nav-item';
    @Input() item: any;

    constructor()
    {
    }

    ngOnInit()
    {
    }

}
