import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';
import {LeaveFormService} from './leave-form.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LeaveFormDetails} from './leave-details.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'leave-forms',
    templateUrl: './leave-form.component.html',
    styleUrls: ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit {
    form: FormGroup;

    leaveFormDetails: LeaveFormDetails;

    // Horizontal Stepper
    employeeDetailsStepper: FormGroup;
    contactDetailsStepper: FormGroup;
    leaveDetailsStepper: FormGroup;
    startDate: Date;

    startMinDate = new Date();
    endMinDate = new Date();

    // displayedColumns: string[] = ['takenCasualLeaves', 'takenMedicalLeaves', 'takenVacationLeaves'];
    // dataSource = ELEMENT_DATA;

    leaveTypes: string[] = ['Casual', 'Medical', 'Vacation'];

    getStartDate(event: MatDatepickerInputEvent<Date>): void {
        this.startDate = event.value;
    }

    assignMinDate(): void {
        this.endMinDate = new Date(this.startDate);
    }


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
        // Horizontal Stepper form steps
        this.leaveFormDetails = this.route.snapshot.data['leaveFormDetails'];
        this.employeeDetailsStepper = this._formBuilder.group({
            employeeId: new FormControl({value: this.leaveFormDetails.employeeId, disabled: false}, Validators.required),
            employeeName: new FormControl({value: this.leaveFormDetails.principal, disabled: false}, Validators.required),
            faculty: new FormControl({value: this.leaveFormDetails.faculty, disabled: false}, Validators.required),
            department: new FormControl({value: this.leaveFormDetails.department, disabled: false}),
            role: new FormControl({value: this.leaveFormDetails.role, disabled: false}, Validators.required)
        });

        this.contactDetailsStepper = this._formBuilder.group({
            address: new FormControl({value: '', disabled: false}, Validators.required),
            email: new FormControl({value: this.leaveFormDetails.email, disabled: false}, [Validators.required, Validators.email]),
            mobileNo: new FormControl({value: this.leaveFormDetails.mobileNo, disabled: false}, Validators.required),
            telephoneNo: new FormControl({value: '', disabled: false}),
        });

        this.leaveDetailsStepper = this._formBuilder.group({
            leaveType: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            takenCasualLeaves: new FormControl({value: this.leaveFormDetails.casual, disabled: false}),
            takenMedicalLeaves: new FormControl({value: this.leaveFormDetails.medical, disabled: false}),
            takenVacationLeaves: new FormControl({value: this.leaveFormDetails.vacation, disabled: false})

        });

    }

    private getLeaveFormDetails(): void {
        this.leaveFormDetails = this.route.snapshot.data['leaveFormDetails'];
    }

    submitLeaveForm(): void {
        const leaveData = {
            employeeDetails: this.employeeDetailsStepper.value,
            contactDetails: this.contactDetailsStepper.value,
            leaveDetails: this.leaveDetailsStepper.value
        };
        // console.log(JSON.stringify(leaveData));
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        this.http.post('/server/api/v1/camunda/start/leave_process', leaveData, {headers: headers, observe: 'response'}).subscribe(
            response => {
                if (response.status === 200) {
                    this.toastr.success('Leave request submitted', 'Success', {progressBar: true, progressAnimation: 'increasing'});
                }
            },
            error => this.toastr.error('Could not submit the leave request', 'Failed')
        );

        this.router.navigate(['dashboard']);
    }
}