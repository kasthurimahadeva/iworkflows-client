import {NgModule} from '@angular/core';
import {SharedModule} from '../core/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {NavSubheaderComponent} from './nav-subheader/nav-subheader.component';
import {NavigationComponent} from './navigation.component';
import {NavItemComponent} from './nav-item/nav-item.component';
import {NavCollapseComponent} from './nav-collapse/nav-collapse.component';


@NgModule({
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        NavigationComponent
    ],
    declarations: [
        NavigationComponent,
        NavSubheaderComponent,
        NavItemComponent,
        NavCollapseComponent
    ]
})
export class NavigationModule
{
}
