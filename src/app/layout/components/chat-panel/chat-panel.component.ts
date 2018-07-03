import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FusePerfectScrollbarDirective } from '@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import { ChatPanelService } from 'app/layout/components/chat-panel/chat-panel.service';

@Component({
    selector     : 'chat-panel',
    templateUrl  : './chat-panel.component.html',
    styleUrls    : ['./chat-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ChatPanelComponent implements OnInit, OnDestroy
{
    contacts: any[];
    contact: any;
    chat: any;
    sidebarFolded: boolean;
    user: any;
    view: string;

    @ViewChild(FusePerfectScrollbarDirective)
    set fusePerfectScrollbarDirective(content: FusePerfectScrollbarDirective)
    {
        this._fusePerfectScrollbarDirective = content;
    }

    @ViewChild('replyForm')
    set replyForm(content: NgForm)
    {
        this._replyForm = content;
    }

    @ViewChild('replyInput')
    set replyInput(content: ElementRef)
    {
        this._replyInput = content;
    }

    // Private
    private _fusePerfectScrollbarDirective: FusePerfectScrollbarDirective;
    private _replyForm: NgForm;
    private _replyInput: ElementRef;
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {ChatPanelService} _chatPanelService
     * @param {HttpClient} _httpClient
     * @param {FuseSidebarService} _fuseSidebarService
     */
    constructor(
        private _chatPanelService: ChatPanelService,
        private _httpClient: HttpClient,
        private _fuseSidebarService: FuseSidebarService
    )
    {
        // Set the defaults
        this.contact = null;
        this.sidebarFolded = true;
        this.view = 'contacts';

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Load the contacts
        this._chatPanelService.loadContacts().then(() => {

            this.contacts = this._chatPanelService.contacts;
            this.user = this._chatPanelService.user;
        });

        // Subscribe to the foldedChanged observable
        this._fuseSidebarService.getSidebar('chatPanel').foldedChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((folded) => {
                this.sidebarFolded = folded;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Prepare the chat for the replies
     */
    private _prepareChatForReplies(): void
    {
        setTimeout(() => {

            // Reset the reply form
            this._replyForm.reset();

            // Focus to the reply input
            this._replyInput.nativeElement.focus();

            // Scroll to the bottom of the messages list
            if ( this._fusePerfectScrollbarDirective )
            {
                this._fusePerfectScrollbarDirective.update();

                setTimeout(() => {
                    this._fusePerfectScrollbarDirective.scrollToBottom(0);
                });
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void
    {
        this._fuseSidebarService.getSidebar('chatPanel').toggleFold();
    }

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpen(): void
    {
        this._fuseSidebarService.getSidebar('chatPanel').toggleOpen();
    }

    /**
     * Decide whether to show or not the contact's avatar in the message row
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    shouldShowContactAvatar(message, i): boolean
    {
        return (
            message.who === this.contact.id &&
            ((this.chat.dialog[i + 1] && this.chat.dialog[i + 1].who !== this.contact.id) || !this.chat.dialog[i + 1])
        );
    }

    /**
     * Check if the given message is the first message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    isFirstMessageOfGroup(message, i): boolean
    {
        return (i === 0 || this.chat.dialog[i - 1] && this.chat.dialog[i - 1].who !== message.who);
    }

    /**
     * Check if the given message is the last message of a group
     *
     * @param message
     * @param i
     * @returns {boolean}
     */
    isLastMessageOfGroup(message, i): boolean
    {
        return (i === this.chat.dialog.length - 1 || this.chat.dialog[i + 1] && this.chat.dialog[i + 1].who !== message.who);
    }

    /**
     * Go to chat with the contact
     *
     * @param contact
     */
    goToChat(contact): void
    {
        // Change the view
        this.view = 'chat';

        // Set the current contact
        this.contact = contact;

        // Load the chat
        this._chatPanelService.getChat(contact.id).then((chat) => {

            // Set the chat
            this.chat = chat;

            // Prepare the chat for the replies
            this._prepareChatForReplies();
        });
    }

    /**
     * Go to contact view
     */
    goToContacts(): void
    {
        // Change the view
        this.view = 'contacts';

        // Set the current contact as null
        this.contact = null;

        // Clear the chat data
        this.chat = null;
    }

    /**
     * Reply
     */
    reply(event): void
    {
        event.preventDefault();

        if ( !this._replyForm.form.value.message )
        {
            return;
        }

        // Message
        const message = {
            who    : this.user.id,
            message: this._replyForm.form.value.message,
            time   : new Date().toISOString()
        };

        // Add the message to the chat
        this.chat.dialog.push(message);

        // Update the server
        this._chatPanelService.updateChat(this.chat.id, this.chat.dialog).then(response => {

            // Prepare the chat for the replies
            this._prepareChatForReplies();
        });
    }
}
