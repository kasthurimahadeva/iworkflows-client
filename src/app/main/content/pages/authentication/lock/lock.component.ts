import { Component, OnInit } from '@angular/core';

import { FuseLayoutService } from '../../../../../core/services/layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector   : 'fuse-lock',
    templateUrl: './lock.component.html',
    styleUrls  : ['./lock.component.scss']
})
export class LockComponent implements OnInit
{
    lockForm: FormGroup;
    lockFormErrors: any;

    constructor(
        private layoutService: FuseLayoutService,
        private formBuilder: FormBuilder
    )
    {
        this.layoutService.setSettings({
            navigation: 'none',
            toolbar   : 'none',
            footer    : 'none'
        });

        this.lockFormErrors = {
            username: {},
            password: {}
        };
    }

    ngOnInit()
    {
        this.lockForm = this.formBuilder.group({
            username: [{value: 'Katherine', disabled: true}, Validators.required],
            password: ['', Validators.required]
        });

        this.lockForm.valueChanges.subscribe(() => {
            this.onLockFormValuesChanged();
        });
    }

    onLockFormValuesChanged()
    {
        for ( const field in this.lockFormErrors )
        {
            if ( this.lockFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.lockFormErrors[field] = {};

            // Get the control
            const control = this.lockForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.lockFormErrors[field] = control.errors;
            }
        }
    }
}
