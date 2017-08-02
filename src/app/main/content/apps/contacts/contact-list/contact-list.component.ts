import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { DataSource } from '@angular/cdk';
import { Observable } from 'rxjs/Observable';
import { ContactFormDialogComponent } from '../contact-form/contact-form.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { FuseConfirmDialogComponent } from '../../../../../core/components/confirm-dialog/confirm-dialog.component';

@Component({
    selector   : 'fuse-contacts-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls  : ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit
{
    @ViewChild('dialogContent') dialogContent: TemplateRef<any>;

    contacts: any;
    user: any;
    dataSource: FilesDataSource | null;
    displayedColumns = ['checkbox', 'avatar', 'name', 'email', 'phone', 'jobTitle', 'buttons'];
    selectedContacts: any[];
    checkboxes: {};

    dialogRef: any;

    confirmDialogRef: MdDialogRef<FuseConfirmDialogComponent>;

    constructor(
        private contactsService: ContactsService,
        public dialog: MdDialog
    )
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

    editContact(contact)
    {
        // this.fileManagerService.onContactSelected.next(selected);

        this.dialogRef = this.dialog.open(ContactFormDialogComponent, {
            panelClass: 'contact-form-dialog',
            data      : {
                contact: contact,
                action : 'edit'
            }
        });

        /*   this.dialogRef.afterClosed()
               .subscribe(response => {
                   if ( !response )
                   {
                       return;
                   }
                   const actionType: string = response[0];
                   const formData: FormGroup = response[1];
                   switch ( actionType )
                   {
                       /!**
                        * Save
                        *!/
                       case 'save':

                           this.events[eventIndex] = Object.assign(this.events[eventIndex], formData.getRawValue());
                           this.refresh.next(true);

                           break;
                       /!**
                        * Delete
                        *!/
                       case 'delete':

                           this.deleteEvent(event);

                           break;
                   }
               });*/
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
