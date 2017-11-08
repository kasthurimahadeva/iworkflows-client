import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../chat.service';
import { ObservableMedia } from '@angular/flex-layout';
import { fuseAnimations } from '../../../../../../../core/animations';
import { FuseMatSidenavHelperService } from '../../../../../../../core/directives/fuse-mat-sidenav-helper/fuse-mat-sidenav-helper.service';

@Component({
    selector   : 'fuse-chat-chats-sidenav',
    templateUrl: './chats.component.html',
    styleUrls  : ['./chats.component.scss'],
    animations : fuseAnimations
})
export class FuseChatChatsSidenavComponent implements OnInit
{
    user: any;
    chats: any[];
    contacts: any[];
    chatSearch: any;
    searchText = '';

    constructor(
        private chatService: ChatService,
        private fuseMatSidenavService: FuseMatSidenavHelperService,
        public media: ObservableMedia
    )
    {
        this.chatSearch = {
            name: ''
        };
    }

    ngOnInit()
    {
        this.user = this.chatService.user;
        this.chats = this.chatService.chats;
        this.contacts = this.chatService.contacts;

        this.chatService.onChatsUpdated.subscribe(updatedChats => {
            this.chats = updatedChats;
        });

        this.chatService.onUserUpdated.subscribe(updatedUser => {
            this.user = updatedUser;
        });
    }

    getChat(contact)
    {
        this.chatService.getChat(contact);

        if ( !this.media.isActive('gt-md') )
        {
            this.fuseMatSidenavService.getSidenav('chat-left-sidenav').toggle();
        }
    }

    setUserStatus(status)
    {
        this.chatService.setUserStatus(status);
    }

    changeLeftSidenavView(view)
    {
        this.chatService.onLeftSidenavViewChanged.next(view);
    }

    logout()
    {
        console.log('logout triggered');
    }
}
