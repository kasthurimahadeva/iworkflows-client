import {NgModule} from '@angular/core';
import {SharedModule} from '../../../../core/modules/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from './chat.component';
import {ChatService} from './chat.service';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { ChatStartComponent } from './chat-start/chat-start.component';
import {ChatsSidenavComponent} from './sidenavs/left/chats/chats.component';
import { UserSidenavComponent } from './sidenavs/left/user/user.component';
import { LeftSidenavComponent } from './sidenavs/left/left.component';
import { RightSidenavComponent } from './sidenavs/right/right.component';
import { ContactSidenavComponent } from './sidenavs/right/contact/contact.component';

const routes: Routes = [
    {
        path   : '**', component: ChatComponent, children: [],
        resolve: {
            chat: ChatService
        }
    }
];

@NgModule({
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ChatComponent,
        ChatViewComponent,
        ChatStartComponent,
        ChatsSidenavComponent,
        UserSidenavComponent,
        LeftSidenavComponent,
        RightSidenavComponent,
        ContactSidenavComponent
    ],
    providers   : [
        ChatService
    ]
})
export class FuseChatModule
{
}
