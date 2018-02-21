import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseConfigServiceDocsComponent } from './config/config.component';
import { FuseSplashScreenServiceDocsComponent } from './splash-screen/splash-screen.component';

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
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseConfigServiceDocsComponent,
        FuseSplashScreenServiceDocsComponent
    ]
})

export class FuseServicesModule
{
}
