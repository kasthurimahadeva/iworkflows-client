import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { TypographyComponent } from './typography.component';
import { TypographyHeadingsComponent } from './tabs/headings/headings.component';
import { TypographyInlineTextElementsComponent } from './tabs/inline-text-elements/inline-text-elements.component';
import { TypographyBlockquotesListsComponent } from './tabs/blockquotes-lists/blockquotes-lists.component';
import { TypographyHelpersComponent } from './tabs/helpers/helpers.component';

const routes: Routes = [
    {
        path     : 'ui/typography',
        component: TypographyComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        TypographyComponent,
        TypographyHeadingsComponent,
        TypographyInlineTextElementsComponent,
        TypographyBlockquotesListsComponent,
        TypographyHelpersComponent
    ]
})
export class UITypographyModule
{
}
