import { Component, Input, OnInit } from '@angular/core';
import { MailModel } from '../../mail.model';

@Component({
    selector   : 'fuse-mail-list-item',
    templateUrl: './mail-list-item.component.html',
    styleUrls  : ['./mail-list-item.component.scss']
})
export class MailListItemComponent implements OnInit
{
    @Input() mail: MailModel;

    constructor()
    {
    }

    ngOnInit()
    {
        console.log('mail list item inited');
    }

}
