import { EventEmitter, Injectable } from '@angular/core';
import { NavigationModel } from '../../../navigation.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FuseNavigationService
{
    onNavCollapseToggle = new EventEmitter<any>();
    onNavCollapseToggled = new EventEmitter<any>();
    onNavigationModelChange: BehaviorSubject<any> = new BehaviorSubject({});
    navigationModel: NavigationModel;
    flatNavigation: any[] = [];

    constructor()
    {
        this.navigationModel = new NavigationModel();
        this.onNavigationModelChange.next(this.navigationModel.model);
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
     * Set the navigation model
     * @param model
     */
    setNavigationModel(model)
    {
        // console.log(model);

        this.navigationModel = model;

        console.log(this.navigationModel);

        this.onNavigationModelChange.next(this.navigationModel.model);
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
            navigationItems = this.navigationModel.model;
        }

        for ( const navItem of navigationItems )
        {
            if ( navItem.type === 'subheader' )
            {
                continue;
            }

            if ( navItem.type === 'item' )
            {
                this.flatNavigation.push({
                    title: navItem.title,
                    type : navItem.type,
                    icon : navItem.icon || false,
                    url  : navItem.url
                });

                continue;
            }

            if ( navItem.type === 'collapse' || navItem.type === 'group' )
            {
                this.getFlatNavigation(navItem.children);
            }
        }

        return this.flatNavigation;
    }
}
