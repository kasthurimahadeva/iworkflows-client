import { Component, OnInit } from '@angular/core';

import { FuseLayoutService } from '../../../../core/services/layout.service';

@Component({
    selector   : 'fuse-maintenance',
    templateUrl: './maintenance.component.html',
    styleUrls  : ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit
{
    constructor(private layoutService: FuseLayoutService)
    {
        this.layoutService.setSettings({
            navigation: 'none',
            toolbar   : 'none',
            footer    : 'none'
        });
    }

    ngOnInit()
    {

    }
}
