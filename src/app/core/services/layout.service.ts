import { EventEmitter, Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Injectable()
export class LayoutService
{
    defaultSettings: { navigation: string, toolbar: string, footer: string };
    settings: { navigation: string, toolbar: string, footer: string };

    onSettingsChanged = new EventEmitter<{ navigation: string, toolbar: string, footer: string }>();

    /**
     * @param router
     */
    constructor(private router: Router)
    {
        // Set the default settings
        this.defaultSettings = {
            navigation: 'left', // 'right', 'left', 'top', none
            toolbar   : 'above', // 'above', 'below', none
            footer    : 'above' // 'above', 'below', none
        };

        // Assign default settings at the init
        this.settings = {...this.defaultSettings};

        // Reset the default settings whenever navigation starts
        router.events.subscribe(
            (event) =>
            {
                if ( event instanceof NavigationStart )
                {
                    this.settings = {...this.defaultSettings};
                    this.onSettingsChanged.emit(this.settings);
                }
            }
        );
    }

    /**
     * Get Settings
     * @returns {{navigation: string, toolbar: string, footer: string}}
     */
    getSettings()
    {
        return {...this.settings};
    }

    /**
     * Set Settings
     * @param newSettings
     */
    setSettings(newSettings)
    {
        Object.assign(this.settings, newSettings);
        this.onSettingsChanged.emit(this.settings);
    }
}
