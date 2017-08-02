import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Contact } from './contact.model';
import { FuseUtils } from '../../../../core/fuseUtils';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContactsService implements Resolve<any>
{
    onContactsChanged: BehaviorSubject<any> = new BehaviorSubject({});

    onSelectedContactsChanged: BehaviorSubject<any> = new BehaviorSubject([]);

    onUserDataChanged: BehaviorSubject<any> = new BehaviorSubject([]);

    onSearchTextChanged: Subject<any> = new Subject();

    contacts: Contact[];
    user: any;
    selectedContacts: string[] = [];

    constructor(private http: Http)
    {
    }

    /**
     * The Contacts App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getContacts(),
                this.getUserData()
            ]).then(
                ([files]) => {

                    this.onSearchTextChanged.subscribe(searchText => {
                        this.getContacts(searchText);
                    });

                    resolve();

                },
                reject
            );
        });
    }

    getContacts(searchText?): Promise<any>
    {
        return new Promise((resolve, reject) => {
                this.http.get('api/contacts-contacts')
                    .subscribe(response => {

                        this.contacts = response.json().data;

                        if ( searchText && searchText !== '' )
                        {
                            this.contacts = FuseUtils.filterArrayByString(this.contacts, searchText);
                        }

                        this.contacts = this.contacts.map(contact => {
                            return new Contact(contact);
                        });

                        this.onContactsChanged.next(this.contacts);
                        resolve(this.contacts);
                    }, reject);
            }
        );
    }

    getUserData(): Promise<any>
    {
        return new Promise((resolve, reject) => {
                this.http.get('api/contacts-user/5725a6802d10e277a0f35724')
                    .subscribe(response => {
                        this.user = response.json().data;
                        this.onUserDataChanged.next(this.user);
                        resolve(this.user);
                    }, reject);
            }
        );
    }

    /**
     * Toggle selected contact by id
     * @param id
     */
    toggleSelectedContact(id)
    {
        // First, check if we already have that todo as selected...
        if ( this.selectedContacts.length > 0 )
        {
            const index = this.selectedContacts.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedContacts.splice(index, 1);

                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedContacts.push(id);

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll()
    {
        console.info(this.selectedContacts);
        if ( this.selectedContacts.length > 0 )
        {
            this.deselectContacts();
        }
        else
        {
            this.selectContacts();
        }
    }

    selectContacts(filterParameter?, filterValue?)
    {
        this.selectedContacts = [];

        // If there is no filter, select all todos
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedContacts = [];
            this.contacts.map(contact => {
                this.selectedContacts.push(contact.id);
            });
        }
        else
        {
            /* this.selectedContacts.push(...
                 this.contacts.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

    updateContact(contact)
    {
        return new Promise((resolve, reject) => {

            this.http.post('api/contacts-contacts/' + contact.id, {...contact})
                .subscribe(response => {
                    resolve(response);
                });
        });
    }

    updateUserData(userData)
    {
        return new Promise((resolve, reject) => {
            this.http.post('api/contacts-user/' + this.user.id, {...userData})
                .subscribe(response => {
                    this.getUserData();
                    resolve(response);
                });
        });
    }

    deselectContacts()
    {
        this.selectedContacts = [];

        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    }

}
