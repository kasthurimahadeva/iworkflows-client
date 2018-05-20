import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule, MatIconModule, MatRippleModule, MatSidenavModule, MatSlideToggleModule, MatTableModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { FileManagerService } from 'app/main/apps/file-manager/file-manager.service';
import { FileManagerComponent } from 'app/main/apps/file-manager/file-manager.component';
import { FileManagerDetailsSidenavComponent } from 'app/main/apps/file-manager/sidenavs/details/details.component';
import { FileManagerFileListComponent } from 'app/main/apps/file-manager/file-list/file-list.component';
import { FileManagerMainSidenavComponent } from 'app/main/apps/file-manager/sidenavs/main/main.component';

const routes: Routes = [
    {
        path     : '**',
        component: FileManagerComponent,
        children : [],
        resolve  : {
            files: FileManagerService
        }
    }
];

@NgModule({
    declarations: [
        FileManagerComponent,
        FileManagerFileListComponent,
        FileManagerMainSidenavComponent,
        FileManagerDetailsSidenavComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        CdkTableModule,
        MatButtonModule,
        MatIconModule,
        MatRippleModule,
        MatSlideToggleModule,
        MatSidenavModule,
        MatTableModule,

        FuseSharedModule
    ],
    providers   : [
        FileManagerService
    ]
})
export class FileManagerModule
{
}
