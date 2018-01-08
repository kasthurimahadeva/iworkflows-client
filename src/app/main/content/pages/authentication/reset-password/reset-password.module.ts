import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

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
