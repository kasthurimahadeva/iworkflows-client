import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubmittedRequestsRoutingModule } from 'app/main/routing/submitted-requests.routing.module';

import { RequestHistoryService } from './request-history.service';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestHistoryDataResolver } from './request-history-data.resolver';

@NgModule({
    imports: [CommonModule, SubmittedRequestsRoutingModule],
    declarations: [RequestListComponent],
    providers: [RequestHistoryDataResolver, RequestHistoryService]
})
export class RequestHistoryModule {}
