import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '@fuse/animations';

import {TaskService} from '../../../../shared/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskDetails} from '../my.task.details.model';
import {MatDialog, MatSnackBar} from '@angular/material';
import {MyTaskService} from '../my-task.service';
import {Task} from '../my.task.model';
import { environment } from 'environments/environment';
import {FuseNavigationService} from '../../../../../@fuse/components/navigation/navigation.service';
import {ToastrService} from 'ngx-toastr';
import {RejectCommentsComponent} from '../reject-comments/reject-comments.component';


@Component({
    selector: 'app-my-task-list-details',
    templateUrl: './my-task-list-details.component.html',
    styleUrls: ['./my-task-list-details.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class MyTaskListDetailsComponent implements OnInit {

    processInstanceId: string;
    taskDetails: TaskDetails;
    tasks: Task[] = [];
    task: Task;
    contactAvailability: boolean;
    taskAvailability: boolean;
    comments: Object = {
        comment: ''
    };
    files: Array<string>;
    badgeCount: number;
    currentIndex: number;
    isDisable: boolean;

    @ViewChild('canvas') canvas;

    constructor(
        private httpClient: HttpClient,
        private taskService: TaskService,
        private route: ActivatedRoute,
        public fileDialog: MatDialog,
        private _fuseNavigationService: FuseNavigationService,
        private toastr: ToastrService,
        private router: Router,
        private myTaskService: MyTaskService,
        private rejectDialog: MatDialog,
        private snackBar: MatSnackBar
    ) {
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };
    }

    ngOnInit(): void {
        this.connect();
        this.taskDetails = this.route.snapshot.data['taskDetails']['leaveFormDetails'];
        this.files = this.taskDetails['documents'];
        this.contactAvailability = true;
        this.taskAvailability = true;
        this.route.params.subscribe(
            params => {
                this.processInstanceId = params['processInstanceId'];
                this.getTaskDetails(this.processInstanceId);
            }
        );
        console.log('ngOnInit is calling.......');
        this.myTaskService.taskTable.subscribe(table => this.tasks = table);
        this.isDisable = this.tasks.length === 1;
        console.log(this.tasks);

    }

    getTaskDetails(processInstanceId: string): void {
        const detailsUrl = environment.server + 'api/v1/camunda/leave/details/' + processInstanceId;
        this.httpClient.get<TaskDetails>(detailsUrl).subscribe(
            taskDetails => this.taskDetails = taskDetails['leaveFormDetails']
        );
        this.files = this.taskDetails['documents'];
        this.contactAvailability = true;
        this.taskAvailability = true;
    }

    connect(): void {
        this.taskService.connect();
    }

    send(): void {
        this.taskService.send();
    }

    openFileDialog(file: string): void {

        const fileUrl = environment.server + 'api/v1/file/' + this.processInstanceId + '/' + file;
        let type;
        if (file.endsWith('.pdf')) {
            type = 'application/pdf';
        }

        else if (file.endsWith('.jpg')) {
            type = 'image/jpg';
        }

        else if (file.endsWith('.png')) {
            type = 'image/png';
        }

        else if (file.endsWith('.jpeg')) {
            type = 'image/jpeg';
        }

        this.httpClient.get(fileUrl, {responseType: 'arraybuffer'} )
            .subscribe(response => this.downLoadFile(response, type));
    }

    downLoadFile(data: any, type: string): void {
        const blob = new Blob([data], { type: type});
        const file = window.URL.createObjectURL(blob);
        const pwa = window.open(file);
        if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
            alert( 'Please disable your Pop-up blocker and try again.');
        }
    }

    openNextTask(): void {
        this.findViewTask();
        this.getNextTask();
        if (this.tasks.length === 1) {
            this.isDisable = true;
        }
        else if (this.tasks.length > 1) {
            this.getTaskDetails(this.task.processInstanceId);
            this.router.navigate(['task', this.task.processInstanceId]);
        }
        else{
            // this.toastr.success('All tasks are completed', 'Completed');
            this.router.navigate(['tasks']);
            this.snackBar.open('All tasks are completed!!', 'OK', {
                duration: 5000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
            });
        }
    }

    findViewTask(): void {
        this.task = this.tasks.filter((task) => task.processInstanceId === this.processInstanceId)[0];
        this.currentIndex = this.tasks.indexOf(this.task);
        console.log(this.currentIndex);
    }

    getNextTask(): void {
        if (this.tasks.length > this.currentIndex + 1) {
            this.task = this.tasks[this.currentIndex + 1];
        } else {
            this.task = this.tasks[0];
            console.log('I am here. My id is ' + this.task.processInstanceId);
        }
    }


    approveRequest(): void {
        this.processInstanceId = this.route.snapshot.paramMap.get('processInstanceId');
        console.log(this.processInstanceId);
        this.findViewTask();
        const postUrl = environment.server + 'api/v1/camunda/leave/complete/' + this.task.taskId + '/true';
        this.httpClient.post(postUrl, this.comments, {observe: 'response'}).subscribe(
            response => {
                this.getNextTask();
                if (response.status === 200) {
                    this.tasks.splice(this.currentIndex, 1);
                    this.badgeCount = this.tasks.length;
                    this.updateTaskBadge();
                    this.toastr.success('Request approved', 'Success', {timeOut: 1000});
                    if (this.tasks.length > 0) {
                        console.log('I am going to ' + this.task.processInstanceId);
                        this.getTaskDetails(this.task.processInstanceId);
                        this.router.navigate(['task', this.task.processInstanceId]);
                    }
                    else{
                        // this.toastr.success('All tasks are completed', 'Completed');
                        this.router.navigate(['tasks']);
                        this.snackBar.open('All tasks are completed!!', 'OK', {
                            duration: 5000,
                            horizontalPosition: 'center',
                            verticalPosition: 'top',
                        });
                    }
                }
            },
            error => {
                console.error(error);
                this.toastr.error('Could not approve', 'Failed');
            },
        );
    }

    updateTaskBadge(): void {
        // Update the badge title
        this._fuseNavigationService.updateNavigationItem('task', {
            badge: {
                title: this.badgeCount
            }
        });
    }

    openRejectDialog(): void {
        const isReject = false;
        const dialogRef = this.rejectDialog.open(RejectCommentsComponent, {
            width: '500px',
            data: {isRejected: isReject, comments: this.comments}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result.isRejected){
                this.comments['comment'] = result.comments;
                this.rejectRequest();
            }
        });
    }

    rejectRequest(): void {
        this.processInstanceId = this.route.snapshot.paramMap.get('processInstanceId');
        console.log(this.processInstanceId);
        this.findViewTask();
        const postUrl = environment.server + 'api/v1/camunda/leave/complete/' + this.task.taskId + '/false';
        this.httpClient.post(postUrl, this.comments, {observe: 'response'}).subscribe(
            response => {
                this.getNextTask();
                if (response.status === 200) {
                    this.tasks.splice(this.currentIndex, 1);
                    this.badgeCount = this.tasks.length;
                    this.updateTaskBadge();
                    this.toastr.success('Request rejected', 'Success', {timeOut: 1000});
                    if (this.tasks.length > 0) {
                        console.log('I am going to ' + this.task.processInstanceId);
                        // this.getTaskDetails(this.task.processInstanceId);
                        this.router.navigate(['task', this.task.processInstanceId]);
                    }
                    else{
                        // this.toastr.success('All tasks are completed', 'Completed', {positionClass: 'toast-bottom-center'});
                        this.router.navigate(['tasks']);
                        this.snackBar.open('All tasks are completed!!', 'Success', {
                            duration: 5000,
                            horizontalPosition: 'center',
                            verticalPosition: 'top',
                        });
                    }
                }

            },
        error => {
            console.error(error);
            this.toastr.error('Could not reject', 'Failed');
            }
        );
    }
}


