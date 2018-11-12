import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { Task } from '../camunda-task/camunda.task.model';

@Injectable()
export class RequestHistoryService {
    constructor(private http: HttpClient, private toastr: ToastrService) {}

    getSubmittedTasks(): Subject<Task[]> {
        const subject = new Subject<Task[]>();
        this.http.get<Task[]>('server/api/v1/camunda/submitted-tasks').subscribe(
            data => {
                console.log(data);
                subject.next(data); },
            error => {
                subject.error(error);
                this.toastr.error(
                    'Unable to retrive submitted tasks data, please try again',
                    'Failed',
                    { progressBar: true }
                );
            },
            () => subject.complete()
        );
        console.log(subject);
        return subject;
    }
}
