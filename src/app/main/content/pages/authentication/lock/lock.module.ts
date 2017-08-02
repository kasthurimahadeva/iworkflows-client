import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { LockComponent } from './lock.component';

const routes = [
    {
        path     : 'pages/auth/lock',
        component: LockComponent
    }
];

@NgModule({
    declarations: [
        LockComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})

export class LockModule
{

}
