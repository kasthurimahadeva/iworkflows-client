import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamundaTaskComponent } from '../modules/camunda-task/camunda-task/camunda-task.component';
import { CamundaTaskListComponent } from '../modules/camunda-task/camunda-task-list/camunda-task-list.component';

const camundaTaskRoutes: Routes = [
    {
        path: 'task',
        component: CamundaTaskComponent
    },
    {
        path: 'tasks',
        component: CamundaTaskListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(camundaTaskRoutes)],
    exports: [RouterModule]
})
export class CamundaTaskRoutingModule {}
