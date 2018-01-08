import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { FuseCardsDocsComponent } from './cards/cards.component';
import { FuseCountdownDocsComponent } from './countdown/countdown.component';
import { FuseHighlightDocsComponent } from './highlight/highlight.component';
import { FuseMaterialColorPickerDocsComponent } from './material-color-picker/material-color-picker.component';
import { FuseMultiLanguageDocsComponent } from './multi-language/multi-language.component';
import { FuseNavigationDocsComponent } from './navigation/navigation.component';
import { FuseSearchBarDocsComponent } from './search-bar/search-bar.component';
import { FuseShortcutsDocsComponent } from './shortcuts/shortcuts.component';
import { FuseWidgetDocsComponent } from './widget/widget.component';
import { FuseWidgetModule } from '../../../core/components/widget/widget.module';
import { FuseAngularMaterialModule } from './angular-material/angular-material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes = [
    {
        path     : 'cards',
        component: FuseCardsDocsComponent
    },
    {
        path     : 'countdown',
        component: FuseCountdownDocsComponent
    },
    {
        path     : 'highlight',
        component: FuseHighlightDocsComponent
    },
    {
        path     : 'material-color-picker',
        component: FuseMaterialColorPickerDocsComponent
    },
    {
        path     : 'multi-language',
        component: FuseMultiLanguageDocsComponent
    },
    {
        path     : 'navigation',
        component: FuseNavigationDocsComponent
    },
    {
        path     : 'search-bar',
        component: FuseSearchBarDocsComponent
    },
    {
        path     : 'shortcuts',
        component: FuseShortcutsDocsComponent
    },
    {
        path     : 'widget',
        component: FuseWidgetDocsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        FuseWidgetModule,
        FuseAngularMaterialModule,
        NgxChartsModule
    ],
    declarations: [
        FuseCardsDocsComponent,
        FuseCountdownDocsComponent,
        FuseHighlightDocsComponent,
        FuseMaterialColorPickerDocsComponent,
        FuseMultiLanguageDocsComponent,
        FuseNavigationDocsComponent,
        FuseSearchBarDocsComponent,
        FuseShortcutsDocsComponent,
        FuseWidgetDocsComponent
    ]
})
export class FuseComponentsModule
{
}
