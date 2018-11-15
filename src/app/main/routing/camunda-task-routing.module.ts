import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamundaTaskComponent } from '../modules/camunda-task/camunda-task/camunda-task.component';
import {AuthGuard} from '../guards/auth-guard.service';
import {MyTaskListComponent} from '../modules/camunda-task/my-task-list/my-task-list.component';

const camundaTaskRoutes: Routes = [
    {
        path: 'task',
        component: CamundaTaskComponent,
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
