import { Component, OnDestroy, OnInit } from '@angular/core';
import { MailService } from '../../mail.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'fuse-mail-main-sidenav',
    templateUrl: './main-sidenav.component.html',
    styleUrls  : ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit, OnDestroy
{
    folders: any[];
    filters: any[];
    labels: any[];
    accounts: object;
    selectedAccount: string;

    onFoldersChanged: Subscription;
    onFiltersChanged: Subscription;
    onLabelsChanged: Subscription;

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
        this.onFoldersChanged =
            this.mailService.onFoldersChanged
                .subscribe(folders => {
                    this.folders = folders;
                });

        this.onFiltersChanged =
            this.mailService.onFiltersChanged
                .subscribe(filters => {
                    this.filters = filters;
                });

        this.onLabelsChanged =
            this.mailService.onLabelsChanged
                .subscribe(labels => {
                    this.labels = labels;
                });
    }

    ngOnDestroy()
    {
        this.onFoldersChanged.unsubscribe();
        this.onFiltersChanged.unsubscribe();
        this.onLabelsChanged.unsubscribe();
    }
}
