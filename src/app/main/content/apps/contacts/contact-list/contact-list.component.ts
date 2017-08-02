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
    dataSource: FilesDataSource | null;
    displayedColumns = ['checkbox', 'avatar', 'name', 'email', 'phone', 'jobTitle', 'buttons'];
    selected: any;

    constructor(private fileManagerService: ContactsService)
    {
        this.fileManagerService.onContactsChanged.subscribe(files => {
            this.contacts = files;
        });
        this.fileManagerService.onContactSelected.subscribe(selected => {
            this.selected = selected;
        });
    }

    ngOnInit()
    {
        this.dataSource = new FilesDataSource(this.fileManagerService);
    }

    onSelect(selected)
    {
        this.fileManagerService.onContactSelected.next(selected);
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
