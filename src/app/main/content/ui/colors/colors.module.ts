import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';

import { FuseColorsComponent } from './colors.component';

const routes: Routes = [
    {
        path     : 'colors',
        component: FuseColorsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        FuseDemoModule
    ],
    declarations: [
        FuseColorsComponent
    ]
})
export class UIColorsModule
{
}
