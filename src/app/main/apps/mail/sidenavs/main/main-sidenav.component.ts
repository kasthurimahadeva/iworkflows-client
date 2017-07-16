import {Component, OnInit} from '@angular/core';

@Component({
    selector   : 'fuse-mail-main-sidenav',
    templateUrl: './main-sidenav.component.html',
    styleUrls  : ['./main-sidenav.component.scss']
})
export class MainSidenavComponent implements OnInit
{
    accounts: object;
    selectedAccount: string;

    constructor()
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
    }
}
