import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeaveFormComponent} from '../modules/forms/leave-form/leave-form.component';
import {LeaveFormDataResolver} from '../modules/forms/leave-form/leave-form-data.resolver';

const leaveFormRoutes: Routes = [
    {
        path: 'leave-form',
        component: LeaveFormComponent,
        resolve: {leaveFormDetails: LeaveFormDataResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(leaveFormRoutes)],
    exports: [RouterModule]
})
export class LeaveFormRoutingModule {}
