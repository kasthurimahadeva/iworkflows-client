import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { InvoiceService } from '../invoice.service';
import { FuseInvoiceModernComponent } from './modern.component';

const routes = [
    {
        path     : 'invoices/modern',
        component: FuseInvoiceModernComponent,
        resolve  : {
            search: InvoiceService
        }
    }
];

@NgModule({
    declarations: [
        FuseInvoiceModernComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        InvoiceService
    ]
})
export class InvoiceModernModule
{
}
