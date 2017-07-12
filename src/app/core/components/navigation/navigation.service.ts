import {EventEmitter, Injectable} from '@angular/core';
import {FuseNavigation} from './navigation.model';

@Injectable()
export class NavigationService
{
    onNavCollapseToggled = new EventEmitter<any>();
    navigation: object[];

    constructor()
    {
        this.navigation = new FuseNavigation().items;
    }

    getNavigation()
    {
        return this.navigation;
    }
}
