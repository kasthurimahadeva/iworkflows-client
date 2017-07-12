import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        FlexLayoutModule,
        MaterialModule,
        CommonModule,
        FormsModule
    ],
})
export class SharedModule
{

}
