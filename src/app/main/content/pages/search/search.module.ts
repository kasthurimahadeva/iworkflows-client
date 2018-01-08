import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseSearchClassicComponent } from './tabs/classic/classic.component';
import { FuseSearchTableComponent } from './tabs/table/table.component';
import { FuseSearchComponent } from './search.component';
import { SearchService } from './search.service';

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
