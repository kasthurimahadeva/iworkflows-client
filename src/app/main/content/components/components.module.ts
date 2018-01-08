import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { FuseCardsDocsComponent } from './cards/cards.component';
import { FuseCountdownDocsComponent } from './countdown/countdown.component';
import { FuseHljsDocsComponent } from './hljs/hljs.component';
import { FuseMaterialColorPickerDocsComponent } from './material-color-picker/material-color-picker.component';
import { FuseMultiLanguageDocsComponent } from './multi-language/multi-language.component';
import { FuseNavigationDocsComponent } from './navigation/navigation.component';
import { FuseShortcutsDocsComponent } from './shortcuts/shortcuts.component';
import { FuseSearchBarDocsComponent } from 'app/main/content/components/search-bar/search-bar.component';
import { FuseWidgetDocsComponent } from './widget/widget.component';
import { FuseWidgetModule } from '../../../core/components/widget/widget.module';
import { FuseAngularMaterialModule } from './angular-material/angular-material.module';

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
        path     : 'highlightjs',
        component: FuseHljsDocsComponent
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
        FuseAngularMaterialModule
    ],
    declarations: [
        FuseCardsDocsComponent,
        FuseCountdownDocsComponent,
        FuseHljsDocsComponent,
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
