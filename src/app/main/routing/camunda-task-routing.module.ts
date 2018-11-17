import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTaskListDetailsComponent } from '../modules/my-tasks/my-task-list-details/my-task-list-details.component';
import {AuthGuard} from '../guards/auth-guard.service';
import {MyTaskListComponent} from '../modules/my-tasks/my-task-list/my-task-list.component';

const camundaTaskRoutes: Routes = [
    {
        path: 'task/:processInstanceId',
        component: MyTaskListDetailsComponent,
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    },
    {
        path: 'tasks',
        component: MyTaskListComponent,
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(camundaTaskRoutes)],
    exports: [RouterModule]
})
export class CamundaTaskRoutingModule {}
