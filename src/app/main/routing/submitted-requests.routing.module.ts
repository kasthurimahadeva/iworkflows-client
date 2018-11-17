import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestListComponent} from '../modules/request-history/request-list/request-list.component';
import {RequestDetailsComponent} from '../modules/request-history/request-details/request-details.component';

const taskHistoryRoutes: Routes = [
    {
        path: 'list',
        component: RequestListComponent
    },
    {
        path: 'details/:processInstanceId',
        component: RequestDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(taskHistoryRoutes)],
    exports: [RouterModule]
})
export class SubmittedRequestsRoutingModule {
}
