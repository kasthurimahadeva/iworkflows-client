import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './core/components/layout/layout.component';
import {MailModule} from './main/apps/mail/mail.module';
import {ChatModule} from './main/apps/chat/chat.module';
import {ProjectModule} from './main/apps/dashboards/project/project.module';
import {CardedFullWidthModule} from './main/ui/page-layouts/carded/fullwidth/fullwidth.module';
import {LayoutService} from './core/services/layout.service';
import {NavbarComponent} from './core/components/layout/navbar/navbar.component';
import {ToolbarComponent} from './core/components/layout/toolbar/toolbar.component';
import {NavigationModule} from './core/components/navigation/navigation.module';
import {NavigationService} from './core/components/navigation/navigation.service';
import {SidenavComponent} from './core/components/sidenav/sidenav.component';
import {FuseMatchMedia} from './core/services/match-media.service';
import {NavbarToggleDirective} from './core/components/layout/navbar/navbar-toggle.directive';
import {NavbarService} from './core/components/layout/navbar/navbar.service';
import { ContentComponent } from './core/components/layout/content/content.component';
import { SharedModule } from './core/modules/shared.module';

const appRoutes: Routes = [
    {
        path      : '**',
        redirectTo: 'apps/dashboards/project'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        ToolbarComponent,
        NavbarComponent,
        SidenavComponent,
        NavbarToggleDirective,
        ContentComponent
    ],
    imports     : [
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        NavigationModule,
        MailModule,
        ChatModule,
        ProjectModule,
        CardedFullWidthModule
    ],
    providers   : [NavigationService, LayoutService, FuseMatchMedia, NavbarService],
    bootstrap   : [AppComponent]
})
export class AppModule
{
}
