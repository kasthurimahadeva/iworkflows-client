import {Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule, FuseWidgetModule} from '@fuse/components';

import {fuseConfig} from 'app/fuse-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';
import {SampleModule} from 'app/main/sample/sample.module';
import {AuthenticationService} from './shared/authentication.service';
import {AccessGuard} from './main/guards/access-guard';
import {LoginComponent} from './main/components/login/login.component';
import {Observable} from 'rxjs';
import {ProjectDashboardComponent} from './main/components/dashboard/project.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ProjectDashboardService} from './main/components/dashboard/project.service';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FakeDbService} from './fake-db/fake-db.service';
import {Error404Component} from './main/components/errors/404/error-404.component';
import {Error500Component} from './main/components/errors/500/error-500.component';
import {TodoModule} from './main/modules/todo/todo.module';
import { ConnectComponent } from './main/components/connect/connect.component';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    }
}

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: ProjectDashboardComponent,
        resolve: {
            data: ProjectDashboardService
        }
    },
    {
        path: '',
        component: ProjectDashboardComponent,
        pathMatch: 'full',
        data: {requiresLogin: true},
        canActivate: [AccessGuard],
        resolve: {
            data: ProjectDashboardService
        }
    },
    {
        path: 'connect',
        component: ConnectComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path     : 'errors/error-404',
        component: Error404Component
    },
    {
        path     : 'errors/error-500',
        component: Error500Component
    },
    {
        path: '**',
        redirectTo: 'errors/error-404'
    }
];


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProjectDashboardComponent,
        ConnectComponent,
        Error404Component,
        Error500Component
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,

        NgxChartsModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        FuseWidgetModule,

        // App modules
        LayoutModule,
        TodoModule,
        SampleModule
    ], providers: [
        AuthenticationService, {
            provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true,
        }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
