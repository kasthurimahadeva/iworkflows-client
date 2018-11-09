import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs';
import {MatDatepickerInputEvent} from '@angular/material';
import {LeaveFormService} from './leave-form.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {LeaveFormDetails} from './leave-details.model';
import {Validator} from 'codelyzer/walkerFactory/walkerFn';

@Component({
    selector   : 'leave-forms',
    templateUrl: './leave-form.component.html',
    styleUrls  : ['./leave-form.component.scss']
})
export class LeaveFormComponent implements OnInit, OnDestroy
{
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
    dataSource = ELEMENT_DATA;

    getStartDate(event: MatDatepickerInputEvent<Date>): void
    {
       this.startDate = event.value;
       console.log(this.startDate);
    }

    assignMinDate(): void
    {
        this.endMinDate = new Date(this.startDate);
    }
    
    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder,
        private leaveFormService: LeaveFormService,
        private route: ActivatedRoute,
    private toastr: ToastrService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        //Horizontal Stepper form steps
        this.horizontalStepperStep1 = this._formBuilder.group({
            employeeId: new FormControl({value: null, disabled: true}, Validators.required),
            employeeName : new FormControl({value: null, disabled: true}, Validators.required),
            faculty: new FormControl({value: null, disabled: true}, Validators.required),
            department : new FormControl({value: null, disabled: true}),
            role: new FormControl({value: null, disabled: true}, Validators.required)
        });

        this.horizontalStepperStep2 = this._formBuilder.group({
            address: ['', Validators.required],
            email: new FormControl({value: null}, [Validators.required, Validators.email]),
            mobileNo: new FormControl({value: null}, Validators.required),
            telephoneNo: ['']
        });

        this.horizontalStepperStep3 = this._formBuilder.group({
            leaveType      : ['', Validators.required],
            startDate     : ['', Validators.required],
            endDate: ['', Validators.required]

        });

        // this.providers = TestProviders;
        this.getLeaveFormDetails();
    
    }



    private getLeaveFormDetails(): void {
        this.leaveFormService.getAll().subscribe(leaveFormDetails => {
                this.leaveFormDetails = leaveFormDetails;
            }
        );
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Finish the horizontal stepper
     */
    finishHorizontalStepper(): void
    {
        alert('You have finished the horizontal stepper!');
    }

    showInfoToast(): number {
        return this.toastr.info('Hint: you can continue to browse', 'Connecting...',
            {progressBar: true, timeOut: 25000, progressAnimation: 'increasing'}).toastId;
    }

}


export interface LeaveDetails {
    casual: number;
    medical: number;
    vacation: number;
}

const ELEMENT_DATA: LeaveDetails[] = [
    {casual: 5, medical: 4, vacation: 7}
];


