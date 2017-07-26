import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import {
    FuseMdSidenavHelperDirective,
    FuseMdSidenavTogglerDirective
} from '../directives/md-sidenav-helper/md-sidenav-helper.directive';
import { FusePipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective
    ],
    imports     : [
        FlexLayoutModule,
        MaterialModule,
        NgxDatatableModule,
        CommonModule,
        FormsModule,
        FusePipesModule,
        PerfectScrollbarModule
    ],
    exports     : [
        FlexLayoutModule,
        MaterialModule,
        NgxDatatableModule,
        CommonModule,
        FormsModule,
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective,
        FusePipesModule,
        PerfectScrollbarModule
    ]
})

export class SharedModule
{

}
