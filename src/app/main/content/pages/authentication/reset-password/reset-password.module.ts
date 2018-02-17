import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

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
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ResetPasswordModule
{
}
