import { Component, OnInit } from '@angular/core';
import { Mail } from './mail.model';
import { MailService } from './mail.service';

@Component({
    selector   : 'fuse-mail',
    templateUrl: './mail.component.html',
    styleUrls  : ['./mail.component.scss']
})
export class MailComponent implements OnInit
{
    selectedMail: Mail;

    constructor(
        private mailService: MailService
    )
    {

    }

    ngOnInit()
    {
        this.selectedMail = this.mailService.selectedMail;

        this.mailService.onSelectedMailUpdated
            .subscribe(selectedMail => {
                this.selectedMail = selectedMail;
            });
    }
}
