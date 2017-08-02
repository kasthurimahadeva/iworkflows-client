import { Component, OnInit } from '@angular/core';

import { FuseLayoutService } from '../../../../../core/services/layout.service';

@Component({
    selector   : 'fuse-error-500',
    templateUrl: './error-500.component.html',
    styleUrls  : ['./error-500.component.scss']
})
export class Error500Component implements OnInit
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
