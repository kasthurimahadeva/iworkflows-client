import { Component, ViewEncapsulation } from '@angular/core';
import { FuseNavigationService } from './navigation.service';

@Component({
    selector     : 'fuse-navigation',
    templateUrl  : './navigation.component.html',
    styleUrls    : ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseNavigationComponent
{
    navigation: any[];

    constructor(private navigationService: FuseNavigationService)
    {
        this.navigation = navigationService.getNavigation();
    }

}
