import {NgModule} from '@angular/core';
import {SharedModule} from '../../../core/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from './chat.component';

const routes: Routes = [
    {
        path: 'apps/chat', component: ChatComponent, children: []
    }
]

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ChatComponent
    ]
})
export class ChatModule
{
}
