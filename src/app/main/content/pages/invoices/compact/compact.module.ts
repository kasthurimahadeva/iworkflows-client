import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseInvoiceCompactComponent } from './compact.component';
import { InvoiceService } from '../invoice.service';

const routes = [
    {
        path     : 'invoices/compact',
        component: FuseInvoiceCompactComponent,
        resolve  : {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        FuseInvoiceCompactComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        InvoiceService
    ]
})

export class InvoiceCompactModule
{

}
