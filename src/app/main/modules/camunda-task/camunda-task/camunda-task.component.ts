import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

import { CamundaTaskService } from '../camunda-task.service';

@Component({
    selector: 'app-camunda-task',
    templateUrl: './camunda-task.component.html',
    styleUrls: ['./camunda-task.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class CamundaTaskComponent implements OnInit {
    constructor(private http: HttpClient, private camundaTaskService: CamundaTaskService) {}

    ngOnInit(): void {
        this.connect();
    }

    connect(): void {
        this.camundaTaskService.connect();
    }

    send(): void {
        this.camundaTaskService.send();
    }
}
