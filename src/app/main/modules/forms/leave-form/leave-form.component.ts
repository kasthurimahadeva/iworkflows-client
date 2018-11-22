import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import swal from 'sweetalert';
import { environment } from 'environments/environment';
import {LeaveFormDetails} from './leave-details.model';

@Component({
    selector: 'leave-forms',
    templateUrl: './leave-form.component.html',
    styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit {
    form: FormGroup;
    employeeDetails: Object;
    contactDetails: Object;
    leaveDetails: Object;
    files = [];
    employeeDetailsStepper: any;
    contactDetailsStepper: any;
    leaveDetailsStepper: any;
    leaveFormDetails: LeaveFormDetails;
    contactAvailability: boolean;
    leaveDetailsAvailability: boolean;

    // Horizontal Stepper



    constructor(
        private _formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private router: Router,
        private http: HttpClient
    ) {
    }

    /**
     * On init
     */
    ngOnInit(): void {
        this.leaveFormDetails = this.route.snapshot.data['leaveFormDetails'];
        this.leaveFormDetails['employeeName'] = this.leaveFormDetails.principal;
        this.contactAvailability = false;
        this.leaveDetailsAvailability = false;
    }


    submitLeaveForm(): void {
        const leaveData = Object.assign(this.employeeDetails, this.contactDetails, this.leaveDetails);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

            this.http.post(environment.server + 'api/v1/camunda/leave/start', leaveData, {headers: headers, observe: 'response'}).subscribe(
                response => {
                    if (response.status === 200) {
                        this.toastr.success('Leave request submitted', 'Success', {progressBar: true, progressAnimation: 'increasing'});
                    }
                },
                error => {
                    console.error(error);
                    this.toastr.error('Could not submit the leave request', 'Failed');
                }
            );

        this.router.navigate(['dashboard']);
    }

    getLeaveDetails(leaveDetails: Object): void {
        this.leaveDetails =  leaveDetails;
        const startDate = this.leaveDetails['startDate'];
        const endDate = this.leaveDetails['endDate'];

        if (endDate.getTime() < startDate.getTime()) {
            swal('Oops', 'End date should be later than the start date!', 'error');
        }

        else if (this.leaveDetails['leaveType'] === 'Medical' &&
            (Math.round(Math.abs(endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000))) > 2 &&
            (this.files.length === 0)){
            swal('Oops', 'Relevent document is required', 'error');
        }

        else{
            const startDateValue =  (startDate.getMonth() + 1) + '/' + startDate.getDate()
                + '/' + startDate.getFullYear();
            const endDateValue =  (endDate.getMonth() + 1)
                + '/' + endDate.getDate() + '/' + this.leaveDetails['endDate'].getFullYear();
            this.leaveDetails['startDate'] = startDateValue;
            this.leaveDetails['endDate'] = endDateValue;
            this.leaveDetails['documents'] = this.files;

            this.submitLeaveForm();
        }

    }

    getEmployeeDetails(employeeDetails: Object): void {
        this.employeeDetails = employeeDetails;
    }

    getContactDetails(contactDetails: Object): void {
        this.contactDetails = contactDetails;
    }

    getFilesDetails(files: Array<string>): void {
        this.files = this.files.concat(files);
    }
}
