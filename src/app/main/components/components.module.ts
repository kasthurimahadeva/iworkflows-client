import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { NgxDatatableComponent } from './datatable/ngx-datatable.component';

const routes = [
    {
        path     : 'components/datatables/ngx-datatable',
        component: NgxDatatableComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        NgxDatatableComponent
    ]
})
export class ComponentsModule
{
}
