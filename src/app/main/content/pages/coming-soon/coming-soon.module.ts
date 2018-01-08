import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

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
