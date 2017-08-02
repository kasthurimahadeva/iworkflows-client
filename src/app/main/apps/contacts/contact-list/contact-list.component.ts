import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
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
    files: any;
    dataSource: FilesDataSource | null;
    displayedColumns = ['icon', 'name', 'type', 'owner', 'size', 'modified', 'detail-button'];
    selected: any;

    constructor(private fileManagerService: ContactsService)
    {
        this.fileManagerService.onFilesChanged.subscribe(files => {
            this.files = files;
        });
        this.fileManagerService.onFileSelected.subscribe(selected => {
            this.selected = selected;
        });
    }

    ngOnInit()
    {
        this.dataSource = new FilesDataSource(this.fileManagerService);
    }

    onSelect(selected)
    {
        this.fileManagerService.onFileSelected.next(selected);
    }
}

export class FilesDataSource extends DataSource<any>
{
    constructor(private fileManagerService: ContactsService)
    {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any[]>
    {
        return this.fileManagerService.onFilesChanged;
    }

    disconnect()
    {
    }
}
