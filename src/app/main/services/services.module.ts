import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components';

import { FuseConfigServiceDocsComponent } from 'app/main/services/config/config.component';
import { FuseSplashScreenServiceDocsComponent } from 'app/main/services/splash-screen/splash-screen.component';

const routes = [
    {
        path     : 'config',
        component: FuseConfigServiceDocsComponent
    },
    {
        path     : 'splash-screen',
        component: FuseSplashScreenServiceDocsComponent
    }
];

@NgModule({
    declarations: [
        FuseConfigServiceDocsComponent,
        FuseSplashScreenServiceDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule,
        FuseHighlightModule
    ],
})

export class ServicesModule
{
}
