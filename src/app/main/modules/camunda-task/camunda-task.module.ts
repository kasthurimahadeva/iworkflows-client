import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CamundaTaskService } from './camunda-task.service';
import { CamundaTaskRoutingModule } from './camunda-task-routing.module';
import { CamundaTaskComponent } from './camunda-task/camunda-task.component';

@NgModule({
  imports: [
      CommonModule,
      CamundaTaskRoutingModule
  ],
    declarations: [
        CamundaTaskComponent
    ],
    providers: [
      CamundaTaskService
  ]
})
export class CamundaTaskModule { }
