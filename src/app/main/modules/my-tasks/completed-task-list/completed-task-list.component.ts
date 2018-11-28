import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {FuseNavigationService} from '../../../../../@fuse/components/navigation/navigation.service';
import {MyTaskService} from '../my-task.service';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {environment} from '../../../../../environments/environment';
import {fuseAnimations} from '../../../../../@fuse/animations';
import {CompletedTasks} from '../completed.tasks.model';

@Component({
    selector: 'app-completed-task-list',
    templateUrl: './completed-task-list.component.html',
    styleUrls: ['./completed-task-list.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class CompletedTaskListComponent implements OnInit {

    displayedColumns: string[] = ['id', 'type', 'dueDate', 'owner', 'submittedDate', 'action'];
    taskDatabase: TaskHttpDao | null;
    database: CompletedTasks[] = [];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private http: HttpClient,
                private toastr: ToastrService,
                private router: Router,
                private _fuseNavigationService: FuseNavigationService,
                public dialog: MatDialog,
                private taskService: MyTaskService) {
    }

    ngOnInit() {
        this.taskDatabase = new TaskHttpDao(this.http);

        // If the user changes the sort order, reset
        // back to the first page.
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
                    // Catch if the GitHub API has reached its rate limit. Return empty dataSource.
                    this.isRateLimitReached = true;
                    return observableOf([]);
                })
            )
            .subscribe(data => {
                this.database = data;
                this.taskService.updateTaskTable(this.database);
            });
    }

}

export class TaskHttpDao {
    constructor(private http: HttpClient) {
    }

    getTasks(sort: string, order: string, page: number): Observable<CompletedTasks[]> {
        const href = environment.server + 'v1/camunda/my-tasks';
        const requestUrl =
            `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

        return this.http.get<CompletedTasks[]>(href);
    }
}
