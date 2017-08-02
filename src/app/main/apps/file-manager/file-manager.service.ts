import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FileManagerService implements Resolve<any>
{
    onFilesChanged: BehaviorSubject<any> = new BehaviorSubject({});
    onFileSelected: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private http: Http)
    {
    }

    /**
     * The File Manager App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {

        return new Promise((resolve, reject) => {

            Promise.all([
                this.getFiles()
            ]).then(
                ([files]) => {
                    resolve();
                },
                reject
            );
        });
    }

    getFiles(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/file-manager')
                .subscribe(response => {
                    this.onFilesChanged.next(response.json().data);
                    this.onFileSelected.next(response.json().data[0]);
                    resolve(response.json().data);
                }, reject);
        });
    }

}
