import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { InvoiceService } from '../invoice.service';
import { FuseInvoiceCompactComponent } from './compact.component';

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
