import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { FuseMailComponent } from './mail.component';
import { FuseMailMainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { FuseMailListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';
import { FuseMailListComponent } from './mail-list/mail-list.component';
import { FuseMailDetailsComponent } from './mail-details/mail-details.component';
import { MailService } from './mail.service';
import { FuseMailComposeDialogComponent } from './dialogs/compose/compose.component';

const routes: Routes = [
    {
        path     : 'label/:labelHandle',
        component: FuseMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'label/:labelHandle/:mailId',
        component: FuseMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'filter/:filterHandle',
        component: FuseMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'filter/:filterHandle/:mailId',
        component: FuseMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : ':folderHandle',
        component: FuseMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : ':folderHandle/:mailId',
        component: FuseMailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path      : '**',
        redirectTo: 'inbox'
    }
];

@NgModule({
    declarations   : [
        FuseMailComponent,
        FuseMailListComponent,
        FuseMailListItemComponent,
        FuseMailDetailsComponent,
        FuseMailMainSidenavComponent,
        FuseMailComposeDialogComponent
    ],
    imports        : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers      : [
        MailService
    ],
    entryComponents: [FuseMailComposeDialogComponent]
})
export class FuseMailModule
{
}
