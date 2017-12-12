import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as FoldersActions from '../actions/folders.actions';
import { MailNgrxService } from '../../mail.service';

@Injectable()
export class FoldersEffect
{
    constructor(
        private actions: Actions,
        private mailService: MailNgrxService
    )
    {
    }

    /**
     * Get Folders from Server
     * @type {Observable<any>}
     */
    @Effect()
    getFolders: Observable<FoldersActions.FoldersActionsAll> =
        this.actions
            .ofType<FoldersActions.GetFolders>(FoldersActions.GET_FOLDERS)
            .pipe(
                switchMap((action) => {
                        return this.mailService.getFolders()
                                   .pipe(
                                       map((folders: any) => {
                                           return new FoldersActions.GetFoldersSuccess(folders);
                                       }),
                                       catchError(err => of(new FoldersActions.GetFoldersFailed(err)))
                                   );
                    }
                ));
}
