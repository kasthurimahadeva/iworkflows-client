import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../core/modules/shared.module';
import { FuseDemoModule } from '../../../core/components/demo/demo.module';
import { CardedFullWidthComponent } from './carded/fullwidth/fullwidth.component';
import { CardedFullWidth2Component } from './carded/fullwidth-2/fullwidth-2.component';
import { CardedLeftSidenavComponent } from './carded/left-sidenav/left-sidenav.component';
import { CardedLeftSidenav2Component } from './carded/left-sidenav-2/left-sidenav-2.component';
import { CardedRightSidenavComponent } from './carded/right-sidenav/right-sidenav.component';
import { CardedRightSidenav2Component } from './carded/right-sidenav-2/right-sidenav-2.component';

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
    },
    {
        path     : 'ui/page-layouts/carded/left-sidenav-2',
        component: CardedLeftSidenav2Component,
        children : []
    },
    {
        path     : 'ui/page-layouts/carded/right-sidenav',
        component: CardedRightSidenavComponent,
        children : []
    },
    {
        path     : 'ui/page-layouts/carded/right-sidenav-2',
        component: CardedRightSidenav2Component,
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
        CardedLeftSidenavComponent,
        CardedLeftSidenav2Component,
        CardedRightSidenavComponent,
        CardedRightSidenav2Component
    ]
})
export class UIPageLayoutsModule
{
}
