import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations';
import { Task } from '../camunda.task.model';

/**
 * @title User tasks from Camunda
 */
@Component({
    selector: 'app-camunda-task-list',
    templateUrl: './camunda-task-list.component.html',
    styleUrls: ['./camunda-task-list.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class CamundaTaskListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'assignee', 'created'];
    taskDatabase: TaskHttpDao | null;
    data: Task[] = [];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.taskDatabase = new TaskHttpDao(this.http);

        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    // if (this.taskDatabase !== undefined) {
                    //     return this.taskDatabase.getTasks();
                    // }
                    return this.taskDatabase!.getTasks(this.sort.active, this.sort.direction, this.paginator.pageIndex);
                    // console.log(result);
                    // return result;
                }),
                map(data => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.isRateLimitReached = false;
                    this.resultsLength = 2;

                    return data;
                }),
                catchError(() => {
                    this.isLoadingResults = false;
                    // Catch if the GitHub API has reached its rate limit. Return empty data.
                    this.isRateLimitReached = true;
                    return observableOf([]);
                })
            )
            .subscribe(data => (this.data = data));
    }
}

/** An example database that the data source uses to retrieve data for the table. */
export class TaskHttpDao {
    constructor(private http: HttpClient) {}

    getTasks(sort: string, order: string, page: number): Observable<Task[]> {
        const href = 'server/rest/engine/default/task?assignee=admin';
        const requestUrl =
            `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

        return this.http.get<Task[]>(href);
    }
}
