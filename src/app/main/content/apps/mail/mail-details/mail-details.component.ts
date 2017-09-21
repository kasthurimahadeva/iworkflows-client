import { Component, OnDestroy, OnInit } from '@angular/core';
import { MailService } from '../mail.service';
import { Mail } from '../mail.model';
import { Subscription } from 'rxjs/Subscription';
import { fuseAnimations } from '../../../../../core/animations';

@Component({
    selector   : 'fuse-mail-details',
    templateUrl: './mail-details.component.html',
    styleUrls  : ['./mail-details.component.scss'],
    animations : fuseAnimations
})
export class FuseMailDetailsComponent implements OnInit, OnDestroy
{
    mail: Mail;
    labels: any[];
    showDetails = false;

    onCurrentMailChanged: Subscription;
    onLabelsChanged: Subscription;

    constructor(
        private mailService: MailService
    )
    {
    }

    ngOnInit()
    {
        // Subscribe to update the current mail
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(currentMail => {
                    this.mail = currentMail;
                });

        // Subscribe to update on label change
        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe(labels => {
                    this.labels = labels;
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
