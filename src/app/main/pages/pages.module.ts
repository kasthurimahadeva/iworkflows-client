import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './authentication/login/login.component';
import { Login2Component } from './authentication/login-2/login-2.component';
import { RegisterComponent } from './authentication/register/register.component';
import { Register2Component } from './authentication/register-2/register-2.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LockComponent } from './authentication/lock/lock.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { Error404Component } from './errors/404/error-404.component';
import { Error500Component } from './errors/500/error-500.component';
import { InvoiceModernComponent } from './invoices/modern/modern.component';
import { InvoiceCompactComponent } from './invoices/compact/compact.component';
import { InvoiceService } from './invoices/invoice.service';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ProfileModule } from './profile/profile.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { SearchModule } from './search/search.module';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';

const routes = [
    {
        path     : 'pages/auth/login',
        component: LoginComponent
    },
    {
        path     : 'pages/auth/login-2',
        component: Login2Component
    },
    {
        path     : 'pages/auth/register',
        component: RegisterComponent
    },
    {
        path     : 'pages/auth/register-2',
        component: Register2Component
    },
    {
        path     : 'pages/auth/forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path     : 'pages/auth/reset-password',
        component: ResetPasswordComponent
    },
    {
        path     : 'pages/auth/lock',
        component: LockComponent
    },
    {
        path     : 'pages/coming-soon',
        component: ComingSoonComponent
    },
    {
        path     : 'pages/errors/error-404',
        component: Error404Component
    },
    {
        path     : 'pages/errors/error-500',
        component: Error500Component
    },
    {
        path     : 'pages/invoices/compact',
        component: InvoiceCompactComponent,
        resolve  : {
            invoice: InvoiceService
        }
    },
    {
        path     : 'pages/invoices/modern',
        component: InvoiceModernComponent,
        resolve  : {
            invoice: InvoiceService
        }
    },
    {
        path     : 'pages/maintenance',
        component: MaintenanceComponent
    },
    {
        path     : 'pages/profile',
        component: ProfileComponent,
        resolve  : {
            profile: ProfileService
        }
    },
    {
        path     : 'pages/search',
        component: SearchComponent,
        resolve  : {
            search: SearchService
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        ProfileModule,
        SearchModule
    ],
    declarations: [
        LoginComponent,
        Login2Component,
        RegisterComponent,
        Register2Component,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        LockComponent,
        ComingSoonComponent,
        Error404Component,
        Error500Component,
        InvoiceCompactComponent,
        InvoiceModernComponent,
        MaintenanceComponent
    ],
    providers   : [
        InvoiceService,
        ProfileService,
        SearchService
    ]
})
export class PagesModule
{
}
