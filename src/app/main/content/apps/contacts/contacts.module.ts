import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseContactsMainSidenavComponent } from './sidenavs/main/main.component';
import { FuseContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { FuseContactsContactListComponent } from './contact-list/contact-list.component';
import { FuseContactsSelectedBarComponent } from './selected-bar/selected-bar.component';
import { FuseContactsContactFormDialogComponent } from './contact-form/contact-form.component';

const routes: Routes = [
    {
        path     : '**',
        component: FuseContactsComponent,
        resolve  : {
            contacts: ContactsService
        }
    }
];

@NgModule({
    imports        : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations   : [
        FuseContactsComponent,
        FuseContactsContactListComponent,
        FuseContactsSelectedBarComponent,
        FuseContactsMainSidenavComponent,
        FuseContactsContactFormDialogComponent
    ],
    providers      : [
        ContactsService
    ],
    entryComponents: [FuseContactsContactFormDialogComponent]
})
export class FuseContactsModule
{
}
