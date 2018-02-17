import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseLockComponent } from './lock.component';

const routes = [
    {
        path     : 'auth/lock',
        component: FuseLockComponent
    }
];

@NgModule({
    declarations: [
        FuseLockComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class LockModule
{
}
