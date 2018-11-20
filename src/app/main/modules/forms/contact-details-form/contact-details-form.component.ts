import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {LeaveFormDetails} from '../leave-form/leave-details.model';

@Component({
  selector: 'app-contact-details-form',
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss']
})
export class ContactDetailsFormComponent implements OnInit {
    contactDetailsForm: FormGroup;
    leaveFormDetails: LeaveFormDetails;

    constructor(
      private route: ActivatedRoute,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
      this.leaveFormDetails = this.route.snapshot.data['leaveFormDetails'];

      this.contactDetailsForm = this._formBuilder.group({
          address: new FormControl({value: '', disabled: false}, Validators.required),
          email: new FormControl({value: this.leaveFormDetails.email, disabled: true}, [Validators.required, Validators.email]),
          mobileNo: new FormControl({value: this.leaveFormDetails.mobileNo, disabled: false}, Validators.required),
          telephoneNo: new FormControl({value: '', disabled: false}),
      });
  }


}
