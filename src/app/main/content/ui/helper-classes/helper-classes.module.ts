import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { HelperClassesComponent } from './helper-classes.component';
import { HelperClassesPaddingMarginComponent } from './tabs/padding-margin/padding-margin.component';
import { HelperClassesWidthHeightComponent } from './tabs/width-height/width-height.component';

const routes: Routes = [
    {
        path     : 'ui/helper-classes',
        component: HelperClassesComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        HelperClassesComponent,
        HelperClassesPaddingMarginComponent,
        HelperClassesWidthHeightComponent
    ]
})
export class UIHelperClassesModule
{
}
