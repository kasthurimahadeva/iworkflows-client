import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';

import {TaskService} from '../../../../shared/task.service';
import {ActivatedRoute} from '@angular/router';
import {TaskDetails} from '../my.task.details.model';
import {ToastrService} from 'ngx-toastr';
import BpmnViewer from 'bpmn-js/lib/NavigatedViewer';
import {MyTaskService} from '../my-task.service';
import {BpmnDiagramModel} from '../../request-history/bpmn-diagram.model';

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
    bpmnDiagram: BpmnDiagramModel;

    @ViewChild('canvas') canvas;

    constructor(
        private httpClient: HttpClient,
        private taskService: TaskService,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private myTaskService: MyTaskService
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
