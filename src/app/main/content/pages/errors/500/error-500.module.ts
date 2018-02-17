import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseError500Component } from './error-500.component';

const routes = [
    {
        path     : 'errors/error-500',
        component: FuseError500Component
    }
];

@NgModule({
    declarations: [
        FuseError500Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class Error500Module
{
}
