import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector   : 'fuse-scrumboard-board-add-list',
    templateUrl: './add-list.component.html',
    styleUrls  : ['./add-list.component.scss']
})
export class FuseScrumboardBoardAddListComponent implements OnInit
{
    formActive = false;
    form: FormGroup;
    @Output() onlistAdd = new EventEmitter();
    @ViewChild('nameInput') nameInputField;

    constructor(
        private formBuilder: FormBuilder
    )
    {
    }

    ngOnInit()
    {

    }

    openForm()
    {
        this.form = this.formBuilder.group({
            name: ['']
        });
        this.formActive = true;
        this.focusNameField();
    }

    closeForm()
    {
        this.formActive = false;
    }

    focusNameField()
    {
        setTimeout(() => {
            this.nameInputField.nativeElement.focus();
        });
    }

    onFormSubmit()
    {
        if ( this.form.valid )
        {
            this.onlistAdd.next(this.form.getRawValue().name);
            this.formActive = false;
        }
    }

}
