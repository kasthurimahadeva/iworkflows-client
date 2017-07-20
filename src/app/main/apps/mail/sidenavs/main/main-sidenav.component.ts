import { Component, OnInit } from '@angular/core';
import { MailService } from '../../mail.service';

@Component({
    selector   : 'fuse-mail-main-sidenav',
    templateUrl: './main-sidenav.component.html',
    styleUrls  : ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit
{
    folders: any[];
    filters: any[];
    labels: any[];
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
        this.folders = this.mailService.folders;
        this.filters = this.mailService.filters;
        this.labels = this.mailService.labels;

        this.mailService.onFoldersChanged.subscribe(folders => {
            this.folders = this.mailService.folders;
        });

        this.mailService.onFiltersChanged.subscribe(folders => {
            this.filters = this.mailService.filters;
        });

        this.mailService.onLabelsChanged.subscribe(labels => {
            this.labels = this.mailService.labels;
        });
    }
}
