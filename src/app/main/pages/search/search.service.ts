import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService implements Resolve<any>
{
    classic: any;
    table: any;

    classicOnChanged: BehaviorSubject<any> = new BehaviorSubject({});
    tableOnChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private http: Http)
    {
    }

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getClassic(),
                this.getTable()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    /**
     * Get classic
     */
    getClassic(): Promise<any[]>
    {
        return new Promise((resolve, reject) => {

            this.http.get('api/search-classic')
                .subscribe(classic => {
                    this.classic = classic.json().data;
                    this.classicOnChanged.next(this.classic);
                    resolve(this.classic);
                }, reject);
        });
    }

    /**
     * Get table
     */
    getTable(): Promise<any[]>
    {
        return new Promise((resolve, reject) => {

            this.http.get('api/search-table')
                .subscribe(table => {
                    this.table = table.json().data;
                    this.tableOnChanged.next(this.table);
                    resolve(this.table);
                }, reject);
        });
    }
}
