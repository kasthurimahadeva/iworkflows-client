import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailModel } from './mail.model';
import { MailDataService } from './mail-data.service';

@Component({
    selector   : 'fuse-mail',
    templateUrl: './mail.component.html',
    styleUrls  : ['./mail.component.scss']
})
export class MailComponent implements OnInit
{
    selectedMail: MailModel;

    constructor(
        private route: ActivatedRoute,
        private mailDataService: MailDataService
    )
    {
        console.log('mail component inited');
    }

    ngOnInit()
    {

    }

    onMailSelect(mail)
    {
        this.selectedMail = mail;
    }
}
