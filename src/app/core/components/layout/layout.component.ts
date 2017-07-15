import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseLayoutService } from '../../services/layout.service';

@Component({
    selector     : 'fuse-layout',
    templateUrl  : './layout.component.html',
    styleUrls    : ['./layout.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseLayoutComponent implements OnInit
{
    layoutSettings: { navigation: string, toolbar: string, footer: string };

    constructor(private layoutService: FuseLayoutService)
    {
        this.layoutSettings = layoutService.getSettings();
    }

    ngOnInit()
    {
        this.layoutService.onSettingsChanged
            .subscribe(
                (newSettings) =>
                {
                    this.layoutSettings = newSettings;
                }
            );
    }

}
