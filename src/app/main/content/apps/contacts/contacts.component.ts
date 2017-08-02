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
    pathArr: string[];

    constructor(private fileManagerService: ContactsService)
    {

    }

    ngOnInit()
    {
        this.fileManagerService.onFileSelected.subscribe(selected => {
            this.selected = selected;
            this.pathArr = selected.location.split('>');
        });
    }

}
