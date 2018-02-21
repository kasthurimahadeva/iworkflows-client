import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

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
        FuseSharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ResetPassword2Module
{
}
