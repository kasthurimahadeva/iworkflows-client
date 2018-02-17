import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseTypographyComponent } from './typography.component';
import { FuseTypographyHeadingsComponent } from './tabs/headings/headings.component';
import { FuseTypographyInlineTextElementsComponent } from './tabs/inline-text-elements/inline-text-elements.component';
import { FuseTypographyBlockquotesListsComponent } from './tabs/blockquotes-lists/blockquotes-lists.component';
import { FuseTypographyHelpersComponent } from './tabs/helpers/helpers.component';

const routes: Routes = [
    {
        path     : 'typography',
        component: FuseTypographyComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseTypographyComponent,
        FuseTypographyHeadingsComponent,
        FuseTypographyInlineTextElementsComponent,
        FuseTypographyBlockquotesListsComponent,
        FuseTypographyHelpersComponent
    ]
})
export class UITypographyModule
{
}
