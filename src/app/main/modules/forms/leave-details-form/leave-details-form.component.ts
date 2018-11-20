import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LeaveFormDetails} from '../leave-form/leave-details.model';
import {ActivatedRoute} from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-leave-details-form',
  templateUrl: './leave-details-form.component.html',
  styleUrls: ['./leave-details-form.component.scss']
})
export class LeaveDetailsFormComponent implements OnInit {
    leaveDetailsForm: FormGroup;
    leaveFormDetails: LeaveFormDetails;
    startDate: Date;
    endDate: Date;
    files = [];
    startMinDate = new Date();
    endMinDate = new Date();
    startMaxDate: Date;

    leaveTypes: string[] = ['Casual', 'Medical', 'Vacation'];

    getStartDate(event: MatDatepickerInputEvent<Date>): void {
        this.startDate = event.value;
    }

    getEndDate(event: MatDatepickerInputEvent<Date>): void {
        this.endDate = event.value;
    }

    assignMinDate(): void {
        if (this.startDate !== null) {
            this.endMinDate = new Date(this.startDate);
        }
        else {
            this.endMinDate = new Date();
        }
    }

    assignMaxDate(): void {
        if (this.endDate !== null) {
            this.startMaxDate = new Date(this.endDate);
        }
    }

  constructor(
      private route: ActivatedRoute,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

      this.leaveFormDetails = this.route.snapshot.data['leaveFormDetails'];

      this.leaveDetailsForm = this._formBuilder.group({
          leaveType: ['', Validators.required],
          startDate: ['', Validators.required],
          endDate: ['', Validators.required],
          takenCasualLeaves: new FormControl({value: this.leaveFormDetails.casual, disabled: false}),
          takenMedicalLeaves: new FormControl({value: this.leaveFormDetails.medical, disabled: false}),
          takenVacationLeaves: new FormControl({value: this.leaveFormDetails.vacation, disabled: false}),
          documents: [''],
          comments: ['']

      });
  }

    getFilesDetails(files: Array<string>): void {
        this.files = this.files.concat(files);
    }

}
