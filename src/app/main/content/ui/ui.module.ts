import { NgModule } from '@angular/core';

import { UIPageLayoutsModule } from './page-layouts/page-layouts.module';
import { UIColorsModule } from './colors/colors.module';
import { UITypographyModule } from './typography/typography.module';

@NgModule({
    imports: [
        UIColorsModule,
        UIPageLayoutsModule,
        UITypographyModule
    ]
})
export class UIModule
{
}
