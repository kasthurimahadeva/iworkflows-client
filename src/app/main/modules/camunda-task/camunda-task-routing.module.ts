import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamundaTaskComponent } from './camunda-task/camunda-task.component';

const camundaTaskRoutes: Routes = [
    {
        path: 'task',
        component: CamundaTaskComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(camundaTaskRoutes)],
    exports: [RouterModule]
})
export class CamundaTaskRoutingModule {}
