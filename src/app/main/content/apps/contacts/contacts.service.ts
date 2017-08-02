import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ContactsService implements Resolve<any>
{
    onContactsChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onContactSelected: BehaviorSubject<any> = new BehaviorSubject({});

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
                this.getContacts()
            ]).then(
                ([files]) => {
                    resolve();
                },
                reject
            );
        });
    }

    getContacts(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/contacts-contacts')
                .subscribe(response => {
                    this.onContactsChanged.next(response.json().data);
                    this.onContactSelected.next(response.json().data[0]);
                    resolve(response.json().data);
                }, reject);
        });
    }

}
