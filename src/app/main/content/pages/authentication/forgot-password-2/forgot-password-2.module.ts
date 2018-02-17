import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseForgotPassword2Component } from './forgot-password-2.component';

const routes = [
    {
        path     : 'auth/forgot-password-2',
        component: FuseForgotPassword2Component
    }
];

@NgModule({
    declarations: [
        FuseForgotPassword2Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ForgotPassword2Module
{
}
