import { NgModule } from '@angular/core';

import { VerticalNavBasicLayoutModule } from 'app/layout/vertical/basic/basic.module';

@NgModule({
    imports: [
        VerticalNavBasicLayoutModule
    ],
    exports: [
        VerticalNavBasicLayoutModule
    ]
})
export class LayoutModule
{
}
