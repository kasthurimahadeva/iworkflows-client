import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactsService } from './contacts.service';
import { Animations } from '../../../../core/animations';
import { FormControl } from '@angular/forms';

@Component({
    selector     : 'fuse-contacts',
    templateUrl  : './contacts.component.html',
    styleUrls    : ['./contacts.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : [Animations.slideInTop]
})
export class FuseContactsComponent implements OnInit
{
    hasSelectedContacts: boolean;
    searchInput: FormControl;

    constructor(private contactsService: ContactsService)
    {
        this.searchInput = new FormControl('');
    }

    ngOnInit()
    {

        this.contactsService.onSelectedContactsChanged
            .subscribe(selectedContacts => {
                this.hasSelectedContacts = selectedContacts.length > 0;
            });

        this.searchInput.valueChanges
            .debounceTime(300)
            .distinctUntilChanged()
            .subscribe(searchText => {
                this.contactsService.onSearchTextChanged.next(searchText);
            });
    }

}
