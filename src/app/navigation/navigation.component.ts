import {Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationService} from './navigation.service';

@Component({
    selector     : 'fuse-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit
{
    navigation: object[];

    constructor(private navigationService: NavigationService)
    {
        this.navigation = navigationService.getNavigation();
    }

    ngOnInit()
    {
    }

}
