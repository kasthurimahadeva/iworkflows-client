import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { SearchClassicComponent } from './tabs/classic/classic.component';
import { SearchTableComponent } from './tabs/table/table.component';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

const routes = [
    {
        path     : 'pages/search',
        component: SearchComponent,
        resolve  : {
            search: SearchService
        }
    }
];

@NgModule({
    declarations: [
        SearchComponent,
        SearchClassicComponent,
        SearchTableComponent
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
