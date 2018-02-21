import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseComingSoonComponent } from './coming-soon.component';

const routes = [
    {
        path     : 'coming-soon',
        component: FuseComingSoonComponent
    }
];

@NgModule({
    declarations: [
        FuseComingSoonComponent
    ],
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ComingSoonModule
{
}
