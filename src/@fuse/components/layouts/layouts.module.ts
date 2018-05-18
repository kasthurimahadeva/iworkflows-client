import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuseVerticalNavBasicLayoutComponent } from '@fuse/components/layouts/vertical-nav/basic/basic.component';

@NgModule({
    declarations: [
        FuseVerticalNavBasicLayoutComponent
    ],
    imports     : [
        CommonModule
    ],
    exports     : [
        FuseVerticalNavBasicLayoutComponent
    ]
})
export class FuseLayoutsModule
{
}
