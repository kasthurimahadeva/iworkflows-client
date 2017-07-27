import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { ProjectModule } from './main/apps/dashboards/project/project.module';
import { FuseLayoutService } from './core/services/layout.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { FuseMatchMedia } from './core/services/match-media.service';
import { FuseNavbarService } from './core/components/layout/navbar/navbar.service';
import { SharedModule } from './core/modules/shared.module';
import { FuseMdSidenavHelperService } from './core/directives/md-sidenav-helper/md-sidenav-helper.service';
import { FuseLayoutModule } from './core/components/layout/layout.module';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FuseFakeDbService } from './fuse-fake-db/fuse-fake-db.service';
import { PagesModule } from './main/pages/pages.module';
import { UIModule } from './main/ui/ui.module';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

const appRoutes: Routes = [
    {
        path        : 'apps/mail',
        loadChildren: './main/apps/mail/mail.module#FuseMailModule'
    },
    {
        path        : 'apps/chat',
        loadChildren: './main/apps/chat/chat.module#ChatModule'
    },
    {
        path        : 'apps/calendar',
        loadChildren: './main/apps/calendar/calendar.module#FuseCalendarModule'
    },
    {
        path      : '**',
        redirectTo: 'apps/dashboards/project'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent
    ],
    imports     : [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterModule.forRoot(appRoutes),

        InMemoryWebApiModule.forRoot(FuseFakeDbService, {delay: 125}),

        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),

        FuseLayoutModule,

        ProjectModule,

        PagesModule,
        UIModule
    ],
    providers   : [
        FuseNavigationService,
        FuseLayoutService,
        FuseMatchMedia,
        FuseNavbarService,
        FuseMdSidenavHelperService
    ],
    bootstrap   : [AppComponent]
})
export class AppModule
{
}
