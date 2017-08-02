import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectComponent} from './project.component';
import {SharedModule} from '../../../../../core/modules/shared.module';

const routes: Routes = [
    {
        path: 'apps/dashboards/project', component: ProjectComponent, children: []
    }
]

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ProjectComponent
    ]
})
export class ProjectModule
{
}

