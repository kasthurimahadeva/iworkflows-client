import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseLoginComponent } from './login.component';

const routes = [
    {
        path     : 'auth/login',
        component: FuseLoginComponent
    }
];

@NgModule({
    declarations: [
        FuseLoginComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class LoginModule
{
}
