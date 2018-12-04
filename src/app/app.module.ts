import 'hammerjs';

import {HTTP_INTERCEPTORS, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable, NgModule} from '@angular/core';
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
    MatTreeModule,
} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule, FuseWidgetModule} from '@fuse/components';
import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from 'app/app.component';
import {fuseConfig} from 'app/fuse-config';
import {LayoutModule} from 'app/layout/layout.module';
import {ToastrModule} from 'ngx-toastr';
import {Observable} from 'rxjs';

import {FakeDbService} from './fake-db/fake-db.service';
import {ConnectComponent} from './main/components/connect/connect.component';
import {ProjectDashboardComponent} from './main/components/dashboard/project.component';
import {Error404Component} from './main/components/errors/404/error-404.component';
import {Error500Component} from './main/components/errors/500/error-500.component';
import {LoginComponent} from './main/components/login/login.component';
import {TestComponent} from './main/components/test/test.component';
import {BasicAuthInterceptor} from './main/interceptors/basic.auth.interceptor';
import {ErrorInterceptor} from './main/interceptors/error.interceptor';
import {MyTaskModule} from './main/modules/my-tasks/my-task.module';
import {RequestHistoryModule} from './main/modules/request-history/request-history.module';
import {TodoModule} from './main/modules/todo/todo.module';
import {AppRoutingModule} from './main/routing/app-routing.module';
import {UploadModule} from './main/modules/upload/upload.module';
import { MoodleLoginComponent } from './main/components/moodle-login/moodle-login.component';
import { DebugTableComponent } from './main/components/debug-table/debug-table.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    }
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ProjectDashboardComponent,
        ConnectComponent,
        TestComponent,
        Error404Component,
        Error500Component,
        MoodleLoginComponent,
        DebugTableComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        // Toast notifications
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

        UploadModule,

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
        MyTaskModule,
        RequestHistoryModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BasicAuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: XhrInterceptor,
            multi: true
        },

        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
