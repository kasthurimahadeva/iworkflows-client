import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseMailConfirmComponent } from './mail-confirm.component';

const routes = [
    {
        path     : 'pages/auth/mail-confirm',
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
