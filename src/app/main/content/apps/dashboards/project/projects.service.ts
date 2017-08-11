import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class ProjectsDashboardService implements Resolve<any>
{
    projects: any[];
    widgets: any[];

    constructor(
        private http: Http
    )
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
                this.getProjects(),
                this.getWidgets()
            ]).then(
                () => {
                    resolve();
                },
                reject
            );
        });
    }

    getProjects(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/projects-dashboard-projects')
                .subscribe(response => {
                    this.projects = response.json().data;
                    resolve(response.json().data);
                }, reject);
        });
    }

    getWidgets(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/projects-dashboard-widgets')
                .subscribe(response => {
                    this.widgets = response.json().data;
                    resolve(response.json().data);
                }, reject);
        });
    }
}
