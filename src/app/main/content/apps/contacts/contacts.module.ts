import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MainSidenavComponent } from './sidenavs/main/main.component';
import { ContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { SelectedBarComponent } from './selected-bar/selected-bar.component';

const routes: Routes = [
    {
        path     : '**',
        component: ContactsComponent,
        children : [],
        resolve  : {
            contacts: ContactsService
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ContactsComponent,
        ContactListComponent,
        SelectedBarComponent,
        MainSidenavComponent
    ],
    providers   : [
        ContactsService
    ]
})
export class FuseContactsModule
{
}
