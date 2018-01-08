import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
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
