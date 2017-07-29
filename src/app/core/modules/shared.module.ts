import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import {
    FuseMdSidenavHelperDirective,
    FuseMdSidenavTogglerDirective
} from '../directives/md-sidenav-helper/md-sidenav-helper.directive';
import { FusePipesModule } from '../pipes/pipes.module';
import { ColorPickerModule } from 'ngx-color-picker';
import { FuseConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FuseCountdownComponent } from '../components/countdown/countdown.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
    declarations   : [
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective,
        FuseConfirmDialogComponent,
        FuseCountdownComponent
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
        NgxDatatableModule
    ],
    exports        : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective,
        FusePipesModule,
        PerfectScrollbarModule,
        ReactiveFormsModule,
        ColorPickerModule,
        NgxDnDModule,
        FuseCountdownComponent,
        NgxDatatableModule
    ],
    entryComponents: [
        FuseConfirmDialogComponent
    ]
})

export class SharedModule
{

}
