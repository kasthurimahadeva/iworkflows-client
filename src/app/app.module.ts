import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { MailModule } from './main/apps/mail/mail.module';
import { ChatModule } from './main/apps/chat/chat.module';
import { ProjectModule } from './main/apps/dashboards/project/project.module';
import { FuseLayoutService } from './core/services/layout.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { FuseMatchMedia } from './core/services/match-media.service';
import { FuseNavbarService } from './core/components/layout/navbar/navbar.service';
import { SharedModule } from './core/modules/shared.module';
import { FuseMdSidenavHelperService } from './core/directives/md-sidenav-helper/md-sidenav-helper.service';
import { UIPageLayoutsModule } from './main/ui/page-layouts/page-layouts.module';
import { FuseLayoutModule } from './core/components/layout/layout.module';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { environment } from 'environments/environment';
import { MailListComponent } from './main/apps/mail/mail-list/mail-list.component';
import { MailDetailsComponent } from './main/apps/mail/mail-details/mail-details.component';
import { MailDataService } from './main/apps/mail/mail-data.service';
import { HttpModule } from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {FuseFakeDbService} from './fuse-fake-db/fuse-fake-db.service';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

const appRoutes: Routes = [
    {
        path        : 'apps/mail',
        loadChildren: './main/apps/mail/mail.module#MailModule'
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

        InMemoryWebApiModule.forRoot(FuseFakeDbService, { delay: 500 }),

        PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),

        FuseLayoutModule,

        // MailModule,
        ChatModule,
        ProjectModule,

        UIPageLayoutsModule
    ],
    providers   : [
        MailDataService,
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
