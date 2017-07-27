import { Component, OnDestroy, OnInit } from '@angular/core';
import { FuseLayoutService } from '../../../../core/services/layout.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'fuse-project',
    templateUrl: './project.component.html',
    styleUrls  : ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy
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

    onLayoutSettingsChanged()
    {
        this.layoutService.onSettingsChanged.next(this.layoutSettings);
    }
}
