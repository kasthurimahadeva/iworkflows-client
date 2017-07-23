import { Component, OnDestroy, OnInit } from '@angular/core';
import { Mail } from '../mail.model';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../mail.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'fuse-mail-list',
    templateUrl: './mail-list.component.html',
    styleUrls  : ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit, OnDestroy
{
    mails: Mail[];
    currentMail: Mail;

    onMailsChanged: Subscription;
    onCurrentMailChanged: Subscription;

    constructor(
        private route: ActivatedRoute,
        private mailService: MailService,
        private location: Location
    )
    {
    }

    ngOnInit()
    {
        // Get mails for the first time
        this.mails = this.mailService.mails;

        // Get current mail for the first time if available
        this.currentMail = this.mailService.currentMail || null;

        // Subscribe to update mails on changes
        this.onMailsChanged =
            this.mailService.onMailsChanged
                .subscribe(mails => {
                    this.mails = mails;
                });

        // Subscribe to update current mail on changes
        this.onCurrentMailChanged =
            this.mailService.onCurrentMailChanged
                .subscribe(currentMail => {
                    if ( !currentMail )
                    {
                        // Set the current mail id to null to deselect the current mail
                        this.currentMail = null;

                        // Handle the location changes
                        const labelHandle  = this.route.snapshot.params.labelHandle,
                              folderHandle = this.route.snapshot.params.folderHandle;

                        if ( labelHandle )
                        {
                            this.location.go('apps/mail/label/' + labelHandle);
                        }
                        else
                        {
                            this.location.go('apps/mail/' + folderHandle);
                        }
                    }
                    else
                    {
                        this.currentMail = currentMail;
                    }
                });
    }

    ngOnDestroy()
    {
        this.onMailsChanged.unsubscribe();
        this.onCurrentMailChanged.unsubscribe();
    }

    /**
     * Read mail
     * @param mailId
     */
    readMail(mailId)
    {
        const labelHandle  = this.route.snapshot.params.labelHandle,
              folderHandle = this.route.snapshot.params.folderHandle;

        if ( labelHandle )
        {
            this.location.go('apps/mail/label/' + labelHandle + '/' + mailId);
        }
        else
        {
            this.location.go('apps/mail/' + folderHandle + '/' + mailId);
        }

        // Set current mail
        this.mailService.setCurrentMail(mailId);
    }

}
