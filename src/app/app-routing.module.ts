import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnectComponent } from './main/components/connect/connect.component';
import { ProjectDashboardComponent } from './main/components/dashboard/project.component';
import { ProjectDashboardService } from './main/components/dashboard/project.service';
import { Error404Component } from './main/components/errors/404/error-404.component';
import { Error500Component } from './main/components/errors/500/error-500.component';
import { LoginComponent } from './main/components/login/login.component';
import { AuthGuard } from './main/guards/auth-guard.service';


const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: ProjectDashboardComponent,
        data: {requiresLogin: true},
        canActivate: [AuthGuard],
        resolve: {
            data: ProjectDashboardService
        }
    },
    {
        path: '',
        component: ProjectDashboardComponent,
        pathMatch: 'full',
        data: {requiresLogin: true},
        canActivate: [AuthGuard],
        resolve: {
            data: ProjectDashboardService
        }
    },
    {
        path: 'connect',
        component: ConnectComponent,
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    },
    {
        path: 'connect/nextcloud',
        component: ConnectComponent,
        // data: {requiresLogin: true},
        // canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'errors/error-404',
        component: Error404Component
    },
    {
        path: 'errors/error-500',
        component: Error500Component
    },
    {
        path        : 'angular-material-elements',
        loadChildren: './main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule'
    },
    {
        path: '**',
        redirectTo: 'errors/error-404'
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
  )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
