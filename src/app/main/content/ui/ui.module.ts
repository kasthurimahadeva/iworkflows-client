import { NgModule } from '@angular/core';
import { UIPageLayoutsModule } from './page-layouts/page-layouts.module';
import { UIColorsModule } from './colors/colors.module';


@NgModule({
    imports: [
        UIColorsModule,
        UIPageLayoutsModule
    ]
})
export class UIModule
{
}
