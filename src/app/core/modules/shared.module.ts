import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FuseMdSidenavHelperDirective, FuseMdSidenavTogglerDirective } from '../directives/md-sidenav-helper/md-sidenav-helper.directive';
import { FusePipesModule } from '../pipes/pipes.module';
import { FuseConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { FuseCountdownComponent } from '../components/countdown/countdown.component';
import { FuseNavigationService } from '../components/navigation/navigation.service';
import { FuseMatchMedia } from '../services/match-media.service';
import { FuseNavbarVerticalService } from '../../main/navbar/vertical/navbar-vertical.service';
import { FuseMdSidenavHelperService } from '../directives/md-sidenav-helper/md-sidenav-helper.service';
import { FuseHljsComponent } from '../components/hljs/hljs.component';
import { FuseIfOnDomDirective } from '../directives/fuse-if-on-dom/fuse-if-on-dom.directive';
import { FuseMaterialColorPickerComponent } from '../components/material-color-picker/material-color-picker.component';
import { CookieService } from 'ngx-cookie-service';
import { DateTimePickerModule } from 'ng-pick-datetime';


@NgModule({
    declarations   : [
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective,
        FuseConfirmDialogComponent,
        FuseCountdownComponent,
        FuseHljsComponent,
        FuseIfOnDomDirective,
        FuseMaterialColorPickerComponent
    ],
    imports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        FusePipesModule,
        PerfectScrollbarModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
        DateTimePickerModule
    ],
    exports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective,
        FusePipesModule,
        FuseCountdownComponent,
        FuseHljsComponent,
        PerfectScrollbarModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        NgxDatatableModule,
        FuseIfOnDomDirective,
        FuseMaterialColorPickerComponent,
        DateTimePickerModule
    ],
    entryComponents: [
        FuseConfirmDialogComponent
    ],
    providers      : [
        CookieService,
        FuseNavigationService,
        FuseMatchMedia,
        FuseNavbarVerticalService,
        FuseMdSidenavHelperService
    ]
})

export class SharedModule
{

}
