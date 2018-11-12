import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../camunda-task/camunda.task.model';

@Component({
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
    submittedTasks: Task[];

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.getSubmittedTasks();
    }

    private getSubmittedTasks(): void {
        this.submittedTasks = this.route.snapshot.data['submittedTasks'];
        console.log(this.submittedTasks);
    }
}
