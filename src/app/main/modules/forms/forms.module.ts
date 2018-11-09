import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule
} from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import {LeaveFormComponent} from './leave-form/leave-form.component';

const routes: Routes = [
    {
        path     : 'leave-form',
        component: LeaveFormComponent
    }
];

@NgModule({
    declarations: [
        LeaveFormComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,

        FuseSharedModule,
    ]
})
export class FormsModule
{
}
