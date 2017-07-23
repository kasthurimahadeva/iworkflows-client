import { Component, OnDestroy, OnInit } from '@angular/core';
import { MailService } from '../mail.service';
import { Mail } from '../mail.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'fuse-mail-details',
    templateUrl: './mail-details.component.html',
    styleUrls  : ['./mail-details.component.scss']
})
export class MailDetailsComponent implements OnInit, OnDestroy
{
    mail: Mail;
    labels: any[];
    showDetails = false;

    onCurrentMailChanged: Subscription;

    constructor(
        private mailService: MailService
    )
    {
    }

    ngOnInit()
    {
        // Set initial values
        this.labels = this.mailService.labels;
        this.mail = this.mailService.currentMail;

        // Subscribe to update the current mail
        this.onCurrentMailChanged = this.mailService.onCurrentMailChanged
                                        .subscribe(currentMail => {
                                            this.mail = currentMail;
                                        });
    }

    ngOnDestroy()
    {
        this.onCurrentMailChanged.unsubscribe();
    }

    toggleStar(event)
    {
        event.stopPropagation();

        this.mail.toggleStar();

        this.mailService.updateMail(this.mail);
    }

    toggleImportant(event)
    {
        event.stopPropagation();

        this.mail.toggleImportant();

        this.mailService.updateMail(this.mail);
    }

}
