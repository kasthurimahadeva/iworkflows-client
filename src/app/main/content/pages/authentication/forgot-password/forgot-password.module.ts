import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseForgotPasswordComponent } from './forgot-password.component';

const routes = [
    {
        path     : 'auth/forgot-password',
        component: FuseForgotPasswordComponent
    }
];

@NgModule({
    declarations: [
        FuseForgotPasswordComponent
    ],
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ForgotPasswordModule
{
}
