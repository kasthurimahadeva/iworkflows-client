import { Injectable, NgModule } from '@angular/core';
import { SharedModule } from '../../../core/modules/shared.module';
import { ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { MailComponent } from './mail.component';
import { MainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { MailListItemComponent } from './mail-list/mail-list-item/mail-list-item.component';
import { MailListComponent } from './mail-list/mail-list.component';
import { MailDetailsComponent } from './mail-details/mail-details.component';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MailsResolver implements Resolve<any>
{
    mails: FirebaseListObservable<any[]>;

    constructor(private db: AngularFireDatabase)
    {
        console.log('Mails Resolver constructor..');
        this.mails = db.list('/mail/data');
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        return new Promise((resolve, reject) =>
        {
            this.mails.subscribe(response =>
            {
                console.log('resolver....');
                console.log('going offline...');
                this.db.database.goOffline();

                resolve(response);

            }, reject);
        });
    }
}

const routes: Routes = [
    {
        path     : 'inbox',
        component: MailComponent,
        resolve  : {
            mails: MailsResolver
        }
    }
];

@NgModule({
    declarations: [
        MailComponent,
        MainSidenavComponent,
        MailListComponent,
        MailListItemComponent,
        MailDetailsComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    providers   : [
        MailsResolver
    ]
})
export class MailModule
{
}
