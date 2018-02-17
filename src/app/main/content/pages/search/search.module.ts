import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@fuse/modules/shared.module';

import { SearchService } from './search.service';
import { FuseSearchClassicComponent } from './tabs/classic/classic.component';
import { FuseSearchTableComponent } from './tabs/table/table.component';
import { FuseSearchComponent } from './search.component';

const routes = [
    {
        path     : 'search',
        component: FuseSearchComponent,
        resolve  : {
            search: SearchService
        }
    }
];

@NgModule({
    declarations: [
        FuseSearchComponent,
        FuseSearchClassicComponent,
        FuseSearchTableComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        SearchService
    ]
})
export class SearchModule
{
}
