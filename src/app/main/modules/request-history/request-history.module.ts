import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SubmittedRequestsRoutingModule} from 'app/main/routing/submitted-requests.routing.module';

import {RequestHistoryService} from './request-history.service';
import {RequestListComponent} from './request-list/request-list.component';
import {MatButtonModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSortModule, MatTableModule, MatTabsModule} from '@angular/material';
import { RequestDetailsComponent } from './request-details/request-details.component';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {ProcessDefinitionKeyPipe} from './request-list/process-definition-key.pipe';
import {RequestsModule} from '../forms/requests.module';

@NgModule({
    imports: [
        CommonModule,
        SubmittedRequestsRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        RequestsModule,

        FuseSharedModule
    ],
    declarations: [RequestListComponent, RequestDetailsComponent, ProcessDefinitionKeyPipe],
    providers: [RequestHistoryService]
})
export class RequestHistoryModule {
}
