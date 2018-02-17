import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseRegisterComponent } from './register.component';

const routes = [
    {
        path     : 'auth/register',
        component: FuseRegisterComponent
    }
];

@NgModule({
    declarations: [
        FuseRegisterComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class RegisterModule
{
}
