import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
    selector   : 'fuse-layout',
    templateUrl: './layout.component.html',
    styleUrls  : ['./layout.component.scss']
})
export class LayoutComponent implements OnInit
{
    layoutSettings: { toolbar: any, navigation: any };

    constructor(private layoutService: LayoutService)
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
