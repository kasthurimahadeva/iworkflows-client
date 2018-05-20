import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material';

import { FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ContentModule } from 'app/layout/blocks/content/content.module';
import { FooterModule } from 'app/layout/blocks/footer/footer.module';
import { NavbarModule } from 'app/layout/blocks/navbar/navbar.module';
import { QuickPanelModule } from 'app/layout/blocks/quick-panel/quick-panel.module';
import { ToolbarModule } from 'app/layout/blocks/toolbar/toolbar.module';

import { VerticalNavBasicLayoutComponent } from 'app/layout/vertical/basic/basic.component';

@NgModule({
    declarations: [
        VerticalNavBasicLayoutComponent
    ],
    imports     : [
        MatSidenavModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports     : [
        VerticalNavBasicLayoutComponent
    ]
})
export class VerticalNavBasicLayoutModule
{
}
