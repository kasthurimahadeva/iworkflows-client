import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FaqService } from './faq.service';
import { FuseFaqComponent } from './faq.component';

const routes = [
    {
        path     : 'faq',
        component: FuseFaqComponent,
        resolve  : {
            faq: FaqService
        }
    }
];

@NgModule({
    declarations: [
        FuseFaqComponent
    ],
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        FaqService
    ]
})
export class FaqModule
{
}
