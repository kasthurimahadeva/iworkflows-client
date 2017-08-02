import { Component, OnInit } from '@angular/core';

import { FuseLayoutService } from '../../../../../core/services/layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector   : 'fuse-register-2',
    templateUrl: './register-2.component.html',
    styleUrls  : ['./register-2.component.scss']
})
export class Register2Component implements OnInit
{
    registerForm: FormGroup;
    registerFormErrors: any;

    constructor(private layoutService: FuseLayoutService, private formBuilder: FormBuilder)
    {
        this.layoutService.setSettings({
            navigation: 'none',
            toolbar   : 'none',
            footer    : 'none'
        });

        this.registerFormErrors = {
            name           : {},
            email          : {},
            password       : {},
            passwordConfirm: {}
        };
    }

    ngOnInit()
    {
        this.registerForm = this.formBuilder.group({
            name           : ['', Validators.required],
            email          : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', Validators.required]
        });

        this.registerForm.valueChanges.subscribe(() => {
            this.onRegisterFormValuesChanged();
        });
    }

    onRegisterFormValuesChanged()
    {
        for ( const field in this.registerFormErrors )
        {
            if ( !this.registerFormErrors.hasOwnProperty(field) )
            {
                continue;
            }

            // Clear previous errors
            this.registerFormErrors[field] = {};

            // Get the control
            const control = this.registerForm.get(field);

            if ( control && control.dirty && !control.valid )
            {
                this.registerFormErrors[field] = control.errors;
            }
        }
    }
}
