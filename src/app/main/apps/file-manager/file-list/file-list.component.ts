import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FileManagerService } from '../file-manager.service';

@Component({
    selector   : 'fuse-file-list',
    templateUrl: './file-list.component.html',
    styleUrls  : ['./file-list.component.scss']
})
export class FileListComponent implements OnInit
{

    rows: any[];
    selected = [];

    loadingIndicator = false;
    reorderable = true;

    constructor(private fileManagerService: FileManagerService)
    {

    }

    ngOnInit()
    {
        this.rows = this.fileManagerService.files;
        this.selected = [this.rows[0]];
        this.fileManagerService.onFileSelected.next(this.selected[0]);
    }

    onSelect(ev)
    {
        this.fileManagerService.onFileSelected.next(this.selected[0]);
    }

}
