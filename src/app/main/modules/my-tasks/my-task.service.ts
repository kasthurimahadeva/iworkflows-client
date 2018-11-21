import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Task} from './my.task.model';
import {TaskDetails} from './my.task.details.model';
import { environment } from 'environments/environment';
import {ToastrService} from 'ngx-toastr';

declare let EventSource: any;

@Injectable()
export class MyTaskService {

    tasks: Task[];
    taskDetails: TaskDetails[];
    onTasksChange: BehaviorSubject<any>;

    constructor(
        private http: HttpClient,
        private toastr: ToastrService
    ) {
        this.onTasksChange = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {

            Promise.all([
                this.getTasks()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getTasks(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get<Task>(environment.server + 'rest/engine/default/task?assignee=admin')
                .subscribe((response: any) => {
                    this.tasks = response;
                    this.onTasksChange.next(this.tasks);
                    resolve(response);
                }, reject);
        });
    }

    getTaskDetails(processInstanceId): Subject<TaskDetails> {
        const subject = new Subject<TaskDetails>();

        const detailsUrl = environment.server + 'api/v1/camunda/leave/details/' + processInstanceId;
        this.http.get<TaskDetails>(detailsUrl).subscribe(
            taskDetails => subject.next(taskDetails),
            err => {
                subject.error(err);
                this.toastr.error('Unable to get provider list', 'Fetch failed', {progressBar: true});
            }
            ,
            () => subject.complete()
        );
        return subject;
    }


    connect(): void {
        const source = new EventSource('http://localhost:8080/stream', {withCredentials: true});
        source.addEventListener('message', message => {
            // let n: Notification; // need to have this Notification model class in angular2
            // n = JSON.parse(message.dataSource);
            console.log(message.data);
        });
    }

    send(): void {
        this.http.get(environment.server + 'sse/emit', {observe: 'response'}).subscribe(
            response => {
                console.log('Triggered ' + response);
                if (response.status === 200) {
                    console.log('success');
                }
            }
        );
    }

}
