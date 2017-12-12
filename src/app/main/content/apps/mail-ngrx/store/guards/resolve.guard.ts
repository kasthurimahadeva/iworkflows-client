import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError, tap, take, filter } from 'rxjs/operators';
import 'rxjs/add/observable/forkJoin';
import { MailAppState } from '../reducers';
import * as fromStore from '../index';
import { getFiltersLoaded, getFoldersLoaded, getLabelsLoaded, getMailsLoaded } from '../selectors';
import { RouterStateSnapshot } from '@angular/router/src/router_state';
import { getRouterState } from '../../../../../../store/reducers';

@Injectable()
export class ResolveGuard implements CanActivate
{
    routerState: any;

    constructor(
        private store: Store<MailAppState>
    )
    {
        this.store.select(getRouterState).subscribe(routerState => {
            if ( routerState )
            {
                this.routerState = routerState.state;
            }
        });
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
    {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    checkStore(): Observable<any>
    {
        return Observable
            .forkJoin(
                this.getFolders(),
                this.getFilters(),
                this.getLabels()
            )
            .pipe(
                filter(([foldersLoaded, filtersLoaded, labelsLoaded]) => filtersLoaded && foldersLoaded && labelsLoaded),
                take(1),
                switchMap(() =>
                    this.getMails()
                ),
                take(1),
                map(() => this.store.dispatch(new fromStore.SetCurrentMail(this.routerState.params.mailId)))
            );
    }

    getFolders()
    {
        return this.store.select(getFoldersLoaded)
                   .pipe(
                       tap(loaded => {
                           if ( !loaded )
                           {
                               this.store.dispatch(new fromStore.GetFolders([]));
                           }
                       }),
                       filter(loaded => loaded),
                       take(1)
                   );
    }

    /**
     * Get Filters
     * @returns {Observable<any>}
     */
    getFilters()
    {
        return this.store.select(getFiltersLoaded)
                   .pipe(
                       tap(loaded => {
                           if ( !loaded )
                           {
                               this.store.dispatch(new fromStore.GetFilters([]));
                           }
                       }),
                       filter(loaded => loaded),
                       take(1)
                   );
    }

    /**
     * Get Labels
     * @returns {Observable<any>}
     */
    getLabels()
    {
        return this.store.select(getLabelsLoaded)
                   .pipe(
                       tap(loaded => {
                           if ( !loaded )
                           {
                               this.store.dispatch(new fromStore.GetLabels([]));
                           }
                       }),
                       filter(loaded => loaded),
                       take(1)
                   );
    }

    /**
     * Get Mails
     * @returns {Observable<any>}
     */
    getMails()
    {
        return this.store.select(getMailsLoaded)
                   .pipe(
                       tap((loaded: any) => {

                           if ( !this.routerState.params[loaded.id] || this.routerState.params[loaded.id] !== loaded.value )
                           {
                               this.store.dispatch(new fromStore.GetMails());
                               this.store.dispatch(new fromStore.SetSearchText(''));
                               this.store.dispatch(new fromStore.DeselectAllMails());
                           }
                       }),
                       filter((loaded: any) => {
                           return this.routerState.params[loaded.id] && this.routerState.params[loaded.id] === loaded.value;
                       }),
                       take(1)
                   );
    }
}
