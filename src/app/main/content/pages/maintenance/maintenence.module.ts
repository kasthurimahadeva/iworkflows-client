import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { FuseMaintenanceComponent } from './maintenance.component';

const routes = [
    {
        path     : 'maintenance',
        component: FuseMaintenanceComponent
    }
];

@NgModule({
    declarations: [
        FuseMaintenanceComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class MaintenanceModule
{
}
