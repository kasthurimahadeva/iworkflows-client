import { Component, Input, OnInit } from '@angular/core';
import { Mail } from '../mail.model';
import { MailService } from '../mail.service';

@Component({
    selector   : 'fuse-mail-details',
    templateUrl: './mail-details.component.html',
    styleUrls  : ['./mail-details.component.scss']
})
export class MailDetailsComponent implements OnInit
{
    @Input('selectedMail') public mail: Mail;
    showDetails: boolean;
    labels: any[];

    constructor(
        private mailService: MailService
    )
    {
        this.showDetails = false;
    }

    ngOnInit()
    {
        this.labels = this.mailService.labels;
    }

    toggleStar(event)
    {
        event.stopPropagation();

        this.mail.toggleStar();

        this.mailService.update(this.mail);
    }

    toggleImportant(event)
    {
        event.stopPropagation();

        this.mail.toggleImportant();

        this.mailService.update(this.mail);
    }

}
