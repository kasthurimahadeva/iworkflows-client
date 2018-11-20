import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UploadComponent} from './upload/upload.component';
import {UploadService} from './upload.service';
import {DialogComponent} from './dialog/dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatListModule,
        FlexLayoutModule,
        MatProgressBarModule
    ],
    declarations: [UploadComponent, DialogComponent],
    exports: [UploadComponent],
    entryComponents: [DialogComponent],
    providers: [UploadService]
})
export class UploadModule {
}
