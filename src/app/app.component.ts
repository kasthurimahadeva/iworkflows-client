import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LayoutService} from './core/services/layout.service';

@Component({
    selector   : 'fuse-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    providers  : [LayoutService]
})
export class AppComponent implements OnInit
{
    layoutSettings: { toolbar: any, navigation: any };

    constructor(private layoutService: LayoutService)
    {
        this.layoutSettings = layoutService.getSettings();
    }

    ngOnInit()
    {
        this.layoutService.settingsChanged
            .subscribe(
                (newSettings) =>
                {
                    this.layoutSettings = newSettings;
                }
            )
    }

    onNameChange()
    {

    }
}
