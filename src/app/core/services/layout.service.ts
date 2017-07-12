import { EventEmitter, Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Injectable()
export class LayoutService
{
    defaultSettings: { toolbar: string, navigation: string };
    settings: { toolbar: string, navigation: string };

    onSettingsChanged = new EventEmitter<{ toolbar: string, navigation: string }>();

    /**
     * @param router
     */
    constructor(private router: Router)
    {
        // Set the default settings
        this.defaultSettings = {
            navigation: 'left', // 'right', 'left', 'top', false
            toolbar   : 'above' // 'above', 'below', false
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
     * @returns {{navigation: any, toolbar: any}}
     */
    getSettings()
    {
        return this.settings;
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
