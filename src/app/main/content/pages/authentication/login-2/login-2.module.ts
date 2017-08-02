import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { Login2Component } from './login-2.component';

const routes = [
    {
        path     : 'pages/auth/login-2',
        component: Login2Component
    }
];

@NgModule({
    declarations: [
        Login2Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class Login2Module
{

}
