import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ConnectComponent} from '../components/connect/connect.component';
import {ProjectDashboardComponent} from '../components/dashboard/project.component';
import {ProjectDashboardService} from '../components/dashboard/project.service';
import {Error404Component} from '../components/errors/404/error-404.component';
import {Error500Component} from '../components/errors/500/error-500.component';
import {LoginComponent} from '../components/login/login.component';
import {AuthGuard} from '../guards/auth-guard.service';
import {TestComponent} from '../components/test/test.component';


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
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    },
    {
        path: 'connect/learnorg',
        component: ConnectComponent,
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'test',
        component: TestComponent
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
        path: 'angular-material-elements',
        loadChildren: '../../main/angular-material-elements/angular-material-elements.module#AngularMaterialElementsModule',
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    },
    {
        path: 'request',
        loadChildren: '../../main/modules/forms/forms.module#FormsModule',
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    },
    {
        path: 'history',
        loadChildren: '../../main/modules/request-history/request-history.module#RequestHistoryModule',
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'forms/leave-form',
    //     component: LeaveFormComponent,
    //     resolve: {leaveFormDetails: LeaveFormDataResolver}
    // },
    {
        path: '**',
        redirectTo: 'errors/error-404'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
            // { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
