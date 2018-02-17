import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseLogin2Component } from './login-2.component';

const routes = [
    {
        path     : 'auth/login-2',
        component: FuseLogin2Component
    }
];

@NgModule({
    declarations: [
        FuseLogin2Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class Login2Module
{
}
