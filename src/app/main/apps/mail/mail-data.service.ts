import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class MailDataService implements Resolve<any>
{
    constructor(
        private http: Http
    )
    {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) =>
        {
            console.log('resolve...');

            this.http.get('api/mailMails').subscribe(response =>
            {
                resolve(response);
            }, reject);
        });
    }

    getMailsByFolder(handle)
    {

    }

    saveMailSubject(subject)
    {

    }
}
