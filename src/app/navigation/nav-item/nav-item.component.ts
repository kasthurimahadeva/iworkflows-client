import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector   : 'fuse-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls  : ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-item';
    @Input() item: any;

    constructor()
    {
    }

    ngOnInit()
    {
    }

}
