import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { FuseNgxDatatableComponent } from './datatable/ngx-datatable.component';
import { GoogleMapsModule } from './google-maps/google-maps.module';

const routes = [
    {
        path     : 'datatables/ngx-datatable',
        component: FuseNgxDatatableComponent
    }
];

@NgModule({
    imports     : [
        FuseSharedModule,
        RouterModule.forChild(routes),
        GoogleMapsModule
    ],
    declarations: [
        FuseNgxDatatableComponent
    ]
})
export class FuseComponentsThirdPartyModule
{
}
