import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
    selector     : 'fuse-contacts',
    templateUrl  : './contacts.component.html',
    styleUrls    : ['./contacts.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactsComponent implements OnInit
{

    selected: any;

    constructor(private contactsService: ContactsService)
    {

    }

    ngOnInit()
    {
        this.contactsService.onContactSelected.subscribe(selected => {
            this.selected = selected;
        });
    }

}
