import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LeaveFormComponent} from '../modules/forms/leave-form/leave-form.component';
import {LeaveFormDataResolver} from '../modules/forms/leave-form/leave-form-data.resolver';
import {AuthGuard} from '../guards/auth-guard.service';

const leaveFormRoutes: Routes = [
    {
        path: 'leave',
        component: LeaveFormComponent,
        resolve: {leaveFormDetails: LeaveFormDataResolver},
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(leaveFormRoutes)],
    exports: [RouterModule]
})
export class LeaveFormRoutingModule {}
