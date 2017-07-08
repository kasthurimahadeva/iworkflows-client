import {Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {NavigationService} from '../navigation.service';

@Component({
    selector   : 'fuse-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls  : ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit
{
    @HostBinding('class') classes = 'nav-item';
    @Input() item: any;

    constructor(private navigationService: NavigationService)
    {
    }

    ngOnInit()
    {
    }

    onClick()
    {
        console.log('clicked');
        this.navigationService.navItemClicked.emit(this.item.url);
    }
}
