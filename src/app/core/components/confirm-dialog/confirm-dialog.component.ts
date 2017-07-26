import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector   : 'fuse-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class FuseConfirmDialogComponent implements OnInit
{
    public confirmMessage: string;

    constructor(public dialogRef: MdDialogRef<FuseConfirmDialogComponent>)
    {
    }

    ngOnInit()
    {
    }

}
