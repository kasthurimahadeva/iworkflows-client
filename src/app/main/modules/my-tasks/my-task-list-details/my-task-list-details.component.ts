import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';

import {TaskService} from '../../../../shared/task.service';
import {ActivatedRoute} from '@angular/router';
import {TaskDetails} from '../my.task.details.model';
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
    contactAvailability: boolean;
    taskAvailability: boolean;

    constructor(
        private httpClient: HttpClient,
        private taskService: TaskService,
        private route: ActivatedRoute,
        private toastr: ToastrService
    ) {
    }

    ngOnInit(): void {
        this.connect();
        this.taskDetails = this.route.snapshot.data['taskDetails']['leaveFormDetails'];
        this.contactAvailability = true;
        this.taskAvailability = true;
    }

    connect(): void {
        this.taskService.connect();
    }

    send(): void {
        this.taskService.send();
    }

}
