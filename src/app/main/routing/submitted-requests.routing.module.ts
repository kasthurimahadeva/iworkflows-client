import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestHistoryDataResolver } from '../modules/request-history/request-history-data.resolver';
import { RequestListComponent } from '../modules/request-history/request-list/request-list.component';

const taskHistoryRoutes: Routes = [
    {
        path: 'list',
        component: RequestListComponent,
        resolve: { submittedTasks: RequestHistoryDataResolver }
    }
];

@NgModule({
    imports: [RouterModule.forChild(taskHistoryRoutes)],
    exports: [RouterModule]
})
export class SubmittedRequestsRoutingModule {}
