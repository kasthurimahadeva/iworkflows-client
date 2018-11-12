import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Task } from '../camunda-task/camunda.task.model';
import { RequestHistoryService } from './request-history.service';

@Injectable()
export class RequestHistoryDataResolver implements Resolve<Task[]> {
    constructor(private taskHistoryService: RequestHistoryService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Task[] | Observable<Task[]> | Promise<Task[]> {
        return this.taskHistoryService
            .getSubmittedTasks()
            .pipe(map(submittedTasks => submittedTasks));
    }
}
