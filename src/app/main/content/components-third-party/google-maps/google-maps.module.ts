import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseGoogleMapsDocsComponent } from './google-maps.component';

const routes = [
    {
        path     : 'google-maps',
        component: FuseGoogleMapsDocsComponent
    }
];

@NgModule({
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        })
    ],
    declarations: [
        FuseGoogleMapsDocsComponent
    ]
})
export class GoogleMapsModule
{
}
