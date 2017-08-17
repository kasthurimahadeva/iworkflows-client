import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RouterModule } from '@angular/router';
import { FuseNavSubheaderComponent } from './nav-subheader/nav-subheader.component';
import { FuseNavigationComponent } from './navigation.component';
import { FuseNavItemComponent } from './nav-item/nav-item.component';
import { FuseNavCollapseComponent } from './nav-collapse/nav-collapse.component';

@NgModule({
    imports     : [
        SharedModule,
        RouterModule
    ],
    exports     : [
        FuseNavigationComponent
    ],
    declarations: [
        FuseNavigationComponent,
        FuseNavSubheaderComponent,
        FuseNavItemComponent,
        FuseNavCollapseComponent
    ]
})
export class FuseNavigationModule
{
}
