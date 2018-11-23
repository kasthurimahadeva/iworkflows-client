import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';

import {TaskService} from '../../../../shared/task.service';
import {ActivatedRoute} from '@angular/router';
import {TaskDetails} from '../my.task.details.model';
import {BpmnDiagramModel} from '../../request-history/bpmn-diagram.model';
import {MatDialog} from '@angular/material';
import {FileViewerComponent} from '../file-viewer/file-viewer.component';

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
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.connect();
        this.taskDetails = this.route.snapshot.data['taskDetails']['leaveFormDetails'];
        console.log(JSON.stringify(this.route.snapshot.data['taskDetails']));
        this.contactAvailability = true;
        this.taskAvailability = true;
    }

    connect(): void {
        this.taskService.connect();
    }

    send(): void {
        this.taskService.send();
    }

    openDialog(): void {
        this.dialog.open(FileViewerComponent);
    }

}
