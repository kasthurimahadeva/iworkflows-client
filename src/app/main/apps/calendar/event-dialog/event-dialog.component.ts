import { Component, Inject, OnInit } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
    selector   : 'fuse-calendar-event-dialog',
    templateUrl: './event-dialog.component.html',
    styleUrls  : ['./event-dialog.component.scss']
})
export class EventDialogComponent implements OnInit
{

    constructor(private dialogRef: MdDialogRef<EventDialogComponent>,
                @Inject(MD_DIALOG_DATA) private data: any)
    {
        console.log(data);
    }

    ngOnInit()
    {
    }

}
