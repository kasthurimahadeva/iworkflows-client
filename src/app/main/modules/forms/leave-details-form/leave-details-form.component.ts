import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MatDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-leave-details-form',
  templateUrl: './leave-details-form.component.html',
  styleUrls: ['./leave-details-form.component.scss']
})
export class LeaveDetailsFormComponent implements OnInit {
    leaveDetailsForm: FormGroup;
    startingDate: Date;
    endingDate: Date;
    startMinDate = new Date();
    endMinDate = new Date();
    startMaxDate: Date;
    startedDate: FormControl;
    endedDate: FormControl;
    @Input() leaveDetails: Object;
    @Input() isDisabled: boolean;

    types: string[] = ['Casual', 'Medical', 'Vacation'];

    getStartDate(event: MatDatepickerInputEvent<Date>): void {
        this.startingDate = event.value;
    }

    getEndDate(event: MatDatepickerInputEvent<Date>): void {
        this.endingDate = event.value;
    }

    assignMinDate(): void {
        if (this.startingDate !== null) {
            this.endMinDate = new Date(this.startingDate);
        }
        else {
            this.endMinDate = new Date();
        }
    }

    assignMaxDate(): void {
        if (this.endingDate !== null) {
            this.startMaxDate = new Date(this.endingDate);
        }
    }

  constructor(
      private route: ActivatedRoute,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
      this.startedDate = new FormControl(new Date(this.leaveDetails['startDate']));
      this.endedDate = new FormControl(new Date(this.leaveDetails['endDate']));

      this.leaveDetailsForm = this._formBuilder.group({
          leaveType: new FormControl({value: this.leaveDetails['leaveType'], disabled: this.isDisabled}),
          startDate: new FormControl({value: this.leaveDetails['startDate'], disabled: this.isDisabled}),
          endDate: new FormControl({value: this.leaveDetails['endDate'], disabled: this.isDisabled}),
          casual: new FormControl({value: this.leaveDetails['casual'], disabled: this.isDisabled}),
          medical: new FormControl({value: this.leaveDetails['medical'], disabled: this.isDisabled}),
          vacation: new FormControl({value: this.leaveDetails['vacation'], disabled: this.isDisabled}),
          comments: new FormControl({value: this.leaveDetails['comments'], disabled: this.isDisabled})

      });
  }

}
