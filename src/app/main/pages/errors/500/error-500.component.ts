import { Component } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';

@Component({
    selector   : 'error-500',
    templateUrl: './error-500.component.html',
    styleUrls  : ['./error-500.component.scss']
})
export class Error500Component
{
    constructor(
        private fuseConfig: FuseConfigService
    )
    {
        // Configure the layout
        this.fuseConfig.config = {
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        };
    }
}
