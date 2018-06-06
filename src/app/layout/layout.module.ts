import { NgModule } from '@angular/core';

import { VerticalLayout1BodyScrollModule } from 'app/layout/vertical/layout-1/body-scroll/body-scroll.module';
import { VerticalLayout1ContentScrollModule } from 'app/layout/vertical/layout-1/content-scroll/content-scroll.module';

import { VerticalLayout2Module } from 'app/layout/vertical/layout-2/layout-2.module';

@NgModule({
    imports: [
        VerticalLayout1BodyScrollModule,
        VerticalLayout1ContentScrollModule,

        VerticalLayout2Module
    ],
    exports: [
        VerticalLayout1BodyScrollModule,
        VerticalLayout1ContentScrollModule,

        VerticalLayout2Module
    ]
})
export class LayoutModule
{
}
