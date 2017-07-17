import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './mail.component';
import { MainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { MailListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailDetailsComponent } from './mail-details/mail-details.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MailFakeDbService } from './mail-fake-db.service';
import { HttpModule } from '@angular/http';

const routes: Routes = [
    {
        path    : 'label/:labelHandle',
        children: [
            {
                path: ':mailId'
            }
        ]
    },
    {
        path     : ':folderHandle',
        component: MailComponent,
        children : [
            {
                path: ':mailId'
            }
        ]
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
        InMemoryWebApiModule.forRoot(MailFakeDbService),
        RouterModule.forChild(routes)
    ],
    providers   : []
})
export class MailModule
{
}
