import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardedFullWidthComponent } from './carded/fullwidth/fullwidth.component';
import { SharedModule } from '../../../core/modules/shared.module';
import { CardedFullWidth2Component } from './carded/fullwidth-single-scroll/fullwidth-2.component';
import { FuseDemoModule } from '../../../core/components/demo/demo.module';
import { CardedLeftSidenavComponent } from './carded/left-sidenav/left-sidenav.component';

const routes: Routes = [
    {
        path     : 'ui/page-layouts/carded/full-width',
        component: CardedFullWidthComponent,
        children : []
    },
    {
        path     : 'ui/page-layouts/carded/full-width-2',
        component: CardedFullWidth2Component,
        children : []
    },
    {
        path     : 'ui/page-layouts/carded/left-sidenav',
        component: CardedLeftSidenavComponent,
        children : []
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        FuseDemoModule
    ],
    declarations: [
        CardedFullWidthComponent,
        CardedFullWidth2Component,
        CardedLeftSidenavComponent
    ]
})
export class UIPageLayoutsModule
{
}
