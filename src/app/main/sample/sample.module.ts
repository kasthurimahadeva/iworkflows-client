import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {FuseSharedModule} from '@fuse/shared.module';

import {SampleComponent} from './sample.component';
import {CarListComponent} from "./car-list/car-list.component";
import {CarEditComponent} from "./car-edit/car-edit.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from "@angular/material";
import {AccessGuard} from "../guards/access-guard";

const routes = [
    {
        path: 'sample',
        data: {requiresLogin: true},
        canActivate: [AccessGuard],
        component: SampleComponent
    },
    {
        path: 'car-list',
        component: CarListComponent,
        data: {requiresLogin: true},
        canActivate: [AccessGuard]
    },
    {
        path: 'car-add',
        component: CarEditComponent, data: {requiresLogin: true},
        canActivate: [AccessGuard]
    },
    {
        path: 'car-edit/:id',
        component: CarEditComponent,
        data: {requiresLogin: true},
        canActivate: [AccessGuard]
    },
];

@NgModule({
    declarations: [
        SampleComponent,
        CarListComponent,
        CarEditComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,

        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatToolbarModule
    ],
    exports: [
        SampleComponent
    ]
})

export class SampleModule {
}
