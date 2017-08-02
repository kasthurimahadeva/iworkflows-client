import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseLayoutService } from '../core/services/layout.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector     : 'fuse-main',
    templateUrl  : './main.component.html',
    styleUrls    : ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseMainComponent implements OnInit, OnDestroy
{
    onSettingsChanged: Subscription;
    layoutSettings: { navigation: string, toolbar: string, footer: string };

    constructor(private layoutService: FuseLayoutService)
    {
        this.onSettingsChanged =
            this.layoutService.onSettingsChanged
                .subscribe(
                    (newSettings) => {
                        this.layoutSettings = newSettings;
                    }
                );
    }

    ngOnInit()
    {
    }

    ngOnDestroy()
    {
        this.onSettingsChanged.unsubscribe();
    }
}
