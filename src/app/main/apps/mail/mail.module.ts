import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail.component';
import { MainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { MailListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailDetailsComponent } from './mail-details/mail-details.component';
import { MailService } from './mail.service';

const routes: Routes = [
    {
        path     : 'label/:labelHandle',
        component: MailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'label/:labelHandle/:mailId',
        component: MailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'filter/:filterHandle',
        component: MailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : 'filter/:filterHandle/:mailId',
        component: MailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : ':folderHandle',
        component: MailComponent,
        resolve  : {
            mail: MailService
        }
    },
    {
        path     : ':folderHandle/:mailId',
        component: MailComponent,
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
    declarations: [
        MailComponent,
        MailListComponent,
        MailListItemComponent,
        MailDetailsComponent,
        MainSidenavComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        MailService
    ]
})
export class FuseMailModule
{
}
