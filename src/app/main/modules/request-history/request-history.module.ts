import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SubmittedRequestsRoutingModule} from 'app/main/routing/submitted-requests.routing.module';

import {RequestHistoryService} from './request-history.service';
import {RequestListComponent} from './request-list/request-list.component';
import {MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        SubmittedRequestsRoutingModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule
    ],
    declarations: [RequestListComponent],
    providers: [RequestHistoryService]
})
export class RequestHistoryModule {
}
