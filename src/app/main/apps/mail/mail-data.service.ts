import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Route, RouterStateSnapshot} from '@angular/router';
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
        console.log(route.params);
        console.log(route.paramMap.get('labelHandle'));

        // route.params.subscribe(params => {
        // });
        return new Promise((resolve, reject) =>
        {
            console.log('resolve...');

            this.http.get('api/mail-mails').subscribe(response =>
            {
                console.info(response);
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
