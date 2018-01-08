import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { FuseFaqComponent } from './faq.component';
import { FaqService } from './faq.service';

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
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        FaqService
    ]
})
export class FaqModule
{
}
