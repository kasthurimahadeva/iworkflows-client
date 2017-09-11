import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FuseNavigationService } from './navigation.service';

@Component({
    selector     : 'fuse-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseNavigationComponent
{
    verticalNavigation: any[];
    horizontalNavigation: any[];

    @Input('layout') layout = 'vertical';

    constructor(private navigationService: FuseNavigationService)
    {
        this.verticalNavigation = navigationService.getNavigation('verticalNavItems');
        this.horizontalNavigation = navigationService.getNavigation('horizontalNavItems');
    }

}
