import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../contacts.service';

@Component({
    selector   : 'fuse-contacts-main-sidenav',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class MainSidenavComponent implements OnInit
{
    user: any;

    constructor(private contactsService: ContactsService)
    {
        this.contactsService.onUserDataChanged.subscribe(user => {
            this.user = user;
        });
    }

    ngOnInit()
    {
    }

}
