import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';

import { FuseFormsComponent } from './forms.component';

const routes: Routes = [
    {
        path     : 'forms',
        component: FuseFormsComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseFormsComponent
    ]
})
export class UIFormsModule
{
}
