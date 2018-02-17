import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';
import { FuseNavigationModule } from '@fuse/components/navigation/navigation.module';
import { FuseThemeOptionsComponent } from '@fuse/components/theme-options/theme-options.component';
import { FuseShortcutsModule } from '@fuse/components/shortcuts/shortcuts.module';
import { FuseSearchBarModule } from '@fuse/components/search-bar/search-bar.module';

import { FuseMainComponent } from './main.component';
import { FuseContentComponent } from './content/content.component';
import { FuseFooterComponent } from './footer/footer.component';
import { FuseNavbarComponent } from './navbar/navbar.component';
import { FuseToolbarComponent } from './toolbar/toolbar.component';
import { FuseQuickPanelComponent } from './quick-panel/quick-panel.component';

import { FuseSidebarModule } from '@fuse/components/sidebar/sidebar.module';

@NgModule({
    declarations: [
        FuseContentComponent,
        FuseFooterComponent,
        FuseMainComponent,
        FuseNavbarComponent,
        FuseToolbarComponent,
        FuseThemeOptionsComponent,
        FuseQuickPanelComponent
    ],
    imports     : [
        SharedModule,
        RouterModule,
        FuseSidebarModule,
        FuseNavigationModule,
        FuseShortcutsModule,
        FuseSearchBarModule
    ],
    exports     : [
        FuseMainComponent
    ]
})

export class FuseMainModule
{
}
