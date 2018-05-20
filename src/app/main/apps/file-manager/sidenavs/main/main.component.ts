import { Component } from '@angular/core';

@Component({
    selector   : 'file-manager-main-sidenav',
    templateUrl: './main.component.html',
    styleUrls  : ['./main.component.scss']
})
export class FileManagerMainSidenavComponent
{
    selected: any;

    constructor()
    {
    }
}
