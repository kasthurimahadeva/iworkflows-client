import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatTabsModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

import { SearchClassicComponent } from 'app/main/pages/search/classic/search-classic.component';
import { SearchClassicService } from 'app/main/pages/search/classic/search-classic.service';


const routes = [
    {
        path     : 'search/classic',
        component: SearchClassicComponent,
        resolve  : {
            search: SearchClassicService
        }
    }
];

@NgModule({
    declarations: [
        SearchClassicComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatTabsModule,

        FuseSharedModule
    ],
    providers   : [
        SearchClassicService
    ]
})
export class SearchClassicModule
{
}
