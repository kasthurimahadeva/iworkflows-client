import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../contacts.service';

@Component({
    selector   : 'fuse-contacts-main-sidenav',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class FuseContactsMainSidenavComponent implements OnInit
{
    user: any;
    filterBy: string;

    constructor(private contactsService: ContactsService)
    {
        this.filterBy = 'all';
        this.contactsService.onUserDataChanged.subscribe(user => {
            this.user = user;
        });
    }

    ngOnInit()
    {
    }

    changeFilter(filter)
    {
        this.filterBy = filter;
        this.contactsService.onFilterChanged.next(this.filterBy);
    }
}
