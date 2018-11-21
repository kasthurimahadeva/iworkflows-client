import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {TaskDetails} from '../my.task.details.model';
import {MyTaskService} from '../my-task.service';

@Injectable()
export class MyTaskListDetailsResolver implements Resolve<TaskDetails> {
    processInstanceId: string;

    constructor(private myTaskService: MyTaskService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TaskDetails> | Promise<TaskDetails>
        | TaskDetails {
        this.processInstanceId = route.paramMap.get('processInstanceId');
        return this.myTaskService.getTaskDetails(this.processInstanceId).pipe(map(eventDetails => eventDetails));
    }

}
