import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationStart, Router, NavigationEnd, Route, RouterState } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class FuseLayoutService
{
    defaultSettings: { navigation: string, toolbar: string, footer: string };
    onSettingsChanged: BehaviorSubject<{ navigation: string, toolbar: string, footer: string }>;

    /**
     * @param router
     */
    constructor(private router: Router)
    {
        // Set the default settings
        this.defaultSettings = {
            navigation: 'left', // 'right', 'left', 'top', none
            toolbar   : 'none', // 'above', 'below', none
            footer    : 'none' // 'above', 'below', none
        };

        // Create the behavior subject
        this.onSettingsChanged = new BehaviorSubject(this.defaultSettings);

        // Reload the default settings on every navigation start
        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationStart )
                {
                    this.setSettings(this.defaultSettings);
                }
            }
        );
    }

    /**
     * Sets settings
     * @param settings
     */
    setSettings(settings)
    {
        const newSettings = Object.assign({}, this.defaultSettings, settings);
        this.onSettingsChanged.next(newSettings);
    }
}
