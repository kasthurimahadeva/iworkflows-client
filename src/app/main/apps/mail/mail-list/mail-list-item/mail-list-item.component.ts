import { Component, Input, OnInit } from '@angular/core';
import { Mail } from '../../mail.model';
import { MailService } from '../../mail.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
    selector   : 'fuse-mail-list-item',
    templateUrl: './mail-list-item.component.html',
    styleUrls  : ['./mail-list-item.component.scss']
})
export class MailListItemComponent implements OnInit
{
    @Input() mail: Mail;

    constructor(
        private route: ActivatedRoute,
        private mailService: MailService
    )
    {

    }

    ngOnInit()
    {
        this.mail = new Mail(this.mail);
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
