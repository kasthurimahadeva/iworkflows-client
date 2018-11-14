import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-request-details',
    templateUrl: './request-details.component.html',
    styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
    taskId: string;
    processDefinitionId: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.taskId = this.route.snapshot.paramMap.get('taskId');
        this.processDefinitionId = this.route.snapshot.paramMap.get('processDefinitionId');
    }

}
