import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {isRejected} from 'q';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reject-comments',
  templateUrl: './reject-comments.component.html',
  styleUrls: ['./reject-comments.component.scss']
})
export class RejectCommentsComponent implements OnInit {
    private rejectComment: FormGroup;

  constructor(public dialogRef: MatDialogRef<RejectCommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.rejectComment = this._formBuilder.group({
          comments: ['', Validators.required]
      });
  }

  onClickReject(): void {
      this.data.isRejected = true;
      this.data.comments = this.rejectComment.get('comments').value;
      if (this.data.comments !== '') {
          this.dialogRef.close(this.data);
      }

  }

  onClickCancel(): void{
      this.data.isRejected = false;
      this.dialogRef.close(this.data);
  }

}

export interface DialogData {
    isRejected: boolean;
    comments: string;
}
