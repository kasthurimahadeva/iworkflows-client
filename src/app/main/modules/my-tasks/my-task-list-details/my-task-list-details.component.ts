import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';

import {TaskService} from '../../../../shared/task.service';
import {ActivatedRoute} from '@angular/router';
import {TaskDetails} from '../my.task.details.module';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-camunda-task',
    templateUrl: './my-task-list-details.component.html',
    styleUrls: ['./my-task-list-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class MyTaskListDetailsComponent implements OnInit {

    processInstanceId: string;
    taskDetails: TaskDetails;

    constructor(
        private httpClient: HttpClient,
        private taskService: TaskService,
        private route: ActivatedRoute,
        private toastr: ToastrService
    ) {
    }

    ngOnInit(): void {
        this.connect();
        this.processInstanceId = this.route.snapshot.paramMap.get('processInstanceId');
        this.getTaskDetails(this.processInstanceId);
    }

    connect(): void {
        this.taskService.connect();
    }

    send(): void {
        this.taskService.send();
    }

    private getTaskDetails(processInstanceId): void {
        const detailsUrl = 'server/api/v1/camunda/leave/details/' + processInstanceId;
        this.httpClient.get<TaskDetails>(detailsUrl).subscribe(
            taskDetails => {
                this.taskDetails = taskDetails;
            },
            error => {
                console.log(error);
                this.toastr.error('Unable to get provider list', 'Fetch failed', {progressBar: true});
            }
        );
    }
}
