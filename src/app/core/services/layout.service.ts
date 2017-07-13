import { EventEmitter, Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Injectable()
export class FuseLayoutService
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
            toolbar   : 'below', // 'above', 'below', none
            footer    : 'none' // 'above', 'below', none
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
     * Gets settings
     * @returns {{navigation: string, toolbar: string, footer: string}}
     */
    getSettings()
    {
        return {...this.settings};
    }

    /**
     * Sets settings
     * @param newSettings
     */
    setSettings(newSettings)
    {
        Object.assign(this.settings, newSettings);
        this.onSettingsChanged.emit(this.settings);
    }

    /**
     * Sets default settings
     * @param newDefaultSettings
     */
    setDefaultSettings(newDefaultSettings)
    {
        Object.assign(this.defaultSettings, newDefaultSettings);

        // this.onSettingsChanged.emit(this.settings);
    }
}
