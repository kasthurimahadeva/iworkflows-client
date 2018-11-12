import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {RequestHistoryService} from '../request-history.service';
import {SubmittedRequest} from '../submitted.request.model';

@Component({
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
    submittedRequests: SubmittedRequest[];
    displayedColumns: string[] = ['type', 'submitted_date', 'due_date', 'assignee'];
    resultsLength = 0;
    isLoadingResults = true;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private route: ActivatedRoute,
                private requstHistoryService: RequestHistoryService) {
    }

    ngOnInit(): void {
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.requstHistoryService.getSubmittedTasks();
                }),
                map(data => {
                    this.isLoadingResults = false;
                    return data;
                }),
                catchError(() => {
                    this.isLoadingResults = false;
                    return observableOf([]);
                })
            ).subscribe(data => this.submittedRequests = data);
    }
}
