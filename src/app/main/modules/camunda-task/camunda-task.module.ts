import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CamundaTaskComponent } from './camunda-task.component';
import { CamundaTaskService } from './camunda-task.service';
import { CamundaTaskRoutingModule } from './camunda-task-routing.module';

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
