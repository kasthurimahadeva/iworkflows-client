import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FuseNavigationService
{
    flatNavigation: any[] = [];

    onItemCollapsed: Subject<any> = new Subject;
    onItemCollapseToggled: Subject<any> = new Subject;

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get flattened navigation array
     *
     * @param navigation
     * @returns {any[]}
     */
    getFlatNavigation(navigation): any
    {
        for ( const navItem of navigation )
        {
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
                if ( navItem.children )
                {
                    this.getFlatNavigation(navItem.children);
                }
            }
        }

        return this.flatNavigation;
    }
}
