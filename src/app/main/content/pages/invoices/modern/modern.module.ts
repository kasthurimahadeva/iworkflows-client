import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseInvoiceModernComponent } from './modern.component';
import { InvoiceService } from '../invoice.service';

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
