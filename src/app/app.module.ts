import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MailModule} from './main/apps/mail/mail.module';
import {ChatModule} from './main/apps/chat/chat.module';
import {NavigationModule} from './navigation/navigation.module';
import {ProjectModule} from './main/apps/dashboards/project/project.module';
import {SharedModule} from './core/shared.module';
import {NavigationService} from './navigation/navigation.service';
import {CardedFullWidthModule} from './main/ui/page-layouts/carded/fullwidth/fullwidth.module';

const appRoutes: Routes = [
    {path: '**', redirectTo: 'apps/dashboards/project'}
];

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        ToolbarComponent,
    ],
    imports     : [
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        NavigationModule,
        MailModule,
        ChatModule,
        ProjectModule,
        CardedFullWidthModule
    ],
    providers   : [NavigationService],
    bootstrap   : [AppComponent]
})
export class AppModule
{
}
