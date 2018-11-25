import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';
import {Task} from './my.task.model';
import {TaskDetails} from './my.task.details.model';
import { environment } from 'environments/environment';
import {ToastrService} from 'ngx-toastr';

declare let EventSource: any;

@Injectable()
export class MyTaskService {

    public tasks: Task[];
    taskDetails: TaskDetails[];
    onTasksChange: BehaviorSubject<any>;

    private taskSource = new BehaviorSubject(this.tasks);
    public taskTable = this.taskSource.asObservable();

    constructor(
        private http: HttpClient,
        private toastr: ToastrService
    ) {
        this.onTasksChange = new BehaviorSubject({});
    }

    updateTaskTable(task: Task[]): void{
        this.taskSource.next(task);
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
