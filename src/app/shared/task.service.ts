import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../main/modules/my-tasks/my.task.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

declare let EventSource: any;

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    tasks: Task[];
    onTasksChange: BehaviorSubject<any>;

    constructor(
        private http: HttpClient
    ) {
        this.onTasksChange = new BehaviorSubject({});
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
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

    getTasks(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get<Task>('server/rest/engine/default/task?assignee=admin')
                .subscribe((response: any) => {
                    this.tasks = response;
                    this.onTasksChange.next(this.tasks);
                    resolve(response);
                }, reject);
        });
    }

    connect(): void {
        const source = new EventSource('http://localhost:8080/stream', {withCredentials: true});
        source.addEventListener('message', message => {
            // let n: Notification; // need to have this Notification model class in angular2
            // n = JSON.parse(message.data);
            console.log(message.data);
        });
    }

    send(): void {
        this.http.get('server/sse/emit', {observe: 'response'}).subscribe(
            response => {
                console.log('Triggered ' + response);
                if (response.status === 200) {
                    console.log('success');
                }
            }
        );
    }

}
