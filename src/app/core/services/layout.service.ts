import {EventEmitter, Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

@Injectable()
export class LayoutService
{
    /**
     * Default Settings
     * @type {{navigation: string; toolbar: string}}
     */
    defaultSettings = {
        navigation: 'left', // 'right', 'left', 'top', false
        toolbar   : 'above' // 'above', 'below', false
    }

    settings;

    settingsChanged = new EventEmitter<{ toolbar: any, navigation: any }>()

    constructor(private router: Router)
    {
        // Asign default settings at the init
        this.settings = {...this.defaultSettings};

        // Reset the default settings whenever navigation starts
        router.events.subscribe(
            (event) =>
            {
                if ( event instanceof NavigationStart )
                {
                    this.settings = {...this.defaultSettings};
                    this.settingsChanged.emit(this.settings);
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
        this.settingsChanged.emit(this.settings);
        console.log('settings changed');
    }
}
