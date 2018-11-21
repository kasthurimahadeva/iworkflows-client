import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-employee-details-form',
  templateUrl: './employee-details-form.component.html',
  styleUrls: ['./employee-details-form.component.scss']
})
export class EmployeeDetailsFormComponent implements OnInit {
    employeeDetailsForm: FormGroup;

    @Input() employeeDetails: Object;

    constructor(
        private route: ActivatedRoute,
        private _formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
      this.employeeDetailsForm = this._formBuilder.group({
          employeeId: new FormControl({value: this.employeeDetails['employeeId'], disabled: true}, Validators.required),
          employeeName: new FormControl({value: this.employeeDetails['principal'], disabled: true}, Validators.required),
          faculty: new FormControl({value: this.employeeDetails['faculty'], disabled: true}, Validators.required),
          department: new FormControl({value: this.employeeDetails['department'], disabled: true}),
          role: new FormControl({value: this.employeeDetails['role'], disabled: true}, Validators.required)
      });
  }
}
