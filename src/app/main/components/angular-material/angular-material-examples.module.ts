import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { MaterialModule } from 'app/main/components/angular-material/material.module';
import { EXAMPLE_LIST } from 'app/main/components/angular-material/example-components';
import { AngularMaterialExamplesComponent } from 'app/main/components/angular-material/angular-material-examples.component';
import { ExampleViewerComponent } from 'app/main/components/angular-material/example-viewer/example-viewer';

const routes: Routes = [
    {
        path    : 'angular-material',
        children: [
            {
                path     : ':id',
                component: AngularMaterialExamplesComponent
            }
        ]
    }
];

@NgModule({
    declarations   : [
        [...EXAMPLE_LIST],
        AngularMaterialExamplesComponent,
        ExampleViewerComponent
    ],
    imports        : [
        RouterModule.forChild(routes),

        MaterialModule,

        FuseSharedModule,
        FuseHighlightModule,
        FuseWidgetModule
    ],
    entryComponents: EXAMPLE_LIST,
})
export class AngularMaterialExamplesModule
{
}

