import { NgModule } from '@angular/core';

import { UIPageLayoutsModule } from './page-layouts/page-layouts.module';
import { UIColorsModule } from './colors/colors.module';
import { UITypographyModule } from './typography/typography.module';
import { UIHelperClassesModule } from './helper-classes/helper-classes.module';

@NgModule({
    imports: [
        UIColorsModule,
        UIPageLayoutsModule,
        UITypographyModule,
        UIHelperClassesModule
    ]
})
export class UIModule
{
}
