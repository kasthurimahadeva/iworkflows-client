import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';

import { CamundaTaskListComponent } from './camunda-task-list/camunda-task-list.component';
import { CamundaTaskRoutingModule } from '../../routing/camunda-task-routing.module';
import { TaskService } from '../../../shared/task.service';
import { CamundaTaskComponent } from './camunda-task/camunda-task.component';

@NgModule({
    imports: [
        CommonModule,
        CamundaTaskRoutingModule,

        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatProgressSpinnerModule,
    ],
    declarations: [CamundaTaskListComponent, CamundaTaskComponent],
})
export class CamundaTaskModule {}
