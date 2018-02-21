import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

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
        FuseSharedModule,
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
