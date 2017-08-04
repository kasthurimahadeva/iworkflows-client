import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { NgxDatatableComponent } from './datatable/ngx-datatable.component';
import { FusePriceTablesComponent } from './price-tables/price-tables.component';

const routes = [
    {
        path     : 'components/datatables/ngx-datatable',
        component: NgxDatatableComponent
    },
    {
        path     : 'components/price-tables',
        component: FusePriceTablesComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NgxDatatableComponent,
        FusePriceTablesComponent
    ]
})
export class ComponentsModule
{
}
