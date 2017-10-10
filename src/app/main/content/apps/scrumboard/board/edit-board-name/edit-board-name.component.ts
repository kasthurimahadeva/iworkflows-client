import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector   : 'fuse-scrumboard-edit-board-name',
    templateUrl: './edit-board-name.component.html',
    styleUrls  : ['./edit-board-name.component.scss']
})
export class FuseScrumboardEditBoardNameComponent implements OnInit
{
    formActive = false;
    form: FormGroup;
    @Input() board;
    @Output() onNameChanged = new EventEmitter();
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
            name: [this.board.name]
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
            this.board.name = this.form.getRawValue().name;
            this.board.uri = encodeURIComponent(this.board.name).replace(/%20/g, '-').toLowerCase();

            this.onNameChanged.next(this.board.name);
            this.formActive = false;
        }
    }

}
