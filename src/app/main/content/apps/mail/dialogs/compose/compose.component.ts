import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector     : 'fuse-mail-compose',
    templateUrl  : './compose.component.html',
    styleUrls    : ['./compose.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FuseMailComposeDialogComponent implements OnInit
{
    showExtraToFields = false;
    composeForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<FuseMailComposeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any
    )
    {
        this.composeForm = this.createComposeForm();
    }

    ngOnInit()
    {
    }

    createComposeForm()
    {
        return new FormGroup({
            from   : new FormControl({
                value   : 'johndoe@creapond.com',
                disabled: true
            }),
            to     : new FormControl(''),
            cc     : new FormControl(''),
            bcc    : new FormControl(''),
            subject: new FormControl(''),
            message: new FormControl('')
        });
    }

    toggleExtraToFields()
    {
        this.showExtraToFields = !this.showExtraToFields;
    }
}
