import { NgModule } from '@angular/core';
import { SharedModule } from 'app/core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseRegister2Component } from './register-2.component';

const routes = [
    {
        path     : 'pages/auth/register-2',
        component: FuseRegister2Component
    }
];

@NgModule({
    declarations: [
        FuseRegister2Component
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class Register2Module
{

}
