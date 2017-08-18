import { Component, OnInit } from '@angular/core';

import { FuseLayoutService } from '../../../../../core/services/layout.service';

@Component({
    selector   : 'fuse-error-404',
    templateUrl: './error-404.component.html',
    styleUrls  : ['./error-404.component.scss']
})
export class FuseError404Component implements OnInit
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
