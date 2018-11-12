import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestListComponent} from '../modules/request-history/request-list/request-list.component';

const taskHistoryRoutes: Routes = [
    {
        path: 'list',
        component: RequestListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(taskHistoryRoutes)],
    exports: [RouterModule]
})
export class SubmittedRequestsRoutingModule {
}
