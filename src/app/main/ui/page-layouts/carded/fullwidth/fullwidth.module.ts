import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardedFullWidthComponent} from './fullwidth.component';
import {SharedModule} from '../../../../../core/modules/shared.module';

const routes: Routes = [
    {
        path: 'user-interface/page-layouts/carded/full-width', component: CardedFullWidthComponent, children: []
    }
]

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        CardedFullWidthComponent
    ]
})
export class CardedFullWidthModule
{
}
