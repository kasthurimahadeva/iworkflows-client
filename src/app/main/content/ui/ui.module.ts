import { NgModule } from '@angular/core';

import { UIIconsModule } from './icons/icons.module';
import { UITypographyModule } from './typography/typography.module';
import { UIHelperClassesModule } from './helper-classes/helper-classes.module';
import { UIPageLayoutsModule } from './page-layouts/page-layouts.module';
import { UIColorsModule } from './colors/colors.module';

@NgModule({
    imports: [
        UIIconsModule,
        UITypographyModule,
        UIHelperClassesModule,
        UIPageLayoutsModule,
        UIColorsModule
    ]
})
export class UIModule
{
}
