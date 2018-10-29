import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components';

import {fuseConfig} from 'app/fuse-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';
import {SampleModule} from 'app/main/sample/sample.module';
import {LoginModule} from 'app/main/pages/authentication/login/login.module';
import {LoginComponent} from "./main/pages/authentication/login/login.component";
import {CarListComponent} from "./main/sample/car-list/car-list.component";
import {CarEditComponent} from "./main/sample/car-edit/car-edit.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'car-list', pathMatch: 'full'},
    {path: 'car-list', component: CarListComponent},
    {path: 'car-add', component: CarEditComponent},
    {path: 'car-edit/:id', component: CarEditComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LoginModule,
        LayoutModule,
        SampleModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
