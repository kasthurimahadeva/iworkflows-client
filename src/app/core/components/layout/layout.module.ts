import { NgModule } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { RouterModule } from '@angular/router';
import { FuseLayoutComponent } from './layout.component';
import { FuseContentComponent } from './content/content.component';
import { FuseFooterComponent } from './footer/footer.component';
import { FuseNavbarComponent } from './navbar/navbar.component';
import { FuseToolbarComponent } from './toolbar/toolbar.component';
import { FuseNavigationModule } from '../navigation/navigation.module';
import { FuseNavbarToggleDirective } from './navbar/navbar-toggle.directive';

@NgModule({
    declarations: [
        FuseContentComponent,
        FuseFooterComponent,
        FuseLayoutComponent,
        FuseNavbarComponent,
        FuseToolbarComponent,
        FuseNavbarToggleDirective
    ],
    imports     : [
        SharedModule,
        RouterModule,
        FuseNavigationModule
    ],
    exports     : [
        FuseLayoutComponent
    ]
})

export class FuseLayoutModule
{
}
