import {Component, Input, OnInit} from '@angular/core';
import {MailModel} from '../mail.model';

@Component({
    selector   : 'fuse-mail-details',
    templateUrl: './mail-details.component.html',
    styleUrls  : ['./mail-details.component.scss']
})
export class MailDetailsComponent implements OnInit
{
    @Input('selectedMail') public mail: MailModel;
    showDetails: boolean;

    constructor()
    {
        this.showDetails = false;
    }

    ngOnInit()
    {
    }

}
