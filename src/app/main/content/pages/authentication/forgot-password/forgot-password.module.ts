import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

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
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class ForgotPasswordModule
{

}
