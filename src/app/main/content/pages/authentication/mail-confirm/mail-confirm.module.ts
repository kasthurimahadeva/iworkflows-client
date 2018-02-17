import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseMailConfirmComponent } from './mail-confirm.component';

const routes = [
    {
        path     : 'auth/mail-confirm',
        component: FuseMailConfirmComponent
    }
];

@NgModule({
    declarations: [
        FuseMailConfirmComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class MailConfirmModule
{
}
