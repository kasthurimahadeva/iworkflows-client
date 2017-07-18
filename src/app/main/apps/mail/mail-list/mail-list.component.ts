import { Component, Input, OnInit } from '@angular/core';
import { Mail } from '../mail.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MailService } from '../mail.service';

@Component({
    selector   : 'fuse-mail-list',
    templateUrl: './mail-list.component.html',
    styleUrls  : ['./mail-list.component.scss']
})
export class MailListComponent implements OnInit
{
    mails: Mail[];

    @Input('selectedMail') public selectedMail: Mail;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private mailService: MailService
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
                console.log('mailsUpdated');
                this.mails = mails;
            });
    }

    selectMail(mailId)
    {
        const labelHandle  = this.route.snapshot.params.labelHandle,
              folderHandle = this.route.snapshot.params.folderHandle;

        if ( labelHandle )
        {
            this.router.navigate(['apps/mail/label', labelHandle, mailId]);
        }
        else
        {
            this.router.navigate(['apps/mail', folderHandle, mailId]);
        }
    }

}
