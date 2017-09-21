import { Component, OnInit } from '@angular/core';
import { FileManagerService } from '../../file-manager.service';
import { fuseAnimations } from '../../../../../../core/animations';

@Component({
    selector   : 'fuse-file-manager-details-sidenav',
    templateUrl: './details.component.html',
    styleUrls  : ['./details.component.scss'],
    animations : fuseAnimations
})
export class FuseFileManagerDetailsSidenavComponent implements OnInit
{

    selected: any;

    constructor(private fileManagerService: FileManagerService)
    {

    }

    ngOnInit()
    {
        this.fileManagerService.onFileSelected.subscribe(selected => {
            this.selected = selected;
        });
    }

}
