import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss']
})
export class FileViewerComponent implements OnInit {
    fileName: string;
    processInstanceId: string;
    fileUrl: string;

  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
      this.fileName = this.data['fileName'];
      this.processInstanceId = this.data['processInstanceId'];
      this.fileUrl = environment.server + 'api/v1/file/' + this.processInstanceId + '/' + this.fileName;
      console.log(this.fileUrl);
  }

}
