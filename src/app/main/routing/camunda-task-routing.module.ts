import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamundaTaskComponent } from '../modules/camunda-task/camunda-task/camunda-task.component';
import { CamundaTaskListComponent } from '../modules/camunda-task/camunda-task-list/camunda-task-list.component';
import {AuthGuard} from '../guards/auth-guard.service';

const camundaTaskRoutes: Routes = [
    {
        path: 'task',
        component: CamundaTaskComponent,
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    },
    {
        path: 'tasks',
        component: CamundaTaskListComponent,
        data: {requiresLogin: true},
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(camundaTaskRoutes)],
    exports: [RouterModule]
})
export class CamundaTaskRoutingModule {}
