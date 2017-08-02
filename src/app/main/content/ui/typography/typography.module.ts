import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../core/modules/shared.module';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
    {
        path     : 'ui/typography',
        component: TypographyComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        TypographyComponent
    ]
})
export class UITypographyModule
{
}
