import { EventEmitter, Injectable } from '@angular/core';
import { NavigationModel } from '../../../navigation.model';

@Injectable()
export class FuseNavigationService
{
    onNavCollapseToggled = new EventEmitter<any>();
    navigationModel: NavigationModel;
    flatNavigation: any[] = [];

    constructor()
    {
        this.navigationModel = new NavigationModel();
    }

    /**
     * Get navigation model
     * @returns {any[]}
     */
    getNavigationModel()
    {
        return this.navigationModel.model;
    }

    /**
     * Get flattened navigation array
     * @param navigationItems
     * @returns {any[]}
     */
    getFlatNavigation(navigationItems?)
    {
        if ( !navigationItems )
        {
            navigationItems = this.navigationModel;
        }

        for ( const navItem of navigationItems )
        {
            if ( navItem.type === 'subheader' )
            {
                continue;
            }

            if ( navItem.type === 'nav-item' )
            {
                this.flatNavigation.push({
                    title: navItem.title,
                    type : navItem.type,
                    icon : navItem.icon || false,
                    url  : navItem.url
                });

                continue;
            }

            if ( navItem.type === 'nav-collapse' )
            {
                this.getFlatNavigation(navItem.children);
            }
        }

        return this.flatNavigation;
    }
}
