import { NgModule } from '@angular/core';

import { FuseSidebarComponent } from './sidebar.component';
import { FuseSidebarService } from './sidebar.service';

@NgModule({
    declarations: [
        FuseSidebarComponent
    ],
    exports     : [
        FuseSidebarComponent
    ],
    providers   : [
        FuseSidebarService
    ]
})
export class FuseSidebarModule
{
}
