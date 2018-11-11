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
    horizontalStepperStep1: FormGroup;
    horizontalStepperStep2: FormGroup;
    horizontalStepperStep3: FormGroup;
    startDate: Date;

    startMinDate = new Date();
    endMinDate = new Date();

    displayedColumns: string[] = ['casual', 'medical', 'vacation'];
    ELEMENT_DATA: Leave[] = [
        {casual: 5, medical: 4, vacation: 4}
    ];
    dataSource = this.ELEMENT_DATA;


    leaveTypes: string;
    types: string[] = ['Casual', 'Medical', 'Vacation'];

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

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Horizontal Stepper form steps
        this.leaveFormDetails = this.route.snapshot.data['leaveFormDetails'];
        this.horizontalStepperStep1 = this._formBuilder.group({
            employeeId: new FormControl({value: this.leaveFormDetails.employeeId, disabled: false}, Validators.required),
            employeeName: new FormControl({value: this.leaveFormDetails.principal, disabled: false}, Validators.required),
            faculty: new FormControl({value: this.leaveFormDetails.faculty, disabled: false}, Validators.required),
            department: new FormControl({value: this.leaveFormDetails.department, disabled: false}),
            role: new FormControl({value: this.leaveFormDetails.role, disabled: false}, Validators.required)
        });

        this.horizontalStepperStep2 = this._formBuilder.group({
            address: new FormControl({value: '', disabled: false}, Validators.required),
            email: new FormControl({value: this.leaveFormDetails.email, disabled: false}, [Validators.required, Validators.email]),
            mobileNo: new FormControl({value: this.leaveFormDetails.mobileNo, disabled: false}, Validators.required),
            telephoneNo: new FormControl({value: '', disabled: false}),
        });

        this.horizontalStepperStep3 = this._formBuilder.group({
            leaveType: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required]

        });

    }


    private getLeaveFormDetails(): void {
        this.leaveFormDetails = this.route.snapshot.data['leaveFormDetails'];
    }

    /**
     * Finish the horizontal stepper
     */
    finishHorizontalStepper(): void {
        alert('You have finished the horizontal stepper!');
    }

    submitLeaveForm(): void {
        const leaveData = {
            employeeDetails: this.horizontalStepperStep1.value,
            contactDetails: this.horizontalStepperStep2.value,
            leaveDetails: this.horizontalStepperStep3.value
        };

        console.log(JSON.stringify(leaveData));
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        this.http.post('/server/api/v1/camunda/start/leave_process', leaveData, {headers: headers, observe: 'response'}).subscribe(
            response => {
                if (response.status === 200) {
                    console.log('hit');
                    this.toastr.success('Leave request submitted', 'Success', {progressBar: true, progressAnimation: 'increasing'});
                }
            },
            error => this.toastr.error('Could not submit the leave request', 'Failed')
        );

        this.router.navigate(['dashboard']);
    }


}


export interface Leave {
    casual: number;
    medical: number;
    vacation: number;
}


