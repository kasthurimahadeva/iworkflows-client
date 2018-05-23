import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatTabsModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseDemoModule } from '@fuse/components/demo/demo.module';

import { CardedFullWidthComponent } from 'app/main/ui/page-layouts/carded/fullwidth/fullwidth.component';
import { CardedFullWidth2Component } from 'app/main/ui/page-layouts/carded/fullwidth-2/fullwidth-2.component';
import { CardedLeftSidenavComponent } from 'app/main/ui/page-layouts/carded/left-sidenav/left-sidenav.component';
import { CardedLeftSidenavTabbedComponent } from 'app/main/ui/page-layouts/carded/left-sidenav-tabbed/left-sidenav-tabbed.component';
import { CardedLeftSidenav2Component } from 'app/main/ui/page-layouts/carded/left-sidenav-2/left-sidenav-2.component';
import { CardedLeftSidenav2TabbedComponent } from 'app/main/ui/page-layouts/carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component';
import { CardedRightSidenavComponent } from 'app/main/ui/page-layouts/carded/right-sidenav/right-sidenav.component';
import { CardedRightSidenavTabbedComponent } from 'app/main/ui/page-layouts/carded/right-sidenav-tabbed/right-sidenav-tabbed.component';
import { CardedRightSidenav2Component } from 'app/main/ui/page-layouts/carded/right-sidenav-2/right-sidenav-2.component';
import { CardedRightSidenav2TabbedComponent } from 'app/main/ui/page-layouts/carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component';
import { SimpleFullWidthComponent } from 'app/main/ui/page-layouts/simple/fullwidth/fullwidth.component';
import { SimpleLeftSidenavComponent } from 'app/main/ui/page-layouts/simple/left-sidenav/left-sidenav.component';
import { SimpleLeftSidenav2Component } from 'app/main/ui/page-layouts/simple/left-sidenav-2/left-sidenav-2.component';
import { SimpleLeftSidenav3Component } from 'app/main/ui/page-layouts/simple/left-sidenav-3/left-sidenav-3.component';
import { SimpleRightSidenavComponent } from 'app/main/ui/page-layouts/simple/right-sidenav/right-sidenav.component';
import { SimpleRightSidenav2Component } from 'app/main/ui/page-layouts/simple/right-sidenav-2/right-sidenav-2.component';
import { SimpleRightSidenav3Component } from 'app/main/ui/page-layouts/simple/right-sidenav-3/right-sidenav-3.component';
import { TabbedComponent } from 'app/main/ui/page-layouts/simple/tabbed/tabbed.component';
import { BlankComponent } from 'app/main/ui/page-layouts/blank/blank.component';

const routes: Routes = [
    {
        path     : 'page-layouts/carded/full-width',
        component: CardedFullWidthComponent
    },
    {
        path     : 'page-layouts/carded/full-width-2',
        component: CardedFullWidth2Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav',
        component: CardedLeftSidenavComponent
    },
    {
        path     : 'page-layouts/carded/left-sidenav-tabbed',
        component: CardedLeftSidenavTabbedComponent
    },
    {
        path     : 'page-layouts/carded/left-sidenav-2',
        component: CardedLeftSidenav2Component
    },
    {
        path     : 'page-layouts/carded/left-sidenav-2-tabbed',
        component: CardedLeftSidenav2TabbedComponent
    },
    {
        path     : 'page-layouts/carded/right-sidenav',
        component: CardedRightSidenavComponent
    },
    {
        path     : 'page-layouts/carded/right-sidenav-tabbed',
        component: CardedRightSidenavTabbedComponent
    },
    {
        path     : 'page-layouts/carded/right-sidenav-2',
        component: CardedRightSidenav2Component
    },
    {
        path     : 'page-layouts/carded/right-sidenav-2-tabbed',
        component: CardedRightSidenav2TabbedComponent
    },
    {
        path     : 'page-layouts/simple/full-width',
        component: SimpleFullWidthComponent
    },
    {
        path     : 'page-layouts/simple/left-sidenav',
        component: SimpleLeftSidenavComponent
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
        path     : 'page-layouts/simple/right-sidenav',
        component: SimpleRightSidenavComponent
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
        path     : 'page-layouts/simple/tabbed',
        component: TabbedComponent
    },
    {
        path     : 'page-layouts/blank',
        component: BlankComponent
    }
];

@NgModule({
    declarations: [
        CardedFullWidthComponent,
        CardedFullWidth2Component,
        CardedLeftSidenavComponent,
        CardedLeftSidenavTabbedComponent,
        CardedLeftSidenav2Component,
        CardedLeftSidenav2TabbedComponent,
        CardedRightSidenavComponent,
        CardedRightSidenavTabbedComponent,
        CardedRightSidenav2Component,
        CardedRightSidenav2TabbedComponent,
        SimpleFullWidthComponent,
        SimpleLeftSidenavComponent,
        SimpleLeftSidenav2Component,
        SimpleLeftSidenav3Component,
        SimpleRightSidenavComponent,
        SimpleRightSidenav2Component,
        SimpleRightSidenav3Component,
        TabbedComponent,
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
