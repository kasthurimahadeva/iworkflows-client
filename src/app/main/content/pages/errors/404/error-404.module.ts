import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseError404Component } from './error-404.component';

const routes = [
    {
        path     : 'errors/error-404',
        component: FuseError404Component
    }
];

@NgModule({
    declarations: [
        FuseError404Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class Error404Module
{
}
