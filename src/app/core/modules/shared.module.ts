import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {
    FuseMdSidenavHelperDirective,
    FuseMdSidenavTogglerDirective
} from '../directives/md-sidenav-helper/md-sidenav-helper.directive';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {KeysPipe} from '../pipes/keys';

@NgModule({
    declarations: [
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective,
        KeysPipe
    ],
    imports     : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        PerfectScrollbarModule
    ],
    exports     : [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule,
        FuseMdSidenavHelperDirective,
        FuseMdSidenavTogglerDirective,
        PerfectScrollbarModule,
        KeysPipe
    ]
})

export class SharedModule
{

}
