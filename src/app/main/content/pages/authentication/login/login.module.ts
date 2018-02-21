import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

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
        FuseSharedModule,
        RouterModule.forChild(routes)
    ]
})
export class LoginModule
{
}
