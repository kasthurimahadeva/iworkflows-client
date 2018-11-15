import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
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
    MatTabsModule, MatTooltipModule
} from '@angular/material';

import {CamundaTaskRoutingModule} from '../../routing/camunda-task-routing.module';
import {CamundaTaskComponent} from './camunda-task/camunda-task.component';
import {MyTaskListComponent} from './my-task-list/my-task-list.component';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {FuseWidgetModule} from '../../../../@fuse/components';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
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
        NgxChartsModule,
        FuseSharedModule,
        FuseWidgetModule,
        MatTooltipModule,
        FormsModule
    ],
    declarations: [CamundaTaskComponent, MyTaskListComponent],
})
export class CamundaTaskModule {
}
