import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatRippleModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule } from '@fuse/components';

import { ContactsComponent } from 'app/main/apps/contacts/contacts.component';
import { ContactsService } from 'app/main/apps/contacts/contacts.service';
import { ContactsContactListComponent } from 'app/main/apps/contacts/contact-list/contact-list.component';
import { ContactsSelectedBarComponent } from 'app/main/apps/contacts/selected-bar/selected-bar.component';
import { ContactsMainSidenavComponent } from 'app/main/apps/contacts/sidenavs/main/main.component';
import { ContactsContactFormDialogComponent } from 'app/main/apps/contacts/contact-form/contact-form.component';

const routes: Routes = [
    {
        path     : '**',
        component: ContactsComponent,
        resolve  : {
            contacts: ContactsService
        }
    }
];

@NgModule({
    declarations   : [
        ContactsComponent,
        ContactsContactListComponent,
        ContactsSelectedBarComponent,
        ContactsMainSidenavComponent,
        ContactsContactFormDialogComponent
    ],
    imports        : [
        RouterModule.forChild(routes),
        CdkTableModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSidenavModule,
        MatTableModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseConfirmDialogModule
    ],
    providers      : [
        ContactsService
    ],
    entryComponents: [
        ContactsContactFormDialogComponent
    ]
})
export class ContactsModule
{
}
