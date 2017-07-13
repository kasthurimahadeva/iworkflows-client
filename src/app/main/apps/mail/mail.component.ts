import { Component, OnInit } from '@angular/core';
import { FuseLayoutService } from '../../../core/services/layout.service';

@Component({
    selector   : 'fuse-mail',
    templateUrl: './mail.component.html',
    styleUrls  : ['./mail.component.scss']
})
export class MailComponent implements OnInit
{

    constructor(private layoutService: FuseLayoutService)
    {
        this.layoutService.setSettings({
            navigation: 'left',
            toolbar   : 'below',
            footer    : 'below'
        });
    }

    ngOnInit()
    {

    }

}
