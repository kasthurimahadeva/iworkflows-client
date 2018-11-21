import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-contact-details-form',
  templateUrl: './contact-details-form.component.html',
  styleUrls: ['./contact-details-form.component.scss']
})
export class ContactDetailsFormComponent implements OnInit {
    contactDetailsForm: FormGroup;
    @Input() contactDetails: Object;
    @Input() isDisabled: boolean;

    constructor(
      private route: ActivatedRoute,
      private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

      this.contactDetailsForm = this._formBuilder.group({
          address: new FormControl({value: this.contactDetails['address'], disabled: this.isDisabled}, Validators.required),
          email: new FormControl({value: this.contactDetails['email'], disabled: this.isDisabled}, [Validators.required, Validators.email]),
          mobileNo: new FormControl({value: this.contactDetails['mobileNo'], disabled: this.isDisabled}, Validators.required),
          telephoneNo: new FormControl({value: this.contactDetails['telephoneNo'], disabled: this.isDisabled}),
      });
  }


}
