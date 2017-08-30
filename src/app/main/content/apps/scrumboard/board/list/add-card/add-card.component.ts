import { Component, ContentChildren, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector   : 'fuse-scrumboard-board-add-card',
    templateUrl: './add-card.component.html',
    styleUrls  : ['./add-card.component.scss']
})
export class FuseScrumboardBoardAddCardComponent implements OnInit
{
    formActive = false;
    form: FormGroup;
    @Output() onCardAdd = new EventEmitter();
    @ViewChildren('nameInput') nameInputField;

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
            name: ''
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
            this.nameInputField.first._mdInputChild.focus();
        });
    }

    onFormSubmit()
    {
        if ( this.form.valid )
        {
            const cardName = this.form.getRawValue().name;
            this.onCardAdd.next(cardName);
            this.formActive = false;
        }
    }
}

