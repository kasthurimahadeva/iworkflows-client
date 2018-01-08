import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { FuseHelperClassesComponent } from './helper-classes.component';
import { FuseHelperClassesPaddingMarginComponent } from './tabs/padding-margin/padding-margin.component';
import { FuseHelperClassesWidthHeightComponent } from './tabs/width-height/width-height.component';

const routes: Routes = [
    {
        path     : 'helper-classes',
        component: FuseHelperClassesComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseHelperClassesComponent,
        FuseHelperClassesPaddingMarginComponent,
        FuseHelperClassesWidthHeightComponent
    ]
})
export class UIHelperClassesModule
{
}
