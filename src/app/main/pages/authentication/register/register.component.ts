import { Component, OnInit } from '@angular/core';

import { FuseLayoutService } from '../../../../core/services/layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector   : 'fuse-register',
    templateUrl: './register.component.html',
    styleUrls  : ['./register.component.scss']
})
export class RegisterComponent implements OnInit
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
            if ( this.registerFormErrors.hasOwnProperty(field) )
            {
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
}
