import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { EXAMPLE_LIST } from './example-components';
import { FuseExampleViewerComponent } from './example-viewer/example-viewer';
import { FuseAngularMaterialComponent } from './angular-material.component';
import { MaterialModule } from 'app/main/content/components/angular-material/material.module';
import { FuseHighlightModule } from '@fuse/components';

const routes: Routes = [
    {
        path    : 'angular-material',
        children: [
            {
                path     : ':id',
                component: FuseAngularMaterialComponent
            }
        ]
    }
];

@NgModule({
    imports        : [
        RouterModule.forChild(routes),
        MaterialModule,
        FuseSharedModule,
        FuseWidgetModule,
        FuseHighlightModule
    ],
    entryComponents: EXAMPLE_LIST,
    declarations   : [
        [...EXAMPLE_LIST],
        FuseAngularMaterialComponent,
        FuseExampleViewerComponent
    ]
})
export class FuseAngularMaterialModule
{
}

