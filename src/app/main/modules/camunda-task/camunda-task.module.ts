import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamundaTaskComponent } from './camunda-task.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'task',
        children: [
            {
                path     : '',
                component: CamundaTaskComponent
            }
        ]
    }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      CommonModule
  ],
  declarations: [CamundaTaskComponent]
})
export class CamundaTaskModule { }
