import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import 'hammerjs';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {FuseDirective, FuseComponent, NameGetterComponent} from './fuse-component/fuse.component';

@NgModule({
    declarations: [
        AppComponent,
        FuseComponent,
        FuseDirective,
        NameGetterComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule
{
}
