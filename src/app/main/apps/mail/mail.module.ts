import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail.component';
import { MainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { MailListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailDetailsComponent } from './mail-details/mail-details.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import {MailDataService} from './mail-data.service';

const routes: Routes = [
    {
        path    : 'label/:labelHandle',
        component: MailComponent,
        resolve     : {
            mailDB: MailDataService
        }
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: MailComponent,
        resolve     : {
            mailDB: MailDataService
        }
    },
    {
        path     : ':folderHandle',
        component: MailComponent,
        resolve     : {
            mailDB: MailDataService
        }
    },
    {
        path: ':folderHandle/:mailId',
        component: MailComponent,
        resolve     : {
            mailDB: MailDataService
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
        MainSidenavComponent,
        MailListComponent,
        MailListItemComponent,
        MailDetailsComponent
    ],
    imports     : [
        SharedModule,
        HttpModule,
        RouterModule.forChild(routes),
        InMemoryWebApiModule
    ],
    providers   : []
})
export class MailModule
{
}
