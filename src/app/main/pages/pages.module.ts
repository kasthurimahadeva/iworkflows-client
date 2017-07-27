import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { Login2Component } from './authentication/login-2/login-2.component';
import { RegisterComponent } from './authentication/register/register.component';

const routes = [
    {
        path     : 'pages/auth/login',
        component: LoginComponent,
        data     : {
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        }
    },
    {
        path     : 'pages/auth/login-2',
        component: Login2Component,
        data     : {
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        }
    },
    {
        path     : 'pages/auth/register',
        component: RegisterComponent,
        data     : {
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        LoginComponent,
        Login2Component,
        RegisterComponent
    ]
})
export class PagesModule
{
}
