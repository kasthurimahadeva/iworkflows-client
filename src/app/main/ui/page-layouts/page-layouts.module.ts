import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatTabsModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';

import { CardedFullWidth1Component } from 'app/main/ui/page-layouts/carded/full-width-1/full-width-1.component';
import { CardedFullWidth2Component } from 'app/main/ui/page-layouts/carded/full-width-2/full-width-2.component';
import { CardedFullWidthTabbed1Component } from 'app/main/ui/page-layouts/carded/full-width-tabbed-1/full-width-tabbed-1.component';
import { CardedFullWidthTabbed2Component } from 'app/main/ui/page-layouts/carded/full-width-tabbed-2/full-width-tabbed-2.component';
import { CardedLeftSidenav1Component } from 'app/main/ui/page-layouts/carded/left-sidenav-1/left-sidenav-1.component';
import { CardedLeftSidenav2Component } from 'app/main/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component';
import { CardedLeftSidenavTabbed1Component } from 'app/main/ui/page-layouts/carded/left-sidenav-tabbed-1/left-sidenav-tabbed-1.component';
import { CardedLeftSidenavTabbed2Component } from 'app/main/ui/page-layouts/carded/left-sidenav-tabbed-2/left-sidenav-tabbed-2.component';
import { CardedRightSidenav1Component } from 'app/main/ui/page-layouts/carded/right-sidenav-1/right-sidenav-1.component';
import { CardedRightSidenav2Component } from 'app/main/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component';
import { CardedRightSidenavTabbed1Component } from 'app/main/ui/page-layouts/carded/right-sidenav-tabbed-1/right-sidenav-tabbed-1.component';
import { CardedRightSidenavTabbed2Component } from 'app/main/ui/page-layouts/carded/right-sidenav-tabbed-2/right-sidenav-tabbed-2.component';
import { SimpleFullWidth1Component } from 'app/main/ui/page-layouts/simple/full-width-1/full-width-1.component';
import { SimpleLeftSidenav1Component } from 'app/main/ui/page-layouts/simple/left-sidenav-1/left-sidenav-1.component';
import { SimpleLeftSidenav2Component } from 'app/main/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component';
import { SimpleLeftSidenav3Component } from 'app/main/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component';
import { SimpleRightSidenav1Component } from 'app/main/ui/page-layouts/simple/right-sidenav-1/right-sidenav-1.component';
import { SimpleRightSidenav2Component } from 'app/main/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component';
import { SimpleRightSidenav3Component } from 'app/main/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component';
import { Tabbed1Component } from 'app/main/ui/page-layouts/simple/tabbed-1/tabbed-1.component';
import { BlankComponent } from 'app/main/ui/page-layouts/blank/blank.component';

const routes: Routes = [
    {
        path     : 'page-layouts/carded/full-width-1',
        component: CardedFullWidth1Component
    },
    {
        path     : 'page-layouts/carded/full-width-2',
        component: CardedFullWidth2Component
    },
    {
        path     : 'page-layouts/carded/full-width-tabbed-1',
        component: CardedFullWidthTabbed1Component
    },
    {
        path     : 'page-layouts/carded/full-width-tabbed-2',
        component: CardedFullWidthTabbed2Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav-1',
        component: CardedLeftSidenav1Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav-tabbed-1',
        component: CardedLeftSidenavTabbed1Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav-2',
        component: CardedLeftSidenav2Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav-tabbed-2',
        component: CardedLeftSidenavTabbed2Component
    },
    {
        path     : 'page-layouts/carded/right-sidenav-1',
        component: CardedRightSidenav1Component
    },
    {
        path     : 'page-layouts/carded/right-sidenav-tabbed-1',
        component: CardedRightSidenavTabbed1Component
    },
    {
        path     : 'page-layouts/carded/right-sidenav-2',
        component: CardedRightSidenav2Component
    },
    {
        path     : 'page-layouts/carded/right-sidenav-tabbed-2',
        component: CardedRightSidenavTabbed2Component
    },
    {
        path     : 'page-layouts/simple/full-width-1',
        component: SimpleFullWidth1Component
    },
    {
        path     : 'page-layouts/simple/left-sidenav-1',
        component: SimpleLeftSidenav1Component
    },
    {
        path     : 'page-layouts/simple/left-sidenav-2',
        component: SimpleLeftSidenav2Component
    },
    {
        path     : 'page-layouts/simple/left-sidenav-3',
        component: SimpleLeftSidenav3Component
    },
    {
        path     : 'page-layouts/simple/right-sidenav-1',
        component: SimpleRightSidenav1Component
    },
    {
        path     : 'page-layouts/simple/right-sidenav-2',
        component: SimpleRightSidenav2Component
    },
    {
        path     : 'page-layouts/simple/right-sidenav-3',
        component: SimpleRightSidenav3Component
    },
    {
        path     : 'page-layouts/simple/tabbed-1',
        component: Tabbed1Component
    },
    {
        path     : 'page-layouts/blank',
        component: BlankComponent
    }
];

@NgModule({
    declarations: [
        CardedFullWidth1Component,
        CardedFullWidth2Component,
        CardedFullWidthTabbed1Component,
        CardedFullWidthTabbed2Component,
        CardedLeftSidenav1Component,
        CardedLeftSidenav2Component,
        CardedLeftSidenavTabbed1Component,
        CardedLeftSidenavTabbed2Component,
        CardedRightSidenav1Component,
        CardedRightSidenav2Component,
        CardedRightSidenavTabbed1Component,
        CardedRightSidenavTabbed2Component,
        SimpleFullWidth1Component,
        SimpleLeftSidenav1Component,
        SimpleLeftSidenav2Component,
        SimpleLeftSidenav3Component,
        SimpleRightSidenav1Component,
        SimpleRightSidenav2Component,
        SimpleRightSidenav3Component,
        Tabbed1Component,
        BlankComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,

        FuseSharedModule,
        FuseDemoModule
    ]
})
export class UIPageLayoutsModule
{
}
