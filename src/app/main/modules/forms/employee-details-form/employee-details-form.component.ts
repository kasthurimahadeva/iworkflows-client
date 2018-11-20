import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LeaveFormDetails} from '../leave-form/leave-details.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-details-form',
  templateUrl: './employee-details-form.component.html',
  styleUrls: ['./employee-details-form.component.scss']
})
export class EmployeeDetailsFormComponent implements OnInit {
    employeeDetailsForm: FormGroup;
    leaveFormDetails: LeaveFormDetails;

    constructor(
        private route: ActivatedRoute,
        private _formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {

      this.leaveFormDetails = this.route.snapshot.data['leaveFormDetails'];
      this.employeeDetailsForm = this._formBuilder.group({
          employeeId: new FormControl({value: this.leaveFormDetails.employeeId, disabled: true}, Validators.required),
          employeeName: new FormControl({value: this.leaveFormDetails.principal, disabled: true}, Validators.required),
          faculty: new FormControl({value: this.leaveFormDetails.faculty, disabled: true}, Validators.required),
          department: new FormControl({value: this.leaveFormDetails.department, disabled: true}),
          role: new FormControl({value: this.leaveFormDetails.role, disabled: true}, Validators.required)
      });
  }
}
