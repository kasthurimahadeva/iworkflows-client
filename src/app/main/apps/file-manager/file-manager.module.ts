import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerComponent } from './file-manager.component';
import { FileManagerService } from './file-manager.service';
import { FileListComponent } from './file-list/file-list.component';
import { MainSidenavComponent } from './sidenavs/main/main.component';
import { DetailsSidenavComponent } from './sidenavs/details/details.component';

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
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FileManagerComponent,
        FileListComponent,
        MainSidenavComponent,
        DetailsSidenavComponent
    ],
    providers   : [
        FileManagerService
    ]
})
export class FuseFileManagerModule
{
}
