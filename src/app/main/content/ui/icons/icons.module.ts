import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseIconsComponent } from './icons.component';

const routes: Routes = [
    {
        path     : 'icons',
        component: FuseIconsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseIconsComponent
    ]
})
export class UIIconsModule
{
}
