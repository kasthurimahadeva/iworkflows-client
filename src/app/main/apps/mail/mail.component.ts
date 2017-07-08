import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../../core/services/layout.service';

@Component({
    selector   : 'fuse-mail',
    templateUrl: './mail.component.html',
    styleUrls  : ['./mail.component.scss']
})
export class MailComponent implements OnInit
{

    constructor(private layoutService: LayoutService)
    {
        this.layoutService.setSettings({
            toolbar   : 'below',
            navigation: 'left'
        });
    }

    ngOnInit()
    {

    }

}
