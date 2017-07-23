import { Component, OnDestroy, OnInit } from '@angular/core';
import { MailService } from './mail.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector   : 'fuse-mail',
    templateUrl: './mail.component.html',
    styleUrls  : ['./mail.component.scss']
})
export class MailComponent implements OnInit, OnDestroy
{
    hasSelectedMails: boolean;
    isIndeterminate: boolean;
    folders: any[];
    labels: any[];

    onSelectedMailsChanged: Subscription;

    constructor(
        private mailService: MailService
    )
    {

    }

    ngOnInit()
    {
        // Get the values for the first time
        this.labels = this.mailService.labels;
        this.folders = this.mailService.folders;

        this.onSelectedMailsChanged =
            this.mailService.onSelectedMailsChanged
                .subscribe(selectedMails => {

                    setTimeout(() => {
                        this.hasSelectedMails = selectedMails.length > 0;
                        this.isIndeterminate = (selectedMails.length !== this.mailService.mails.length && selectedMails.length > 0);
                    }, 0);
                });
    }

    ngOnDestroy()
    {
        this.onSelectedMailsChanged.unsubscribe();
    }

    toggleSelectAll()
    {
        this.mailService.toggleSelectAll();
    }

    selectMails(filterParameter?, filterValue?)
    {
        this.mailService.selectMails(filterParameter, filterValue);
    }

    deselectMails()
    {
        this.mailService.deselectMails();
    }

    toggleLabelOnSelectedMails(labelId)
    {
        this.mailService.toggleLabelOnSelectedMails(labelId);
    }

    setFolderOnSelectedMails(folderId)
    {
        this.mailService.setFolderOnSelectedMails(folderId);
    }
}
