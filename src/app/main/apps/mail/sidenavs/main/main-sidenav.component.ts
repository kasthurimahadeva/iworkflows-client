import { Component, OnInit } from '@angular/core';
import { MailService } from '../../mail.service';

@Component({
    selector   : 'fuse-mail-main-sidenav',
    templateUrl: './main-sidenav.component.html',
    styleUrls  : ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit
{
    labels: any[];
    folders: any[];
    accounts: object;
    selectedAccount: string;

    constructor(
        private mailService: MailService
    )
    {
        // Data
        this.accounts = {
            'creapond'    : 'johndoe@creapond.com',
            'withinpixels': 'johndoe@withinpixels.com'
        };

        this.selectedAccount = 'creapond';
    }

    ngOnInit()
    {
        this.labels = this.mailService.labels;
        this.folders = this.mailService.folders;

        this.mailService.onLabelsUpdated.subscribe(labels => {
            this.labels = this.mailService.labels;
        });

        this.mailService.onFoldersUpdated.subscribe(folders => {
            this.folders = this.mailService.folders;
        });
    }
}
