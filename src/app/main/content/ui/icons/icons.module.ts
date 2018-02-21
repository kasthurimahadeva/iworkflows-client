import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseIconsComponent } from './icons.component';

const routes: Routes = [
    {
        path     : 'icons',
        component: FuseIconsComponent
    }
];

@NgModule({
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseIconsComponent
    ]
})
export class UIIconsModule
{
}
