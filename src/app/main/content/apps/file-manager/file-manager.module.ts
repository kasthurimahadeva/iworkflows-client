import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FuseFileManagerComponent } from './file-manager.component';
import { FileManagerService } from './file-manager.service';
import { FuseFileManagerFileListComponent } from './file-list/file-list.component';
import { FuseFileManagerMainSidenavComponent } from './sidenavs/main/main.component';
import { FuseFileManagerDetailsSidenavComponent } from './sidenavs/details/details.component';

const routes: Routes = [
    {
        path     : '**',
        component: FuseFileManagerComponent,
        children : [],
        resolve  : {
            files: FileManagerService
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FuseFileManagerComponent,
        FuseFileManagerFileListComponent,
        FuseFileManagerMainSidenavComponent,
        FuseFileManagerDetailsSidenavComponent
    ],
    providers   : [
        FileManagerService
    ]
})
export class FuseFileManagerModule
{
}
