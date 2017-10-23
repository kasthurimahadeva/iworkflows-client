import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../core/modules/shared.module';
import { FuseDemoModule } from '../../../../core/components/demo/demo.module';
import { FuseCardedFullWidthComponent } from './carded/fullwidth/fullwidth.component';
import { FuseCardedFullWidth2Component } from './carded/fullwidth-2/fullwidth-2.component';
import { FuseCardedLeftSidenavComponent } from './carded/left-sidenav/left-sidenav.component';
import { FuseCardedLeftSidenavTabbedComponent } from './carded/left-sidenav-tabbed/left-sidenav-tabbed.component';
import { FuseCardedLeftSidenav2Component } from './carded/left-sidenav-2/left-sidenav-2.component';
import { FuseCardedLeftSidenav2TabbedComponent } from './carded/left-sidenav-2-tabbed/left-sidenav-2-tabbed.component';
import { FuseCardedRightSidenavComponent } from './carded/right-sidenav/right-sidenav.component';
import { FuseCardedRightSidenavTabbedComponent } from './carded/right-sidenav-tabbed/right-sidenav-tabbed.component';
import { FuseCardedRightSidenav2Component } from './carded/right-sidenav-2/right-sidenav-2.component';
import { FuseCardedRightSidenav2TabbedComponent } from './carded/right-sidenav-2-tabbed/right-sidenav-2-tabbed.component';
import { FuseSimpleFullWidthComponent } from './simple/fullwidth/fullwidth.component';
import { FuseSimpleLeftSidenavComponent } from './simple/left-sidenav/left-sidenav.component';
import { FuseSimpleLeftSidenav2Component } from './simple/left-sidenav-2/left-sidenav-2.component';
import { FuseSimpleLeftSidenav3Component } from './simple/left-sidenav-3/left-sidenav-3.component';
import { FuseSimpleRightSidenavComponent } from './simple/right-sidenav/right-sidenav.component';
import { FuseSimpleRightSidenav2Component } from './simple/right-sidenav-2/right-sidenav-2.component';
import { FuseSimpleRightSidenav3Component } from './simple/right-sidenav-3/right-sidenav-3.component';
import { FuseTabbedComponent } from './simple/tabbed/tabbed.component';
import { FuseBlankComponent } from './blank/blank.component';

const routes: Routes = [
    {
        path     : 'ui/page-layouts/carded/full-width',
        component: FuseCardedFullWidthComponent
    },
    {
        path     : 'ui/page-layouts/carded/full-width-2',
        component: FuseCardedFullWidth2Component
    },
    {
        path     : 'ui/page-layouts/carded/left-sidenav',
        component: FuseCardedLeftSidenavComponent
    },
    {
        path     : 'ui/page-layouts/carded/left-sidenav-tabbed',
        component: FuseCardedLeftSidenavTabbedComponent
    },
    {
        path     : 'ui/page-layouts/carded/left-sidenav-2',
        component: FuseCardedLeftSidenav2Component
    },
    {
        path     : 'ui/page-layouts/carded/left-sidenav-2-tabbed',
        component: FuseCardedLeftSidenav2TabbedComponent
    },
    {
        path     : 'ui/page-layouts/carded/right-sidenav',
        component: FuseCardedRightSidenavComponent
    },
    {
        path     : 'ui/page-layouts/carded/right-sidenav-tabbed',
        component: FuseCardedRightSidenavTabbedComponent
    },
    {
        path     : 'ui/page-layouts/carded/right-sidenav-2',
        component: FuseCardedRightSidenav2Component
    },
    {
        path     : 'ui/page-layouts/carded/right-sidenav-2-tabbed',
        component: FuseCardedRightSidenav2TabbedComponent
    },
    {
        path     : 'ui/page-layouts/simple/full-width',
        component: FuseSimpleFullWidthComponent
    },
    {
        path     : 'ui/page-layouts/simple/left-sidenav',
        component: FuseSimpleLeftSidenavComponent
    },
    {
        path     : 'ui/page-layouts/simple/left-sidenav-2',
        component: FuseSimpleLeftSidenav2Component
    },
    {
        path     : 'ui/page-layouts/simple/left-sidenav-3',
        component: FuseSimpleLeftSidenav3Component
    },
    {
        path     : 'ui/page-layouts/simple/right-sidenav',
        component: FuseSimpleRightSidenavComponent
    },
    {
        path     : 'ui/page-layouts/simple/right-sidenav-2',
        component: FuseSimpleRightSidenav2Component
    },
    {
        path     : 'ui/page-layouts/simple/right-sidenav-3',
        component: FuseSimpleRightSidenav3Component
    },
    {
        path     : 'ui/page-layouts/simple/tabbed',
        component: FuseTabbedComponent
    },
    {
        path     : 'ui/page-layouts/blank',
        component: FuseBlankComponent
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        FuseDemoModule
    ],
    declarations: [
        FuseCardedFullWidthComponent,
        FuseCardedFullWidth2Component,
        FuseCardedLeftSidenavComponent,
        FuseCardedLeftSidenavTabbedComponent,
        FuseCardedLeftSidenav2Component,
        FuseCardedLeftSidenav2TabbedComponent,
        FuseCardedRightSidenavComponent,
        FuseCardedRightSidenavTabbedComponent,
        FuseCardedRightSidenav2Component,
        FuseCardedRightSidenav2TabbedComponent,
        FuseSimpleFullWidthComponent,
        FuseSimpleLeftSidenavComponent,
        FuseSimpleLeftSidenav2Component,
        FuseSimpleLeftSidenav3Component,
        FuseSimpleRightSidenavComponent,
        FuseSimpleRightSidenav2Component,
        FuseSimpleRightSidenav3Component,
        FuseTabbedComponent,
        FuseBlankComponent
    ]
})
export class UIPageLayoutsModule
{
}
