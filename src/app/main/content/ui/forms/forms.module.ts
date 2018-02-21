import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseFormsComponent } from './forms.component';

const routes: Routes = [
    {
        path     : 'forms',
        component: FuseFormsComponent
    }
];

@NgModule({
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseFormsComponent
    ]
})
export class UIFormsModule
{
}
