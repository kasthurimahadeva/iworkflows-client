import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Mail } from './mail.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MailService implements Resolve<any>
{
    mails: Mail[];
    selectedMail: Mail;
    labels: any[];
    folders: any[];

    routeParams: any;

    onMailsUpdated = new Subject<Mail[]>();
    onSelectedMailUpdated = new Subject<Mail>();
    onLabelsUpdated = new Subject<any[]>();
    onFoldersUpdated = new Subject<any[]>();

    constructor(
        private http: Http
    )
    {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any
    {
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {
            Promise.all([
                this.getFolders(),
                this.getLabels(),
                this.getMails()
            ]).then(
                () => {
                    if ( this.routeParams.mailId )
                    {
                        this.setSelectedMail(this.routeParams.mailId);
                    }
                    else
                    {
                        this.setSelectedMail(null);
                    }

                    resolve();
                },
                reject
            );
        });
    }

    getFolders(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/mail-folders')
                .subscribe(response => {
                    this.folders = response.json().data;
                    this.onFoldersUpdated.next(this.folders);
                    resolve(this.folders);
                }, reject);
        });
    }

    getLabels(): Promise<any>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/mail-labels')
                .subscribe(response => {
                    this.labels = response.json().data;
                    this.onLabelsUpdated.next(this.labels);
                    resolve(this.labels);
                }, reject);
        });
    }

    getMails(): Promise<Mail[]>
    {
        if ( this.routeParams.labelHandle )
        {
            return this.getMailsByLabel(this.routeParams.labelHandle);
        }

        return this.getMailsByFolder(this.routeParams.folderHandle);
    }

    getMailsByFolder(handle): Promise<Mail[]>
    {
        return new Promise((resolve, reject) => {

            if ( handle === 'starred' || handle === 'important' )
            {
                this.http.get('api/mail-mails?' + handle + '=true')
                    .subscribe(mails => {

                        this.mails = mails.json().data.map(mail => {
                            return new Mail(mail);
                        });

                        this.onMailsUpdated.next(this.mails);

                        resolve(this.mails);

                    }, reject);
            }
            else
            {
                this.http.get('api/mail-folders?handle=' + handle)
                    .subscribe(folders => {

                        const folderId = folders.json().data[0].id;

                        this.http.get('api/mail-mails?folders=' + folderId)
                            .subscribe(mails => {

                                this.mails = mails.json().data.map(mail => {
                                    return new Mail(mail);
                                });

                                this.onMailsUpdated.next(this.mails);

                                resolve(this.mails);

                            }, reject);
                    });
            }
        });
    }

    getMailsByLabel(handle): Promise<Mail[]>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/mail-labels?handle=' + handle)
                .subscribe(labels => {

                    const labelId = labels.json().data[0].id;

                    this.http.get('api/mail-mails?labels=' + labelId)
                        .subscribe(mails => {

                            this.mails = mails.json().data.map(mail => {
                                return new Mail(mail);
                            });

                            this.onMailsUpdated.next(this.mails);

                            resolve(this.mails);

                        }, reject);
                });
        });
    }

    getMailById(id): Promise<Mail>
    {
        return new Promise((resolve, reject) => {
            this.http.get('api/mail-mails/' + id)
                .subscribe(mail => {
                    resolve(mail.json().data);
                }, reject);
        });
    }

    setSelectedMail(id)
    {
        this.selectedMail = this.mails.find(mail => {
            return mail.id === id;
        });

        this.onSelectedMailUpdated.next(this.selectedMail);
    }

    update(mail)
    {
        return new Promise((resolve, reject) => {

            this.http.post('api/mail-mails/' + mail.id, {...mail}).subscribe(response => {

                this.getMails().then(mails => {

                    if ( mails && this.selectedMail )
                    {
                        this.setSelectedMail(this.selectedMail.id);
                    }

                    resolve(mails);

                }, reject);
            });
        });
    }

}
