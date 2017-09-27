import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../core/modules/shared.module';
import { FuseWidgetModule } from '../../../../core/components/widget/widget.module';
import { FuseAngularMaterialComponent } from 'app/main/content/components/angular-material/angular-material.component';
import { FuseExampleViewerComponent } from './example-viewer/example-viewer';
import { EXAMPLE_LIST } from './example-components';

const routes: Routes = [
    {
        path    : 'components/angular-material',
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

