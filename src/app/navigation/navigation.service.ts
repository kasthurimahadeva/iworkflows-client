import {EventEmitter, Injectable} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {FuseNavigation} from './navigation.model';

@Injectable()
export class NavigationService
{
    navItemClicked = new EventEmitter<any>();
    clickedItemUrl: string;
    navigation: object[];

    constructor(private router: Router)
    {
        this.navigation = new FuseNavigation().items;
        router.events.subscribe(
            (event) =>
            {
                if ( event instanceof NavigationEnd )
                {
                    console.warn('event', event);
                    this.navItemClicked.emit(event.urlAfterRedirects);
                }
            }
        );
        this.navItemClicked.subscribe(
            (instance) =>
            {
                console.log('instance', instance);
                this.clickedItemUrl = instance;
            }
        );
    }

    getNavigation()
    {
        return this.navigation;
    }
}
