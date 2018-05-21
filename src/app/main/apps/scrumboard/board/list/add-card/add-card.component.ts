import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector   : 'scrumboard-board-add-card',
    templateUrl: './add-card.component.html',
    styleUrls  : ['./add-card.component.scss']
})
export class ScrumboardBoardAddCardComponent
{
    formActive: boolean;
    form: FormGroup;

    @Output()
    onCardAdd: EventEmitter<any>;

    @ViewChild('nameInput')
    nameInputField;

    /**
     * Constructor
     *
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.formActive = false;
        this.onCardAdd = new EventEmitter();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open the form
     */
    openForm(): void
    {
        this.form = this._formBuilder.group({
            name: ''
        });
        this.formActive = true;
        this.focusNameField();
    }

    /**
     * Close the form
     */
    closeForm(): void
    {
        this.formActive = false;
    }

    /**
     * Focus to the name field
     */
    focusNameField(): void
    {
        setTimeout(() => {
            this.nameInputField.nativeElement.focus();
        });
    }

    /**
     * On form submit
     */
    onFormSubmit(): void
    {
        if ( this.form.valid )
        {
            const cardName = this.form.getRawValue().name;
            this.onCardAdd.next(cardName);
            this.formActive = false;
        }
    }
}

