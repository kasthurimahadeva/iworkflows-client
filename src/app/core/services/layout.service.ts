import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationStart, Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class FuseLayoutService
{
    defaultSettings: { navigation: string, toolbar: string, footer: string };

    // onSettingsChanged = new EventEmitter<{ navigation: string, toolbar: string, footer: string }>();

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

        this.onSettingsChanged = new BehaviorSubject(this.defaultSettings);

        router.events.subscribe(
            (event) => {
                if ( event instanceof NavigationStart )
                {
                    const routerConfig = router.config;

                    const currentRouteConfig = routerConfig.find((config) => {
                        return '/' + config.path === event.url;
                    });

                    if ( !currentRouteConfig || !currentRouteConfig.data )
                    {
                        return;
                    }

                    if ( currentRouteConfig.data.layout )
                    {
                        this.setSettings(currentRouteConfig.data.layout);
                    }
                    else
                    {
                        this.setSettings(this.defaultSettings);
                    }
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
