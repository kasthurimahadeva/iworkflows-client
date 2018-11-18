import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UploadService} from '../upload.service';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
    filesCount = 0;
    filesAdded = false;

    constructor(public dialog: MatDialog, public uploadService: UploadService) {
    }

    public openUploadDialog(): void{
        const dialogRef = this.dialog.open(DialogComponent, {width: '50%', height: '50%'});
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result !== undefined && result > 0){
                this.filesCount = this.filesCount + result;
                this.filesAdded = true;
            }
        });
    }

}
