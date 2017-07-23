import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService implements Resolve<any>
{
    contacts: any[];
    chats: any[];
    user: any;
    onChatSelected = new BehaviorSubject<any>(null);
    onContactSelected = new BehaviorSubject<any>(null);
    onChatsUpdated = new Subject<any>();
    onUserUpdated = new Subject<any>();
    onLeftSidenavViewChanged = new Subject<any>();
    onRightSidenavViewChanged = new Subject<any>();

    constructor(private http: Http)
    {
    }

    /**
     * Get chat
     * @param contactId
     * @returns {Promise<any>}
     */
    getChat(contactId)
    {
        const chatItem = this.user.chatList.find((item) => {
            return item.contactId === contactId;
        });

        /**
         * Create new chat, if it's not created yet.
         */
        if ( !chatItem )
        {
            this.createNewChat(contactId).then((newChats) => {
                this.getChat(contactId);
            });
            return;
        }

        return new Promise((resolve, reject) => {
            this.http.get('api/chat-chats/' + chatItem.id)
                .subscribe(response => {
                    const chat = response.json().data;

                    const chatContact = this.contacts.find((contact) => {
                        return contact.id === contactId;
                    });

                    const chatData = {
                        chatId : chat.id,
                        dialog : chat.dialog,
                        contact: chatContact
                    };

                    this.onChatSelected.next({...chatData});

                }, reject);

        });

    }

    /**
     * Create New Chat
     * @param contactId
     * @returns {Promise<any>}
     */
    createNewChat(contactId)
    {
        return new Promise((resolve, reject) => {

            const contact = this.contacts.find((item) => {
                return item.id === contactId;
            });

            const chatId = this.guidGenerator();

            const chat = {
                id    : chatId,
                dialog: []
            };

            const chatListItem = {
                'id'             : chatId,
                'contactId'      : contactId,
                'unread'         : null,
                'lastMessageTime': '2017-02-18T10:30:18.931Z'
            };

            /**
             * Add new chat list item to the user's chat list
             */
            this.user.chatList.push(chatListItem);

            /**
             * Post the created chat
             */
            this.http.post('api/chat-chats', {...chat})
                .subscribe(response => {

                    /**
                     * Post the new the user data
                     */
                    this.http.post('api/chat-user/' + this.user.id, this.user)
                        .subscribe(addedlistItem => {

                            /**
                             * Update the user data from server
                             */
                            this.getUser().then(updatedUser => {
                                this.onUserUpdated.next(updatedUser);
                                resolve(updatedUser);
                            });
                        });
                }, reject);
        });
    }

    /**
     * Select Contact
     * @param contact
     */
    selectContact(contact)
    {
        this.onContactSelected.next(contact);
    }

    /**
     * Set user status
     * @param status
     */
    setUserStatus(status)
    {
        this.user.status = status;
    }

    /**
     * Update user data
     * @param userData
     */
    updateUserData(userData)
    {
        this.http.post('api/chat-user/' + this.user.id, userData)
            .subscribe(response => {
                    this.user = userData;
                }
            );
    }

    /**
     * Update the chat dialog
     * @param chatId
     * @param dialog
     * @returns {Promise<any>}
     */
    updateDialog(chatId, dialog): Promise<any>
    {
        return new Promise((resolve, reject) => {

            const newData = {
                id    : chatId,
                dialog: dialog
            };

            this.http.post('api/chat-chats/' + chatId, newData)
                .subscribe(updatedChat => {
                    resolve(updatedChat);
                }, reject);
        });
    }

    /**
     * The Mail App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getContacts(),
                this.getChats(),
                this.getUser()
            ]).then(
                ([contacts, chats, user]) => {
                    this.contacts = contacts;
                    this.chats = chats;
                    this.user = user;
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get Contacts
     * @returns {Promise<any>}
     */
    getContacts(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/chat-contacts')
                .subscribe(response => {
                    resolve(response.json().data);
                }, reject);
        });
    }

    /**
     * Get Chats
     * @returns {Promise<any>}
     */
    getChats(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/chat-chats')
                .subscribe(response => {
                    resolve(response.json().data);
                }, reject);
        });
    }

    /**
     * Get User
     * @returns {Promise<any>}
     */
    getUser(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/chat-user')
                .subscribe(response => {
                    resolve(response.json().data[0]);
                }, reject);
        });
    }

    /**
     * Random ID Generator
     * @returns {string}
     */
    guidGenerator()
    {
        function S4()
        {
            return (((1 + Math.random()) * 0x10000) || 0).toString(16).substring(1);
        }

        return (S4() + S4());
    }
}
