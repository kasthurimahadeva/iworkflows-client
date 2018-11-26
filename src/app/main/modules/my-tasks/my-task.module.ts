import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatChipsModule, MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatListModule, MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule, MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule, MatStepperModule,
    MatTableModule,
    MatTabsModule, MatTooltipModule
} from '@angular/material';

import {CamundaTaskRoutingModule} from '../../routing/camunda-task-routing.module';
import {MyTaskListDetailsComponent} from './my-task-list-details/my-task-list-details.component';
import {MyTaskListComponent} from './my-task-list/my-task-list.component';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {FuseWidgetModule} from '../../../../@fuse/components';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RejectCommentsComponent } from './reject-comments/reject-comments.component';
import {RequestsModule} from '../forms/requests.module';
import {UploadModule} from '../upload/upload.module';
import {MyTaskService} from './my-task.service';
import {MyTaskListDetailsResolver} from './my-task-list-details/my-task-list-details.resolver';
import { FileViewerComponent } from './file-viewer/file-viewer.component';

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
        FormsModule,
        RequestsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatListModule,

        UploadModule,

        FuseSharedModule,
    ],
    declarations: [MyTaskListDetailsComponent,
        MyTaskListComponent,
        RejectCommentsComponent,
        FileViewerComponent
    ],
    providers: [
        MyTaskListDetailsResolver  ,
        MyTaskService
    ],
    entryComponents: [RejectCommentsComponent,
    FileViewerComponent]
})
export class MyTaskModule {
}
