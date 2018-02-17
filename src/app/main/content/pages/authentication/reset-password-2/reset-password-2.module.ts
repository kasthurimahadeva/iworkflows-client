import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseResetPassword2Component } from './reset-password-2.component';

const routes = [
    {
        path     : 'auth/reset-password-2',
        component: FuseResetPassword2Component
    }
];

@NgModule({
    declarations: [
        FuseResetPassword2Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ResetPassword2Module
{
}
