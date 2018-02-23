import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { FuseProjectDashboardComponent } from './project.component';
import { ProjectDashboardService } from './project.service';
import { MaterialModule } from '@fuse/modules/material.module';

const routes: Routes = [
    {
        path     : '**',
        component: FuseProjectDashboardComponent,
        resolve  : {
            data: ProjectDashboardService
        }
    }
];

@NgModule({
    imports     : [
        RouterModule.forChild(routes),
        FuseSharedModule,
        MaterialModule,
        FuseWidgetModule,
        NgxChartsModule
    ],
    declarations: [
        FuseProjectDashboardComponent
    ],
    providers   : [
        ProjectDashboardService
    ]
})
export class FuseProjectDashboardModule
{
}

