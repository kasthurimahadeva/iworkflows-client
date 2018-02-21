import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

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
        FuseSharedModule,
        RouterModule.forChild(routes)
    ]
})
export class LockModule
{
}
