import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project.component';
import { SharedModule } from '../../../../../core/modules/shared.module';
import { ProjectsDashboardService } from './projects.service';
import { FuseWidgetModule } from '../../../../../core/components/widget/widget.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes: Routes = [
    {
        path     : 'apps/dashboards/project',
        component: ProjectComponent,
        resolve  : {
            data: ProjectsDashboardService
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        FuseWidgetModule,
        NgxChartsModule
    ],
    declarations: [
        ProjectComponent
    ],
    providers   : [
        ProjectsDashboardService
    ]
})
export class ProjectModule
{
}

