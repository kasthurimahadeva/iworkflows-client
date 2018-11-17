import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material';
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
    endDate: Date;
    startDateValue: string;
    endDateValue: string;

    startMinDate = new Date();
    endMinDate = new Date();
    startMaxDate: Date;


    // displayedColumns: string[] = ['takenCasualLeaves', 'takenMedicalLeaves', 'takenVacationLeaves'];
    // dataSource = ELEMENT_DATA;

    leaveTypes: string[] = ['Casual', 'Medical', 'Vacation'];

    getStartDate(event: MatDatepickerInputEvent<Date>): void {
        this.startDate = event.value;
        this.startDateValue = this.startDate.getDate() + '/' + (this.startDate.getMonth() + 1) + '/' + this.startDate.getFullYear();
    }

    getEndDate(event: MatDatepickerInputEvent<Date>): void {
        this.endDate = event.value;
        this.endDateValue = this.endDate.getDate() + '/' + (this.endDate.getMonth() + 1) + '/' + this.endDate.getFullYear();
    }

    assignMinDate(): void {
        if (this.startDate !== null){
            this.endMinDate = new Date(this.startDate);
        }
        else {
            this.endMinDate = new Date();
        }
    }

    assignMaxDate(): void {
        if (this.endDate !== null){
            this.startMaxDate = new Date(this.endDate);
        }
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
            employeeId: new FormControl({value: this.leaveFormDetails.employeeId, disabled: true}, Validators.required),
            employeeName: new FormControl({value: this.leaveFormDetails.principal, disabled: true}, Validators.required),
            faculty: new FormControl({value: this.leaveFormDetails.faculty, disabled: true}, Validators.required),
            department: new FormControl({value: this.leaveFormDetails.department, disabled: true}),
            role: new FormControl({value: this.leaveFormDetails.role, disabled: true}, Validators.required)
        });

        this.contactDetailsStepper = this._formBuilder.group({
            address: new FormControl({value: '', disabled: false}, Validators.required),
            email: new FormControl({value: this.leaveFormDetails.email, disabled: true}, [Validators.required, Validators.email]),
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
        const employeeDetails = this.employeeDetailsStepper.value;
        const contactDetails = this.contactDetailsStepper.value;
        const leaveDetails = this.leaveDetailsStepper.value;
        leaveDetails.startDate = this.startDateValue;
        leaveDetails.endDate = this.endDateValue;
        const leaveData = Object.assign(employeeDetails, contactDetails, leaveDetails);

        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        this.http.post('/server/api/v1/camunda/leave/start', leaveData, {headers: headers, observe: 'response'}).subscribe(
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
}
