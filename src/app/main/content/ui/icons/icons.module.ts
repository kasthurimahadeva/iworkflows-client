import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './icons.component';

const routes: Routes = [
    {
        path     : 'ui/icons',
        component: IconsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        IconsComponent
    ]
})
export class UIIconsModule
{
}
