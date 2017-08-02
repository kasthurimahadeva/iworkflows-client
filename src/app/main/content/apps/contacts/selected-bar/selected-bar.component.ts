import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
    selector   : 'fuse-selected-bar',
    templateUrl: './selected-bar.component.html',
    styleUrls  : ['./selected-bar.component.scss']
})
export class SelectedBarComponent implements OnInit
{
    selectedContacts: string[];
    hasSelectedContacts: boolean;
    isIndeterminate: boolean;

    constructor(private contactsService: ContactsService)
    {
        this.contactsService.onSelectedContactsChanged
            .subscribe(selectedContacts => {
                this.selectedContacts = selectedContacts;
                setTimeout(() => {
                    this.hasSelectedContacts = selectedContacts.length > 0;
                    this.isIndeterminate = (selectedContacts.length !== this.contactsService.contacts.length && selectedContacts.length > 0);
                }, 0);
            });

    }

    ngOnInit()
    {
    }

    selectAll()
    {
        this.contactsService.selectContacts();
    }

    deselectAll()
    {
        this.contactsService.deselectContacts();
    }

    deleteSelectedContacts()
    {

    }

}
