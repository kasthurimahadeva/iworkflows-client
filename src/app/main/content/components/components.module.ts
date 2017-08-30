import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { FusePriceTablesComponent } from './price-tables/price-tables.component';
import { FuseCountdownDocsComponent } from './countdown/countdown.component';
import { FuseHljsDocsComponent } from './hljs/hljs.component';
import { FuseMaterialColorPickerDocsComponent } from './material-color-picker/material-color-picker.component';
import { FuseNavigationDocsComponent } from './navigation/navigation.component';
import { FuseShortcutsDocsComponent } from './shortcuts/shortcuts.component';
import { FuseSearchBarDocsComponent } from 'app/main/content/components/search-bar/search-bar.component';
import { FuseWidgetDocsComponent } from './widget/widget.component';
import { FuseWidgetModule } from '../../../core/components/widget/widget.module';

const routes = [
    {
        path     : 'components/countdown',
        component: FuseCountdownDocsComponent
    },
    {
        path     : 'components/highlightjs',
        component: FuseHljsDocsComponent
    },
    {
        path     : 'components/material-color-picker',
        component: FuseMaterialColorPickerDocsComponent
    },
    {
        path     : 'components/navigation',
        component: FuseNavigationDocsComponent
    },
    {
        path     : 'components/price-tables',
        component: FusePriceTablesComponent
    },
    {
        path     : 'components/search-bar',
        component: FuseSearchBarDocsComponent
    },
    {
        path     : 'components/shortcuts',
        component: FuseShortcutsDocsComponent
    },
    {
        path     : 'components/widget',
        component: FuseWidgetDocsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        FuseWidgetModule
    ],
    declarations: [
        FuseCountdownDocsComponent,
        FuseHljsDocsComponent,
        FuseMaterialColorPickerDocsComponent,
        FuseNavigationDocsComponent,
        FusePriceTablesComponent,
        FuseSearchBarDocsComponent,
        FuseShortcutsDocsComponent,
        FuseWidgetDocsComponent
    ]
})
export class ComponentsModule
{
}
