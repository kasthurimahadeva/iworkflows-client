import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {RequestHistoryService} from '../request-history.service';
import {SubmittedRequest} from '../submitted.request.model';
import {fuseAnimations} from '@fuse/animations';
import {FuseNavigationService} from '../../../../../@fuse/components/navigation/navigation.service';

@Component({
    selector: 'app-request-list',
    templateUrl: './request-list.component.html',
    styleUrls: ['./request-list.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})
export class RequestListComponent implements OnInit {
    submittedRequests: SubmittedRequest[];
    displayedColumns: string[] = ['id', 'type', 'submitted_date', 'status', 'progress'];
    resultsLength = 0;
    isLoadingResults = true;
    badgeCount: number;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private route: ActivatedRoute,
                private requstHistoryService: RequestHistoryService,
                private _fuseNavigationService: FuseNavigationService) {
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
            ).subscribe(data => {
                this.submittedRequests = data;
                this.badgeCount = this.submittedRequests.filter((request) => request.status === 'in_progress' || request.status === 'head_recommended').length;
                this.updaterequestBadge();
        });
    }

    updaterequestBadge(): void
    {
        // Update the badge title
        this._fuseNavigationService.updateNavigationItem('history', {
            badge: {
                title: this.badgeCount,
                bg: '#F63423',
                fg: '#FFFFFF'
            }
        });
    }
}
