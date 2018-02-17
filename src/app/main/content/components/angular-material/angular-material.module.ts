import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { EXAMPLE_LIST } from './example-components';
import { FuseExampleViewerComponent } from './example-viewer/example-viewer';
import { FuseAngularMaterialComponent } from './angular-material.component';

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
        SharedModule,
        RouterModule.forChild(routes),
        FuseWidgetModule
    ],
    exports        : [
        SharedModule
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

