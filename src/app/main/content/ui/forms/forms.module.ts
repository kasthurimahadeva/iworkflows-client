import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

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
