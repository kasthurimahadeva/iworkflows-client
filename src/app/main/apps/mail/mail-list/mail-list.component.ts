import { Component, Input, OnInit } from '@angular/core';
import { Mail } from '../mail.model';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../mail.service';
import { Location } from '@angular/common';

@Component({
    selector   : 'fuse-mail-list',
    templateUrl: './mail-list.component.html',
    styleUrls  : ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit
{
    mails: Mail[];

    @Input('selectedMail') public selectedMail: Mail;

    search: string;

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

        // Subscribe to update mails on changes
        this.mailService.onMailsUpdated
            .subscribe(mails => {
                this.mails = mails;
            });

        this.mailService.onSelectedMailUpdated
            .subscribe(selectedMail => {
                if ( !selectedMail )
                {
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
            });
    }

    selectMail(mailId)
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

        // Set selected mail
        this.mailService.setSelectedMail(mailId);
    }

}
