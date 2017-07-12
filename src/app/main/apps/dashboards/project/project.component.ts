import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../core/services/layout.service';

@Component({
    selector   : 'fuse-project',
    templateUrl: './project.component.html',
    styleUrls  : ['./project.component.scss']
})
export class ProjectComponent implements OnInit
{
    layoutSettings: any;

    constructor(private layoutService: LayoutService)
    {
        /*this.layoutService.setSettings({
            navigation: 'left',
            toolbar   : 'above',
            footer    : 'above'
        });*/
        // this.layoutSettings = Object.assign(this.layoutSettings, this.layoutService.getSettings());
    }

    onSettingsChanged()
    {
        this.layoutService.setSettings({...this.layoutSettings});
    }

    ngOnInit()
    {
        this.layoutSettings = this.layoutService.getSettings();
    }

}
