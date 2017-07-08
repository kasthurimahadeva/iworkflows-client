import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FuseNavigation} from './navigation.model';

@Component({
    selector   : 'fuse-navigation',
    templateUrl: './navigation.component.html',
    styleUrls  : ['./navigation.component.scss'],
    providers  : [FuseNavigation],
    encapsulation: ViewEncapsulation.None

})
export class NavigationComponent implements OnInit
{
    navigation: object[];

    constructor(fuseNavigation: FuseNavigation)
    {
        this.navigation = fuseNavigation.array;
    }

    ngOnInit()
    {
    }

}
