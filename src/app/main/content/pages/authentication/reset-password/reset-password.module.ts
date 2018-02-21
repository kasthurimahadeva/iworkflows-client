import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseResetPasswordComponent } from './reset-password.component';

const routes = [
    {
        path     : 'auth/reset-password',
        component: FuseResetPasswordComponent
    }
];

@NgModule({
    declarations: [
        FuseResetPasswordComponent
    ],
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ResetPasswordModule
{
}
