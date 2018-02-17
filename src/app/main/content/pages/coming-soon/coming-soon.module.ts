import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

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
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ComingSoonModule
{
}
