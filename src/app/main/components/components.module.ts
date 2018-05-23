import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatButtonToggleModule, MatFormFieldModule, MatIconModule, MatListModule, MatMenuModule, MatSelectModule, MatSlideToggleModule, MatTabsModule } from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseCountdownModule, FuseHighlightModule, FuseMaterialColorPickerModule, FuseWidgetModule } from '@fuse/components';
import { CardsDocsComponent } from 'app/main/components/cards/cards.component';
import { CountdownDocsComponent } from 'app/main/components/countdown/countdown.component';
import { HighlightDocsComponent } from 'app/main/components/highlight/highlight.component';
import { MaterialColorPickerDocsComponent } from 'app/main/components/material-color-picker/material-color-picker.component';
import { MultiLanguageDocsComponent } from 'app/main/components/multi-language/multi-language.component';
import { NavigationDocsComponent } from 'app/main/components/navigation/navigation.component';
import { SearchBarDocsComponent } from 'app/main/components/search-bar/search-bar.component';
import { SidebarDocsComponent } from 'app/main/components/sidebar/sidebar.component';
import { ShortcutsDocsComponent } from 'app/main/components/shortcuts/shortcuts.component';
import { WidgetDocsComponent } from 'app/main/components/widget/widget.component';

const routes = [
    {
        path     : 'cards',
        component: CardsDocsComponent
    },
    {
        path     : 'countdown',
        component: CountdownDocsComponent
    },
    {
        path     : 'highlight',
        component: HighlightDocsComponent
    },
    {
        path     : 'material-color-picker',
        component: MaterialColorPickerDocsComponent
    },
    {
        path     : 'multi-language',
        component: MultiLanguageDocsComponent
    },
    {
        path     : 'navigation',
        component: NavigationDocsComponent
    },
    {
        path     : 'search-bar',
        component: SearchBarDocsComponent
    },
    {
        path     : 'sidebar',
        component: SidebarDocsComponent
    },
    {
        path     : 'shortcuts',
        component: ShortcutsDocsComponent
    },
    {
        path     : 'widget',
        component: WidgetDocsComponent
    }
];

@NgModule({
    declarations: [
        CardsDocsComponent,
        CountdownDocsComponent,
        HighlightDocsComponent,
        MaterialColorPickerDocsComponent,
        MultiLanguageDocsComponent,
        NavigationDocsComponent,
        SearchBarDocsComponent,
        SidebarDocsComponent,
        ShortcutsDocsComponent,
        WidgetDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatTabsModule,

        NgxChartsModule,

        FuseSharedModule,

        FuseCountdownModule,
        FuseHighlightModule,
        FuseMaterialColorPickerModule,
        FuseWidgetModule
    ]
})
export class ComponentsModule
{
}
