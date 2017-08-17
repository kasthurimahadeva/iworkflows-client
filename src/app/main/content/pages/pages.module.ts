import { NgModule } from '@angular/core';

import { LoginModule } from './authentication/login/login.module';
import { Login2Module } from './authentication/login-2/login-2.module';
import { RegisterModule } from './authentication/register/register.module';
import { Register2Module } from './authentication/register-2/register-2.module';
import { ForgotPasswordModule } from './authentication/forgot-password/forgot-password.module';
import { LockModule } from './authentication/lock/lock.module';
import { ResetPasswordModule } from './authentication/reset-password/reset-password.module';
import { ComingSoonModule } from './coming-soon/coming-soon.module';
import { Error404Module } from './errors/404/error-404.module';
import { Error500Module } from './errors/500/error-500.module';
import { InvoiceCompactModule } from './invoices/compact/compact.module';
import { InvoiceModernModule } from './invoices/modern/modern.module';
import { MaintenanceModule } from './maintenance/maintenence.module';
import { ProfileModule } from './profile/profile.module';
import { SearchModule } from './search/search.module';

@NgModule({
    imports: [
        // Auth
        LoginModule,
        Login2Module,
        RegisterModule,
        Register2Module,
        ForgotPasswordModule,
        ResetPasswordModule,
        LockModule,

        // Coming-soon
        ComingSoonModule,

        // Errors
        Error404Module,
        Error500Module,

        // Invoices
        InvoiceModernModule,
        InvoiceCompactModule,

        // Maintenance
        MaintenanceModule,

        // Profile
        ProfileModule,

        // Search
        SearchModule
    ]
})
export class PagesModule
{
}
