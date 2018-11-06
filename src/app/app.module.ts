import {Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
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
import {AuthGuard} from './main/guards/auth-guard.service';
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
import {ConnectComponent} from './main/components/connect/connect.component';
import {ToastrModule} from 'ngx-toastr';
import {BasicAuthInterceptor} from './main/interceptors/basic.auth.interceptor';
import {ErrorInterceptor} from './main/interceptors/error.interceptor';
import { CamundaTaskComponent } from './main/components/camunda-task/camunda-task.component';


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
        path: 'task',
        component: CamundaTaskComponent,
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
    declarations: [
        AppComponent,
        LoginComponent,
        ProjectDashboardComponent,
        ConnectComponent,
        CamundaTaskComponent,
        Error404Component,
        Error500Component
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        ToastrModule.forRoot({
            newestOnTop: true
        }),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatMomentDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatSortModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,

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
        },
        BasicAuthInterceptor,
        ErrorInterceptor
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
