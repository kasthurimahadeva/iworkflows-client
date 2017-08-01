import { NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';

import { SearchClassicComponent } from './tabs/classic/classic.component';
import { SearchTableComponent } from './tabs/table/table.component';
import { SearchComponent } from './search.component';


@NgModule({
    declarations: [
        SearchComponent,
        SearchClassicComponent,
        SearchTableComponent
    ],
    imports     : [
        SharedModule
    ],
    exports     : [
        SearchComponent,
        SearchClassicComponent,
        SearchTableComponent
    ]
})
export class SearchModule
{
}
