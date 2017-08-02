import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';

@Component({
    selector   : 'fuse-contacts-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls  : ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit
{
    contacts: any;
    user: any;
    dataSource: FilesDataSource | null;
    displayedColumns = ['checkbox', 'avatar', 'name', 'email', 'phone', 'jobTitle', 'buttons'];
    selectedContacts: any[];
    checkboxes: {};

    constructor(private contactsService: ContactsService)
    {
        this.contactsService.onContactsChanged.subscribe(contacts => {

            this.contacts = contacts;

            this.checkboxes = {};
            contacts.map(contact => {
                this.checkboxes[contact.id] = false;
            });
        });

        this.contactsService.onSelectedContactsChanged.subscribe(selectedContacts => {
            for ( const id in this.checkboxes )
            {
                this.checkboxes[id] = selectedContacts.includes(id);
            }
            this.selectedContacts = selectedContacts;
        });

        this.contactsService.onUserDataChanged.subscribe(user => {
            this.user = user;
        });

    }

    ngOnInit()
    {
        this.dataSource = new FilesDataSource(this.contactsService);
    }

    onSelect(selected)
    {
        // this.fileManagerService.onContactSelected.next(selected);
    }

    onSelectedChange(contactId)
    {
        this.contactsService.toggleSelectedContact(contactId);
    }

    toggleStar(contactId)
    {
        if ( this.user.starred.includes(contactId) )
        {
            this.user.starred.splice(this.user.starred.indexOf(contactId), 1);
        }
        else
        {
            this.user.starred.push(contactId);
        }

        this.contactsService.updateUserData(this.user);
    }

    removeContact(contactId)
    {

    }
}

export class FilesDataSource extends DataSource<any>
{
    constructor(private contactsService: ContactsService)
    {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any[]>
    {
        return this.contactsService.onContactsChanged;
    }

    disconnect()
    {
    }
}
